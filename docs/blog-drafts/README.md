# Blog drafts (staging)

The scheduled drafter writes markdown drafts here. Nothing in this folder is
imported anywhere, so the content gate at `scripts/lint-blog.mjs` does not see
these files and a PR that adds one cannot break the build.

**Why markdown and not TypeScript.** Drafts are for reading, not shipping. Prose
with YAML frontmatter is reviewable by a person without opening a type-aware
editor. The integration step converts the frontmatter and body into the
`Post` shape in `lib/content/blog/types.ts`.

**Frontmatter contract.** Every draft carries:

```yaml
---
slug: solar-google-ads-cost-per-lead
title: What solar leads actually cost on Google Ads
metaTitle: Solar Google Ads Cost per Lead: Real Numbers
metaDescription: ≥140 and ≤165 characters, with a reason to click.
keyword: solar google ads cost per lead
secondary: [solar cpc, solar ppc cost, solar google ads budget]
category: google-ads
intent: Commercial
icon: megaphone
pillar: false
published: 2026-10-04
answer: >
  Thirty-five to eighty-five words answering the title question directly,
  so a snippet or AI Overview can lift it and have it still stand alone.
  No pronoun up front.
takeaways:
  - First takeaway.
  - Second takeaway.
  - Third takeaway.
related:
  - google-ads-for-solar-contractors
  - speed-to-lead-for-solar-companies
  - solar-google-ads-landing-pages
---
```

Body is markdown. The integration script turns `##` into `{t: "h2"}`, lists
into `{t: "ol" | "ul"}`, tables into `{t: "table"}`, blockquotes marked `> !
Label` into `{t: "callout"}`, and anything else into `{t: "p"}`. FAQ sits at
the foot under a `## FAQ` heading, each `### Question?` becoming a `FaqItem`.

**Integration.** When the queue in `docs/blog-queue.md` has no `QUEUED` rows
left, the final PR:

1. Writes `lib/content/blog/posts/google-ads.ts` exporting
   `GOOGLE_ADS_POSTS` with all nine entries, in queue order.
2. Adds `"google-ads"` to the `CategoryId` union in `types.ts`.
3. Adds the category entry to `CATEGORIES` in `categories.ts`.
4. Imports `GOOGLE_ADS_POSTS` in `index.ts` and spreads it into `ALL`.
5. Deletes this folder.

After that the gate reads 81 posts across 9 clusters and goes green.
