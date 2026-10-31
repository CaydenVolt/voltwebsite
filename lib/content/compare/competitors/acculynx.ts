import type { Comparison } from "../types";

/**
 * Volt Relay vs AccuLynx for US solar companies.
 *
 * AccuLynx is contractor software for roofing and exteriors, used by a
 * number of solar operators because the project-management side maps
 * reasonably well to a solar install. Weak at the top of the funnel and at
 * on-site SEO, like most contractor tools.
 */
export const ACCULYNX: Comparison = {
  slug: "acculynx",
  competitor: {
    name: "AccuLynx",
    tagline: "Contractor management software for roofing and exteriors, used by some solar installers",
    category: "Field service",
  },
  title: "Volt Relay vs AccuLynx for US solar companies",
  metaTitle: "Volt Relay vs AccuLynx: Which Is Right for Solar?",
  metaDescription:
    "Honest comparison of Volt Relay and AccuLynx for US solar: who should pick which, the feature matrix, the real pricing and the solar-specific fit.",
  answer:
    "AccuLynx is the right pick for a solar operator that also does roofing or exteriors and wants one tool across the trades, with strong project management on the install side. Volt Relay is the right pick for a solar-only installer whose main pain is lead response, follow-up, reviews and a conversion website, built in on one flat monthly fee.",
  published: "2026-10-31",
  pickVolt: [
    "You are solar-only and want a system shaped around how solar sells, not retrofitted from roofing.",
    "Your bottleneck is top-of-funnel: slow lead response, inconsistent follow-up, no review flow.",
    "You want one flat $297 a month that already covers the website, SEO and review funnel.",
    "You do not need the roofing-specific features (material measurement, aerial measurement reports, roofing-specific documentation) that AccuLynx is built around.",
  ],
  pickOther: [
    "You run both solar and roofing (or exteriors broadly) and want one project-management system across both.",
    "Your main pain is project management on the install side, not lead-gen.",
    "You use aerial measurement services (EagleView, GAF QuickMeasure) and want tight integration into project workflow.",
    "You have a working marketing engine already and only need the operations stack tightened.",
  ],
  matrix: [
    {
      group: "Lead response",
      rows: [
        { feature: "Missed-call text back", volt: "Built in.", other: "Not a native AccuLynx feature. Needs a third-party SMS integration." },
        { feature: "Speed-to-lead automation", volt: "Default solar sequence shipped.", other: "AccuLynx has basic lead-management workflows; not sequence-based nurture." },
        { feature: "Follow-up for cold leads", volt: "Eight-touch solar sequence shipped.", other: "You build it. Templates lean roofing-sales rather than solar-sales." },
      ],
    },
    {
      group: "Reviews and reputation",
      rows: [
        { feature: "Google review funnel", volt: "Built in, routes 1 to 3 star feedback to the owner first.", other: "AccuLynx has review-request features; not a solar-specific funnel with negative-review buffer." },
      ],
    },
    {
      group: "Website and landing pages",
      rows: [
        { feature: "Conversion website included", volt: "Part of the monthly fee.", other: "Not part of AccuLynx. Installer brings their own site." },
        { feature: "Solar-specific page templates", volt: "Pages ship with solar-shaped headlines, forms, trust strip, FAQ.", other: "Not applicable." },
      ],
    },
    {
      group: "On-site SEO",
      rows: [
        { feature: "SEO included in the fee", volt: "Schema, metadata, sitemap, local pages.", other: "Not part of AccuLynx." },
      ],
    },
    {
      group: "CRM and pipeline",
      rows: [
        { feature: "Pipeline shape", volt: "Lead, qualified, site survey booked, designed, contract sent, signed, installed.", other: "Roofing-shaped by default (inspection, estimate, insurance claim, install). Reconfigurable for solar." },
      ],
    },
    {
      group: "Project management",
      rows: [
        { feature: "Install-day project management", volt: "Volt tracks installs through review funnel.", other: "AccuLynx's core strength. Strong project management with crew assignment, materials tracking, documentation." },
        { feature: "Aerial measurement integration", volt: "Not integrated.", other: "AccuLynx integrates with EagleView, GAF QuickMeasure and other measurement services." },
      ],
    },
    {
      group: "Pricing model",
      rows: [
        { feature: "Fee structure", volt: "One flat $297 a month, no per-user charge.", other: "Per-user, custom-quoted. Pricing scales with team size." },
      ],
    },
  ],
  pricing: {
    volt: "$297 a month, flat. No setup fee, no per-user charge, no per-contact tier. Cancel any time.",
    other: "AccuLynx does not publish list pricing openly. In practice it is per-user and custom-quoted, usually $100 to $200+ per user per month depending on team size and modules enabled. Setup and training billed separately.",
    note: "AccuLynx quotes are custom. Ask for a per-user figure, every module cost and the onboarding scope before deciding.",
  },
  solarFit:
    "AccuLynx was built for the roofing and exteriors trades and that is where its project-management strengths sit. Solar operators who also do roofing often adopt AccuLynx for the cross-trade coverage, which is a legitimate reason to pick it. For solar-only installers, the roofing DNA is a cost rather than a benefit: the pipeline stages, templates and workflows need reshaping to fit a solar deal, and the top-of-funnel features that solar operators actually need (missed-call text back, conversion website, SEO) are not there at all.",
  verdict:
    "AccuLynx is the right pick for a hybrid solar-and-roofing operator who wants one tool across both trades. For a solar-only installer, Volt Relay delivers the sales-and-marketing side of the business more cleanly on a flat monthly fee, with the install-management side handled by whichever tool makes sense once lead flow is working.",
  faq: [
    {
      q: "Is AccuLynx good for solar companies?",
      a: "AccuLynx is strong for solar operators that also do roofing or exteriors, where its project-management features cover both trades. For solar-only installers, it is adequate on project management but weak on the top-of-funnel pieces (missed-call text back, review funnel, conversion website, on-site SEO) that drive most solar growth.",
    },
    {
      q: "Can Volt Relay replace AccuLynx for a solar company?",
      a: "Yes for solar-only installers whose main pain is lead-gen and conversion. Volt handles the website, lead response, follow-up, reviews and pipeline on one monthly fee. For hybrid solar-and-roofing operators, AccuLynx's cross-trade coverage is a legitimate reason to keep it alongside Volt.",
    },
    {
      q: "What does AccuLynx actually cost for a solar company?",
      a: "AccuLynx does not publish list pricing. In practice it is per-user and custom-quoted, usually $100 to $200+ per user per month depending on team size and modules enabled. Volt Relay is $297 a month flat with no per-user charge.",
    },
    {
      q: "Does AccuLynx have solar-specific features?",
      a: "AccuLynx was built for roofing and exteriors; solar-specific features are limited. The pipeline, templates, workflows and documentation structure are all roofing-shaped by default and need to be reconfigured by the installer to fit a solar sales and install cycle.",
    },
  ],
};
