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
| 1 | QUEUED | `google-ads-for-solar-contractors` | google ads for solar contractors | Informational | yes | The new cluster hub. Full account structure, keyword themes, negative lists, landing-page match, conversion tracking, and the three things to fix before spending a dollar. Reads as the single page a solar operator would hand to a new ads manager. Must not duplicate `google-ads-for-solar-companies` (which stays as the Paid ads pillar); this one goes deeper on account build, where the existing pillar stays broad across paid channels. |
| 2 | QUEUED | `solar-google-ads-cost-per-lead` | solar google ads cost per lead | Commercial | no | What a solar lead actually costs on Google Ads, broken down by residential install, battery, EV charger and brand. Why cost-per-click is the wrong metric and cost-per-sat-appointment is the right one. Unblocks diagram S8. |
| 3 | QUEUED | `negative-keywords-for-solar-google-ads` | negative keywords for solar google ads | Informational | no | The negative keyword list is as important as the keyword list. The categories that always need excluding (DIY, jobs, research, free, cheap, downloadable), how to mine the search terms report, and the account-level list every solar account should start with. Unblocks diagram S4. |
| 4 | QUEUED | `solar-google-ads-landing-pages` | solar google ads landing pages | Informational | no | Why the homepage is the wrong destination. What a matched landing page carries: the ad's headline, one form, proof above the fold, and a single action. Three solar landing pages taken apart. |
| 5 | QUEUED | `solar-google-ads-conversion-tracking` | solar google ads conversion tracking | Informational | no | Click to CRM, with the usual break marked. GA4 events, enhanced conversions, call tracking, offline conversion imports for the sat-appointment. Why most solar accounts optimise on lead-form submits and leak the sales signal. Unblocks diagram S5. |
| 6 | QUEUED | `solar-google-ads-bidding-strategies` | solar google ads bidding strategies | Informational | no | Manual CPC, maximise clicks, maximise conversions, target CPA, target ROAS. When to use each in a solar account, how much conversion data each one needs, and the sequence a new account should move through. |
| 7 | QUEUED | `solar-google-ads-vs-local-services-ads` | solar google ads vs local services ads | Commercial | no | The two Google products a solar company can run, compared head to head. What LSA buys that search ads do not (the Google Guaranteed badge, pay-per-lead not per-click, map-pack adjacency) and what it costs instead (less control, worse tracking). When to run which. |
| 8 | QUEUED | `solar-google-ads-performance-max-for-installers` | solar google ads performance max | Informational | no | Why Performance Max without conversion data spends into nothing, why solar brands run it after search is working, what asset groups to build, and the audience signals that keep it from eating brand traffic. Honest about what you give up for the automation. |
| 9 | QUEUED | `solar-google-ads-remarketing` | solar google ads remarketing | Informational | no | The audience lists a solar account should have (quote-form visitors who did not submit, submitted leads who did not book, pricing-page viewers), the exclusions that matter, and the one or two display placements worth running against them. |

## Done

Rows graduate here once the integration PR is merged and the draft file is
deleted. Keeps the queue table readable without losing history.

| Slug | Shipped | PR |
|---|---|---|
| — | — | — |
