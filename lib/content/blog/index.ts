import type { Block, CategoryId, Post } from "./types";
import { CATEGORIES } from "./categories";
import { LEADS_POSTS } from "./posts/leads";
import { REVIEWS_POSTS } from "./posts/reviews";
import { LOCAL_SEO_POSTS } from "./posts/local-seo";
import { FOLLOW_UP_POSTS } from "./posts/follow-up";
import { SOFTWARE_POSTS } from "./posts/software";
import { WEBSITE_POSTS } from "./posts/website";
import { ADS_POSTS } from "./posts/ads";

export * from "./types";
export { CATEGORIES, getCategory, getCategoryBySlug, categoryHref } from "./categories";
export { AUTHOR, authorHref } from "./author";

/** Nine to a page, seven pages. Changing this changes the paging everywhere. */
export const PER_PAGE = 9;

/** Words a minute. The middling adult rate, rounded, used for the read time. */
const WPM = 225;

const ALL: readonly Post[] = [
  ...LEADS_POSTS,
  ...REVIEWS_POSTS,
  ...LOCAL_SEO_POSTS,
  ...FOLLOW_UP_POSTS,
  ...SOFTWARE_POSTS,
  ...WEBSITE_POSTS,
  ...ADS_POSTS,
];

/** Newest first, the way an index reads. Ties break on slug so the order is stable. */
const SORTED: readonly Post[] = [...ALL].sort(
  (a, b) => b.published.localeCompare(a.published) || a.slug.localeCompare(b.slug),
);

const BY_SLUG = new Map(SORTED.map((p) => [p.slug, p]));

export const getPosts = (): readonly Post[] => SORTED;
export const getPost = (slug: string): Post | undefined => BY_SLUG.get(slug);
export const postHref = (slug: string) => `/blog/${slug}`;

export const getPostsByCategory = (id: CategoryId): readonly Post[] =>
  SORTED.filter((p) => p.category === id);

/** The cluster hub. Every category has exactly one. */
export const getPillar = (id: CategoryId): Post | undefined =>
  ALL.find((p) => p.category === id && p.pillar);

/** Resolved and filtered, so a stale slug in `related` drops out rather than crashing. */
export const getRelatedPosts = (post: Post): readonly Post[] =>
  post.related.map((s) => BY_SLUG.get(s)).filter((p): p is Post => Boolean(p) && p!.slug !== post.slug);

/* ---------------------------------------------------------------- paging */

export const totalPages = (): number => Math.max(1, Math.ceil(SORTED.length / PER_PAGE));

/** 1-based. Page 1 is /blog; pages 2 and up are /blog/page/N. */
export const getPage = (n: number): readonly Post[] =>
  SORTED.slice((n - 1) * PER_PAGE, n * PER_PAGE);

export const pageHref = (n: number) => (n <= 1 ? "/blog" : `/blog/page/${n}`);

/* ------------------------------------------------------- text and length */

/** Strips the two inline forms so word counts and OG text see prose, not markup. */
export const plain = (text: string): string =>
  text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1");

/** Every word a reader sees in a block, flattened. */
function blockText(b: Block): string {
  switch (b.t) {
    case "p":
    case "h2":
    case "h3":
      return b.text;
    case "ul":
    case "ol":
      return b.items.join(" ");
    case "steps":
      return b.items.map((i) => `${i.title} ${i.body}`).join(" ");
    case "table":
      return [b.caption ?? "", ...b.head, ...b.rows.flat()].join(" ");
    case "callout":
      return `${b.label} ${b.text}`;
    case "figures":
      return [...b.items.map((i) => `${i.value} ${i.label}`), b.source ?? ""].join(" ");
    case "quote":
      return `${b.text} ${b.cite ?? ""}`;
    case "link":
      return `${b.label} ${b.note}`;
  }
}

/**
 * Everything on the page that is the article: the answer, the takeaways, the
 * body and the FAQ. The byline, the card and the CTA are furniture and are
 * not counted, so the number reported is the number a reader reads.
 */
export const articleText = (post: Post): string =>
  plain(
    [
      post.answer,
      ...post.takeaways,
      ...post.body.map(blockText),
      ...post.faq.map((f) => `${f.q} ${f.a}`),
    ].join(" "),
  );

export const wordCount = (post: Post): number =>
  articleText(post).split(/\s+/).filter(Boolean).length;

export const readingMinutes = (post: Post): number => Math.max(1, Math.round(wordCount(post) / WPM));

/** The H2s, in order, for the contents rail. */
export const headings = (post: Post): { id: string; text: string }[] =>
  post.body.filter((b): b is Extract<Block, { t: "h2" }> => b.t === "h2").map((b) => ({
    id: headingId(b.text),
    text: plain(b.text),
  }));

/** A stable, readable fragment id. Two headings with the same words would collide;
 *  none do, and the lint script fails the build if that ever changes. */
export const headingId = (text: string): string =>
  plain(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/* ------------------------------------------------------------ formatting */

const DATE_FMT = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

/** "4 March 2026". Parsed as UTC so the date never slips a day by timezone. */
export const formatDate = (iso: string): string => DATE_FMT.format(new Date(`${iso}T00:00:00Z`));

/** The most recent revision across the whole blog, for the index's lastModified. */
export const lastModified = (): string =>
  SORTED.reduce((latest, p) => {
    const d = p.updated ?? p.published;
    return d > latest ? d : latest;
  }, SORTED[0]?.published ?? "2026-01-01");

export { CATEGORIES as BLOG_CATEGORIES };
