import type { Comparison } from "../types";

/**
 * Volt Relay vs Enerflo for US solar companies.
 *
 * Enerflo is one of the few genuinely solar-specific CRMs on the market. It
 * does the sales-ops side (proposal, contract, project tracking, integrating
 * with design tools) well. It does not do the top of the funnel, the website,
 * the lead response or the review flow. The two tools can coexist and often
 * do: Volt feeds the leads, Enerflo closes them. This page is written to be
 * honest about that overlap.
 */
export const ENERFLO: Comparison = {
  slug: "enerflo",
  competitor: {
    name: "Enerflo",
    tagline: "Solar-specific sales and operations platform for installers, dealers and EPCs",
    category: "Solar-specific",
  },
  title: "Volt Relay vs Enerflo for US solar companies",
  metaTitle: "Volt Relay vs Enerflo: Which Is Right for Solar?",
  metaDescription:
    "An honest comparison of Volt Relay and Enerflo for US solar companies: who should pick which, where each is strong, the feature matrix and the real pricing.",
  answer:
    "Enerflo is the right pick for a solar operator whose main pain is from site survey onwards: proposals, financing stacks, contract workflow and integrating design tools like Aurora. Volt Relay is the right pick for a solar operator whose main pain is before that: enquiries that go un-answered, slow follow-up, a website that does not convert, and reviews that never get asked for. Many installers run both.",
  published: "2026-10-29",
  pickVolt: [
    "Your bottleneck is lead response, follow-up, reviews and the website, not proposal and contract workflow.",
    "You want one flat $297 a month with the website, SEO and review funnel included.",
    "You are not yet at the deal volume where a dedicated proposal-and-financing stack earns its keep.",
    "You want a system that handles the sales-and-marketing side first and layers in operations once that is working.",
  ],
  pickOther: [
    "Your bottleneck is from site survey onwards: generating proposals, stacking financing options, running the contract flow.",
    "You already have a working lead-gen engine and are losing deals in the design-to-signed-contract stage.",
    "You run a dealer network or an EPC model where white-labelled proposals and partner management are the main problem to solve.",
    "You integrate deeply with design tools (Aurora, Solargraf, OpenSolar) and want proposal generation driven by that design output.",
  ],
  matrix: [
    {
      group: "Lead response",
      rows: [
        {
          feature: "Missed-call text back",
          volt: "Built in. Fires inside seconds of a missed call.",
          other: "Not a focus. Enerflo starts once a lead is in; call handling sits outside the platform.",
        },
        {
          feature: "Speed-to-lead automation",
          volt: "Default solar sequence shipped: text, email, call reminder.",
          other: "Thin at the top of the funnel. Lead distribution and routing yes; sequence-based nurture no.",
        },
        {
          feature: "Follow-up cadence for cold or stalled leads",
          volt: "Eight-touch solar-shaped sequence shipped.",
          other: "Reps work from Enerflo's pipeline manually. Automated nurture is thin.",
        },
      ],
    },
    {
      group: "Reviews and reputation",
      rows: [
        {
          feature: "Google review funnel",
          volt: "Request fires after install sign-off, routes 1 to 3 star feedback to the owner first.",
          other: "Not a native feature. Review generation lives outside Enerflo.",
        },
        {
          feature: "Multi-platform reputation monitoring",
          volt: "Google-focused, honest about where solar reviews actually happen.",
          other: "Not part of Enerflo. A separate tool (Birdeye, Podium) is required.",
        },
      ],
    },
    {
      group: "Website and landing pages",
      rows: [
        {
          feature: "Conversion website included",
          volt: "Part of the monthly fee. Solar-shaped headlines, forms, trust strip, FAQ.",
          other: "Enerflo does not include a website. It assumes the installer has one.",
        },
        {
          feature: "On-site SEO included",
          volt: "Schema, metadata, sitemap and local-page templates are part of the system.",
          other: "Not part of Enerflo. SEO is handled by whichever agency or in-house marketer owns the site.",
        },
      ],
    },
    {
      group: "Sales-ops and proposal workflow",
      rows: [
        {
          feature: "Proposal generation",
          volt: "Volt is a sales-and-marketing system. Proposal generation is not its core strength.",
          other: "Enerflo's core strength. Branded proposals, multiple financing options, side-by-side comparison, e-signature.",
        },
        {
          feature: "Financing stack integration",
          volt: "Not integrated with lender APIs out of the box.",
          other: "Enerflo integrates with lenders (Sunlight, GoodLeap, Mosaic, EnFin, LightReach and others).",
        },
        {
          feature: "Design-tool integration (Aurora, Solargraf)",
          volt: "Not integrated.",
          other: "Enerflo integrates with Aurora, Solargraf and OpenSolar, pulling design output into proposals.",
        },
      ],
    },
    {
      group: "CRM and pipeline",
      rows: [
        {
          feature: "Pipeline shape",
          volt: "Lead, qualified, site survey booked, designed, contract sent, signed, installed.",
          other: "Same solar-shaped pipeline. Both tools think in solar deals.",
        },
        {
          feature: "Dealer / EPC multi-tier management",
          volt: "Built for a single installer, not a dealer network.",
          other: "Core strength: dealer networks, white-label partner portals, multi-level visibility.",
        },
      ],
    },
    {
      group: "Pricing model",
      rows: [
        {
          feature: "Fee structure",
          volt: "One flat $297 a month, no per-user charge.",
          other: "Per-user, custom-quoted. Pricing scales with the dealer network size and modules enabled.",
        },
      ],
    },
  ],
  pricing: {
    volt: "$297 a month, flat. No setup fee, no per-user charge, no per-contact tier. Cancel any time.",
    other:
      "Enerflo does not publish list pricing. In practice it is per-user and custom-quoted, usually $200 to $400+ per user per month depending on the module stack and the size of the dealer network. Expect a setup and onboarding engagement billed separately.",
    note: "Enerflo quotes are custom. Ask for a per-user figure, every integration fee and the onboarding scope before deciding.",
  },
  solarFit:
    "Enerflo and Volt Relay solve different halves of the same solar business. Enerflo is strongest from site survey onwards: pulling the Aurora design in, stacking the financing options, generating the branded proposal, running the e-signature, tracking the project through installation. Volt Relay is strongest before that: the enquiry that just came in, the text back inside seconds, the follow-up sequence for the 70% of leads who go cold, the review funnel on the install that just signed off, and the website that is converting those enquiries in the first place. The honest answer for a lot of installers is not Volt or Enerflo; it is Volt feeding Enerflo.",
  verdict:
    "Enerflo is the right pick for a solar operator whose weakness is from survey onwards and whose lead generation is already working. Volt Relay is the right pick for an installer whose weakness is at the top of the funnel: slow lead response, inconsistent follow-up, a website that does not convert, no review flow. For a growing installer, Volt feeding Enerflo is a stronger stack than either tool alone, at a combined cost usually lower than a HubSpot plus Enerflo configuration.",
  faq: [
    {
      q: "Is Enerflo good for solar companies?",
      a: "Enerflo is built specifically for solar and is strong on the proposal, financing and contract side of the sale. It integrates with design tools like Aurora, pulls in financing options from multiple lenders, and runs the e-signature flow. It is weaker at the top of the funnel: no built-in missed-call text back, no review funnel, no conversion-focused website.",
    },
    {
      q: "Can Volt Relay replace Enerflo for a solar company?",
      a: "Not for the sales-ops side. Enerflo's proposal, financing-stack and dealer-network tooling is deeper than Volt's. Volt replaces the sales-and-marketing side (website, lead response, follow-up, reviews, SEO) that Enerflo does not do. For most installers under $20M in revenue, Volt feeding Enerflo is a stronger stack than either tool alone.",
    },
    {
      q: "What does Enerflo actually cost for a solar company?",
      a: "Enerflo does not publish list pricing. In practice it is per-user and custom-quoted, usually $200 to $400+ per user per month depending on module stack and dealer-network size, plus a setup and onboarding engagement billed separately. Volt Relay is $297 a month flat.",
    },
    {
      q: "Can Volt Relay and Enerflo be used together?",
      a: "Yes. The common pattern is Volt generating and nurturing leads up to the site-survey booking, then handing the deal to Enerflo for proposal, financing and contract. Volt covers the sales-and-marketing half of the business; Enerflo covers the proposal-to-install half.",
    },
    {
      q: "Does Volt Relay integrate with Enerflo directly?",
      a: "Volt Relay does not currently push data to Enerflo via a native integration. Installers running both move signed-and-ready leads via Zapier or by a manual hand-off at the survey-booked stage. A direct integration is on the roadmap once installer demand for the pair justifies it.",
    },
  ],
};
