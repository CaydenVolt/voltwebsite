---
slug: solar-google-ads-bidding-strategies
title: Solar Google Ads bidding strategies and the order to try them
metaTitle: "Solar Google Ads Bidding Strategies: What to Use When"
metaDescription: "Manual CPC, max clicks, max conversions, target CPA, target ROAS for solar. How much data each one needs and the sequence a new account should move through."
keyword: solar google ads bidding strategies
secondary:
  - google ads target cpa solar
  - manual cpc solar
  - smart bidding solar
  - google ads max conversions solar
category: google-ads
intent: Informational
icon: controls
pillar: false
published: 2026-11-01
answer: >
  A new solar Google Ads account starts on manual CPC for the first 60 to
  90 days to control which keywords win auctions while the account builds
  conversion history. Once the account has at least 30 conversions in
  rolling 30 days, maximise conversions or target CPA becomes the better
  default. Target ROAS and target impression share are later-stage tools
  that need 50 to 100 conversions per month to train. The failure mode is
  switching to smart bidding before conversion volume supports it, which
  burns budget on the algorithm learning rather than earning.
takeaways:
  - Smart bidding needs volume to work. Below 30 conversions a month, it is guessing.
  - Manual CPC is the right first bid strategy, not the fallback.
  - Target CPA tells Google what a lead is worth. Running it without a defensible number is theatre.
  - Change bidding strategy at most once every 30 days. Each change restarts the learning.
related:
  - google-ads-for-solar-contractors
  - what-solar-leads-cost-on-google-ads
  - solar-google-ads-conversion-tracking
---

Bidding strategy is where most solar Google Ads accounts over-engineer. The sequence is simple: start with manual control, build conversion data, move to smart bidding once there is enough signal, and refine. Where accounts go wrong is skipping the first step because smart bidding sounds like the newer option, which means the algorithm trains on noisy data and the account spends six months at worse economics than it should.

This piece lays out the five bidding strategies solar operators realistically use, how much conversion data each one needs, when each is the right call, and the order a new account should move through.

## What are the main Google Ads bidding strategies?

Five strategies cover almost everything a solar account needs:

**Manual CPC.** You set the maximum you will pay per click, keyword by keyword. Google serves the ad into auctions where your bid is competitive. No automation; what you set is what you bid.

**Maximise clicks.** Google automatically sets click bids to drive as many clicks as possible within your daily budget. Fast to set up, but it will spend the budget on cheap clicks regardless of conversion signal.

**Maximise conversions.** Google sets bids to drive as many conversions as possible within your daily budget. Needs conversion tracking set up correctly. Does not care about cost per conversion; it just maximises count.

**Target CPA (cost per acquisition).** Google sets bids to hit a target cost per conversion. You name the number; Google tries to hit it. Needs conversion history to train.

**Target ROAS (return on ad spend).** Google sets bids to hit a target revenue divided by ad spend. Needs conversion tracking that passes revenue values. Rare in solar outside large accounts.

There are two others, target impression share and maximise conversion value, that have narrow uses in solar accounts and come up later.

## How much conversion data does each strategy need?

The conservative numbers that let the strategy actually work, not just technically run:

| Strategy | Minimum conversions per 30 days | What happens below the minimum |
|---|---|---|
| Manual CPC | None | Works at any volume |
| Maximise clicks | None | Works at any volume |
| Maximise conversions | 15 to 30 | Google buys expensive conversions and burns budget |
| Target CPA | 30 to 50 | Target is missed widely; cost per conversion drifts high |
| Target ROAS | 50 to 100 (with value) | Noise overwhelms the signal; results are random |

A solar account doing 10 to 15 conversions a month has no business running target CPA. The algorithm needs enough events to find a pattern; below that threshold it is making decisions on a dozen data points and the variance between what it learns and what the market actually looks like is huge.

The other number that matters is time. Smart bidding needs at least 7 to 14 days of learning before its decisions are reliable. Switching strategies every two weeks resets the clock on every change.

## When should a new solar account use manual CPC?

The first 60 to 90 days, almost always.

The reasoning: a new account has no conversion history. Smart bidding uses conversion history to decide which auctions to bid into. With no history, smart bidding guesses, and the guesses are often bad: the algorithm pulls in cheap clicks from loose match types, buys traffic that converts poorly, and the account looks like it does not work.

Manual CPC in the first 60 to 90 days lets you:

- Enforce the keyword list you chose, not the one Google infers you meant
- Watch which keywords actually produce conversions and which drain budget
- Build 50 to 100 conversion events before the smart bidding has to make decisions
- See the search terms report before trusting the algorithm to interpret it

The right manual CPC bid for a solar keyword in a mid-sized US metro usually sits in the $8 to $25 range depending on the term. Set it, run for 7 to 14 days, then adjust based on what the data shows. The adjustments should be modest, in the range of 20 percent either way per change, not jumps from $10 to $25.

A new account on manual CPC for the first quarter and then shifted to smart bidding typically outperforms one on smart bidding from day one by 20 to 40 percent on cost per sat appointment over the first six months. The gain comes from the controlled training period, not from manual CPC being inherently better.

## When should you move from manual CPC to maximise conversions?

