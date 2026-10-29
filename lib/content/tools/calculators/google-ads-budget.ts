import type { Tool } from "../types";

/**
 * Solar Google Ads budget calculator.
 *
 * Answers the "how much do I need to spend to hit X signed deals a month"
 * question from the other end: target output, then back-solve to budget.
 * Honest about the fact that cost per lead on Google Search varies widely
 * by metro and keyword, so the output is a range not a point estimate.
 */
export const GOOGLE_ADS_BUDGET: Tool = {
  slug: "solar-google-ads-budget-calculator",
  title: "Solar Google Ads budget calculator",
  metaTitle: "Solar Google Ads Budget Calculator: What You Need to Spend",
  metaDescription:
    "What a US solar installer needs to spend on Google Ads to hit a target number of signed deals per month, based on real close rate, contact rate and cost per lead.",
  tagline: "The monthly Google Ads budget required to hit your target signed-deal count",
  audience: "Installer",
  intro:
    "Hitting a signed-deal target is a chain: budget buys leads, leads become contacts, contacts become sat appointments, sat appointments become signed deals. This calculator takes your target signed deals and your real-world rates for each step, and back-solves the monthly ad budget required. The output is a range because cost per lead on Google Search for solar varies by metro and keyword.",
  how: [
    {
      heading: "Start from the target signed deals",
      text: "How many signed solar deals do you want from Google Ads this month? This is the output of the chain, not the input.",
    },
    {
      heading: "Divide by close rate on contacted",
      text: "Target signed deals / close rate (as decimal) = contacted leads needed. If you close 20 percent of contacted leads, you need 5 contacted leads for every signed deal.",
    },
    {
      heading: "Divide by contact rate",
      text: "Contacted leads / contact rate (as decimal) = total leads needed. If you contact 70 percent of the leads that come in, you need to generate more leads than you plan to contact.",
    },
    {
      heading: "Multiply by cost per lead",
      text: "Total leads x cost per lead = monthly budget. For Google Search ads targeting US residential solar keywords, cost per lead typically falls between $75 and $250 depending on metro, intent (brand vs non-brand) and competition. The calculator uses that range.",
    },
    {
      heading: "Add 15 to 25 percent for management and testing",
      text: "A real campaign has losing ad groups, keywords you have to kill, and seasonality. Headline budget rarely survives first contact with reality. Build the margin in from the start.",
    },
  ],
  caveat:
    "Cost per lead on Google Search is the biggest swing factor and the one most sensitive to local competition. A quiet metro in a southern state can see $75 to $120 CPLs; a heavily contested one in California can hit $300+. Use your own Google Ads account's historical CPL where you have it; the default range here is directional only.",
  faq: [
    {
      q: "How much do solar companies spend on Google Ads?",
      a: "Residential solar installers running Google Search ads typically spend $5,000 to $50,000 a month, depending on target volume and metro. For a small operator targeting one to three signed deals a week from paid, $8,000 to $15,000 a month is a common starting range. Below $3,000 a month, the data is too sparse to optimise reliably.",
    },
    {
      q: "What is a good cost per lead for solar on Google Ads?",
      a: "On non-brand Google Search ads targeting US residential solar, $75 to $250 per lead is the typical range. Brand keywords (your own company name) are much cheaper, usually $5 to $25. Facebook and Instagram leads are usually cheaper per lead but have lower contact and close rates, so cost per signed deal often ends up similar.",
    },
    {
      q: "Can I run Google Ads for solar on $1,000 a month?",
      a: "Technically yes, meaningfully no. At $100 cost per lead, $1,000 is 10 leads. That is below the volume Google's optimiser needs to find winning configurations, below the volume you need to reliably measure close rate by keyword, and below the volume where one bad week does not define the account's performance. $3,000 a month is a more honest floor.",
    },
    {
      q: "What is the ratio of ad spend to revenue for solar?",
      a: "For a well-run US residential solar installer, Google Ads commonly runs at 5 to 15 percent of attributable revenue. Spending $10,000 a month and generating $100,000 to $200,000 of signed revenue from that spend is a working campaign. Below 5 percent is excellent; above 15 percent usually means a configuration or targeting problem rather than a budget problem.",
    },
  ],
  published: "2026-10-29",
  related: ["solar-lead-cost-calculator", "solar-close-rate-calculator"],
};
