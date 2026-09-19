/**
 * Content gate for the blog.
 *
 * Sixty-three articles is more prose than anyone re-reads, so the house rules
 * are enforced here instead of remembered: no em dashes, no banned marketing
 * vocabulary, the vendor never named, and every SEO field inside the limits
 * that actually bind in a search result. Structural checks too, because a
 * `related` slug that no longer exists is a dead internal link and dead
 * internal links are what make a cluster stop working.
 *
 *   node scripts/lint-blog.mjs
 *
 * Compiles the content modules with the project's own TypeScript first, so
 * this reads the real data rather than guessing at it with regexes.
 */
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const require_ = createRequire(import.meta.url);
const out = mkdtempSync(join(tmpdir(), "blog-lint-"));
process.on("exit", () => rmSync(out, { recursive: true, force: true }));

// Call the compiler's own entry script with node rather than going through
// npx: on Windows, spawning a .cmd shim without a shell fails outright.
execFileSync(
  process.execPath,
  [
    require_.resolve("typescript/bin/tsc"),
    "lib/content/blog/index.ts",
    "--outDir",
    out,
    "--rootDir",
    "lib/content/blog",
    "--module",
    "commonjs",
    "--target",
    "es2022",
    "--moduleResolution",
    "node",
    "--skipLibCheck",
    "--esModuleInterop",
  ],
  { cwd: root, stdio: "inherit" },
);
const blog = require_(join(out, "index.js"));

const { getPosts, CATEGORIES, getPostsByCategory, articleText, wordCount, headingId, plain, PER_PAGE } =
  blog;

const posts = getPosts();
const problems = [];
const warnings = [];
const fail = (slug, msg) => problems.push(`${slug}: ${msg}`);
const warn = (slug, msg) => warnings.push(`${slug}: ${msg}`);

/* ------------------------------------------------------------ house rules */

/** En dash is allowed: it sets numeric ranges. The em dash is not. */
const BANNED_CHARS = [
  ["—", "em dash"],
  ["––", "double en dash"],
];
const BANNED_WORDS = [
  "elevate",
  "unlock",
  "seamless",
  "supercharge",
  "empower",
  "transform",
  "game-changing",
  "game changing",
  "revolutionise",
  "revolutionize",
  "leverage",
  "cutting-edge",
  "best-in-class",
];
/** The platform under Volt is never named on the site. */
const BANNED_NAMES = ["gohighlevel", "highlevel", "ghl "];
const EMOJI = /\p{Extended_Pictographic}/u;

/** Everything a reader sees, including the fields articleText leaves out. */
function allText(p) {
  return [
    p.title,
    p.metaTitle,
    p.metaDescription,
    p.excerpt,
    articleText(p),
  ].join("\n");
}

/* ------------------------------------------------------------- the routes */

const ROUTES = new Set([
  "/",
  "/about",
  "/blog",
  "/contact",
  "/our-process",
  "/partners",
  "/press",
  "/pricing",
  "/products",
  "/blog/author/cayden-chern",
  ...CATEGORIES.map((c) => `/blog/category/${c.slug}`),
  ...posts.map((p) => `/blog/${p.slug}`),
]);

// Product routes, read out of lib/content/products.ts itself rather than
// mirrored here. A hardcoded copy of this list is exactly how four broken
// /products/ links once passed this gate: the names were plausible and the
// list was stale. Parsing the source keeps the two honest.
const productSource = readFileSync(join(root, "lib/content/products.ts"), "utf8");
const productSlugs = [...productSource.matchAll(/slug:\s*"([a-z0-9-]+)"/g)].map((m) => m[1]);
if (productSlugs.length < 5) {
  console.error("Could not read product slugs from lib/content/products.ts");
  process.exit(1);
}
for (const slug of productSlugs) ROUTES.add(`/products/${slug}`);

const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

/* --------------------------------------------------------------- per post */

const slugsAll = new Set(posts.map((p) => p.slug));
const slugs = new Set();
const titles = new Set();
const metaTitles = new Set();

