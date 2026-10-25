---
slug: solar-google-ads-performance-max-for-installers
title: Performance Max for solar installers, honestly
metaTitle: "Solar Performance Max: When It Works, When It Burns Budget"
metaDescription: "Why Performance Max without conversion data spends into nothing for solar. When to add it, how to build asset groups, and the audience signals that matter."
keyword: solar google ads performance max
secondary:
  - solar pmax
  - performance max for installers
  - solar google ads asset groups
  - pmax audience signals solar
category: google-ads
intent: Informational
icon: expand
pillar: false
published: 2026-11-05
answer: >
  Performance Max for solar should be the second or third campaign type a
  solar account runs, not the first. It needs 50 to 100 conversions per
  month to train against, which a new account does not have. Run it after
  search has been working for 90 days and conversion tracking is complete.
  Build asset groups by product (residential, battery, EV charger), feed
  it the strongest audience signals you have (customer match lists,
  website visitors, lookalikes), and exclude your own brand terms so it
  does not eat the brand search ads already running cheaper.
takeaways:
  - PMax needs conversion data to work. New accounts should start with search, not PMax.
  - Asset groups replace keywords. Build one per product, not one per campaign.
  - Audience signals are hints, not targeting. The algorithm uses them as training data.
  - Exclude your brand terms. PMax will otherwise cannibalise your own cheapest traffic.
related:
  - google-ads-for-solar-contractors
  - solar-google-ads-bidding-strategies
  - solar-google-ads-conversion-tracking
---

Performance Max is the Google Ads product that promises the most and demands the most. For a solar account with mature conversion tracking, enough history for the algorithm to train against, and a sales process that handles mixed-intent leads cleanly, PMax usually earns its place in the account inside 90 days.

For a solar account without those three conditions, PMax typically spends 20 to 40 percent of the budget on near-random impressions across display and YouTube before producing anything useful. The failure mode is the campaign running too long on insufficient signal; the fix is almost always to wait, not to tune.

This piece lays out when PMax is the right call, how to set up asset groups, which audience signals matter, and the common ways solar accounts lose money with it.

## What is Performance Max actually doing?

Performance Max is one campaign that bids across every Google surface at once: search, display, YouTube, Gmail, Shopping (where relevant) and Discover. You feed it text assets (headlines, descriptions), image assets, video assets, logos, and goals. The algorithm decides what combination of assets to serve, on which surface, to which audience, at what bid.

What you give up versus a classic search campaign:

**Keyword control.** PMax chooses the search terms it serves against. You can see them in the search terms report but cannot bid on them individually.

**Placement control.** PMax picks display and YouTube placements. You can exclude specific placements but cannot pick them positively.

**Creative control at the moment of serving.** The algorithm assembles the headline-description-image combination at auction time.

What you gain:

**Reach across surfaces in one campaign.** No need to run separate display and YouTube campaigns.

**Automated creative testing.** The algorithm tests combinations in production rather than requiring you to A/B test.

**Potentially cheaper conversions once trained.** A well-fed PMax campaign in a mature account typically runs 15 to 25 percent cheaper per conversion than the equivalent search-only setup.

The gain is real but conditional on the conditions above. The automation that is PMax's advantage is also what hurts a new account without data to train on.

## When should a solar account add PMax?

Three conditions all need to be true:

**Conversion tracking is complete.** You have the sat appointment flowing back to Google as an offline conversion with the right value attached. If you are still tracking only form fills, do not run PMax. The algorithm will optimise against form fills regardless of their quality.

**You have 50 to 100 conversions per month, trailing 30 days, consistent.** PMax needs training data. Below 50 conversions, the algorithm cannot distinguish signal from noise and spends the exploration budget on random experiments.

**Your search campaigns have been running for at least 90 days.** This matters because PMax learns against the account's history, not just the campaign's history. An account with 90 days of structured search behaviour has a mature baseline for the algorithm to build on. An account with 10 days has nothing.

For most new solar accounts, these conditions are met somewhere between day 90 and day 180. Before that, PMax is premature.

## How should solar PMax asset groups be built?

PMax uses asset groups the way search campaigns use ad groups. The main difference: there is no keyword inside an asset group, only a theme defined by the assets and audience signals you provide.

For a solar account, the asset group structure that works:

**One asset group per product.** Residential install, battery storage, EV charger each get their own asset group. Each group's assets are built specifically for that product.

**Within each asset group:**

- Headlines: 11 to 15, specific to the product. "Residential Solar in Austin from $89/month" is a strong headline; "Save money on your energy bill" is a weak one.
- Long headlines: 5 of them. The algorithm uses these on display placements.
- Descriptions: 5, 90 characters each, specific.
- Images: 20 if you have them. Mix of product shots, installation photos, happy customers (with permission), and lifestyle shots relevant to the product.
- Logos: Square and landscape, high resolution.
- Video: at least one 15 to 30 second ad per asset group. Lack of video is the single most common solar PMax weakness; without it the campaign cannot serve on YouTube effectively.

The assets should feel like the ad campaign for that product, not a generic brand asset library. A battery asset group with images of panels on a roof is wasting the storage positioning; the images should be of the battery unit on a wall during an outage.

## What audience signals work for solar PMax?

Audience signals in PMax are hints, not targeting. The algorithm reads them as "people like these converted; find more like them". The signals that work for solar, in rough order of value:

**Customer match lists.** Upload a hashed list of your closed customers. The algorithm uses them as a seed to find lookalikes. For solar, the list should include customers who closed in the last 12 months, with email and phone where available. 500 customers is enough to seed; 2,000 is plenty.

