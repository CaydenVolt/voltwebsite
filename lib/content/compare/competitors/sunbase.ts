import type { Comparison } from "../types";

/**
 * Volt Relay vs Sunbase for US solar companies.
 *
 * Sunbase is a solar-specific CRM and operations platform, direct peer of
 * Enerflo and Scoop. Covers sales pipeline, project management, proposal
 * handoff. Thinner at the top of the funnel (website, review funnel,
 * on-site SEO) than Volt.
 */
export const SUNBASE: Comparison = {
  slug: "sunbase",
  competitor: {
    name: "Sunbase",
    tagline: "Solar-specific CRM and operations platform for installers and dealers",
    category: "Solar-specific",
  },
  title: "Volt Relay vs Sunbase for US solar companies",
  metaTitle: "Volt Relay vs Sunbase: Which Is Right for Solar?",
  metaDescription:
    "Honest comparison of Volt Relay and Sunbase for US solar: who should pick which, the feature matrix, the real pricing and the solar-specific fit.",
  answer:
    "Sunbase is the right pick for a solar operator whose main pain is managing deals through the sales pipeline and projects through installation: proposal workflow, project tracking, dealer-partner management. Volt Relay is the right pick for an installer whose main pain is before that, generating leads, responding fast, following up, and running the website and reviews on one flat monthly fee.",
  published: "2026-10-31",
  pickVolt: [
    "Your bottleneck is top-of-funnel: lead response, follow-up, reviews, website conversion.",
    "You want one flat $297 a month that already covers the website, SEO and review funnel.",
    "You are not yet at the deal volume where a dedicated solar-CRM-and-project-management platform earns its keep.",
    "You want a system that handles the sales-and-marketing side first and layers operations in once that is working.",
  ],
  pickOther: [
    "Your bottleneck is from survey onwards: proposal, project tracking, dealer-partner workflow.",
    "You already have a working lead-gen engine and are losing time on manual sales-ops handoffs.",
    "You run a dealer network or EPC model where multi-tier visibility and partner portals matter.",
    "You want a single solar-specific platform spanning sales, proposal and project tracking.",
  ],
  matrix: [
    {
      group: "Lead response",
      rows: [
        { feature: "Missed-call text back", volt: "Built in.", other: "Not a Sunbase focus. Sunbase starts once a lead is in the system." },
        { feature: "Speed-to-lead automation", volt: "Default solar sequence shipped.", other: "Lead routing and distribution yes; sequence-based nurture is thin." },
        { feature: "Follow-up for cold leads", volt: "Eight-touch solar sequence shipped.", other: "Reps work from Sunbase's pipeline manually. Automated nurture is light." },
      ],
    },
    {
      group: "Reviews and reputation",
      rows: [
        { feature: "Google review funnel", volt: "Built in, routes 1 to 3 star feedback to the owner first.", other: "Not a native Sunbase feature." },
      ],
    },
    {
      group: "Website and landing pages",
      rows: [
        { feature: "Conversion website included", volt: "Part of the monthly fee.", other: "Not part of Sunbase. Installer brings their own site." },
        { feature: "On-site SEO", volt: "Schema, metadata, sitemap, local pages.", other: "Not part of Sunbase." },
      ],
    },
    {
      group: "Sales-ops and proposal workflow",
      rows: [
        { feature: "Proposal generation", volt: "Not Volt's core strength.", other: "Sunbase covers proposal workflow and e-signature." },
        { feature: "Financing stack integration", volt: "Not integrated with lender APIs.", other: "Sunbase integrates with major US solar lenders." },
        { feature: "Design-tool integration", volt: "Not integrated.", other: "Sunbase connects to Aurora, Solargraf and other design tools." },
      ],
    },
    {
      group: "CRM and pipeline",
      rows: [
        { feature: "Solar sales pipeline", volt: "Lead, qualified, site survey booked, designed, contract sent, signed, installed.", other: "Same solar-shaped pipeline. Both tools think in solar deals." },
        { feature: "Dealer / EPC management", volt: "Built for a single installer, not a dealer network.", other: "Sunbase supports dealer-partner workflows and multi-tier visibility." },
      ],
    },
    {
      group: "Pricing model",
      rows: [
        { feature: "Fee structure", volt: "One flat $297 a month, no per-user charge.", other: "Per-user, custom-quoted. Scales with team size and modules enabled." },
      ],
    },
  ],
  pricing: {
    volt: "$297 a month, flat. No setup fee, no per-user charge, no per-contact tier. Cancel any time.",
    other: "Sunbase does not publish list pricing openly. In practice it is per-user and custom-quoted, usually $150 to $300+ per user per month depending on module stack. Setup and onboarding billed separately.",
    note: "Sunbase quotes are custom. Ask for a per-user figure, every integration fee and the onboarding scope before deciding.",
  },
  solarFit:
    "Sunbase and Volt Relay solve different halves of the solar business. Sunbase is strongest from survey onwards: proposal workflow, project tracking through installation, dealer-partner management. Volt is strongest before that: the enquiry that just came in, text back inside seconds, follow-up sequence for leads that go cold, review funnel on install sign-off, and the website pulling in the next lead. For most growing installers Volt feeding Sunbase (or Enerflo, or Scoop) is a stronger stack than either tool alone.",
  verdict:
    "Sunbase is the right pick for a solar operator whose weakness is from survey onwards and whose lead generation is already working. Volt Relay is the right pick for an installer whose weakness is at the top of the funnel. For a growing installer dealing with both problems, Volt feeding Sunbase at the signed-contract handoff is usually the cleaner architecture than making one tool stretch to cover both halves.",
  faq: [
    {
      q: "Is Sunbase good for solar companies?",
      a: "Sunbase is purpose-built for solar and strong on sales pipeline, proposal workflow and project tracking through installation. It is thinner at the top of the funnel: no built-in missed-call text back, no review funnel, no conversion-focused website, no on-site SEO.",
    },
    {
      q: "Can Volt Relay replace Sunbase for a solar company?",
      a: "Not for the sales-ops and project-tracking side. Sunbase's proposal and project workflow is deeper than Volt's. Volt replaces the sales-and-marketing side that Sunbase does not touch. For most installers under $20M in revenue, Volt feeding Sunbase is a stronger stack than either tool alone.",
    },
    {
      q: "What does Sunbase actually cost for a solar company?",
      a: "Sunbase does not publish list pricing. In practice it is per-user and custom-quoted, usually $150 to $300+ per user per month depending on module stack. Volt Relay is $297 a month flat.",
    },
    {
      q: "What is the difference between Sunbase and Enerflo?",
      a: "Both are solar-specific CRMs with similar scope: pipeline, proposal, project tracking. The honest differences are around dealer-network depth (Enerflo is more mature here), proposal design flexibility, and specific lender integrations. For an installer evaluating both, the right question is which one the sales reps actually prefer in a hands-on demo, not which has more features on paper.",
    },
  ],
};
