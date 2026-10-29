import type { Comparison } from "../types";

/**
 * Volt Relay vs ServiceTitan for US solar companies.
 *
 * ServiceTitan is enterprise field-service software, originally built for
 * HVAC and plumbing. It is powerful, expensive, and sold with a long
 * implementation. A solar operator doing $20M+ with its own call centre and
 * dispatch team benefits from it. A $2M to $8M solar installer usually ends
 * up paying for enterprise capacity it never uses.
 */
export const SERVICETITAN: Comparison = {
  slug: "servicetitan",
  competitor: {
    name: "ServiceTitan",
    tagline: "Enterprise field-service software, originally for HVAC and plumbing, now sold across the trades",
    category: "Field service",
  },
  title: "Volt Relay vs ServiceTitan for US solar companies",
  metaTitle: "Volt Relay vs ServiceTitan: Which Is Right for Solar?",
  metaDescription:
    "An honest comparison of Volt Relay and ServiceTitan for US solar companies: who should pick which, the feature matrix, the real pricing with implementation counted, and the solar fit.",
  answer:
    "ServiceTitan is the right pick for a large solar operator (usually $20M+ revenue) with a call centre, a dispatch team and the budget for a six-figure implementation. Volt Relay is the right pick for every solar installer below that, who wants a complete sales and marketing system running by next week on one flat $297 a month fee instead of a six-month implementation that invoices like enterprise software.",
  published: "2026-10-29",
  pickVolt: [
    "You are under $20M in revenue and want a system running in days, not a six-month implementation.",
    "You do not have a full-time dispatch team or an operations manager who will own the ServiceTitan rollout.",
    "You want one flat $297 a month instead of a per-user, per-module price that scales into the thousands.",
    "You want a conversion website, missed-call text back, follow-up and reviews already built in, not sold as separate ServiceTitan modules.",
  ],
  pickOther: [
    "You are a $20M+ solar operator running 20+ field crews and need an enterprise-grade dispatch board.",
    "You have an in-house dispatcher, a call centre, and a budget line for a dedicated ServiceTitan admin.",
    "You run multi-trade (solar plus HVAC plus electrical) and want one platform governing every division.",
    "You already have an in-house marketing team and need operations and reporting at enterprise scale.",
  ],
  matrix: [
    {
      group: "Lead response",
      rows: [
        {
          feature: "Missed-call text back",
          volt: "Built in. Fires inside seconds of a missed call, no configuration.",
          other: "Available via the ServiceTitan Marketing Pro module and workflow configuration, built out during implementation.",
        },
        {
          feature: "Speed-to-lead automation",
          volt: "Shipped as a default solar sequence out of the box.",
          other: "Fully configurable via ServiceTitan workflows. Powerful, but configuration is a project, not a toggle.",
        },
        {
          feature: "Follow-up cadence for solar leads",
          volt: "Eight-touch solar-shaped follow-up sequence shipped, editable.",
          other: "You design it. ServiceTitan has the engine; the sequences are built by the admin or by the implementation partner.",
        },
      ],
    },
    {
      group: "Reviews and reputation",
      rows: [
        {
          feature: "Google review funnel",
          volt: "Request fires after install sign-off, routes 1 to 3 star feedback to the owner first.",
          other: "ServiceTitan Marketing Pro Reputation module covers review requests and multi-platform tracking at an add-on price.",
        },
        {
          feature: "Negative-review buffer",
          volt: "Internal flag path before the review is posted publicly.",
          other: "Configurable in ServiceTitan with the Reputation module, built during implementation.",
        },
      ],
    },
    {
      group: "Website and landing pages",
      rows: [
        {
          feature: "Conversion website included",
          volt: "The site is part of the monthly fee: one primary action, local proof, honest pricing range.",
          other: "ServiceTitan does not include a website in the base platform. Marketing Pro ties into existing sites or vendor partners.",
        },
        {
          feature: "Solar-specific page templates",
          volt: "Pages ship with solar-shaped headlines, forms, trust strip and FAQ.",
          other: "Not applicable. The website lives outside ServiceTitan.",
        },
      ],
    },
    {
      group: "On-site SEO",
      rows: [
        {
          feature: "SEO included in the fee",
          volt: "Schema, metadata, sitemap and local pages are part of the system.",
          other: "Not part of ServiceTitan. Marketing Pro has reporting; actual on-site SEO lives with a separate agency.",
        },
      ],
    },
    {
      group: "CRM and pipeline",
      rows: [
        {
          feature: "Pipeline shape",
          volt: "Lead, qualified, site survey booked, designed, contract sent, signed, installed.",
          other: "Highly configurable. Shipped shape is HVAC/plumbing; solar deals are reshaped during implementation.",
        },
        {
          feature: "Contact and client limits",
          volt: "No tier. Store every lead you have ever had.",
          other: "No hard contact limit, but the overall price is driven by user count and the modules enabled.",
        },
      ],
    },
    {
      group: "Field operations",
      rows: [
        {
          feature: "Dispatch, routing and crew scheduling",
          volt: "Volt covers install scheduling. Not a dispatch board for 20+ crews.",
          other: "ServiceTitan's core strength. Enterprise-grade dispatch, routing, GPS tracking, capacity planning.",
        },
        {
          feature: "Call centre tools",
          volt: "Not a call-centre platform.",
          other: "ServiceTitan is purpose-built for a dispatch and call-centre operation at scale.",
        },
        {
          feature: "In-field card payments",
          volt: "Deposits online. Not a card-reader-in-the-truck tool.",
          other: "ServiceTitan Payments ships with in-field card and consumer financing integrated.",
        },
      ],
    },
    {
      group: "Pricing model",
      rows: [
        {
          feature: "Fee structure",
          volt: "One flat $297 a month. No per-user charge. No per-module charge.",
          other: "Per-user, per-module. Marketing Pro, Dispatch Pro, Pricebook Pro and other modules are each priced on top.",
        },
        {
          feature: "Implementation",
          volt: "Days to a working system. No setup fee.",
          other: "Three to six month implementation, usually $5,000 to $25,000+ in setup and training.",
        },
      ],
    },
  ],
  pricing: {
    volt: "$297 a month, flat. No setup fee, no per-user charge, no per-module charge. Cancel any time.",
    other:
      "ServiceTitan does not publish list pricing. In practice it typically starts around $300 to $500 per user per month at the small-business tier, scaling with modules (Marketing Pro, Dispatch Pro, Pricebook Pro, Payments, Phones Pro, Reputation). A ten-user solar installer with the common module stack usually lands between $3,500 and $7,000 a month plus a $5,000 to $25,000 implementation fee.",
    note: "ServiceTitan quotes are custom. Ask for a line-by-line breakdown that includes every module, every user and the implementation fee before deciding.",
  },
  solarFit:
    "ServiceTitan is enterprise software written for an enterprise motion: a call centre taking the call, a dispatcher moving the crew, a technician in the home, and a card payment at the end of the visit. A solar deal is not that motion. It is a long-cycle sale with a site survey, a design, a utility interconnection and an install day scheduled weeks ahead. ServiceTitan CAN be configured for solar, and large solar operators do run it successfully, but the configuration is a project and the price assumes you have the team to use it. For a sub-$20M solar installer, ServiceTitan is almost always oversized: the installer pays for enterprise dispatch capacity, call-centre tooling and reporting depth that the business will not grow into for years.",
  verdict:
    "ServiceTitan is the right pick for a large solar operator (roughly $20M+) with a dispatch team, a call centre, and the budget and patience for a six-month implementation. For every other US solar installer, Volt Relay delivers the sales and marketing side of the business, the website, the lead response, the follow-up, the reviews and the SEO, running by next week on a flat $297 a month fee, with ServiceTitan's missing piece (enterprise dispatch) handled by Jobber or Housecall Pro at a fraction of the total cost.",
  faq: [
    {
      q: "Is ServiceTitan good for solar companies?",
      a: "ServiceTitan is strong for large solar operators (usually $20M+ revenue) with a call centre, a dispatch team and the budget for a long implementation. For sub-$20M solar installers, ServiceTitan is almost always oversized: the configuration project runs three to six months, the per-user per-module pricing scales fast, and most of the enterprise dispatch and call-centre capacity goes unused.",
    },
    {
      q: "Can Volt Relay replace ServiceTitan for a solar company?",
      a: "Yes for most sub-$20M solar installers. Volt handles the website, lead response, follow-up, reviews, SEO and pipeline on one monthly fee. The place where ServiceTitan is genuinely stronger is enterprise dispatch and call-centre tooling at scale, which most sub-$20M solar installers do not need. Solar operators who scale past Volt's dispatch limits typically add Jobber or Housecall Pro at a fraction of ServiceTitan's cost.",
    },
    {
      q: "What does ServiceTitan actually cost for a solar company?",
      a: "ServiceTitan does not publish list pricing. A typical ten-user solar installer with Marketing Pro, Dispatch Pro, Pricebook Pro and Payments usually lands between $3,500 and $7,000 a month, plus a $5,000 to $25,000 one-time implementation fee. Volt Relay is $297 a month flat with no setup fee.",
    },
    {
      q: "How long does ServiceTitan take to set up for a solar company?",
      a: "A typical ServiceTitan implementation runs three to six months with a dedicated internal owner working alongside a ServiceTitan implementation manager. The owner reshapes the pipeline for solar, builds the workflows, configures the modules and trains the team. Volt Relay ships with the solar sales shape already built; most installers are live inside a week.",
    },
    {
      q: "Does Volt Relay integrate with ServiceTitan?",
      a: "Volt Relay does not currently push data to ServiceTitan. In practice, almost no solar installer who considers Volt also considers ServiceTitan: the two tools serve different ends of the market. Where both come up, Volt replaces the lead-and-marketing side ServiceTitan is weakest at, and ServiceTitan handles the enterprise dispatch Volt is weakest at.",
    },
  ],
};
