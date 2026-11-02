import type { Comparison } from "../types";

export const KEAP: Comparison = {
  slug: "keap",
  competitor: {
    name: "Keap",
    tagline: "Small-business CRM and marketing automation (formerly Infusionsoft), aimed at service and consulting businesses",
    category: "Generic CRM",
  },
  title: "Volt Relay vs Keap for US solar companies",
  metaTitle: "Volt Relay vs Keap: Which Is Right for Solar?",
  metaDescription:
    "Honest comparison of Volt Relay and Keap for US solar operators: who should pick which, the feature matrix, the real pricing and the solar-specific fit.",
  answer:
    "Keap (formerly Infusionsoft) is the right pick for a small service business that wants deep marketing automation and payment-processing in one place, and will handle website, review funnel and SEO elsewhere. Volt Relay is the right pick for a solar operator who wants the complete sales and marketing system (pipeline plus website plus text-back plus follow-up plus reviews plus SEO) on one flat monthly fee.",
  published: "2026-11-02",
  pickVolt: [
    "You want more than CRM and automation: a conversion website, missed-call text back, review funnel and on-site SEO.",
    "You want $297 a month flat instead of Keap's per-contact tiered pricing that scales fast as your list grows.",
    "You are a solar operator and want pipeline stages and sequences that already match how a solar deal moves.",
    "You do not want to configure the automation yourself; Volt ships with the solar sequences already built.",
  ],
  pickOther: [
    "You run multiple services beyond solar and need a horizontal small-business CRM with heavy marketing automation.",
    "You handle payments inside the CRM (invoicing, recurring billing) and want that tightly integrated with contacts.",
    "You have an in-house marketer who will build the automation flows and configure the campaigns.",
    "You want a mature affiliate-tracking and course-selling layer alongside the CRM.",
  ],
  matrix: [
    {
      group: "Lead response",
      rows: [
        { feature: "Missed-call text back", volt: "Built in. Fires inside seconds of a missed call.", other: "Not native. Needs third-party SMS integration or Keap's own SMS add-on." },
        { feature: "Speed-to-lead automation", volt: "Default solar sequence shipped.", other: "Keap's Easy Automations and Advanced Automations handle this; needs configuration." },
        { feature: "Follow-up for solar leads", volt: "Eight-touch solar sequence shipped.", other: "You build it. Keap's automation is horizontal; solar sequences require configuration." },
      ],
    },
    {
      group: "Reviews and reputation",
      rows: [
        { feature: "Google review funnel", volt: "Built in, routes 1 to 3 star feedback to the owner first.", other: "Not a Keap feature. Needs a third-party review tool." },
      ],
    },
    {
      group: "Website and landing pages",
      rows: [
        { feature: "Conversion website included", volt: "Part of the monthly fee.", other: "Keap has basic landing-page templates; not a full conversion website." },
      ],
    },
    {
      group: "On-site SEO",
      rows: [
        { feature: "SEO included in the fee", volt: "Schema, metadata, sitemap, local pages.", other: "Not part of Keap." },
      ],
    },
    {
      group: "CRM and pipeline",
      rows: [
        { feature: "Pipeline shape", volt: "Lead, qualified, site survey booked, designed, contract sent, signed, installed.", other: "Fully configurable pipeline. Default is generic small-business sales; solar stages are built by admin." },
        { feature: "Payment processing", volt: "External; Volt does not take payments.", other: "Native payment processing with Keap Pay; invoices and recurring billing inside the CRM." },
        { feature: "Automation builder", volt: "Pre-built solar sequences; limited custom building.", other: "Deep visual automation builder; one of Keap's strengths." },
      ],
    },
    {
      group: "Pricing model",
      rows: [
        { feature: "Fee structure", volt: "One flat $297 a month, no per-user or per-contact charge.", other: "Per-contact tiered: Pro from around $249/mo for 1,500 contacts, Max from around $279/mo for 2,500 contacts, Ultimate higher. Scales with contact count." },
      ],
    },
  ],
  pricing: {
    volt: "$297 a month, flat. No setup fee, no per-user charge, no per-contact tier. Cancel any time.",
    other: "Keap's current tiers at list: Pro starts around $249/mo for 1,500 contacts and 2 users, Max around $279/mo for 2,500 contacts and 3 users, Ultimate around $349/mo for 2,500 contacts. Contact overages add $29 to $55 per additional 500 contacts. For most growing solar operators, Keap lands at $350 to $500/mo once contact counts realistic for solar lead gen are reached.",
    note: "Keap publishes current pricing on keap.com. Confirm live prices before deciding.",
  },
  solarFit:
    "Keap is a legitimate small-business CRM with strong marketing automation and native payment processing. The gap for a solar operator is that Keap is horizontal: it does not know about missed-call text back for inbound solar inquiries, it does not have a review funnel, it does not come with a conversion-oriented website, and it does not do on-site SEO. Solar operators using Keap pair it with a website agency, a review tool, an SMS tool and typically a Google Business Profile manager. The total stack usually exceeds $600/mo even before the Keap contact-tier overage charges start.",
  verdict:
    "Keap is the right pick for a multi-service small business whose primary need is deep marketing automation and payment processing in one place, and who has in-house capacity to configure the campaigns. For most solar installers under $10M in annual revenue, Volt Relay delivers pipeline, website, text-back, follow-up, reviews and SEO on one flat fee, usually at lower total monthly cost than Keap plus the website and review stack it needs.",
  faq: [
    {
      q: "Is Keap good for solar companies?",
      a: "Keap is a flexible small-business CRM with strong marketing automation, better than most for an operator who wants to build horizontal campaigns and handle payments. It is weak as a complete system for solar because it is horizontal: no built-in missed-call text back, no review funnel, no conversion website, no on-site SEO. Solar operators using Keap almost always pair it with four or five other tools.",
    },
    {
      q: "What is the difference between Keap and Infusionsoft?",
      a: "Keap is Infusionsoft rebranded. The company rebranded Infusionsoft to Keap in 2019 and consolidated its product lines. Older solar operators who used Infusionsoft are now on Keap. The underlying automation engine is largely the same; the UI has been modernised.",
    },
    {
      q: "How does Keap pricing work?",
      a: "Keap uses tiered contact-count pricing. Pro starts around $249/mo for 1,500 contacts, Max around $279/mo for 2,500, Ultimate around $349/mo. Overages add $29 to $55 per additional 500 contacts. For solar operators with growing lead databases, Keap's monthly cost rises steadily as the list grows. Volt Relay is flat $297/mo regardless of contact count.",
    },
    {
      q: "Can Volt Relay replace Keap for a solar company?",
      a: "Yes for most sub-$10M solar installers. Volt handles the sales pipeline, lead response, follow-up and payments-adjacent workflows alongside the website, reviews and SEO on one monthly fee. Keap is stronger on deep automation building and native payment processing; most solar operators do not need that depth once the end-to-end system is in one place.",
    },
    {
      q: "Does Keap include a website?",
      a: "Keap has basic landing-page templates but not a full conversion-oriented website. For a solar operator, Keap landing pages are not a substitute for a proper solar company website with trust signals, local SEO structure, lead-capture flows and schema markup. Pairing Keap with a website agency typically adds $500 to $1,500 to the monthly stack cost.",
    },
  ],
};
