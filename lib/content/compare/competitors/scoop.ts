import type { Comparison } from "../types";

/**
 * Volt Relay vs Scoop Solar for US solar companies.
 *
 * Scoop (Scoop Solar) is a workflow-and-forms platform built for solar
 * operators and other field-heavy renewable businesses. It is strong at the
 * repeat ops side: site surveys, install day forms, QA checklists, as-built
 * documentation. It is thin on the sales-and-marketing side.
 */
export const SCOOP: Comparison = {
  slug: "scoop",
  competitor: {
    name: "Scoop Solar",
    tagline: "Solar operations and workflow platform for installers: site surveys, install forms and QA",
    category: "Solar-specific",
  },
  title: "Volt Relay vs Scoop Solar for US solar companies",
  metaTitle: "Volt Relay vs Scoop Solar: Which Is Right?",
  metaDescription:
    "An honest comparison of Volt Relay and Scoop Solar for US solar companies: who should pick which, the feature matrix, the real pricing and the solar-specific fit.",
  answer:
    "Scoop Solar is the right pick for a solar installer whose main pain is paperwork on the install side: site surveys, install forms, QA checklists and as-built documentation across a growing field team. Volt Relay is the right pick for an installer whose main pain is lead response, follow-up, reviews and a conversion website, built in on one flat monthly fee.",
  published: "2026-10-29",
  pickVolt: [
    "Your bottleneck is enquiries, follow-up, reviews and website conversion.",
    "You want one flat $297 a month that already covers the website, SEO and review funnel.",
    "Your install volume is not yet large enough to justify a dedicated field-forms and QA workflow platform.",
    "You want a solar-specific sales pipeline, not just solar-specific field forms.",
  ],
  pickOther: [
    "You run a growing install team and your main pain is standardising site surveys, QA and as-builts across crews.",
    "You already have a working lead-gen engine and are losing time on paperwork, not deals.",
    "You need field-mobile forms the crew fills in at the house, with photos, GPS and signature capture.",
    "You handle solar, battery storage and EV charger installs across the same field team and need one forms platform across all three.",
  ],
  matrix: [
    {
      group: "Lead response",
      rows: [
        {
          feature: "Missed-call text back",
          volt: "Built in. Fires inside seconds of a missed call.",
          other: "Not a Scoop focus. Scoop starts once a lead is a booked job or site survey.",
        },
        {
          feature: "Speed-to-lead automation",
          volt: "Default solar sequence shipped out of the box.",
          other: "Not Scoop's area. Scoop runs ops, not top-of-funnel marketing.",
        },
        {
          feature: "Follow-up for cold or stalled leads",
          volt: "Eight-touch solar sequence, editable.",
          other: "Not in scope.",
        },
      ],
    },
    {
      group: "Reviews and reputation",
      rows: [
        {
          feature: "Google review funnel",
          volt: "Request fires after install sign-off, routes 1 to 3 star feedback to the owner first.",
          other: "Not a native feature of Scoop.",
        },
      ],
    },
    {
      group: "Website and landing pages",
      rows: [
        {
          feature: "Conversion website included",
          volt: "Part of the monthly fee, written for solar conversion.",
          other: "Not part of Scoop. The installer brings their own website.",
        },
        {
          feature: "On-site SEO included",
          volt: "Schema, metadata, sitemap, local pages are in the system.",
          other: "Not part of Scoop.",
        },
      ],
    },
    {
      group: "Field operations and forms",
      rows: [
        {
          feature: "Site-survey mobile forms",
          volt: "Volt supports forms. It is not purpose-built for field crews filling long structured surveys with photos.",
          other: "Scoop's core strength. Mobile-first forms with photo, GPS, signature capture; built for site surveys and install forms.",
        },
        {
          feature: "QA and as-built documentation",
          volt: "Not a Volt capability.",
          other: "Scoop supports structured QA checklists and as-built packets, tied to the install record.",
        },
        {
          feature: "Workflow automation across job stages",
          volt: "Pipeline-level automation. Not field-form branching.",
          other: "Scoop supports branched workflows (if X then Y) across job stages, built for ops owners.",
        },
      ],
    },
    {
      group: "CRM and pipeline",
      rows: [
        {
          feature: "Pipeline shape",
          volt: "Lead, qualified, site survey booked, designed, contract sent, signed, installed.",
          other: "Scoop is ops-centric. CRM-style pipeline exists but is not where the tool is strongest.",
        },
      ],
    },
    {
      group: "Pricing model",
      rows: [
        {
          feature: "Fee structure",
          volt: "One flat $297 a month, no per-user charge.",
          other: "Per-user, custom-quoted. Pricing scales with field-crew count and modules enabled.",
        },
      ],
    },
  ],
  pricing: {
    volt: "$297 a month, flat. No setup fee, no per-user charge, no per-contact tier. Cancel any time.",
    other:
      "Scoop Solar does not publish list pricing. In practice it is per-user and custom-quoted, usually $50 to $100+ per user per month at the standard tier, with setup and onboarding billed separately. The honest sweet spot is a solar installer with a growing field team: eight crews or more.",
    note: "Scoop quotes are custom. Ask for a per-user figure, every integration fee and the onboarding scope before deciding.",
  },
  solarFit:
    "Scoop Solar and Volt Relay sit at opposite ends of the solar operator's day. Scoop is the field crew's phone at the site survey: photos uploaded, roof measurements captured, structured QA at install. Volt Relay is the office's inbox and phone from the first enquiry to the signed contract: text back inside seconds, follow-up sequence running, review funnel firing after install sign-off, website pulling in the next lead. A solar operator who is still trying to generate reliable leads will get more out of Volt first; one who already has the leads flowing but is losing time on paperwork and inconsistent crew work will get more out of Scoop first.",
  verdict:
    "Scoop Solar is the right pick for a mid-size solar installer whose main pain is field-forms chaos: inconsistent site surveys, QA gaps, as-builts assembled at the end of the week by hand. Volt Relay is the right pick for an installer whose main pain is at the front of the business: slow lead response, inconsistent follow-up, no review flow, a website that does not convert. For a growing installer who hits both problems, Volt first (because leads pay for Scoop), Scoop second (once the volume justifies the forms platform).",
  faq: [
    {
      q: "Is Scoop Solar good for solar companies?",
      a: "Scoop Solar is built for solar operations: site surveys, install day forms, QA checklists, as-built packets. It is strong at standardising how the field crew captures information and weak at the top of the funnel (lead response, follow-up, reviews, conversion website).",
    },
    {
      q: "Can Volt Relay replace Scoop Solar for a solar company?",
      a: "Not for field-forms and QA workflow. Scoop's mobile-first forms, photo capture and branched workflows are deeper than Volt's. Volt replaces the lead response and conversion side of the business that Scoop does not touch. Growing installers often run both: Volt in the office, Scoop in the field.",
    },
    {
      q: "What does Scoop Solar actually cost for a solar company?",
      a: "Scoop does not publish list pricing. In practice it is per-user and custom-quoted, usually $50 to $100+ per user per month at the standard tier with onboarding billed separately. Volt Relay is $297 a month flat, no per-user charge.",
    },
    {
      q: "Can Volt Relay and Scoop Solar be used together?",
      a: "Yes. The common pattern is Volt handling the lead-to-signed-deal half of the business, then handing the install off to Scoop for site-survey forms, QA and as-built documentation. The two tools do not overlap, so running both is additive rather than duplicating cost.",
    },
    {
      q: "Does Volt Relay integrate with Scoop Solar directly?",
      a: "Volt Relay does not currently push data to Scoop via a native integration. Installers running both move signed deals across via Zapier or a manual hand-off at the install-scheduled stage.",
    },
  ],
};