for (const p of posts) {
  const text = allText(p);

  for (const [ch, name] of BANNED_CHARS) {
    if (text.includes(ch)) fail(p.slug, `contains ${name}`);
  }
  for (const word of BANNED_WORDS) {
    const re = new RegExp(`\\b${word.replace(/[-\s]/g, "[-\\s]")}\\b`, "i");
    if (re.test(text)) fail(p.slug, `uses banned word "${word}"`);
  }
  for (const name of BANNED_NAMES) {
    if (text.toLowerCase().includes(name)) fail(p.slug, `names the vendor ("${name.trim()}")`);
  }
  if (EMOJI.test(text)) fail(p.slug, "contains an emoji");

  // Identity
  if (slugs.has(p.slug)) fail(p.slug, "duplicate slug");
  slugs.add(p.slug);
  if (titles.has(p.title)) fail(p.slug, "duplicate title");
  titles.add(p.title);
  if (metaTitles.has(p.metaTitle)) fail(p.slug, "duplicate metaTitle");
  metaTitles.add(p.metaTitle);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(p.slug)) fail(p.slug, "slug is not clean kebab-case");

  // The slug is the keyword. That is the whole point of the URL.
  const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  if (norm(p.keyword) !== p.slug) {
    warn(p.slug, `slug does not match keyword "${p.keyword}" (would be "${norm(p.keyword)}")`);
  }

  // Search result geometry
  if (p.metaTitle.length > 60) fail(p.slug, `metaTitle is ${p.metaTitle.length} chars, max 60`);
  if (p.metaTitle.length < 30) warn(p.slug, `metaTitle is only ${p.metaTitle.length} chars`);
  if (p.metaDescription.length > 165)
    fail(p.slug, `metaDescription is ${p.metaDescription.length} chars, max 165`);
  if (p.metaDescription.length < 140)
    warn(p.slug, `metaDescription is ${p.metaDescription.length} chars, aim for 140 to 165`);

  // The passage a snippet or an AI Overview lifts
  const answerWords = plain(p.answer).split(/\s+/).filter(Boolean).length;
  if (answerWords < 35 || answerWords > 85)
    fail(p.slug, `answer is ${answerWords} words, should be 35 to 85`);
  if (/^(it|this|that|these|they)\b/i.test(p.answer.trim()))
    fail(p.slug, "answer opens with a pronoun, so it cannot stand alone in a snippet");

  // Depth
  const words = wordCount(p);
  if (words < 900) fail(p.slug, `only ${words} words, floor is 900`);

  // The keyword has to appear early, in prose, not just in the fields
  const opening = plain([p.answer, ...p.body.slice(0, 6).map((b) => b.text ?? "")].join(" "))
    .toLowerCase()
    .slice(0, 900);
  const head = p.keyword.toLowerCase().split(/\s+/).filter((w) => w.length > 3);
  const missing = head.filter((w) => !opening.includes(w));
  if (missing.length > Math.floor(head.length / 2))
    warn(p.slug, `keyword terms missing from the opening: ${missing.join(", ")}`);

  // Structure
  const h2s = p.body.filter((b) => b.t === "h2");
  if (h2s.length < 4) fail(p.slug, `only ${h2s.length} H2 sections, want at least 4`);
  const ids = h2s.map((b) => headingId(b.text));
  if (new Set(ids).size !== ids.length) fail(p.slug, "two H2s produce the same anchor id");
  /* Question-form H2s. AI answer engines and the People Also Ask block both
     match on the way a query is phrased, and a heading that asks the question
     is the cheapest way to meet that halfway. Two is a floor, not a target:
     converting every heading reads like a quiz and wrecks the prose, so the
     narrative beats are meant to stay narrative. */
  const questionH2s = h2s.filter((b) => plain(b.text).trim().endsWith("?"));
  if (questionH2s.length < 2)
    fail(p.slug, `only ${questionH2s.length} H2s phrased as a question, want at least 2`);

  if (p.faq.length < 3) fail(p.slug, `only ${p.faq.length} FAQ entries, want at least 3`);
  if (p.takeaways.length < 3) fail(p.slug, `only ${p.takeaways.length} takeaways`);

  // Internal linking, gathered from every place a link can appear
  const bodyLinks = [];
  for (const b of p.body) {
    for (const m of JSON.stringify(b).matchAll(LINK)) bodyLinks.push(m[2]);
    if (b.t === "link") bodyLinks.push(b.href);
  }
  for (const f of p.faq) for (const m of f.a.matchAll(LINK)) bodyLinks.push(m[2]);
  for (const m of p.answer.matchAll(LINK)) bodyLinks.push(m[2]);
  for (const t of p.takeaways) for (const m of t.matchAll(LINK)) bodyLinks.push(m[2]);

  const internal = bodyLinks.filter((h) => h.startsWith("/"));
  if (internal.length < 3) fail(p.slug, `only ${internal.length} internal links, want at least 3`);
  for (const href of internal) {
    const path = href.split("#")[0];
    if (!ROUTES.has(path)) fail(p.slug, `links to a route that does not exist: ${href}`);
    if (path === `/blog/${p.slug}`) fail(p.slug, "links to itself");
  }

  // Related
  if (p.related.length !== 3) fail(p.slug, `${p.related.length} related posts, want exactly 3`);
  for (const r of p.related) {
    if (r === p.slug) fail(p.slug, "lists itself as related");
    if (!slugsAll.has(r)) fail(p.slug, `related slug does not exist: ${r}`);
  }

  // Dates
  if (!/^\d{4}-\d{2}-\d{2}$/.test(p.published)) fail(p.slug, "published is not an ISO date");
  if (p.updated && p.updated < p.published) fail(p.slug, "updated is before published");
}

