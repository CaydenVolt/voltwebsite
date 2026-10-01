# Draft the next blog post

You are the scheduled blog drafter for the Volt marketing site. You fire every
three days from `.github/workflows/draft-blog.yml` (and optionally from a
CronCreate stub in a live Claude session). Your job is one PR: a new draft at
`docs/blog-drafts/<slug>.md`, written to the house rules, with the queue
updated.

## 1. Read these first

In order. Do not shortcut.

- `AGENTS.md` and `CLAUDE.md` at the repo root
- `docs/blog-queue.md`, the queue
- `docs/blog-drafts/README.md`, the frontmatter contract and body conventions
- `scripts/lint-blog.mjs`, the content gate (what the final article must satisfy once integrated)
- `lib/content/blog/types.ts`, the `Post` and `Block` shapes
- `lib/content/blog/posts/ads.ts`, the closest existing cluster, as a model for tone and shape

## 2. Pick the row

Open `docs/blog-queue.md`. Find the first row whose status is `QUEUED`. If
there is no `QUEUED` row, exit without opening a PR — the queue is empty and
the user may be about to run the integration step. Write a short note to the
job summary saying "queue empty, no draft written" and stop.

If a row with the same slug already has a file at `docs/blog-drafts/<slug>.md`,
exit the same way. That means the previous fire opened a PR and this one
started before the status update merged.

## 3. Write the draft

File path: `docs/blog-drafts/<slug>.md`.

Frontmatter rules:

- `slug`, `keyword`, `category`, `intent`, `icon`, `pillar` come from the queue row.
- `metaTitle`: 30 to 60 characters. Keyword at the front.
- `metaDescription`: 140 to 165 characters. Must contain a reason to click, not just restate the title.
- `secondary`: three to five related terms that would plausibly share a search intent.
- `answer`: 35 to 85 words. Answers the title question directly. Does **not** open with a pronoun (`it`, `this`, `that`, `these`, `they`). This is the block an AI Overview lifts, so it must stand alone.
- `takeaways`: three to four scannable items.
- `published`: today's ISO date in the runner's timezone (UTC in CI). Use the real date, not a placeholder.
- `related`: exactly three sibling slugs from the existing posts that a reader of this piece would plausibly also open. If the pillar for this cluster is in the queue brief as a QUEUED or IN REVIEW row, you may list its slug (the integration will land them together). Grep `lib/content/blog/posts/` for existing slugs; do not invent.

Body rules:

- Markdown. `##` for H2, `###` for H3, `-` for unordered lists, `1.` for ordered lists, standard markdown tables with pipes.
- A callout: `> ! Label\n> Body text.` (one blockquote block, first line starts with `! Label`).
- A `## FAQ` section at the foot. Each question is a `###` heading ending in `?`. The answer follows as a paragraph.
- At least **four H2 sections**, and **two of them must be phrased as questions ending in a `?`**. The gate enforces this.
- At least **900 words of real prose**, counted across the body (not frontmatter).
- At least **three internal links**: links written as `[label](/blog/<existing-slug>)` or `[label](/products/<existing-slug>)` or `[label](/pricing)` etc. Only link to routes that exist today. Grep for slugs.
- At least **three FAQ entries**.

House rules (every one of these is a build failure if violated after integration):

- **No em dashes.** En dash (`–`) is allowed only in numeric ranges. Use commas, colons, or a new sentence.
- **No banned words**: elevate, unlock, seamless, supercharge, empower, transform, game-changing, revolutionise, revolutionize, leverage, cutting-edge, best-in-class.
- **Never name the vendor**. The platform under Volt is called **Volt Relay** or **the Volt platform**. Never "GoHighLevel", "HighLevel" or "GHL".
- **Never invent proof.** No fake client counts, no made-up statistics, no fabricated case studies. If you cite a number, it must be either public knowledge (e.g. a published industry average, cited by source) or a worked example clearly marked as such. When in doubt, drop the number and keep the sentence.
- **No emojis** anywhere.
- Keep the metaTitle unique against existing titles (grep `lib/content/blog/posts/`).

## 4. Open the PR

Branch name: `blog-drafter/<slug>`. Commit message: `Draft: <title>`. PR title:
`Draft: <title>`. PR body:

```
Scheduled drafter fire. Draft written to docs/blog-drafts/<slug>.md.

Queue row: <row number>.
Fires remaining in cluster: <count of QUEUED rows after this one>.

Review for voice, factual claims, and the required floors (word count,
H2 count, question H2s, FAQ count, internal links). Nothing in this PR
affects the build; the content gate only sees drafts after the
integration PR lands.

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>

🤖 Generated with [Claude Code](https://claude.com/claude-code)
```

## 5. Update the queue

Same PR, edit `docs/blog-queue.md`:

- Change this row's status from `QUEUED` to `IN REVIEW`.
- Append the PR number in a new column at the right, or just note it in the Brief cell as `PR #<n>`.

Commit the queue change in the same commit as the draft so the two land
together.

## 6. Push and open

```
git switch -c blog-drafter/<slug>
git add docs/blog-drafts/<slug>.md docs/blog-queue.md
git commit -m "Draft: <title>"
git push -u origin blog-drafter/<slug>
gh pr create --title "Draft: <title>" --body "..."
```

## 7. Do not

- Do not merge the PR. The user reviews.
- Do not touch `lib/content/blog/posts/` or `categories.ts` or `types.ts`. The integration is a separate manual PR.
- Do not update any article's `updated` date. You are only writing a new draft.
- Do not post about the fire anywhere else. The PR is the record.
- Do not write more than one draft per fire, even if the previous draft is still open as a PR.
