import type { Comparison } from "../types";

/**
 * Volt Relay vs Salesforce for US solar companies.
 *
 * Salesforce is the enterprise CRM standard. For a solar operator it is a
 * blank slate: anything can be built in it, which means everything has to be
 * built in it. Appropriate for a large solar company with a dedicated admin
 * budget. Over-scoped for most sub-$10M installers.
 */
export const SALESFORCE: Comparison = {
  slug: "salesforce",
  competitor: {
    name: "Salesforce",
    tagline: "The enterprise CRM standard, used across every industry at scale",
    category: "Generic CRM",
  },
  title: "Volt Relay vs Salesforce for US solar companies",
  metaTitle: "Volt Relay vs Salesforce: Which Is Right for Solar?",
  metaDescription:
    "Honest comparison of Volt Relay and Salesforce for US solar: who should pick which, the real pricing with admin costs counted, and the solar-specific fit.",
  answer:
    "Salesforce is the right pick for a large solar operator (usually $20M+) with a dedicated Salesforce admin and the budget for a long implementation. Volt Relay is the right pick for every solar installer below that, who wants a complete sales and marketing system running by next week on one flat monthly fee rather than a Salesforce build-out that invoices like enterprise software.",
  published: "2026-10-31",
  pickVolt: [
    "You are under $20M in revenue and want a system running in days, not a six-month implementation.",
    "You do not want to pay a Salesforce admin $80,000+ a year to keep the configuration working.",
    "You want one flat $297 a month instead of per-user, per-cloud Salesforce licensing.",
    "You want conversion website, missed-call text back, follow-up and reviews built in, not stitched together from AppExchange add-ons.",
  ],
  pickOther: [
    "You are a $20M+ solar operator with an in-house admin and the budget for a six-figure annual Salesforce spend.",
    "You already use Salesforce elsewhere in the business and want one system of record for every division.",
    "You need deep enterprise reporting and the thousands of AppExchange integrations Salesforce supports.",
    "You have a sales operations team that will build and maintain the workflows end to end.",
  ],
  matrix: [
    {
      group: "Lead response",
      rows: [
        { feature: "Missed-call text back", volt: "Built in. Fires inside seconds of a missed call.", other: "Available via Salesforce Marketing Cloud + Twilio integration, built out during implementation." },
        { feature: "Speed-to-lead sequences", volt: "Default solar sequence shipped.", other: "Fully configurable in Flow and Marketing Cloud. Powerful; configuration is a project." },
        { feature: "Follow-up for solar leads", volt: "Eight-touch solar sequence shipped, editable.", other: "You build it. Salesforce ships no solar-shaped templates." },
      ],
    },
    {
      group: "Reviews and reputation",
      rows: [
        { feature: "Google review funnel", volt: "Built in, routes 1 to 3 star feedback to the owner first.", other: "Not native. Requires Birdeye, Podium or similar bolt-on via AppExchange." },
      ],
    },
    {
      group: "Website and landing pages",
      rows: [
        { feature: "Conversion website included", volt: "Part of the monthly fee, written for solar conversion.", other: "Salesforce Experience Cloud (community/portal) exists but is not a public conversion site. Website lives elsewhere." },
      ],
    },
    {
      group: "On-site SEO",
      rows: [
        { feature: "SEO included in the fee", volt: "Schema, metadata, sitemap, local pages.", other: "Not part of Salesforce. Separate agency or in-house." },
      ],
    },
    {
      group: "CRM and pipeline",
      rows: [
        { feature: "Pipeline shape", volt: "Lead, qualified, site survey booked, designed, contract sent, signed, installed.", other: "Highly configurable. Default is generic B2B; a solar-shaped pipeline is built during implementation." },
        { feature: "Contact storage limit", volt: "No tier. Store every lead you have ever had.", other: "Priced by user and by cloud (Sales Cloud, Service Cloud, Marketing Cloud). Edition tiers (Starter, Pro, Enterprise, Unlimited) gate features." },
      ],
    },
    {
      group: "Setup and support",
      rows: [
        { feature: "Time to live", volt: "Days to a working system.", other: "Three to twelve month implementation, usually with a Salesforce Partner engagement billed separately." },
        { feature: "Setup fee", volt: "None.", other: "Salesforce's own onboarding plus a Partner implementation typically runs $20,000 to $100,000+ depending on scope." },
      ],
    },
    {
      group: "Pricing model",
      rows: [
        { feature: "Fee structure", volt: "One flat $297 a month, no per-user charge, no per-cloud charge.", other: "Per-user, per-cloud. Sales Cloud Pro $100/user/mo at list; Marketing Cloud separately; Service Cloud separately." },
      ],
    },
  ],
  pricing: {
    volt: "$297 a month, flat. No setup fee, no per-user charge, no per-cloud charge. Cancel any time.",
    other: "Salesforce Sales Cloud Starter starts around $25 per user per month at list. The useful tier for most solar operators (Sales Cloud Professional) is around $100 per user per month, with Marketing Cloud, Service Cloud and other clouds priced on top. A ten-user solar installer with the common cloud stack usually lands at $2,500 to $6,000+ per month in licensing, plus a $20,000 to $100,000 implementation and typically a $60,000 to $100,000 per year admin salary.",
    note: "Salesforce pricing is per-cloud and changes often. Ask for a line-by-line quote that includes every user, every cloud, and the implementation partner cost.",
  },
  solarFit:
    "Salesforce can be configured for a solar operator and large ones do run it successfully. The problem is that the configuration IS the product: a stock Salesforce instance is a blank CRM that happens to have excellent infrastructure underneath. A solar operator either hires a Salesforce admin to configure it (another $60K to $100K a year), engages a Salesforce Partner (another $20K to $100K to implement, then ongoing retainers), or lives with the stock configuration and uses about 15% of the platform. Volt ships with the solar sales shape already built because every account on it is a US solar operator.",
  verdict:
    "Salesforce is the right pick for a $20M+ solar operator with a dedicated admin and the budget for enterprise-grade reporting across multiple divisions. For every other US solar installer, Volt Relay delivers the sales and marketing system complete and running on a flat $297 a month, which is approximately what a single Salesforce admin costs for one week.",
  faq: [
    {
      q: "Is Salesforce good for solar companies?",
      a: "Salesforce can be configured to run a solar company and large ones do, but out of the box it is a blank CRM. Running it well requires a dedicated admin or a Salesforce Partner, which puts total cost of ownership typically $4,000 to $10,000+ per month for a mid-size solar installer once licensing, implementation and admin are counted.",
    },
    {
      q: "Can Volt Relay replace Salesforce for a solar company?",
      a: "Yes for most sub-$20M solar installers. Volt handles the website, lead response, follow-up, reviews, pipeline and reporting on one monthly fee. The place Salesforce is genuinely stronger is enterprise-grade reporting across multiple business divisions and the thousands of AppExchange integrations, both of which most sub-$20M solar installers do not use.",
    },
    {
      q: "What does Salesforce actually cost for a solar company?",
      a: "Salesforce Sales Cloud Professional is around $100 per user per month at list. A ten-user solar installer with Sales Cloud and Marketing Cloud usually lands at $2,500 to $6,000 per month in licensing, plus a $20,000 to $100,000 implementation and typically a $60,000 to $100,000 per year admin. Volt Relay is $297 a month flat with no setup fee or admin requirement.",
    },
    {
      q: "How long does Salesforce take to implement for a solar company?",
      a: "A typical Salesforce implementation runs three to twelve months with a dedicated owner working alongside a Salesforce Partner. The partner reshapes the pipeline for solar, builds the workflows, configures the clouds and trains the team. Volt ships with the solar sales shape already built; most installers are live inside a week.",
    },
  ],
};
