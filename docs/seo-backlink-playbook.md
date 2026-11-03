# SEO backlink playbook

Written 2026-11-03, when Volt Agency had 42 days of Search Console data: 818 impressions, 16 clicks, US average position 58.86. The programmatic SEO was shipping but Google was effectively not seeing any of the 185 city pages (one impression across the entire set). The sitemap fix in commit `c8453ac` solved discoverability; this doc solves the next bottleneck, which is **crawl authority**.

A 2-3 month-old domain with zero inbound links receives the lowest-tier crawl priority Google gives. Content stacks up but ranks nowhere because the whole domain is treated as unproven. One hundred thin backlinks will not fix this, and nor will more pages. **Fifteen targeted, real backlinks will.**

This is the fifteen.

---

## This week: the five you can finish in two hours each

### 1. SEIA (Solar Energy Industries Association) member listing
- **URL:** https://seia.org/member-companies
- **How:** Join SEIA (membership is tiered, pick the smallest). You get a listing in the member directory with a dofollow link.
- **Why first:** Industry-body links are the strongest trust signal Google reads for a vertical-specific site. One SEIA link is worth 100 directory submissions.
- **Cost:** Membership dues, variable by company size.
- **Time:** 1 hour application, link live 1-2 weeks later.

### 2. Clutch listing
- **URL:** https://clutch.co/agencies
- **How:** Create a free agency profile. Pick "Digital Marketing — Solar" or the closest category. Upload the Google review you have, link your site.
- **Why:** Clutch has very high domain authority (DR 90+) and Google treats it as a real citation source. Also brings referral traffic from procurement searches.
- **Cost:** Free.
- **Time:** 45 minutes to fill in the profile properly.

