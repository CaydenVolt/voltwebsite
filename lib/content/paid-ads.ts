/**
 * Paid ads services, sold alongside the monthly plan but on their own line.
 *
 * Three channels at the same management fee. The order below is the order
 * the carousel renders in, and LSA sits in the middle on purpose: it is the
 * pay-per-lead channel, which is the lowest-risk way to spend the first
 * dollar on paid, so the carousel preselects it as the recommended start.
 *
 * None of this is in the $297 plan. Ad spend is paid directly to the
 * platform in the client's own account, not billed through Volt.
 */

export interface PaidAdChannel {
  id: "meta" | "lsa" | "search";
  name: string;
  /** The one-word label on the sub-pill. "LSA", "Meta", "Search". */
  short: string;
  /** Pre-select / recommend badge, if any. One channel only. */
  tag?: string;
  /** The one-line reason for the tag, shown as a muted sub-label. */
  tagNote?: string;
  /** Flat monthly management fee, dollars. */
  fee: number;
  headline: string;
  description: string;
  includes: readonly string[];
  pros: string;
  cons: string;
  /** CTA button copy. */
  cta: string;
  /** Only LSA carries this: eligibility and billing caveats specific to it. */
  note?: string;
}

export const PAID_ADS: readonly PaidAdChannel[] = [
  {
    id: "meta",
    name: "Meta Ads: Facebook and Instagram",
    short: "Meta",
    fee: 1500,
    headline: "Put your services in front of more local homeowners.",
    description:
      "Turn attention into inquiries with ads that showcase your work and make it easy to request an estimate on Facebook or Instagram.",
    includes: [
      "Campaign setup and local audience targeting",
      "Ad copy and creative testing",
      "Lead-form setup with qualifying questions",
      "Ongoing optimization and monthly reporting",
    ],
    pros: "Useful for showcasing transformations and generating interest; built-in lead forms mean you can launch without a dedicated funnel.",
    cons: "Interest is not the same as readiness to book, so qualifying questions and follow-up matter.",
    cta: "Get more inquiries",
  },
  {
    id: "lsa",
    name: "Google LSA (Local Service Ads)",
    short: "LSA",
    // Pre-selected in the carousel. "Start here" keeps the house voice: short,
    // no hype, no "best"/"most popular" invented claim.
    tag: "Start here",
    tagNote: "Pay-per-lead, so the lowest-risk way to try paid first.",
    fee: 1500,
    headline: "Get calls from local customers looking for your services.",
    description:
      "Reach homeowners actively searching for help and pay for valid leads, not clicks.",
    includes: [
      "Eligibility check and setup support",
      "Service-area and category optimization",
      "Budget and bidding management",
      "Lead monitoring and monthly reporting",
    ],
    pros: "Captures existing local demand; pay-per-lead billing.",
    cons: "Eligibility varies by service and location; an inquiry does not guarantee a booked job.",
    cta: "Check my eligibility",
    note: "Available to eligible businesses. Google charges for valid leads; booked jobs are not guaranteed.",
  },
  {
    id: "search",
    name: "Google Search Ads",
    short: "Search",
    fee: 1500,
    headline: "Show up when homeowners search for your services.",
    description:
      "Reach customers actively looking for the services you offer with targeted ads on Google Search.",
    includes: [
      "Keyword research and campaign setup",
      "Ad copy and location targeting",
      "Conversion-tracking setup",
      "Ongoing optimization and monthly reporting",
    ],
    pros: "Captures active search intent and lets you build campaigns around specific services.",
    cons: "Performance depends on targeting and what happens after the visitor reaches your website; a dedicated landing page can be a later upgrade.",
    cta: "Get found on Google",
  },
] as const;

/**
 * Three commitment tiers, same management fee on each, same work on each.
 * What differs is how long the client is signed up for and what that
 * discount is worth in total.
 *
 * The $1,500 monthly rate is the reference. The pilot is a one-off intro
 * offer: three months for the price of two, so a client can test paid
 * without committing. The annual trades a longer commitment for three
 * free months against the monthly rate.
 */
export interface CommitmentPlan {
  id: "monthly" | "pilot" | "annual";
  name: string;
  /** Headline figure as a string, e.g. "$1,500". */
  price: string;
  /** The unit beside the figure: "/month", "total", "/year". */
  unit: string;
  /** One line explaining the term. */
  terms: string;
  /** The effective monthly rate for comparison. */
  effective: string;
  /** How this compares to paying monthly across the same period. */
  savings: string;
  /** The big headline savings figure, e.g. "$1,500" or null for no discount. */
  savingsAmount: string | null;
  /** The sub-line under that figure, e.g. "vs paying monthly". */
  savingsPeriod: string;
  /** Short note shown underneath. */
  note: string;
  /** Optional pill at the top-right of the card. */
  tag?: string;
  /** "accent" (recommended, orange border) or "muted" (informational). */
  tagEmphasis?: "accent" | "muted";
}

export const COMMITMENT_PLANS: readonly CommitmentPlan[] = [
  {
    id: "monthly",
    name: "Monthly",
    price: "$1,500",
    unit: "/month",
    terms: "Rolling, cancel any month.",
    effective: "$1,500/month",
    savings: "No commitment, no discount.",
    savingsAmount: null,
    savingsPeriod: "The reference rate",
    note: "The rate the other two are measured against. Pick this if you want to try the channel for a month before deciding anything bigger.",
  },
  {
    id: "pilot",
    name: "90-day pilot",
    // Pill emphasised in muted treatment: not a sales pill, a usage warning.
    // The point is that the client cannot keep renewing this quarterly to
    // beat the annual price; one quarter only, then they move to monthly
    // or annual.
    tag: "One-time only",
    tagEmphasis: "muted",
    price: "$3,000",
    unit: "total",
    terms: "First 90 days of the channel only. Available once per client.",
    effective: "$1,000/month",
    savings: "One month free against the monthly rate.",
    savingsAmount: "$1,500",
    savingsPeriod: "vs paying monthly for 3 months",
    note: "A quarter to test paid without signing up for a year. Rolls into Monthly or Annual after.",
  },
  {
    id: "annual",
    name: "Annual",
    tag: "Best value",
    tagEmphasis: "accent",
    price: "$13,500",
    unit: "/year",
    terms: "Twelve months, paid up front or quarterly.",
    effective: "$1,125/month",
    savings: "Three months free against the monthly rate.",
    savingsAmount: "$4,500",
    savingsPeriod: "off your first year",
    note: "Best value for a channel you have already decided to run.",
  },
] as const;

export const PAID_ADS_FINE_PRINT =
  "Management fees exclude advertising spend, which is paid directly to the advertising platform in your own account. Lead volume, cost per lead and booked jobs vary by market, offer and season. Dedicated landing pages, funnels and follow-up automation are quoted separately.";
