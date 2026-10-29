import type { Comparison } from "../types";

/**
 * Volt Relay vs Birdeye for US solar companies.
 *
 * Birdeye is Podium's direct competitor in the reviews-and-messaging category.
 * Slightly broader (surveys, social, insights), similar narrow problem for a
 * solar installer: it is a reputation layer, not a system.
 */
export const BIRDEYE: Comparison = {
  slug: "birdeye",
  competitor: {
    name: "Birdeye",
    tagline: "Reviews, surveys, text messaging and reputation management for local businesses",
    category: "Reputation",
  },
  title: "Volt Relay vs Birdeye for US solar companies",
  metaTitle: "Volt Relay vs Birdeye: Which Is Right for Solar?",
  metaDescription:
    "An honest comparison of Volt Relay and Birdeye for US solar companies: who should pick which, the feature matrix, the real pricing and the solar-specific fit.",
  answer:
    "Birdeye is the right pick for a solar operator whose single biggest gap is multi-platform review generation and whose other systems (website, CRM, follow-up) are already working. Volt Relay is the right pick for an installer who needs the review funnel together with everything else: the website, the pipeline, the follow-up sequences and the SEO, built in on one flat monthly fee.",
  published: "2026-10-29",
  pickVolt: [
    "You need more than a review tool: a pipeline, follow-up sequences, a conversion website and SEO.",
    "You want one flat $297 a month instead of $300 to $700 a month for a reputation tool alone.",
    "Your reviews come almost entirely from Google and you do not need the breadth Birdeye monitors.",
    "You want the review funnel, text messaging and website conversion in one solar-shaped system.",
  ],
  pickOther: [
    "You already run a working CRM and website and the one gap is multi-platform review generation and monitoring.",
    "Your customers leave reviews on Facebook, Yelp, Angi, BBB and local directories as much as Google.",
    "You run multiple locations and need per-location reputation reporting at scale.",
    "You use NPS, CSAT or product surveys and want them tied to the same contact record as the reviews.",
  ],
  matrix: [
    {
      group: "Lead response",
      rows: [
        {
          feature: "Missed-call text back",
          volt: "Built in. Fires inside seconds.",
          other: "Available via Birdeye Messaging and Webchat features.",
        },
        {
          feature: "Speed-to-lead automation",
          volt: "Default solar sequence shipped: text, email, call reminder.",
          other: "Birdeye has basic automation. Not a full sales nurture engine.",
        },
        {
          feature: "Follow-up for cold or stalled leads",
          volt: "Eight-touch solar sequence shipped.",
          other: "Not Birdeye's area. The tool is reputation-first, not sales-nurture-first.",
        },
      ],
    },
    {
      group: "Reviews and reputation",
      rows: [
        {
          feature: "Google review funnel",
          volt: "Built in, fires after install sign-off, routes 1 to 3 star feedback to the owner first.",
          other: "Birdeye's core strength. Review requests, response management, benchmarking.",
        },
        {
          feature: "Multi-platform reputation monitoring",
          volt: "Google-focused.",
          other: "Birdeye monitors 200+ review sites in one feed, including Facebook, Yelp, Angi, BBB.",
        },
        {
          feature: "Surveys (NPS, CSAT, custom)",
          volt: "Volt sends simple post-install satisfaction prompts.",
          other: "Birdeye has a full survey module tied to the contact record.",
        },
      ],
    },
    {
      group: "Website and landing pages",
      rows: [
        {
          feature: "Conversion website included",
          volt: "Part of the monthly fee, written for solar conversion.",
          other: "Not part of Birdeye. Birdeye Webchat lives on an existing site; the site itself is not included.",
        },
        {
          feature: "On-site SEO",
          volt: "Schema, metadata, sitemap, local pages.",
          other: "Not Birdeye's scope.",
        },
      ],
    },
    {
      group: "CRM and pipeline",
      rows: [
        {
          feature: "Solar sales pipeline",
          volt: "Lead, qualified, site survey booked, designed, contract sent, signed, installed.",
          other: "Birdeye has basic contact views; not a sales pipeline.",
        },
      ],
    },
    {
      group: "Pricing model",
      rows: [
        {
          feature: "Fee structure",
          volt: "One flat $297 a month.",
          other: "Tiered. Standard, Professional and Premium plans; per-location pricing scales fast for multi-site operators.",
        },
      ],
    },
  ],
  pricing: {
    volt: "$297 a month, flat. No setup fee, no per-user charge, no per-location tier. Cancel any time.",
    other:
      "Birdeye does not publish list pricing openly. Current observed Standard tier is around $299 to $399 a month per location, with Professional and Premium higher and surveys, Messaging and Insights priced as modules on top. Multi-location solar operators often land between $500 and $1,200 a month.",
    note: "Birdeye quotes are negotiable. Ask for a line-by-line breakdown including every tier upgrade, every module and per-location pricing before deciding.",
  },
  solarFit:
    "Birdeye is the broadest of the dedicated reputation tools: it monitors more sites, has surveys and insights, and reports well at the multi-location level. For a solar operator, almost all of that breadth is unused. Solar reviews happen on Google. The handful on Facebook or Yelp are a rounding error on the Google count. Paying for a 200-site monitoring platform when 95% of reviews land on one site is paying for breadth that does not matter. Volt focuses the review funnel where it earns its keep (Google), and spends the rest of the fee on the pieces Birdeye does not touch: the website, the follow-up, the pipeline, the SEO.",
  verdict:
    "Birdeye is a strong tool when a solar operator genuinely needs multi-platform review monitoring, surveys and multi-location reporting. For almost every other installer, the breadth is paying for coverage of sites nobody is reviewing on. Volt Relay delivers the Google review funnel (where real solar reviews live) alongside the website, pipeline, follow-up and SEO Birdeye does not, at roughly half the monthly cost.",
  faq: [
    {
      q: "Is Birdeye good for solar companies?",
      a: "Birdeye is strong at reviews, surveys and multi-platform reputation monitoring. It is weak as a standalone system for a solar installer because it does not include a CRM, a sales pipeline, a conversion website, follow-up sequences or on-site SEO. Most solar operators who use Birdeye buy a stack of other tools around it.",
    },
    {
      q: "Can Volt Relay replace Birdeye for a solar company?",
      a: "Yes for the Google review funnel and basic text messaging that are the two features most solar installers actually use. Volt includes both plus a website, a pipeline, follow-up sequences and on-site SEO on one monthly fee. Birdeye is genuinely deeper on multi-platform monitoring across 200+ review sites; if a solar operator needs that breadth, Birdeye wins on that one dimension.",
    },
    {
      q: "What does Birdeye actually cost for a solar company?",
      a: "Birdeye's Standard tier is around $299 to $399 a month per location at list, with Professional and Premium higher and surveys, Messaging and Insights priced as modules. Multi-location solar operators often land between $500 and $1,200 a month. Volt Relay is $297 a month flat with no per-location tier.",
    },
    {
      q: "What is the difference between Birdeye and Podium?",
      a: "Podium is text-first and narrower: strong on two-way messaging, review generation and text-to-pay. Birdeye is broader: strong on multi-platform monitoring (200+ sites), surveys and multi-location reporting. For a solar operator, both tools solve the same core problem (reviews). The breadth difference rarely matters because 95% of solar reviews land on Google.",
    },
    {
      q: "Does Volt Relay integrate with Birdeye?",
      a: "Volt Relay does not currently push data to Birdeye. Solar installers moving to Volt from Birdeye export their contact and review history on the way out; the Volt side is wired up with the solar review funnel and messaging already built.",
    },
  ],
};
