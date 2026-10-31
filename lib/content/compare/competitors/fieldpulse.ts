import type { Comparison } from "../types";

/**
 * Volt Relay vs FieldPulse for US solar companies.
 *
 * FieldPulse sits in the same lane as Jobber and Housecall Pro: field-
 * service management for home-services trades. Strong at dispatch,
 * invoicing and payments. Not a marketing engine, no missed-call text
 * back out of the box, no conversion website, no on-site SEO.
 */
export const FIELDPULSE: Comparison = {
  slug: "fieldpulse",
  competitor: {
    name: "FieldPulse",
    tagline: "Field-service management for home-services trades: dispatch, invoicing, payments",
    category: "Field service",
  },
  title: "Volt Relay vs FieldPulse for US solar companies",
  metaTitle: "Volt Relay vs FieldPulse: Which Is Right for Solar?",
  metaDescription:
    "Honest comparison of Volt Relay and FieldPulse for US solar: who should pick which, the feature matrix, the real pricing and the solar-specific fit.",
  answer:
    "FieldPulse is the right pick for a solar installer whose first pain is dispatch, invoicing and payments on the install side and who already has lead-gen working. Volt Relay is the right pick for a solar operator whose first pain is lead response, follow-up, reviews and a conversion website, built in on one flat monthly fee.",
  published: "2026-10-31",
  pickVolt: [
    "Your bottleneck is at the top of the funnel: slow lead response, inconsistent follow-up, weak reviews.",
    "You want one flat $297 a month that already covers the website, SEO and review funnel.",
    "You are a solar-only installer and want pipeline stages, scripts and sequences that match how solar sells.",
    "You do not want to stack FieldPulse plus an SMS tool plus a review tool plus a website agency.",
  ],
  pickOther: [
    "Your main pain is crew dispatch and route optimisation for multiple install teams a day.",
    "You take same-day card payments in the field and want the FieldPulse card reader.",
    "You already have a working marketing engine (website that converts, reviews flowing, follow-up automated).",
    "You run multiple trades beyond solar and want one dispatch system across all of them.",
  ],
  matrix: [
    {
      group: "Lead response",
      rows: [
        { feature: "Missed-call text back", volt: "Built in. Fires inside seconds of a missed call.", other: "Not native. Needs a third-party SMS tool wired in." },
        { feature: "Speed-to-lead automation", volt: "Default solar sequence shipped: text, email, call reminder.", other: "FieldPulse workflows can be configured for this; not solar-shaped out of the box." },
        { feature: "Follow-up for cold leads", volt: "Eight-touch solar sequence shipped, editable.", other: "You build it. Templates are generic home-services." },
      ],
    },
    {
      group: "Reviews and reputation",
      rows: [
        { feature: "Google review funnel", volt: "Request fires after install sign-off, routes 1 to 3 star feedback to the owner first.", other: "FieldPulse sends review-request emails after a job. No native negative-review buffer." },
      ],
    },
    {
      group: "Website and landing pages",
      rows: [
        { feature: "Conversion website included", volt: "Part of the monthly fee, written for solar conversion.", other: "Not part of FieldPulse. Installer brings their own site." },
        { feature: "Solar-specific page templates", volt: "Pages ship with solar-shaped headlines, forms, trust strip, FAQ.", other: "Not applicable." },
      ],
    },
    {
      group: "On-site SEO",
      rows: [
        { feature: "SEO included in the fee", volt: "Schema, metadata, sitemap, local-page templates.", other: "Not part of FieldPulse." },
      ],
    },
    {
      group: "CRM and pipeline",
      rows: [
        { feature: "Pipeline shape", volt: "Lead, qualified, site survey booked, designed, contract sent, signed, installed.", other: "Jobs-and-estimates centred. Workable for solar but reshaped for a 90-day cycle." },
      ],
    },
    {
      group: "Field operations",
      rows: [
        { feature: "Dispatch, routing, crew scheduling", volt: "Volt covers install scheduling. Not a route-optimisation tool for ten trucks a day.", other: "FieldPulse's core strength. GPS tracking, drag-and-drop dispatch, time tracking." },
        { feature: "In-field card payments", volt: "Volt accepts deposits online. Not a card-reader-in-the-truck tool.", other: "FieldPulse Payments ships with card reader, saved cards, invoicing." },
      ],
    },
    {
      group: "Pricing model",
      rows: [
        { feature: "Fee structure", volt: "One flat $297 a month, no per-user charge.", other: "Per-user, tiered. Pricing starts around $65 per user per month at list." },
      ],
    },
  ],
  pricing: {
    volt: "$297 a month, flat. No setup fee, no per-user charge, no per-contact tier. Cancel any time.",
    other: "FieldPulse list pricing starts around $65 per user per month on the Pro plan, with Enterprise custom-quoted. Add payment processing fees, SMS add-ons and a dedicated review tool, and a five-user solar installer typically lands between $450 and $700 a month across the stack.",
    note: "FieldPulse publishes current pricing on fieldpulse.com. Confirm the live number before deciding.",
  },
  solarFit:
    "FieldPulse solves the install-day half of a solar operator's business well. It does not solve the lead-and-marketing half. The honest answer for most sub-$10M US solar installers is that one tool is doing both halves badly: FieldPulse installers are losing deals at the top of the funnel while the field operations run smoothly. Volt Relay solves the top of the funnel; many installers end up running Volt for the lead-to-signed-deal half and FieldPulse for the install-day half.",
  verdict:
    "FieldPulse is the right pick for a solar company whose weakness is on the operations side: crew dispatch, scheduling, in-field payments. For an installer whose weakness is at the top of the funnel, Volt Relay delivers the website, lead response, follow-up and reviews on one monthly fee at a fraction of the stacked cost of FieldPulse plus marketing add-ons.",
  faq: [
    {
      q: "Is FieldPulse good for solar companies?",
      a: "FieldPulse is strong at the operations side of a solar install (scheduling, dispatch, invoicing, payments) and weak on the sales-and-marketing side (lead response, follow-up, reviews, conversion website, SEO). It was built around short-cycle home-services jobs rather than the 60 to 120 day sales cycle a solar deal has.",
    },
    {
      q: "Can Volt Relay replace FieldPulse for a solar company?",
      a: "Yes for most sub-$10M solar installers. Volt handles the lead response, follow-up, reviews, website, SEO and pipeline on one monthly fee. The place FieldPulse is genuinely stronger is multi-crew dispatch and in-field card payments. Many installers run Volt for the lead-to-signed-deal half and keep FieldPulse for the install-day half.",
    },
    {
      q: "What does FieldPulse actually cost for a solar company?",
      a: "FieldPulse's Pro plan starts around $65 per user per month at list. A five-user operator usually lands at $450 to $700 a month across the stack after payments processing, SMS add-ons and a dedicated review tool. Volt Relay is $297 a month flat.",
    },
    {
      q: "What is the difference between FieldPulse and Jobber?",
      a: "The two are close competitors in SMB field service. FieldPulse offers more flexibility on customisation and workflow design; Jobber has a larger install base and a more mature marketplace of integrations. Neither was built for solar; both leave the lead-generation and conversion half of the business for the installer to solve elsewhere.",
    },
  ],
};