/* ------------------------------------------------------------- structural */

for (const c of CATEGORIES) {
  const inCat = getPostsByCategory(c.id);
  if (inCat.length !== 9) problems.push(`category ${c.id}: ${inCat.length} posts, want 9`);
  const pillars = inCat.filter((p) => p.pillar);
  if (pillars.length !== 1)
    problems.push(`category ${c.id}: ${pillars.length} pillars, want exactly 1`);
}

if (posts.length !== CATEGORIES.length * 9)
  problems.push(`${posts.length} posts total, want ${CATEGORIES.length * 9}`);
if (posts.length % PER_PAGE !== 0)
  warnings.push(`${posts.length} posts does not divide evenly into pages of ${PER_PAGE}`);

// Nine blocks in a 3 x 3 grid, nine different marks. A repeated glyph in one
// grid reads as a mistake, so it is one here too.
for (let page = 0; page * PER_PAGE < posts.length; page++) {
  const slice = posts.slice(page * PER_PAGE, (page + 1) * PER_PAGE);
  const seen = new Map();
  for (const p of slice) {
    if (seen.has(p.icon))
      problems.push(
        `page ${page + 1}: "${p.slug}" repeats the ${p.icon} mark already used by "${seen.get(p.icon)}"`,
      );
    else seen.set(p.icon, p.slug);
  }
}

/* ----------------------------------------------------------------- report */

const totalWords = posts.reduce((n, p) => n + wordCount(p), 0);
console.log(
  `\n${posts.length} articles, ${totalWords.toLocaleString()} words, ` +
    `${Math.round(totalWords / Math.max(1, posts.length))} average, ` +
    `${Math.ceil(posts.length / PER_PAGE)} index pages\n`,
);

if (warnings.length) {
  console.log(`Warnings (${warnings.length}):`);
  for (const w of warnings) console.log(`  ~ ${w}`);
  console.log("");
}

if (problems.length) {
  console.log(`Problems (${problems.length}):`);
  for (const p of problems) console.log(`  x ${p}`);
  console.log("");
  process.exit(1);
}

console.log("Content gate passed.\n");
