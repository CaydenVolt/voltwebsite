# Blog drafting queue

The scheduled drafter in `.github/workflows/draft-blog.yml` reads this file every
three days, picks the first row whose status is `QUEUED`, writes a draft at
`docs/blog-drafts/<slug>.md`, opens a PR, and flips the row's status to `IN
REVIEW` with the PR link.

**Why Google Ads first.** The content gate at `scripts/lint-blog.mjs` requires
exactly nine posts per cluster, and every existing cluster is full. The Google
Ads cluster is already in the pending list and two scheduled diagrams (S4, S5
in `docs/blog-image-specs.md`) are blocked waiting on it, so this queue
produces real work with a natural end rather than filler.

**Why drafts and not direct commits.** Writing straight into
`lib/content/blog/posts/` would mean every intermediate state fails the gate
(76 posts, want 72) until all nine are in. Drafts live in `docs/blog-drafts/`
outside the gate's view, so each PR merges cleanly. When the queue is empty,
the user does a single integration PR that promotes the nine drafts into
`posts/google-ads.ts`, adds the category to `categories.ts`, and adds the id to
the `CategoryId` union in `types.ts`.

**Pillar first.** Row 1 is the hub. Spokes link back to it, so writing a spoke
before the hub exists means every spoke's internal links to the pillar are
broken links until the pillar lands.

**Edit this file freely.** Reorder, retitle, add a brief, remove a row. The
drafter reads this on every fire. If no row is `QUEUED`, the fire opens no PR
and exits.

---

## Queue

| # | Status | Slug | Keyword | Intent | Pillar | Brief |
|---|---|---|---|---|---|---|
| (queue empty) | - | - | - | - | - | - |

## Done

Rows graduate here once the integration PR is merged and the draft file is
deleted. Keeps the queue table readable without losing history.

| Slug | Shipped | PR |
|---|---|---|
| `google-ads-for-solar-contractors` | 2026-10-26 | direct to main |
| `what-solar-leads-cost-on-google-ads` | 2026-10-26 | direct to main |
| `negative-keywords-for-solar-google-ads` | 2026-10-26 | direct to main |
| `solar-google-ads-landing-pages` | 2026-10-26 | direct to main |
| `solar-google-ads-conversion-tracking` | 2026-10-26 | direct to main |
| `solar-google-ads-bidding-strategies` | 2026-10-26 | direct to main |
| `solar-google-ads-vs-local-services-ads` | 2026-10-26 | direct to main |
| `solar-google-ads-performance-max-for-installers` | 2026-10-26 | direct to main |
| `solar-google-ads-remarketing` | 2026-10-26 | direct to main |
