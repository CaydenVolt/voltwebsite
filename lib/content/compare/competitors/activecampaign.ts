import type { Comparison } from "../types";

/**
 * Volt Relay vs ActiveCampaign for US solar companies.
 *
 * ActiveCampaign is marketing automation and email-first CRM. Strong at
 * sequences, segmentation and automation design. Weak at the specific jobs
 * a solar operator needs: no missed-call text back for inbound phone, no
 * review funnel, no conversion website, no on-site SEO, no solar-shaped
 * pipeline.
 */
export const ACTIVECAMPAIGN: Comparison = {
  slug: "activecampaign",
  competitor: {
    name: "ActiveCampaign",
    tagline: "Marketing automation and email-first CRM, popular with small businesses across industries",
    category: "Generic CRM",
  },
  title: "Volt Relay vs ActiveCampaign for US solar companies",
  metaTitle: "Volt Relay vs ActiveCampaign: Which Is Right for Solar?",
  metaDescription:
    "Honest comparison of Volt Relay and ActiveCampaign for US solar: who should pick which, the feature matrix, the real pricing and the solar-specific fit.",
  answer:
    "ActiveCampaign is the right pick for a solar operator whose main problem is email nurture at scale (thousands of leads to segment and sequence) and who will handle website, reviews and SMS elsewhere. Volt Relay is the right pick for an installer who wants the complete sales and marketing system built in, with the follow-up sequences already solar-shaped on a flat monthly fee.",
  published: "2026-10-31",
  pickVolt: [
    "You want more than email automation: a website, missed-call text back, review funnel, SMS follow-up and SEO.",
    "You want solar-shaped sequences out of the box, not blank automation canvases you have to design.",
    "You want one flat $297 a month instead of per-contact ActiveCampaign licensing that scales with database size.",
    "Your sales motion includes phone calls and inbound text, not just email.",
  ],
  pickOther: [
    "Your main sales motion is email nurture and you have thousands of contacts to segment at depth.",
    "You already have a working website, pipeline and review flow and the one piece missing is marketing automation.",
    "You need extensive A/B testing of email content and multi-step automation branches.",
    "You run multiple services beyond solar and want a horizontal automation tool.",
  ],
  matrix: [
    {
      group: "Lead response",
      rows: [
        { feature: "Missed-call text back", volt: "Built in. Fires inside seconds.", other: "Not native. Needs a Twilio or similar integration configured." },
        { feature: "Speed-to-lead automation", volt: "Default solar sequence shipped.", other: "Fully configurable. Strong on email, weaker on SMS and voice." },
        { feature: "Follow-up for solar leads", volt: "Eight-touch solar sequence shipped.", other: "You build it. ActiveCampaign's templates are generic nurture." },
      ],
    },
    {
      group: "Reviews and reputation",
      rows: [
        { feature: "Google review funnel", volt: "Built in, routes 1 to 3 star feedback to the owner first.", other: "Not a native feature. Needs a third-party review tool." },
      ],
    },
    {
      group: "Website and landing pages",
      rows: [
        { feature: "Conversion website included", volt: "Part of the monthly fee.", other: "ActiveCampaign Pages is a basic landing-page builder; not a full conversion website." },
      ],
    },
    {
      group: "On-site SEO",
      rows: [
        { feature: "SEO included in the fee", volt: "Schema, metadata, sitemap, local pages.", other: "Not ActiveCampaign's scope." },
      ],
    },
    {
      group: "CRM and pipeline",
      rows: [
        { feature: "Pipeline shape", volt: "Lead, qualified, site survey booked, designed, contract sent, signed, installed.", other: "ActiveCampaign CRM is a basic pipeline; configurable but not solar-shaped." },
      ],
    },
    {
      group: "Pricing model",
      rows: [
        { feature: "Fee structure", volt: "One flat $297 a month, no per-user charge, no per-contact charge.", other: "Priced by contact-count band and feature tier (Starter, Plus, Pro, Enterprise). Scales with database size." },
      ],
    },
  ],
  pricing: {
    volt: "$297 a month, flat. No setup fee, no per-user charge, no per-contact tier. Cancel any time.",
    other: "ActiveCampaign is priced by contact count. For 2,500 contacts, Starter is around $15 a month, Plus around $70 a month, Pro around $160 a month at list. For 10,000 contacts, pricing scales to $130 / $190 / $390 a month across the same tiers. The Plus tier is the lowest useful tier for most solar operators (adds CRM and automations).",
    note: "ActiveCampaign publishes current pricing on activecampaign.com. Confirm live tiers and contact bands before deciding.",
  },
  solarFit:
    "ActiveCampaign is a legitimate marketing-automation tool, strongest in email-first B2B and SaaS motions. For a solar operator the sales motion is quite different: inbound phone calls, local search, in-home sales appointments, review-driven trust. ActiveCampaign can be configured to support those but is not shaped for them. Volt ships with solar-shaped sequences, missed-call text back, review funnel and conversion website because every account on the system is a US solar operator doing the same job.",
  verdict:
    "ActiveCampaign is the right pick for a solar operator whose single bottleneck is email nurture depth at thousands of contacts. For almost every other installer, Volt Relay delivers the solar-shaped sequences, missed-call text back, review funnel and conversion website on one flat monthly fee, which usually clears the bar for 90% of the automation a solar business actually needs.",
  faq: [
    {
      q: "Is ActiveCampaign good for solar companies?",
      a: "ActiveCampaign is strong at email nurture and marketing automation across industries. It is weaker as a standalone system for a solar installer because the pipeline, missed-call text back, review funnel, conversion website and on-site SEO are either basic, missing or need to be stitched together from other tools.",
    },
    {
      q: "Can Volt Relay replace ActiveCampaign for a solar company?",
      a: "Yes for most sub-$10M solar installers. Volt handles the follow-up sequences alongside the website, lead response, reviews and pipeline on one monthly fee. The place ActiveCampaign is genuinely deeper is complex email nurture with heavy segmentation and A/B testing, which most residential solar operators do not run.",
    },
    {
      q: "What does ActiveCampaign actually cost for a solar company?",
      a: "ActiveCampaign is priced by contact count. For 2,500 contacts on the Plus tier (the lowest useful tier for solar), monthly cost is around $70 at list; for 10,000 contacts, around $190. Add a website, review tool and SMS integration, and most solar operators land at $300 to $500+ a month across the stack. Volt Relay is $297 a month flat.",
    },
    {
      q: "What is the difference between ActiveCampaign and HubSpot?",
      a: "ActiveCampaign is cheaper and leaner, strongest on email automation. HubSpot is broader (CRM, service, CMS, operations) and has a free tier. Both are generic marketing-automation tools that need configuration to fit a solar sales motion. Neither ships with solar-shaped sequences, missed-call text back or a review funnel.",
    },
  ],
};
