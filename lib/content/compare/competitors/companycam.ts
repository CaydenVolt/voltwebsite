import type { Comparison } from "../types";

/**
 * Volt Relay vs CompanyCam for US solar companies.
 *
 * CompanyCam is a photo-documentation platform for field crews. Narrow,
 * well-liked, and complementary to almost everything else in the solar
 * stack. It is not a CRM, not a lead-gen tool, not a website. Volt and
 * CompanyCam coexist happily.
 */
export const COMPANYCAM: Comparison = {
  slug: "companycam",
  competitor: {
    name: "CompanyCam",
    tagline: "Field-crew photo documentation with location, timeline and project organisation",
    category: "Field service",
  },
  title: "Volt Relay vs CompanyCam for US solar companies",
  metaTitle: "Volt Relay vs CompanyCam: Which Does What?",
  metaDescription:
    "An honest look at Volt Relay and CompanyCam for US solar companies. One is a photo-documentation tool, the other is a sales-and-marketing system. Here is which does what.",
  answer:
    "CompanyCam is a field-crew photo-documentation tool: location-tagged, time-stamped photos organised by project. Volt Relay is a sales-and-marketing system: website, lead response, follow-up, reviews, SEO and pipeline. The two do not overlap and growing installers often run both.",
  published: "2026-10-31",
  pickVolt: [
    "Your weakness is at the top of the funnel: lead response, follow-up, reviews, website conversion.",
    "You want one flat $297 a month covering the website, SEO and review funnel.",
    "You already have photo documentation handled (even informally, via phones and a shared drive).",
    "You are not yet at the scale where field-crew photo governance is a daily problem.",
  ],
  pickOther: [
    "You run multiple field crews and need standardised, location-tagged photo documentation across installs.",
    "You handle warranty claims or insurance jobs where photo evidence matters.",
    "You want aerial-measurement, site-survey and install-day photos organised in one timeline per project.",
    "You already have lead-gen working and the pain is on the install documentation side.",
  ],
  matrix: [
    {
      group: "Lead response and marketing",
      rows: [
        { feature: "Missed-call text back", volt: "Built in.", other: "Not CompanyCam's scope." },
        { feature: "Speed-to-lead automation", volt: "Default solar sequence shipped.", other: "Not CompanyCam's scope." },
        { feature: "Review funnel after install", volt: "Built in.", other: "CompanyCam supports photo-sharing with the customer; not a review funnel." },
        { feature: "Conversion website", volt: "Included in the fee.", other: "Not CompanyCam's scope." },
        { feature: "On-site SEO", volt: "Schema, metadata, sitemap, local pages.", other: "Not CompanyCam's scope." },
      ],
    },
    {
      group: "Photo documentation",
      rows: [
        { feature: "Location-tagged photos", volt: "Not Volt's scope.", other: "CompanyCam's core strength. GPS-tagged, time-stamped photos tied to project." },
        { feature: "Project timeline view", volt: "Not Volt's scope.", other: "Chronological photo timeline per project; drag-and-drop organisation." },
        { feature: "Photo sharing with customers", volt: "Not Volt's scope.", other: "CompanyCam supports customer-facing project galleries." },
      ],
    },
    {
      group: "CRM and pipeline",
      rows: [
        { feature: "Solar sales pipeline", volt: "Lead, qualified, site survey booked, designed, contract sent, signed, installed.", other: "Not a CompanyCam feature." },
      ],
    },
    {
      group: "Pricing model",
      rows: [
        { feature: "Fee structure", volt: "One flat $297 a month, no per-user charge.", other: "Per-user tiered. Pro around $27 per user per month at list; Premium higher." },
      ],
    },
  ],
  pricing: {
    volt: "$297 a month, flat. No setup fee, no per-user charge, no per-contact tier. Cancel any time.",
    other: "CompanyCam's Pro plan starts around $27 per user per month at list, Premium higher. For a small solar installer with five field users, CompanyCam typically lands at $130 to $180 per month.",
    note: "CompanyCam publishes current pricing on companycam.com. Confirm live tiers before deciding.",
  },
  solarFit:
    "CompanyCam does one job very well: photo documentation for field crews. It does not try to be a CRM or a marketing system, and for a solar operator that is a strength rather than a weakness. The two tools fit different parts of the business: Volt generates and nurtures the lead, Solo or Enerflo closes it, and CompanyCam documents the install. For an installer running multiple crews a day, CompanyCam pays for itself quickly in warranty-dispute avoidance and in the photo evidence that makes service-call follow-ups fast.",
  verdict:
    "CompanyCam and Volt Relay are not alternatives. They solve different problems and often run alongside each other in a growing solar installer's stack. For an operator still trying to generate reliable lead flow, Volt first (because leads pay for everything else, including CompanyCam). For an operator with lead flow working and multiple crews a day creating photo chaos, CompanyCam first.",
  faq: [
    {
      q: "Is CompanyCam good for solar companies?",
      a: "Yes, for the specific job it does. CompanyCam is a strong field-crew photo-documentation tool, used widely by solar installers to track site surveys, installs and service calls with location-tagged, time-stamped photos. It is not a replacement for a CRM or a marketing system.",
    },
    {
      q: "Can Volt Relay replace CompanyCam for a solar company?",
      a: "No. Volt does not do field-crew photo documentation. The two tools solve different problems and most growing solar installers end up running both: Volt for the lead-to-signed-deal half of the business and CompanyCam for the install documentation side.",
    },
    {
      q: "What does CompanyCam actually cost for a solar company?",
      a: "CompanyCam's Pro plan starts around $27 per user per month at list. For a small solar installer with five field users (two reps plus three crew), CompanyCam typically lands at $130 to $180 per month. Volt Relay is $297 a month flat with no per-user charge.",
    },
    {
      q: "Does Volt Relay integrate with CompanyCam?",
      a: "Volt Relay does not currently push data to CompanyCam via a native integration. Installers running both typically use CompanyCam standalone for field documentation; the project link between Volt and CompanyCam happens by project address rather than through an API.",
    },
  ],
};
