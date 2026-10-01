# Draw the next blog diagram

You are the scheduled diagram drawer. You fire every Monday from
`.github/workflows/draw-diagram.yml` (and optionally from a CronCreate stub in
a live Claude session). Your job is one PR: a new SVG diagram at
`public/blog/fig-NN-<slug>.svg`, wired into the article's body, with the
article's `updated` date bumped.

## 1. Read these first

In order.

- `AGENTS.md` and `CLAUDE.md` at the repo root
- `docs/blog-image-specs.md` — this is the authoritative schedule and spec
- `public/blog/fig-01-who-claims-the-credit.svg` and `public/blog/fig-02-response-time-target-vs-reality.svg` — the two shipped diagrams, as models for the house style and the file conventions
- `lib/content/blog/types.ts`, the `diagram` block shape
- `scripts/lint-blog.mjs`, section around `b.t === "diagram"` — the three required SVG attributes

## 2. Pick the next diagram

Open `docs/blog-image-specs.md`. The schedule table lists each diagram by code
(F1, P1-P7, S1-S9), the article it belongs to, and the "Send by" date.

Walk the table from top to bottom. For each row:

- If a file at `public/blog/fig-NN-*.svg` already exists for that code, skip (already drawn).
- If the article slug does not exist in `lib/content/blog/posts/` (grep for the slug), skip (notated in the spec as "must exist first" for S4 and S5).
- Otherwise, this is the one.

If every row is either drawn or waiting on an article, exit without opening a
PR. Write to the job summary: "no diagram due, every scheduled figure is drawn
or blocked."

## 3. Draw the SVG

File path: `public/blog/fig-NN-<short-slug>.svg`. Naming matches the shipped
`fig-01-who-claims-the-credit.svg` and `fig-02-response-time-target-vs-reality.svg`.

Hard rules from the spec:

- Canvas is **780 wide**. Height to suit the diagram shape (780x440, 780x560, 560x780).
- Nothing below **11px** of type.
- Exactly **one accent element** per diagram, in `#e4572e`. If two things are orange, neither reads as important.
- Background `#f2ede3`. Primary strokes and body text `#171410`. Secondary text `#5e574d`. Plate fills `#e6dfd0`.
- Sans-serif only: Instrument Sans for labels, Bricolage Grotesque for display.
- Hairlines 1 to 1.5px. Square or 2px-rounded corners. No shadows, gradients, 3D, glow, or texture.
- Must carry `viewBox="0 0 780 <h>"`, `role="img"`, a `<title>` and a `<desc>`. The content gate fails the build without any of these three. The `<title>` names what the figure shows; the `<desc>` is a sentence that reads out loud.

Follow the per-diagram spec in `docs/blog-image-specs.md` for the actual
contents, labels and composition. Every label in your SVG must be text drawn
from the article's own prose and tables — do not invent new categories, new
numbers, or new labels. If the spec quotes a row, the SVG quotes the same row.

Put the whole SVG under a short HTML comment at the top explaining what it is
and which article it belongs to, matching the pattern in
`fig-02-response-time-target-vs-reality.svg`.

## 4. Wire it into the article

Open `lib/content/blog/posts/<cluster>.ts`, find the post whose slug matches
the schedule row, and insert a `{ t: "diagram", src: "/blog/fig-NN-<slug>.svg",
caption: "<the article's own line>" }` block into the `body` array at the
point in the prose where the diagram supports the argument. The caption is a
sentence from the article itself; do not invent one.

Bump the post's `updated` field to today's ISO date (UTC). If the post has no
`updated` field, add one.

## 5. Verify

Run the content gate locally in the runner:

```
node scripts/lint-blog.mjs
```

The gate reads the new post, confirms the diagram file exists, and confirms it
has `<title>`, `<desc>` and `viewBox`. If anything fails, fix it in this PR;
do not open a half-done PR.

## 6. Open the PR

Branch: `diagram-drawer/<code>-<slug>`. Commit: `Add figure <code>: <short
label>`. PR title same as commit. PR body:

```
Scheduled diagram drawer fire. Figure <code> added to
<article-slug> and wired into its body.

Spec: docs/blog-image-specs.md (<code>).
Content gate: passed locally.

Review the labels against the article's own prose, and open the article
on a phone-width viewport to confirm it scrolls cleanly rather than
squeezing.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>

🤖 Generated with [Claude Code](https://claude.com/claude-code)
```

## 7. Do not

- Do not merge the PR.
- Do not draw more than one diagram per fire, even if the previous one is still open.
- Do not touch articles outside the one that owns this diagram.
- Do not add raster images, photos, icons, or illustrations of people.
- Do not update `docs/blog-image-specs.md`. The spec is written for the whole set; a schedule row's drawn-ness is read from the presence of its SVG file.
