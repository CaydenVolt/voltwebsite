import type { Comparison } from "../types";

/**
 * Volt Relay vs OpenSolar for US solar companies.
 *
 * OpenSolar is a solar design and proposal platform, often weighed against
 * Aurora. Free at the base tier (ad-supported), paid tiers for teams and
 * API access. Not a CRM, not a lead-gen engine. Volt and OpenSolar coexist:
 * OpenSolar designs the system, Volt generates and nurtures the lead.
 */
export const OPENSOLAR: Comparison = {
  slug: "opensolar",
  competitor: {
    name: "OpenSolar",
    tagline: "Solar design and proposal platform, free at base tier",
    category: "Solar-specific",
  },
  title: "Volt Relay vs OpenSolar for US solar companies",
  metaTitle: "Volt Relay vs OpenSolar: Which Does What?",
  metaDescription:
    "An honest look at Volt Relay and OpenSolar for US solar companies. One is a design-and-proposal tool, the other is a sales-and-marketing system. Here is which does what.",
  answer:
    "OpenSolar is a solar design and proposal tool: 3D roof modelling, shading analysis, financial comparison and branded proposals, free at the base tier. Volt Relay is a sales-and-marketing system: website, lead response, follow-up, reviews, SEO and pipeline. The two do not overlap and most growing solar operators end up running both.",
  published: "2026-10-31",
  pickVolt: [
    "You already use OpenSolar (or Aurora or Solargraf) for design and need the sales-and-marketing engine around it.",
    "Your bottleneck is enquiries, follow-up and reviews, not proposal quality.",
    "You want one flat $297 a month covering the website, SEO and review funnel.",
    "You are early enough that your per-user tool spend should be minimised.",
  ],
  pickOther: [
    "You design systems manually and your proposal quality is costing you deals.",
    "Your reps need 3D modelling, shading analysis and financial comparisons in front of the homeowner.",
    "You want a free design tool to start with and are OK with the ad-supported experience.",
    "You run a sales team where every rep designs their own system and consistency matters.",
  ],
  matrix: [
    {
      group: "Lead response and marketing",
      rows: [
        { feature: "Missed-call text back", volt: "Built in.", other: "Not OpenSolar's scope." },
        { feature: "Speed-to-lead automation", volt: "Default solar sequence shipped.", other: "Not OpenSolar's scope." },
        { feature: "Review funnel after install", volt: "Built in.", other: "Not OpenSolar's scope." },
        { feature: "Conversion website", volt: "Included in the fee.", other: "Not OpenSolar's scope." },
        { feature: "On-site SEO", volt: "Schema, metadata, sitemap, local pages.", other: "Not OpenSolar's scope." },
      ],
    },
    {
      group: "Solar design",
      rows: [
        { feature: "3D roof modelling", volt: "Not Volt's scope.", other: "OpenSolar's core strength. 3D models built from satellite imagery." },
        { feature: "Shading analysis", volt: "Not Volt's scope.", other: "OpenSolar supports irradiance and shading analysis." },
        { feature: "System sizing and layout", volt: "Not Volt's scope.", other: "OpenSolar handles module layout and string design." },
      ],
    },
    {
      group: "Proposal workflow",
      rows: [
        { feature: "Branded interactive proposal", volt: "Not Volt's scope.", other: "OpenSolar's proposal mode is one of its headline features." },
        { feature: "Financing stack", volt: "Not integrated with lender APIs.", other: "OpenSolar integrates with major US solar lenders for financing comparison." },
      ],
    },
    {
      group: "CRM and pipeline",
      rows: [
        { feature: "Solar sales pipeline", volt: "Lead, qualified, site survey booked, designed, contract sent, signed, installed.", other: "OpenSolar has lightweight CRM capability tied to projects; not a full sales CRM." },
      ],
    },
    {
      group: "Pricing model",
      rows: [
        { feature: "Fee structure", volt: "One flat $297 a month, no per-user charge.", other: "Free base tier (ad-supported). Paid tiers for team features, API access and white-labelling." },
      ],
    },
  ],
  pricing: {
    volt: "$297 a month, flat. No setup fee, no per-user charge, no per-contact tier. Cancel any time.",
    other: "OpenSolar's base plan is free (ad-supported in the proposal view). Pro and Business tiers for teams and white-labelled proposals start around $59 to $179 per user per month at list, with enterprise pricing custom. The free tier is genuinely usable for a solo installer.",
    note: "OpenSolar publishes current pricing on opensolar.com. Confirm live tiers before deciding.",
  },
  solarFit:
    "OpenSolar and Volt Relay solve different problems. OpenSolar handles 3D design, shading, financial comparison and branded proposals; Volt handles the website, lead response, follow-up, review funnel, pipeline and SEO. The honest answer for most growing solar operators is to use both: OpenSolar for design and proposal, Volt for everything around it that gets the lead to the proposal and the customer to leave a review afterwards.",
  verdict:
    "OpenSolar and Volt Relay are not alternatives. They sit on opposite sides of the solar deal. For a growing US solar installer, OpenSolar (or Aurora, or Solargraf) for design and Volt for the sales-and-marketing wraparound is a stronger stack than any single tool trying to cover both.",
  faq: [
    {
      q: "Is OpenSolar really free?",
      a: "The base tier is free (ad-supported in the proposal view). Paid tiers for teams, API access and white-labelling start around $59 to $179 per user per month. For a solo installer or a small team evaluating the design workflow, the free tier is genuinely usable.",
    },
    {
      q: "Can Volt Relay replace OpenSolar?",
      a: "No. Volt does not design solar systems. OpenSolar handles 3D modelling, shading analysis and interactive proposals; Volt does not. The two tools solve different problems and most growing solar installers end up running both.",
    },
    {
      q: "What is the difference between OpenSolar and Aurora?",
      a: "Aurora is more mature with deeper shading analysis and a larger install base; OpenSolar is cheaper (free at base tier) and has caught up on most core design features. Both integrate with major US financing lenders. Choice between the two is usually driven by budget and team workflow preference, not feature parity.",
    },
    {
      q: "Does Volt Relay integrate with OpenSolar?",
      a: "Volt Relay does not currently push data to OpenSolar via a native integration. Installers running both typically hand off a qualified lead from Volt to OpenSolar at the design stage via Zapier or manually. A direct integration is on the roadmap once installer demand for the pair justifies it.",
    },
  ],
};