### 3. G2 listing (as a software vendor)
- **URL:** https://www.g2.com/products/new
- **How:** List "Volt Agency" under Marketing Software → Agency Services. Your products pages fit the format G2 expects.
- **Why:** DR 93. Same reasoning as Clutch. G2 and Clutch together put you on two of the three places procurement people start.
- **Cost:** Free (paid tier adds badges, don't need yet).
- **Time:** 45 minutes.

### 4. Google Business Profile — fill it in properly
- **URL:** https://business.google.com (you already have one, there is one review on it)
- **How:** Add every service as a Service with description. Add 10+ photos. Add weekly posts (even if just linking back to a blog post). Pin the Advanced plan as a Product.
- **Why:** Your single Google review is the whole proof surface for anyone searching your brand name. A fully filled GBP is also a known ranking factor for the main site; Google treats a well-tended GBP as a signal the business is real.
- **Cost:** Free.
- **Time:** 2 hours one-off, 15 minutes a week after.

### 5. Hillsborough County Chamber of Commerce (your registered address)
- **URL:** https://www.tampabay-chamber.org (or the specific Brandon chamber)
- **How:** Chamber membership includes a directory listing with a backlink.
- **Why:** Local chamber links are a canonical "real business" signal for Google. Brandon FL is your registered address per `lib/content/legal.ts`.
- **Cost:** Chamber membership (usually $300-600/year).
- **Time:** 1 hour.

---

## Weeks 2-4: five link-earning plays

### 6. HARO / Qwoted — one answer a day
- **URL:** https://www.helpareporter.com or https://qwoted.com
- **How:** Set up a free account. You get 3 emails a day with journalist queries. Answer one a day as "Cayden Chern, founder of Volt Agency, a US solar marketing specialist." Any journalist that uses your quote links to your site.
- **Why:** This is the single most compounding backlink source for a founder-led business. Expect to land one link every 2-4 weeks of consistent answering. Within a year, 10-15 editorial links on real publications.
- **Cost:** Free (paid tier for premium queries, start free).
- **Time:** 15 minutes a day.

### 7. Guest post on EnergySage
- **URL:** https://www.energysage.com/solar/installers
- **How:** EnergySage runs an installer blog. Pitch them a technical piece: "How Solar Installers Should Measure Cost Per Install, Not Cost Per Lead" or similar. Your blog already has this content — repackage it.
- **Why:** EnergySage is the single biggest consumer-facing solar comparison site. DR 72. A link from them tells Google you are peer-recognized in solar.
- **Cost:** Free.
- **Time:** 2 hours to write the pitch and the piece.

### 8. Partnership swap with Enerflo, Aurora Solar, or EagleView
- **How:** These are the design/proposal/measurement tools solar installers use alongside a marketing stack. They have partner pages. Email their partnership team: "We build the sales system that your tool outputs feed into; let's cross-list on each other's partner pages."
- **Why:** Non-competing complementary tools. Partner-page links are high-trust and genuinely drive referral traffic.
- **Cost:** Free.
- **Time:** 1 hour to pitch, 2-6 weeks to land.
- **Template:**
  > Subject: Partner page swap — Enerflo + Volt Agency
  >
  > Hi [name],
  >
  > I run Volt Agency, which builds the marketing and sales system (website, CRM, follow-up, inbox, reviews, local SEO) for US residential solar installers. We mostly meet operators who are already using Enerflo for their proposals, so your tool and ours sit next to each other in their stack.
  >
  > Would you be open to a partner-page swap? We'd list Enerflo in our resources section as the design/proposal tool we recommend, and ask for a reciprocal listing on your partners page.
  >
  > Happy to send over the exact wording either way.
  >
  > Cayden

### 9. Clutch competitor reviews that mention you (contact play)
- **How:** Search Clutch for other solar marketing agencies. Read the negative reviews. The dissatisfied customers are your warmest leads. If you can get even one to also leave a (truthful) review of Volt on your Clutch profile, that profile ranks higher and you have one more real backlink surface.
- **Why:** The customer psychology does the work.
- **Cost:** Free.
- **Time:** 2 hours.

### 10. Podcast guesting
- **How:** Three solar-industry podcasts to pitch (as of 2026): The Pitch Podcast, Solar Business Advisor, Freeing Energy. Each shows notes includes a link.
- **Why:** Audio-first communities over-index on founder-led businesses. One good episode produces warm inbound for weeks AND a show-notes link.
- **Cost:** Free.
- **Time:** 2-3 hours per episode (prep + record + promote).

---

## Weeks 2-4: five low-effort directory submissions

Not glamorous. Each adds a legitimate citation and together they build the kind of mundane "this is a real business" footprint Google rewards.

| # | Directory | URL | DR | Notes |
|---|-----------|-----|----|----|
| 11 | Capterra | https://www.capterra.com/vendor | 92 | List under Marketing Agency Software |
| 12 | GetApp | https://www.getapp.com/vendor | 90 | Owned by Capterra, same listing |
| 13 | SoftwareSuggest | https://www.softwaresuggest.com | 71 | Fast approval |
| 14 | Crunchbase | https://www.crunchbase.com | 92 | Free profile, name the founders |
| 15 | Trustpilot | https://www.trustpilot.com | 91 | Claim the free profile, invite past customers |

Each is a 20-minute signup. Together they're a weekend of work.

---

## What NOT to do

- **PBNs or paid backlink services.** Any service selling "100 backlinks for $50" is a private blog network. Google detects them, and the penalty for a 2-month-old domain is deindexation. Not slower growth. Deindexation.
- **Comment-link spam, forum signatures, wiki edits.** 2015 playbook. Zero value today.
- **Reciprocal link exchanges with other agencies.** Google explicitly discounts these as "link schemes."
- **Fiverr guest-post sellers.** Low-quality content on expired domains, same risk as PBNs.

---

## How to measure this is working

After 60 days of execution:
- **Backlinks:** Check https://ahrefs.com/backlink-checker (free, limited) or Google Search Console → Links. Target: 15-25 referring domains.
- **Impressions:** GSC should show 2-5x growth in US impressions.
- **Position:** US average should move from 58 to below 40.
- **Indexation:** GSC → Pages → Indexed should show 300+ pages (today it is probably <100).

If none of those three move after 60 days of real execution, come back and we'll re-diagnose. If some move but not others, the pattern tells us which lever is working and which to double.

---

## What I ship from code vs. what you ship from an inbox

**Code-side (automated, mine):**
- Sitemap completeness: done 2026-11-03 (commit `c8453ac`)
- Robots.txt: audited, clean
- llms.txt (for AI crawlers): already serving
- Schema.org Organization, Service, FAQPage, BreadcrumbList: in place
- Internal link graph on blog posts: can add related-posts rail next sprint
- Meta description rewrites on page-1-ranking blog posts: can batch next sprint
- IndexNow Bing push: can add if you want ChatGPT citations faster

**Inbox-side (manual, yours):**
- Everything in this document.
- Backlinks cannot be automated, because the thing that makes them valuable is that a human on the other side chose to link to you.

Pick one row per day for the next three weeks. By early December you'll have the first signal.
