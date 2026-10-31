import type { Comparison } from "../types";

/**
 * Volt Relay vs Solo for US solar companies.
 *
 * Solo (gosolo.io) is solar sales enablement: interactive proposals,
 * financing presentation, remote design handoff. Direct competitor to
 * Aurora Sales Mode on the proposal side; not a CRM, not a website, not a
 * lead-gen engine. The honest answer is Volt and Solo coexist: Volt
 * generates and nurtures the lead, Solo closes it.
 */
export const SOLO: Comparison = {
  slug: "solo",
  competitor: {
    name: "Solo",
    tagline: "Solar sales enablement: interactive proposals, financing presentation, remote design",
    category: "Solar-specific",
  },
  title: "Volt Relay vs Solo for US solar companies",
  metaTitle: "Volt Relay vs Solo: Which Is Right for Solar?",
  metaDescription:
    "Honest comparison of Volt Relay and Solo for US solar: who should pick which, how the two tools actually overlap, and the solar-specific fit.",
  answer:
    "Solo is the right pick for a solar operator whose weakness is the sales presentation: proposal quality, financing comparison, close-rate on sat appointments. Volt Relay is the right pick for an installer whose weakness is before the proposal: lead response, follow-up, reviews and a conversion website. Many installers run both.",
  published: "2026-10-31",
  pickVolt: [
    "Your weakness is top-of-funnel: slow lead response, inconsistent follow-up, no review flow, weak website.",
    "You want one flat $297 a month that includes the website, SEO and review funnel.",
    "You already have proposal quality and close rate figured out, and the gap is lead quantity.",
    "You want a solar sales pipeline, not just a proposal tool.",
  ],
  pickOther: [
    "Your weakness is the proposal: close rate on sat appointments is lower than it should be.",
    "You run a sales team where every rep designs their own proposal and you want consistency across them.",
    "You sell at the kitchen table and the proposal is the close moment.",
    "You already have lead flow working and the gap is converting those leads into signed contracts.",
  ],
  matrix: [
    {
      group: "Lead response and marketing",
      rows: [
        { feature: "Missed-call text back", volt: "Built in.", other: "Not Solo's scope." },
        { feature: "Speed-to-lead automation", volt: "Default solar sequence shipped.", other: "Not Solo's scope." },
        { feature: "Review funnel after install", volt: "Built in.", other: "Not Solo's scope." },
        { feature: "Conversion website", volt: "Included in the fee.", other: "Not Solo's scope." },
        { feature: "On-site SEO", volt: "Schema, metadata, sitemap, local pages.", other: "Not Solo's scope." },
      ],
    },
    {
      group: "Sales presentation",
      rows: [
        { feature: "Interactive proposal", volt: "Not Volt's core strength.", other: "Solo's core strength. Interactive, branded, side-by-side financing comparison, remote-ready." },
        { feature: "Financing stack integration", volt: "Not integrated with lender APIs.", other: "Solo integrates with major solar lenders (Sunlight, GoodLeap, Mosaic and others)." },
        { feature: "Remote-close support", volt: "Not Volt's scope.", other: "Solo supports remote proposal delivery and e-signature across the sales team." },
      ],
    },
    {
      group: "CRM and pipeline",
      rows: [
        { feature: "Solar sales pipeline", volt: "Lead, qualified, site survey booked, designed, contract sent, signed, installed.", other: "Solo has basic deal tracking tied to proposals; not a full CRM for lead management." },
      ],
    },
    {
      group: "Pricing model",
      rows: [
        { feature: "Fee structure", volt: "One flat $297 a month, no per-user charge.", other: "Per-user, custom-quoted. Pricing scales with sales team size." },
      ],
    },
  ],
  pricing: {
    volt: "$297 a month, flat. No setup fee, no per-user charge, no per-contact tier. Cancel any time.",
    other: "Solo does not publish list pricing openly. In practice it is per-user and custom-quoted, usually $150 to $300+ per user per month depending on the team size and the features enabled. Setup and training are billed as part of the engagement.",
    note: "Solo quotes are custom. Ask for a per-user figure, every integration fee and the onboarding scope before deciding.",
  },
  solarFit:
    "Solo and Volt Relay solve different problems in the same solar sales motion. Solo is strongest at the proposal moment: a well-designed, interactive proposal with financing options side by side is the close in many solar deals, and Solo does that better than almost any alternative. Volt Relay is strongest before the proposal: the enquiry that just came in, the text back inside seconds, the follow-up sequence for leads who go cold, the review funnel on the install that just signed off, and the website pulling in the next lead. The two tools are complementary rather than competitive for most growing installers.",
  verdict:
    "Solo is the right pick for a solar operator whose close rate on sat appointments is the limiter, with lead flow already working. Volt Relay is the right pick for an installer whose lead flow is the limiter: slow response, no follow-up, no review flow, weak website. For a growing installer dealing with both problems, Volt feeding Solo is a stronger stack than either tool alone, usually at lower combined cost than a HubSpot plus Solo configuration.",
  faq: [
    {
      q: "Is Solo good for solar companies?",
      a: "Solo is purpose-built for solar sales enablement and strong at what it does: interactive proposals, financing presentation, remote close support. It is not a CRM, not a lead-generation tool, not a website, and not a review funnel. Solar operators who use Solo typically pair it with other tools covering the top-of-funnel and post-install side.",
    },
    {
      q: "Can Volt Relay replace Solo for a solar company?",
      a: "Not for the sales-presentation side. Solo's proposal, financing integration and remote-close workflow are deeper than Volt's. Volt replaces the lead-generation and conversion side of the business that Solo does not touch. Many installers run both: Volt for the lead-to-sat half, Solo for the sat-to-signed half.",
    },
    {
      q: "What does Solo actually cost for a solar company?",
      a: "Solo does not publish list pricing. In practice it is per-user and custom-quoted, usually $150 to $300+ per user per month depending on team size and features enabled. Volt Relay is $297 a month flat with no per-user charge.",
    },
    {
      q: "Can Volt Relay and Solo be used together?",
      a: "Yes. The common pattern is Volt handling the lead-to-sat half of the business, then handing the appointment to Solo for proposal, financing and close. The two tools do not overlap meaningfully, so running both is additive rather than duplicative.",
    },
  ],
};
