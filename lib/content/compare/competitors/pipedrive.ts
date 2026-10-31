import type { Comparison } from "../types";

/**
 * Volt Relay vs Pipedrive for US solar companies.
 *
 * Pipedrive is lightweight sales-focused CRM. Easy to use, cheap per user,
 * visual pipeline. The gap for solar is the usual gap: no missed-call text
 * back, no review funnel, no conversion website, no on-site SEO. Also
 * missing: anything on the install-and-reviews side of the customer
 * lifecycle, which Pipedrive leaves at the signed-contract stage.
 */
export const PIPEDRIVE: Comparison = {
  slug: "pipedrive",
  competitor: {
    name: "Pipedrive",
    tagline: "Lightweight sales-focused CRM with a visual pipeline, popular with small sales teams",
    category: "Generic CRM",
  },
  title: "Volt Relay vs Pipedrive for US solar companies",
  metaTitle: "Volt Relay vs Pipedrive: Which Is Right for Solar?",
  metaDescription:
    "Honest comparison of Volt Relay and Pipedrive for US solar: who should pick which, the feature matrix, the real pricing and the solar-specific fit.",
  answer:
    "Pipedrive is the right pick for a small solar sales team that wants a lightweight visual pipeline and will handle website, reviews, SEO and follow-up elsewhere. Volt Relay is the right pick for a solar operator who wants the complete sales and marketing system (pipeline plus website plus text-back plus follow-up plus reviews plus SEO) built in on one flat monthly fee.",
  published: "2026-10-31",
  pickVolt: [
    "You want more than a pipeline: a conversion website, missed-call text back, follow-up sequences, review funnel and SEO.",
    "You want one flat $297 a month instead of per-user Pipedrive licensing plus the add-ons you will need.",
    "You are a solar operator and want pipeline stages, scripts and sequences that already match how a solar deal moves.",
    "You do not want to stitch Pipedrive together with a website agency, a review tool and an SMS tool.",
  ],
  pickOther: [
    "You have a small sales team (two to five reps) and want the simplest visual pipeline on the market.",
    "You already have a working website, review flow and follow-up stack and the one piece missing is a sales CRM.",
    "You want deep customisation on sales activities (calls, emails, deals) at a low per-user price point.",
    "You run multiple services beyond solar and want a horizontal sales tool.",
  ],
  matrix: [
    {
      group: "Lead response",
      rows: [
        { feature: "Missed-call text back", volt: "Built in. Fires inside seconds.", other: "Not native. Needs a third-party SMS integration configured." },
        { feature: "Speed-to-lead automation", volt: "Default solar sequence shipped.", other: "Pipedrive Workflow Automation handles basic sequences; needs configuration." },
        { feature: "Follow-up for solar leads", volt: "Eight-touch solar sequence shipped.", other: "You build it. Pipedrive's email templates are generic sales." },
      ],
    },
    {
      group: "Reviews and reputation",
      rows: [
        { feature: "Google review funnel", volt: "Built in, routes 1 to 3 star feedback to the owner first.", other: "Not a Pipedrive feature. Needs a third-party review tool." },
      ],
    },
    {
      group: "Website and landing pages",
      rows: [
        { feature: "Conversion website included", volt: "Part of the monthly fee.", other: "Pipedrive has a basic LeadBooster chat/web form add-on. Not a conversion website." },
      ],
    },
    {
      group: "On-site SEO",
      rows: [
        { feature: "SEO included in the fee", volt: "Schema, metadata, sitemap, local pages.", other: "Not part of Pipedrive." },
      ],
    },
    {
      group: "CRM and pipeline",
      rows: [
        { feature: "Pipeline shape", volt: "Lead, qualified, site survey booked, designed, contract sent, signed, installed.", other: "Fully configurable visual pipeline. Default is generic sales; solar stages are built by the admin." },
        { feature: "Post-sale lifecycle (install, reviews)", volt: "Volt tracks the install and fires the review funnel on sign-off.", other: "Pipedrive is sales-focused. Post-sale lifecycle (install tracking, review requests) lives outside the tool." },
      ],
    },
    {
      group: "Pricing model",
      rows: [
        { feature: "Fee structure", volt: "One flat $297 a month, no per-user charge.", other: "Per-user tiered: Essential $14, Advanced $29, Professional $49, Power $64, Enterprise $99 per user per month at list." },
      ],
    },
  ],
  pricing: {
    volt: "$297 a month, flat. No setup fee, no per-user charge, no per-contact tier. Cancel any time.",
    other: "Pipedrive's Essential plan is $14 per user per month at list, Professional $49, Power $64, Enterprise $99. The useful tier for most solar operators (Professional with LeadBooster, Projects and Smart Docs add-ons) usually lands at $75 to $100 per user per month. For a five-user operator, Pipedrive stacks to $400 to $500 per month before adding the website, review tool and SMS costs.",
    note: "Pipedrive publishes current pricing on pipedrive.com. Confirm live prices before deciding.",
  },
  solarFit:
    "Pipedrive is a legitimate lightweight sales CRM, well-liked by small sales teams, with a clean visual pipeline. The gap for a solar operator is that the sales pipeline is one job inside a solar installer's business. The installer still needs a website that converts, a missed-call text back on inbound calls, a review funnel after install, follow-up on the leads who went quiet, and on-site SEO so the website is found. Pipedrive does none of that; it stops at the sales pipeline and leaves the rest to other tools.",
  verdict:
    "Pipedrive is the right pick for a small solar sales team whose other pieces (website, reviews, SEO, text-back) are already working elsewhere and whose only gap is a visual sales pipeline. For almost every other installer, Volt Relay delivers the pipeline alongside everything else solar operators actually need, usually at lower total monthly cost than Pipedrive plus the marketing stack it depends on.",
  faq: [
    {
      q: "Is Pipedrive good for solar companies?",
      a: "Pipedrive is a flexible sales CRM with a strong visual pipeline, well-suited to small sales teams. It is weak as a complete system for a solar installer because it is sales-focused: no built-in missed-call text back, no review funnel, no conversion website, no on-site SEO, no install-day lifecycle. Solar operators using Pipedrive almost always pair it with four or five other tools.",
    },
    {
      q: "Can Volt Relay replace Pipedrive for a solar company?",
      a: "Yes for most sub-$10M solar installers. Volt handles the sales pipeline alongside the website, lead response, follow-up, reviews and SEO on one monthly fee. The place Pipedrive is genuinely stronger is deep customisation of sales activities for a sales-only workflow; most solar operators do not need that depth once the end-to-end system is in one place.",
    },
    {
      q: "What does Pipedrive actually cost for a solar company?",
      a: "Pipedrive Professional with the useful add-ons (LeadBooster, Projects, Smart Docs) is around $75 to $100 per user per month at list. A five-user solar operator usually lands at $400 to $500 per month in Pipedrive licensing, plus the website, review tool and SMS costs separately. Volt Relay is $297 a month flat with those pieces included.",
    },
    {
      q: "What is the difference between Pipedrive and HubSpot?",
      a: "Pipedrive is sales-only and lighter-weight; HubSpot is a broader marketing-plus-sales suite with a free CRM tier. Pipedrive is simpler and cheaper per user; HubSpot has more features and a steeper price curve. Neither ships with solar-shaped sequences, missed-call text back or a review funnel out of the box.",
    },
  ],
};
