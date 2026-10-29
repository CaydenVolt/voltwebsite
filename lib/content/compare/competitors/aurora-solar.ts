import type { Comparison } from "../types";

/**
 * Volt Relay vs Aurora Solar for US solar companies.
 *
 * Aurora is a design-and-sales platform, not a CRM. It is often weighed
 * against Volt by mistake. This page says that plainly: a solar operator
 * does not have to pick between the two; Aurora designs the system, Volt
 * runs the sales and marketing around that design.
 */
export const AURORA_SOLAR: Comparison = {
  slug: "aurora-solar",
  competitor: {
    name: "Aurora Solar",
    tagline: "Solar design and sales software: 3D modelling, shading analysis, proposal generation",
    category: "Solar-specific",
  },
  title: "Volt Relay vs Aurora Solar for US solar companies",
  metaTitle: "Volt Relay vs Aurora Solar: Which Does What?",
  metaDescription:
    "An honest comparison of Volt Relay and Aurora Solar for US solar companies. One is a design-and-proposal tool, the other is a sales-and-marketing system. Here is which does what.",
  answer:
    "Aurora Solar is a design-and-proposal platform: 3D roof modelling, shading analysis, financial modelling and branded proposals. Volt Relay is a sales-and-marketing system: website, lead response, follow-up, reviews, SEO and pipeline. The two do not overlap. A growing solar operator almost always ends up running both.",
  published: "2026-10-29",
  pickVolt: [
    "You already have a design tool (Aurora, Solargraf or OpenSolar) and need the sales-and-marketing engine around it.",
    "Your bottleneck is enquiries, follow-up and reviews, not whether the proposal looks professional.",
    "You want one flat $297 a month that already covers the website, SEO and review funnel.",
    "You are early enough that a per-user design-and-proposal platform is premature.",
  ],
  pickOther: [
    "You design systems manually in CAD or by eye and the proposal quality is costing you deals.",
    "Your reps need 3D modelling, shading analysis and financial comparisons in front of the homeowner.",
    "You run a sales team where every rep designs their own system and you want consistency across them.",
    "You sell at the kitchen table and the proposal is the close.",
  ],
  matrix: [
    {
      group: "Lead response and marketing",
      rows: [
        {
          feature: "Missed-call text back",
          volt: "Built in.",
          other: "Not Aurora's scope.",
        },
        {
          feature: "Speed-to-lead automation",
          volt: "Default solar sequence shipped.",
          other: "Not Aurora's scope.",
        },
        {
          feature: "Review funnel after install",
          volt: "Built in. Routes 1 to 3 star feedback to the owner first.",
          other: "Not Aurora's scope.",
        },
        {
          feature: "Conversion website",
          volt: "Included in the fee.",
          other: "Not Aurora's scope. Aurora has customer-facing proposals, not a public website.",
        },
        {
          feature: "On-site SEO",
          volt: "Schema, metadata, sitemap, local pages.",
          other: "Not Aurora's scope.",
        },
      ],
    },
    {
      group: "Solar design",
      rows: [
        {
          feature: "3D roof modelling",
          volt: "Not Volt's scope. Volt does not design systems.",
          other: "Aurora's core strength. 3D models built from satellite or LIDAR, remote or in-home.",
        },
        {
          feature: "Shading analysis",
          volt: "Not Volt's scope.",
          other: "Aurora's industry-standard irradiance and shading analysis.",
        },
        {
          feature: "System sizing and layout",
          volt: "Not Volt's scope.",
          other: "Aurora handles module layout, string design, inverter choice.",
        },
      ],
    },
    {
      group: "Proposal workflow",
      rows: [
        {
          feature: "Branded, interactive proposal",
          volt: "Not Volt's scope.",
          other: "Aurora Sales Mode. Interactive proposal with financing comparison and e-signature.",
        },
        {
          feature: "Financing stack",
          volt: "Not integrated with lender APIs.",
          other: "Aurora integrates with lenders for financing comparison in the proposal.",
        },
      ],
    },
    {
      group: "CRM and pipeline",
      rows: [
        {
          feature: "Solar sales pipeline",
          volt: "Lead, qualified, site survey booked, designed, contract sent, signed, installed.",
          other: "Aurora has a sales mode and basic project tracking; it is not a full CRM.",
        },
        {
          feature: "Install tracking after signed contract",
          volt: "Volt tracks the install through to review funnel.",
          other: "Aurora's project management lives on the Aurora Field side, which is a separate module.",
        },
      ],
    },
    {
      group: "Pricing model",
      rows: [
        {
          feature: "Fee structure",
          volt: "One flat $297 a month, no per-user charge.",
          other: "Per-user tiers: Plus, Pro and higher, plus optional modules like Aurora Field.",
        },
      ],
    },
  ],
  pricing: {
    volt: "$297 a month, flat. No setup fee, no per-user charge, no per-contact tier. Cancel any time.",
    other:
      "Aurora Solar's Plus plan starts around $150 per user per month at list, Pro around $250 per user per month, Premium is custom. Add Aurora Field for the operations module and training time, and a four-user solar sales team is usually $800 to $1,500 a month on Aurora alone, before any CRM, website or review tool.",
    note: "Aurora pricing changes often and varies by region. Confirm current list on aurorasolar.com before deciding.",
  },
  solarFit:
    "A solar installer runs two parallel systems. The sales system (website, enquiries, follow-up, reviews, pipeline) and the design system (3D model, shading analysis, proposal, financing). Volt Relay is the first. Aurora Solar is the second. Treating this as an either-or is a misread of what each tool is for. A solar operator who is losing deals because the proposal is a hand-drawn sketch needs Aurora. A solar operator who is losing deals because the lead was never answered needs Volt. Most installers eventually run both: Aurora for the design and proposal; Volt for the website, lead response, follow-up and reviews around it.",
  verdict:
    "Aurora Solar and Volt Relay are not alternatives. They sit on opposite sides of the solar deal. The honest recommendation for a growing US solar installer is to buy Volt first (because leads pay for everything else), add Aurora when the proposal quality is a limiter on close rate, and let the two systems do their own halves of the business.",
  faq: [
    {
      q: "Is Aurora Solar a CRM?",
      a: "No, Aurora Solar is a design-and-proposal platform, not a CRM. Its core strength is 3D roof modelling, shading analysis, system layout and branded interactive proposals. It has a basic sales mode and project tracking, but it does not replace a full CRM for lead response, follow-up and review generation.",
    },
    {
      q: "Can Volt Relay replace Aurora Solar for a solar company?",
      a: "No. Volt does not design solar systems. Aurora handles 3D modelling, shading analysis and proposal generation; Volt does not. The two tools solve different problems and most growing solar installers end up running both.",
    },
    {
      q: "What does Aurora Solar actually cost?",
      a: "Aurora's Plus plan starts around $150 per user per month at list, Pro around $250 per user per month, Premium is custom. For a four-user solar sales team, Aurora alone usually runs $800 to $1,500 a month before any CRM, website or review tool is added.",
    },
    {
      q: "Should I buy Aurora or Volt first?",
      a: "If leads are the bottleneck (slow response, inconsistent follow-up, no review flow, weak website), buy Volt first. If leads are flowing but close rate is suffering because the proposal looks like a quote on a Word document, buy Aurora first. Most installers eventually buy both; the order depends on which side of the business is losing deals.",
    },
    {
      q: "Does Volt Relay integrate with Aurora Solar?",
      a: "Volt Relay does not currently push data to Aurora via a native integration. Installers running both typically hand off a qualified lead from Volt to Aurora at the design stage via Zapier or manually. A direct integration is on the roadmap once installer demand for the pair justifies it.",
    },
  ],
};