The usual trigger: at least 30 conversions in the trailing 30 days, consistently, for two or three months in a row. "Conversions" meaning the right conversion event, which for solar is usually the sat appointment or at minimum the answered phone call plus form fill combined, not just form fills.

Switching to maximise conversions typically does three things:

- Bids rise on keywords that convert well. The algorithm has learned to pay more for the winners.
- Bids fall on keywords that convert poorly. Those stop winning auctions and the budget shifts.
- Cost per click rises in nominal terms, but cost per conversion stays flat or falls, which is what you actually care about.

Where it goes wrong: operators switch from manual CPC to maximise conversions and watch the CPC jump 40 percent in week one. They panic, switch back, and lose the chance to let it train. The fix is to budget for the first 2 to 3 weeks of smart bidding to look worse before it looks better, and judge after 30 days, not 7.

## When should you add a target CPA?

After maximise conversions has run for 30 to 60 days and the cost per conversion has stabilised in a knowable range. If your average cost per conversion on maximise conversions is $120 with a range of $90 to $160, a reasonable target CPA sits at $110 to $130: slightly below the current average, which pushes Google to find efficiency, but not so far below that the algorithm restricts delivery to a narrow set of auctions.

The common failure: naming a target CPA that is below what the market will support. If sat appointments actually cost $300 in your market and you set a target of $180, Google will try, miss, and either underspend badly (ads do not serve) or hit the target by sacrificing conversion volume to the point where the account is starving.

Target CPA should be a slight optimisation on maximise conversions, not an aspirational goal. If the current cost per sat appointment is $400 and you want to be at $250, the fix is to improve the landing page, improve the lead quality, or improve the sat rate, not to type $250 into the target CPA field and hope.

## What about target ROAS?

For most solar accounts, target ROAS is premature. It needs conversion values flowing from the CRM (which requires offline conversion imports with revenue attached), it needs 50 to 100 conversions per month to train against, and it changes the account's economics from "cheapest leads" to "highest value leads", which is only useful if your sales process can tell the difference.

Target ROAS matters when you are large enough that different lead types produce different revenue outcomes and you want Google to optimise toward the mix. A multi-metro solar operator doing 300 installs per quarter where residential, battery and EV each have different average revenue will benefit from target ROAS. A single-metro operator doing 15 installs per quarter will not.

## What about maximise clicks?

Rarely the right choice for solar. The strategy maximises clicks regardless of conversion signal, which means you will spend your budget on the cheapest clicks in the auction, and the cheapest clicks are usually the loosest-intent clicks. For a product with $100 to $300 cost per lead, maximising clicks is maximising the wrong number.

The one exception: brand defence. For your own-brand campaign (someone typing your company name), maximise clicks works because every click is already a warm lead. You want to serve every brand auction regardless; the strategy supports that cleanly.

## What is the usual sequence a new solar account should move through?

The pattern that works in audited solar accounts:

**Days 1 to 90: Manual CPC.** Build conversion history. Enforce the keyword list. Watch which terms work. Adjust bids once per 7 to 14 days.

**Days 60 to 120: Introduce enhanced conversions, call tracking, offline conversion imports.** All the measurement work needs to be in place before smart bidding has usable signal. See the [conversion tracking piece](/blog/solar-google-ads-conversion-tracking) for the sequence.

**Days 90 to 180: Switch to maximise conversions.** Expect the first 3 weeks to look worse than manual CPC. Judge the result after 30 days.

**Days 180 to 270: Add target CPA at a modest discount to the current average.** Monitor delivery; if impressions drop sharply, raise the target.

**Days 270+: Review the mix.** For accounts with enough volume and revenue signal, consider target ROAS. For most accounts, target CPA with careful management is enough.

Changing bidding strategy more often than once per 30 days almost always costs money. Each change resets the learning phase; the account spends two to three weeks training rather than earning.

## FAQ

**Can I use a portfolio bidding strategy across multiple campaigns?**
Yes, but only when the campaigns share conversion economics. Residential install and battery storage have different average revenue and different close rates, so pooling them under one target CPA will push the budget toward whichever product has the cheaper conversions. Separate portfolio strategies per product is usually cleaner.

**Should I set bid adjustments for mobile versus desktop?**
Mostly no, outside of brand campaigns. Smart bidding considers device signal natively. Manual CPC accounts can benefit from a 10 to 20 percent mobile adjustment if the data clearly shows one device converting better, but set it based on data, not intuition.

**What is the right daily budget for solar Google Ads?**
About $50 to $150 per campaign per day for a mid-sized metro to generate enough conversion signal to run smart bidding usefully. Below $30 per day the account struggles to generate the daily conversion events smart bidding needs to train against.

**Does changing the bidding strategy reset my ad history?**
No, the ad history stays. The learning phase on the new strategy is fresh, so for 1 to 2 weeks after a change, performance is noisier than it will be once learning stabilises.

**Should I run different bidding strategies in different markets or metros?**
Only if the markets have meaningfully different conversion economics or volumes. If one metro produces 25 conversions a month and another produces 5, running smart bidding in both means the second metro's spend is being allocated on 5 data points, which is not enough. Run manual CPC in the smaller metro until it builds volume.
