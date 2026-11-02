import type { Tool } from "../types";

export const REVIEW_GOAL: Tool = {
  slug: "solar-review-goal-calculator",
  title: "Google review goal calculator",
  metaTitle: "Google Review Goal Calculator: How Many Reviews Per Month to Hit a Target",
  metaDescription:
    "Calculate how many Google reviews per month you need to hit a target review count. Shows installer review-funnel math and competitor-overtake timeline.",
  tagline: "How many reviews per month to overtake a competitor or hit a star-count target",
  audience: "Installer",
  intro:
    "Google reviews are the single largest driver of local-search ranking for solar operators. This calculator shows how many reviews per month you need to hit a target total (either an absolute count or to overtake a specific competitor), given your current review count, your review-request process capture rate, and realistic monthly install volume.",
  how: [
    {
      heading: "Compute review request capture rate",
      text: "Capture rate = reviews received / review requests sent. US solar industry averages run 15 to 25 percent (text-link request, one touch). Operators with strong follow-up and personalised requests hit 40 to 60 percent. A capture rate below 10 percent usually means the request is being sent at the wrong time or through the wrong channel.",
    },
    {
      heading: "Multiply by install volume",
      text: "Monthly reviews received = monthly installs * capture rate. For 25 monthly installs at 25 percent capture, that is around 6 reviews per month. To hit 10+ reviews per month, you need either more installs, higher capture rate, or both.",
    },
    {
      heading: "Compute months to target",
      text: "Months to target = (target review count - current review count) / monthly reviews received. If you need 100 more reviews and generate 6 per month, that is 17 months. If you can lift capture to 50 percent, it drops to 8 months.",
    },
    {
      heading: "Model competitor overtake",
      text: "Your competitor is also receiving reviews over time, often at a slower pace than they add new installs. If competitor is at 150 reviews adding 3 per month and you are at 50 adding 8 per month, you overtake in 20 months. If competitor adds 5 per month, you overtake in 33 months.",
    },
  ],
  caveat:
    "This models the mechanical review-math but not quality. A 4.9 star profile with 150 reviews often outranks a 4.7 star profile with 400 reviews because Google's local algorithm weights recency and consistency. Burst-collection schemes (asking 50 customers at once) trigger Google review filtering and can backfire. Steady 3 to 10 reviews per month at high quality beats irregular bursts.",
  faq: [
    {
      q: "How many Google reviews does a solar company need?",
      a: "The practical threshold for appearing in local-pack results in US solar metros is 50 to 100 reviews with a 4.5+ star average. To rank for competitive terms like 'solar companies [city]' you typically need 150+ reviews. Top-performing local operators have 300 to 800+ reviews.",
    },
    {
      q: "What is a good review capture rate?",
      a: "US solar operators average 15 to 25 percent of install customers leaving a Google review when asked once. Operators with structured review-request processes (text link at PTO, follow-up 7 days later, personalised ask from installer) hit 40 to 60 percent. Capture rate below 10 percent usually indicates process or timing issues.",
    },
    {
      q: "Does asking for reviews violate Google's rules?",
      a: "No, asking is permitted. What is prohibited: incentivising reviews (gift cards, discounts for reviews), review gating (asking only happy customers for reviews), fake reviews, reviews from employees pretending to be customers. Simply asking every customer post-install is allowed and expected.",
    },
    {
      q: "How long does it take to overtake a competitor on review count?",
      a: "At average US solar review-generation rates (3 to 8 reviews per month), overtaking a competitor with a 100-review lead typically takes 12 to 36 months. Faster if you grow install volume or lift capture rate; slower if the competitor also grows. This calculator models the specific timeline for your rates.",
    },
  ],
  published: "2026-11-02",
  related: ["solar-review-impact-calculator"],
};
