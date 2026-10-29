import type { Tool } from "../types";

/**
 * Solar review impact calculator.
 *
 * Models the deal-count lift from raising a Google rating. Research from
 * BrightLocal, Harvard Business Review and Moz indicates click-through on
 * local pack and Google Maps listings is strongly correlated with star
 * rating in the 3.5 to 4.9 range: roughly a 10 to 15 percent CTR lift per
 * 0.1 star. Below 3.5 the effect is non-linear (sharp drop); above 4.9 the
 * marginal effect flattens.
 */
export const REVIEW_IMPACT: Tool = {
  slug: "solar-review-impact-calculator",
  title: "Solar review impact calculator",
  metaTitle: "Solar Review Impact Calculator: Deals Won by a Higher Rating",
  metaDescription:
    "How many extra solar deals a higher Google rating actually wins. Uses your current rating, target rating, monthly impressions and close rate to show the real revenue lift.",
  tagline: "The extra signed deals a higher Google rating wins you every month",
  audience: "Installer",
  intro:
    "A Google rating is not a trophy, it is a filter. In the local pack and on Maps, click-through climbs roughly 10 to 15 percent for every tenth of a star between 3.5 and 4.9. This calculator takes your current rating, your target rating, your monthly impressions and your close rate, and shows the extra signed deals and revenue the lift would produce.",
  how: [
    {
      heading: "Start with monthly Google impressions",
      text: "The number of times your Business Profile shows up in search, Maps and the local pack per month. Business Profile Insights reports this; most residential solar operators in the US see somewhere between 500 and 20,000 monthly impressions depending on metro.",
    },
    {
      heading: "Apply the baseline click-through for your current rating",
      text: "The calculator uses research-backed CTR by rating: around 3 percent at 3.5 stars, 5 percent at 4.0, 7 percent at 4.5, 9 percent at 4.8+. These are directional averages; your real CTR depends on photo quality, service area, and competitor density.",
    },
    {
      heading: "Compute the CTR lift at your target rating",
      text: "Target CTR minus current CTR, applied to impressions, equals additional clicks per month. The clicks are the first proxy; downstream, they become calls, forms and signed deals.",
    },
    {
      heading: "Convert clicks to signed deals",
      text: "Clicks x lead-conversion rate x close rate on contacted x margin per signed deal = additional revenue. We use conservative defaults for lead conversion (10 percent of clicks become leads) and apply the close rate you set.",
    },
  ],
  caveat:
    "The star-to-CTR curve is a benchmark, not a guarantee. Click-through on local-pack listings also responds to review count, review freshness, photos, response rate and category. A single star-rating lever is the strongest, but it is one of several. Treat the output as directional, use it to argue for a dedicated review funnel, and measure the real lift from your Business Profile Insights.",
  faq: [
    {
      q: "What is a good Google rating for a solar company?",
      a: "4.6 stars or higher is the honest target. Below 4.5, click-through drops meaningfully; below 4.0, local-pack ranking suffers too. Above 4.9, the marginal return on more positive reviews is small, and the suspicion of a filtered feed starts to appear.",
    },
    {
      q: "How many Google reviews does a solar company need?",
      a: "On absolute minimums: 50 reviews is a floor for a one-location installer in a competitive metro, 100+ is strong. Volume matters because recency matters: 150 reviews over 10 years is much weaker than 60 reviews in the last 24 months. The useful question is reviews-per-month, not total count.",
    },
    {
      q: "Does a bad review hurt a solar company's ranking?",
      a: "Yes, but less than a thin review feed. Google's local algorithm weights review volume, recency, rating distribution and response rate. A rating that drops from 4.8 to 4.5 due to one critical review usually recovers within six to twelve months of continued positive reviews, assuming the review funnel is still firing.",
    },
    {
      q: "Is it worth responding to Google reviews?",
      a: "Yes. Response rate is a public ranking signal, response speed is tracked in Business Profile Insights, and a reasoned public reply to a critical review often does more for future customers than deleting the review would (which you cannot). Reply to every review within 48 hours, including the positive ones.",
    },
  ],
  published: "2026-10-29",
  related: ["solar-lead-cost-calculator", "solar-close-rate-calculator"],
};
