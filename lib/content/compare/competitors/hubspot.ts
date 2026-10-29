import type { Comparison } from "../types";

/**
 * Volt Relay vs HubSpot for US solar companies.
 *
 * HubSpot is the generic CRM giant. Volt Relay is the complete sales system
 * built for US solar operators. This page is written honestly: HubSpot is a
 * better choice for a company that needs its flexibility, and worse for one
 * that needs the solar pipeline running by Tuesday.
 *
 * Pricing figures are HubSpot's published list price at the time of writing;
 * HubSpot moves tiers often, so the body says "at list" rather than quoting a
 * single number as gospel.
 */
export const HUBSPOT: Comparison = {
  slug: "hubspot",
  competitor: {
    name: "HubSpot",
    tagline: "The generic marketing and sales CRM giant, used across industries",
    category: "Generic CRM",
  },
  title: "Volt Relay vs HubSpot for US solar companies",
  metaTitle: "Volt Relay vs HubSpot: Which Is Right for Solar?",
  metaDescription:
    "An honest comparison of Volt Relay and HubSpot for US solar companies: who should pick which, the feature matrix, the real pricing, and the solar-specific fit.",
  answer:
    "HubSpot is the right pick for a solar company with an in-house marketing team and a workflow complex enough to justify an admin configuring it. Volt Relay is the right pick for a solar operator who wants a complete system (website, missed-call text-back, follow-up, reviews and SEO) running by next week on one flat monthly fee.",
  published: "2026-10-29",
  pickVolt: [
    "You want a complete system running in days, not a platform you spend six months configuring.",
    "You are a solar-only installer and want the scripts, forms and pipeline stages that already match how solar sells.",
    "You want one flat monthly fee that does not scale with the number of contacts in your database or the number of users on your team.",
    "You do not want to pay a HubSpot admin $70,000 a year to keep the automations working.",
  ],
  pickOther: [
    "You already run multiple services (solar plus roofing plus HVAC) and need a CRM that is industry-agnostic.",
    "You have an in-house marketing team of three or more who are already fluent in HubSpot workflows.",
    "You want deep integrations with 1,000+ third-party apps that HubSpot's marketplace supports.",
    "You are over $20M in revenue and need the enterprise-grade reporting, permissions and SLAs HubSpot sells at the Enterprise tier.",
  ],
  matrix: [
    {
      group: "Lead response",
      rows: [
        {
          feature: "Missed-call text-back",
          volt: "Built in. Fires inside seconds of a missed call, no configuration.",
          other: "Not native. Needs a third-party integration (Twilio or similar) plus a workflow built by hand.",
        },
        {
          feature: "Speed-to-lead automation",
          volt: "Shipped as a default sequence for new solar enquiries: text, email, call reminder.",
          other: "Available via Workflows but needs to be built from scratch for each form on each landing page.",
        },
        {
          feature: "Follow-up cadence out of the box",
          volt: "Eight-touch solar follow-up sequence shipped with the system; editable, not required.",
          other: "You write it. HubSpot's templates are generic B2B, not solar-sales shaped.",
        },
      ],
    },
    {
      group: "Reviews and reputation",
      rows: [
        {
          feature: "Google review funnel",
          volt: "Built in. Request fires after install sign-off, routes 1 to 3 star feedback to the owner first.",
          other: "Needs a third-party review tool bolted on (Birdeye, Podium or similar), each $300 to $700 a month on top.",
        },
        {
          feature: "Negative review buffer",
          volt: "Internal path for the first flag before the review is posted publicly.",
          other: "Not a native feature. Depends on which review tool is integrated.",
        },
      ],
    },
    {
      group: "Website and landing pages",
      rows: [
        {
          feature: "Conversion-focused website included",
          volt: "The site is part of the monthly fee. One primary action, local proof, honest pricing range.",
          other: "HubSpot CMS Hub is a separate paid tier starting around $450 a month at the Professional level.",
        },
        {
          feature: "Solar-specific page templates",
          volt: "Pages ship with solar-specific headlines, forms, trust strip and FAQ patterns.",
          other: "Templates are generic B2B. You either hire an agency or build from scratch.",
        },
      ],
    },
    {
      group: "On-site SEO",
      rows: [
        {
          feature: "SEO built into the stack",
          volt: "On-site SEO is part of the monthly fee: schema, metadata, sitemap and local-page templates.",
          other: "HubSpot has SEO reporting tools; actually ranking requires separate work or a separate agency.",
        },
      ],
    },
    {
      group: "CRM and pipeline",
      rows: [
        {
          feature: "Pipeline stages that match solar sales",
          volt: "Lead, qualified, site survey booked, designed, contract sent, signed, installed.",
          other: "Default pipeline is generic (lead, MQL, SQL, opportunity, closed). You rename every stage yourself.",
        },
        {
          feature: "Contact-count limit",
          volt: "No marketing-contact tier. Store every lead you have ever had.",
          other: "Priced by marketing contact band. 2,000 contacts at Professional, scales in blocks of 5,000.",
        },
      ],
    },
    {
      group: "Setup and support",
      rows: [
        {
          feature: "Time to live",
          volt: "Days to a working system, not months.",
          other: "Weeks to months, usually with a HubSpot Solutions Partner engagement that is billed separately.",
        },
        {
          feature: "Setup fee",
          volt: "None.",
          other: "HubSpot's own onboarding is $3,000 at Professional and $6,000 at Enterprise, at list.",
        },
      ],
    },
    {
      group: "Pricing model",
      rows: [
        {
          feature: "Fee structure",
          volt: "One flat $297 a month. No per-user charge. No per-contact charge.",
          other: "Per-user (sales), per-contact (marketing), per-hub, per-tier. Stacks fast.",
        },
      ],
    },
  ],
  pricing: {
    volt: "$297 a month, flat. No setup fee, no per-user charge, no per-contact tier. Cancel any time.",
    other:
      "HubSpot's Starter tier is around $20 a user a month. Running the Marketing Hub Professional (what most solar operators need for automations) starts around $800 a month at list, before onboarding, and scales with marketing-contact count. The Enterprise tier starts around $3,600 a month.",
    note: "HubSpot pricing changes often. Confirm current list on hubspot.com/pricing before deciding.",
  },
  solarFit:
    "A solar installer's weekly job is a short list of concrete tasks: answer the enquiries that came in, book the sits, send the designs, chase the ones who went quiet, and ask the installed customers for a review. HubSpot can be configured to do all of that. Volt Relay ships with all of that already built, because every account on the system is a US solar operator doing the same job. The gap is not in what HubSpot CAN do; it is in what a solar owner has time to configure. Most solar companies that buy HubSpot end up using about 20% of the platform while paying for 100% of it.",
  verdict:
    "HubSpot is the right pick for a solar company with the in-house capacity to run it: a dedicated marketing hire, an admin budget, and a workflow complex enough to need the flexibility. For almost every other US solar operator, Volt Relay is the shorter path to a working system, costs less in total, and starts producing booked surveys the week it goes live rather than the quarter after.",
  faq: [
    {
      q: "Is HubSpot good for solar companies?",
      a: "HubSpot is a strong generic CRM that solar companies can use successfully if they have the in-house capacity to configure it. The platform does not ship with solar-specific pipeline stages, scripts, review flows or missed-call text-back; those are either built from scratch or added via paid integrations. Smaller solar operators usually end up paying for more platform than they use.",
    },
    {
      q: "Can Volt Relay replace HubSpot for a solar company?",
      a: "Yes, for the jobs most US solar operators actually need done. Volt Relay handles the website, missed-call text-back, follow-up sequences, review funnel, pipeline and reporting on one monthly fee. The one place HubSpot is genuinely stronger is deep enterprise reporting and 1,000+ third-party integrations, which most sub-$20M solar companies do not use.",
    },
    {
      q: "What does HubSpot actually cost for a solar company?",
      a: "HubSpot's cheapest useful tier for a solar operator (Marketing Hub Professional plus Sales Hub Professional) runs around $890 a month at list before onboarding, scaling with marketing-contact count. Add a $450 CMS Hub Professional for the website, a review tool integration at $300 to $700, and a HubSpot admin's time, and the real monthly cost usually lands between $2,000 and $4,000.",
    },
    {
      q: "How long does HubSpot take to set up for solar?",
      a: "A functional HubSpot build for a solar company usually takes four to twelve weeks. Most of that is pipeline configuration, workflow creation, email template design, integration setup and training. HubSpot's own onboarding ($3,000 to $6,000) covers the basics; full operational use typically needs an outside Solutions Partner or an in-house hire.",
    },
    {
      q: "Does Volt Relay integrate with HubSpot?",
      a: "Volt Relay does not currently push data to HubSpot. If a solar company has an existing HubSpot instance with historical data worth keeping, that data can be exported and imported into Volt on migration. In practice, almost every solar operator who moves to Volt replaces HubSpot rather than running both.",
    },
  ],
};