**Website visitors who converted.** First-party audience based on your pixel data. People who filled out a form, called, or hit the thank-you page. Use the longest window your pixel supports (usually 90 to 540 days).

**Website visitors by page.** People who visited specific pages (quote request, battery product page, EV charger page) but did not convert. These are warmer than cold.

**In-market segments.** Google's own classification of "people in the market for X". For solar, use "home improvement > solar panels" and related. These are weaker signals than first-party data but still useful.

**Demographic signals.** Age, household income, home ownership status. Weaker still; use as cross-filters, not primary signals.

The signals compound. A PMax campaign with customer match plus website visitors plus in-market segments trains faster and better than one with any single signal alone.

## What should the exclusions be?

Three exclusions almost every solar PMax account needs:

**Brand terms.** PMax will serve on your own brand searches if you let it, which cannibalises your brand search ads at a higher cost. The brand search ad is already running at $2 to $5 per click; PMax running on the same term can serve at $10 to $20. Exclude your brand terms at the account level.

**Negative keyword list.** The same account-level negative list the search campaigns use. Jobs, DIY, education, research, free, cheap. See the [negatives piece](/blog/negative-keywords-for-solar-google-ads) for the full starter list.

**Placement exclusions on display.** Mobile app placements almost never convert for solar; exclude them. Low-quality content networks (certain content aggregators, specific display partners that attract accidental clicks) should also be excluded. Review the placement report at 30 days and exclude the clear waste.

## What should the budget be?

PMax needs enough daily budget to generate meaningful learning. For solar, that is usually at least $100 to $200 per day per asset group, with a minimum campaign budget of $300 to $500 per day for an account running three products. Below that, the algorithm does not get enough events per day to train quickly.

The first 30 days are learning time. Cost per conversion often looks worse than the search campaigns during this period, sometimes materially worse. Judge the campaign at 60 days, not 14.

A reasonable allocation for a mature solar account running both search and PMax:

- Search campaigns: 50 to 60 percent of budget
- PMax: 25 to 35 percent of budget
- Brand defence: 5 to 10 percent of budget
- LSA: paid separately if running

PMax should rarely be more than 40 percent of the total account budget. Beyond that, the account's visibility into which specific terms and placements are producing conversions drops too low to manage effectively.

## How do you tell if PMax is actually working?

Three metrics, reviewed at 30, 60 and 90 days:

**Cost per sat appointment versus search campaigns.** The number you care about. If PMax is running 20 percent higher than search at day 60, something is off (asset quality, audience signals, or exclusions). If PMax is running 10 to 25 percent below search by day 90, the campaign is doing its job.

**Share of total conversions.** PMax should grow as a share of account conversions over the first 60 days. If it is still at 10 percent of conversions at day 60 on 30 percent of budget, it is not pulling its weight.

**Search terms report content.** The search terms PMax is serving against. If they look like the terms your search campaigns already cover, you are cannibalising; tighten the exclusions. If they look like adjacent terms you were not reaching before, that is the campaign working.

## What are the common mistakes?

**Running PMax too early.** The headline mistake. Six out of ten solar PMax accounts we audit were started before the account had 50 conversions per month. The algorithm had nothing to train against and the campaign burned budget while learning.

**One generic asset group for everything.** Residential, battery and EV charger pooled into one group with mixed assets. The algorithm cannot distinguish which asset belongs with which intent and serves random combinations. Separate asset groups per product.

**Weak video.** No video at all, or a video that is a logo with text pan. The algorithm has nothing to serve on YouTube and the campaign loses that surface. One decent 15 to 30 second video per asset group is table stakes.

**Not excluding brand terms.** The campaign eats your brand traffic, which was already converting at $2 to $5 per click, at $10 to $20. Account-level exclusion is a 2-minute fix with large ongoing savings.

**Comparing day-14 performance to search.** PMax looks worse than search in the first 2 to 3 weeks because the algorithm is still exploring. Operators who switch it off at day 14 never see the gain the mature campaign would have produced.

**Not reviewing the placement and search terms reports.** Reviewing at 30 days, excluding the obvious waste, is where PMax goes from average to good. Operators who treat it as fully hands-off typically give up 15 to 25 percent of its potential.

## FAQ

**Can I run PMax without a search campaign?**
Possible but not recommended for solar. Without a search campaign providing structured search behaviour and conversion data, PMax is making decisions on noisier signal. The search campaign gives the algorithm a baseline to compare against.

**How long is the PMax learning phase?**
Officially Google says 7 to 14 days. In practice, for solar accounts with 50 to 100 conversions per month, 30 to 45 days is where the campaign starts to find its efficient cost per conversion. Below 50 conversions a month, learning never really completes.

**Does PMax replace display and YouTube campaigns?**
In most solar accounts, yes. The standalone display and YouTube campaigns run less efficiently than PMax inside a mature account. Exceptions: specific remarketing use cases, discussed in the [remarketing piece](/blog/solar-google-ads-remarketing).

**Can I A/B test ad copy in PMax?**
Not in the classic ad-group-A versus ad-group-B sense. You can test asset-level performance by looking at the "ad strength" and asset-level metrics inside each asset group, and by swapping low-performing assets out. The structured A/B test does not exist within PMax.

**Should PMax use target CPA or target ROAS?**
If the account has conversion values flowing from the CRM via offline conversion imports, target ROAS. If not, maximise conversions with a target CPA set slightly below the current average. Target CPA alone without the ROAS data is the default most accounts land on.
