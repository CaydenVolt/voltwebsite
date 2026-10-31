import type { Comparison } from "../types";

/**
 * Volt Relay vs Zoho CRM for US solar companies.
 *
 * Zoho is the budget end of the generic CRM market. Flexible, cheap per
 * user, and configurable to a solar workflow with time. The gap for a solar
 * operator is the same gap every generic CRM has: no missed-call text back
 * out of the box, no review funnel, no conversion website, no on-site SEO,
 * no solar-shaped sequences.
 */
export const ZOHO_CRM: Comparison = {
  slug: "zoho-crm",
  competitor: {
    name: "Zoho CRM",
    tagline: "Budget-friendly generic CRM with a wide suite of add-on apps",
    category: "Generic CRM",
  },
  title: "Volt Relay vs Zoho CRM for US solar companies",
  metaTitle: "Volt Relay vs Zoho CRM: Which Is Right for Solar?",
  metaDescription:
    "Honest comparison of Volt Relay and Zoho CRM for US solar: who should pick which, the feature matrix, the real pricing with Zoho's add-on apps counted, and the solar fit.",
  answer:
    "Zoho CRM is the right pick for a solar operator who wants a cheap generic CRM and has an in-house admin who will configure it, bolt on the Zoho suite add-ons for marketing and support, and build the solar workflows from scratch. Volt Relay is the right pick for an installer who wants the complete sales and marketing system already built, running by next week on one flat monthly fee.",
  published: "2026-10-31",
  pickVolt: [
    "You want a solar-shaped system out of the box, not a blank CRM you have to shape yourself.",
    "You want missed-call text back, review funnel, conversion website and SEO included, not bolted on from the Zoho suite.",
    "You do not have the time or the admin to configure Zoho's apps and keep them talking to each other.",
    "You want one flat $297 a month instead of per-user Zoho licensing plus the add-on apps you will need.",
  ],
  pickOther: [
    "You already use the Zoho suite (Zoho Mail, Zoho Books, Zoho People) and want one vendor across the business.",
    "You have an in-house admin who will configure Zoho CRM, Zoho Campaigns, Zoho Social and Zoho SalesIQ to work together.",
    "You need extensive customisation of fields and workflows at the lowest possible per-user price point.",
    "You run multiple services beyond solar and want a horizontal CRM that is industry-agnostic.",
  ],
  matrix: [
    {
      group: "Lead response",
      rows: [
        { feature: "Missed-call text back", volt: "Built in. Fires inside seconds.", other: "Not native. Needs Zoho SalesIQ, PhoneBridge or a third-party integration configured." },
        { feature: "Speed-to-lead automation", volt: "Default solar sequence shipped.", other: "Configurable via Zoho CRM Workflows. Not solar-shaped out of the box." },
        { feature: "Follow-up for solar leads", volt: "Eight-touch solar sequence shipped, editable.", other: "You build it. Zoho Campaigns handles the email side; SMS is a separate add-on." },
      ],
    },
    {
      group: "Reviews and reputation",
      rows: [
        { feature: "Google review funnel", volt: "Built in, routes 1 to 3 star feedback to the owner first.", other: "Not a Zoho feature. Needs a third-party review tool bolted on." },
      ],
    },
    {
      group: "Website and landing pages",
      rows: [
        { feature: "Conversion website included", volt: "Part of the monthly fee.", other: "Zoho Sites is a separate app with its own tier. Not written for solar conversion." },
        { feature: "Solar-specific page templates", volt: "Pages ship with solar-shaped headlines, forms, trust strip, FAQ.", other: "Not applicable." },
      ],
    },
    {
      group: "On-site SEO",
      rows: [
        { feature: "SEO included in the fee", volt: "Schema, metadata, sitemap, local pages.", other: "Not part of Zoho CRM." },
      ],
    },
    {
      group: "CRM and pipeline",
      rows: [
        { feature: "Pipeline shape", volt: "Lead, qualified, site survey booked, designed, contract sent, signed, installed.", other: "Fully configurable. Default is generic sales; solar-shaped stages are built by the admin." },
      ],
    },
    {
      group: "Pricing model",
      rows: [
        { feature: "Fee structure", volt: "One flat $297 a month, no per-user charge.", other: "Per-user tiered. Standard $14/user/mo at list; Professional $23/user/mo; Enterprise $40/user/mo; Ultimate $52/user/mo." },
      ],
    },
  ],
  pricing: {
    volt: "$297 a month, flat. No setup fee, no per-user charge, no per-app charge. Cancel any time.",
    other: "Zoho CRM's Standard plan is $14 per user per month at list, Professional $23, Enterprise $40, Ultimate $52. The CRM One bundle (CRM plus Campaigns, Analytics, SalesIQ, Projects and Desk) is around $85 per user per month. For a five-user solar installer running the useful stack, Zoho often lands at $300 to $500 per month in licensing, plus review-tool and website costs separately.",
    note: "Zoho pricing changes often and varies by region. Confirm current list on zoho.com before deciding.",
  },
  solarFit:
    "Zoho CRM is a legitimate generic CRM with a wide suite of adjacent apps. The gap for a solar operator is the same gap every horizontal CRM has: nothing is solar-shaped out of the box. The pipeline stages are generic, the sequences are generic, the review funnel is bolted on, the website is a separate product, and the on-site SEO lives nowhere in the Zoho suite. Volt ships with all of that already built because every account on the system is a US solar operator.",
  verdict:
    "Zoho CRM is the right pick for a solar operator with an in-house admin who will configure the Zoho suite into a solar workflow and keep it running. For every other installer, Volt Relay delivers the website, lead response, follow-up sequences, review funnel and on-site SEO already built on a flat monthly fee, usually at a similar or lower total cost than a Zoho suite plus the website, SMS and review tools stacked around it.",
  faq: [
    {
      q: "Is Zoho CRM good for solar companies?",
      a: "Zoho CRM is a flexible, cheap generic CRM that can be configured for solar with admin time. It is weak as a standalone system for a solar installer because the pipeline stages, follow-up sequences, review funnel, conversion website and on-site SEO are either generic, bolted on from other Zoho apps, or missing entirely.",
    },
    {
      q: "Can Volt Relay replace Zoho CRM for a solar company?",
      a: "Yes for most sub-$10M solar installers. Volt handles the website, lead response, follow-up, reviews, pipeline and SEO on one monthly fee. The place Zoho is genuinely stronger is deep customisation at a low per-user price for operators willing to run their own admin workload.",
    },
    {
      q: "What does Zoho CRM actually cost for a solar company?",
      a: "Zoho CRM Professional is $23 per user per month at list. The CRM One bundle (which adds Campaigns, Analytics, SalesIQ) is around $85 per user per month. For a five-user solar operator running the useful stack, Zoho typically lands at $300 to $500 per month in licensing before the website, review tool and SMS costs are added. Volt Relay is $297 a month flat.",
    },
    {
      q: "What is the difference between Zoho CRM and HubSpot?",
      a: "Zoho is cheaper per user and more flexible on customisation; HubSpot is more polished and has a stronger marketplace of integrations. Both are generic CRMs that need configuration to work for solar. Neither ships with the solar-shaped sequences, missed-call text back or review funnel that Volt includes.",
    },
  ],
};
