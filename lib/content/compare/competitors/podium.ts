import type { Comparison } from "../types";

/**
 * Volt Relay vs Podium for US solar companies.
 *
 * Podium is a reviews-and-messaging platform. It is strong at what it does
 * (text-first customer messaging, review generation) and narrow in scope: it
 * is not a CRM, not a website, not a pipeline. Many solar installers buy
 * Podium as the one piece of marketing software they own, which under-serves
 * every other job.
 */
export const PODIUM: Comparison = {
  slug: "podium",
  competitor: {
    name: "Podium",
    tagline: "Reviews, text-first customer messaging and webchat for local businesses",
    category: "Reputation",
  },
  title: "Volt Relay vs Podium for US solar companies",
  metaTitle: "Volt Relay vs Podium: Which Is Right for Solar?",
  metaDescription:
    "An honest comparison of Volt Relay and Podium for US solar companies: who should pick which, the feature matrix, the real pricing and the solar-specific fit.",
  answer:
    "Podium is the right pick for a solar operator whose single biggest pain is review generation and inbound text messaging and who already has every other system (CRM, website, follow-up) working. Volt Relay is the right pick for an installer who needs those things built in on one monthly fee rather than buying a $500 messaging tool and leaving the rest unsolved.",
  published: "2026-10-29",
  pickVolt: [
    "You need more than a review tool: pipeline, follow-up, a conversion website and SEO.",
    "You want one flat $297 a month instead of paying $400 to $700 a month for messaging alone.",
    "You are a solar operator and want a review funnel tuned to post-install sign-off, not a generic messaging platform.",
    "You want missed-call text back, follow-up sequences and the review funnel in one system rather than three.",
  ],
  pickOther: [
    "You already have a working CRM, website and follow-up stack and the one piece missing is text-first customer messaging and review generation.",
    "You need Podium's webchat on an existing website that already converts.",
    "You run multiple services beyond solar and want one messaging layer across all of them.",
    "You take payments via text (Podium Payments) and that is a central part of how you bill.",
  ],
  matrix: [
    {
      group: "Lead response",
      rows: [
        {
          feature: "Missed-call text back",
          volt: "Built in. Fires inside seconds.",
          other: "Podium offers this and it is a strong feature of the product.",
        },
        {
          feature: "Speed-to-lead sequences",
          volt: "Default solar follow-up sequence shipped.",
          other: "Podium Automations can be configured for first-touch SMS. Not a full nurture engine.",
        },
        {
          feature: "Follow-up for cold or stalled leads",
          volt: "Eight-touch solar sequence shipped, editable.",
          other: "Light. Podium is a messaging tool, not a sales nurture platform.",
        },
      ],
    },
    {
      group: "Reviews and reputation",
      rows: [
        {
          feature: "Google review funnel",
          volt: "Built in, fires after install sign-off, routes 1 to 3 star feedback to the owner first.",
          other: "Podium's core strength. Review request campaigns, multi-site tracking and response templates.",
        },
        {
          feature: "Multi-platform reputation monitoring",
          volt: "Google-focused.",
          other: "Podium monitors Google, Facebook, Yelp and many niche platforms in one feed.",
        },
      ],
    },
    {
      group: "Website and landing pages",
      rows: [
        {
          feature: "Conversion website included",
          volt: "Part of the monthly fee, solar-shaped.",
          other: "Not part of Podium. Podium Webchat lives on an existing site but does not build the site.",
        },
        {
          feature: "On-site SEO",
          volt: "Schema, metadata, sitemap, local pages.",
          other: "Not Podium's scope.",
        },
      ],
    },
    {
      group: "CRM and pipeline",
      rows: [
        {
          feature: "Solar sales pipeline",
          volt: "Lead, qualified, site survey booked, designed, contract sent, signed, installed.",
          other: "Podium has basic contact and conversation views; not a sales pipeline.",
        },
      ],
    },
    {
      group: "Messaging and payments",
      rows: [
        {
          feature: "Two-way text messaging",
          volt: "Built in. Volt handles solar lead-to-install conversation.",
          other: "Podium's core strength. Shared inbox across the team, templates, auto-replies.",
        },
        {
          feature: "Text-to-pay",
          volt: "Volt accepts deposits online.",
          other: "Podium Payments supports pay-by-text and sits inside the conversation thread.",
        },
      ],
    },
    {
      group: "Pricing model",
      rows: [
        {
          feature: "Fee structure",
          volt: "One flat $297 a month.",
          other: "Tiered, usually $399 a month entry at list, scaling by location and features.",
        },
      ],
    },
  ],
  pricing: {
    volt: "$297 a month, flat. No setup fee, no per-user charge, no per-location tier. Cancel any time.",
    other:
      "Podium does not publish list pricing openly. Current observed entry is around $399 a month for a single location at the Core plan, with Pro and Enterprise tiers higher. Add Podium Payments processing fees and extra locations and most solar operators land between $500 and $900 a month on Podium alone.",
    note: "Podium quotes are negotiable. Ask for a line-by-line breakdown including every tier upgrade and location fee before deciding.",
  },
  solarFit:
    "Podium does one thing well and does it in a narrow lane. The one thing is text-first customer messaging with a strong review-generation layer on top. That is useful. But it is one job inside a solar installer's business. The installer still needs a website that converts, a sales pipeline that fits a 90-day solar deal, a follow-up sequence for the leads who go cold, on-site SEO so the website is actually found, and a way to track the install from signed contract to install day. Podium does none of that. A solar operator who buys Podium as their first marketing tool buys a messaging layer, not a system.",
  verdict:
    "Podium is a strong narrow tool. It is the right pick for a solar operator who has every other piece of the stack working and whose single remaining gap is text messaging and review generation. For an installer buying their first serious marketing system, Volt Relay delivers Podium's main features (missed-call text back, review funnel, two-way text) alongside the website, SEO, follow-up sequences and pipeline that Podium does not touch, at roughly half the monthly cost.",
  faq: [
    {
      q: "Is Podium good for solar companies?",
      a: "Podium is strong at what it does: text-first customer messaging and review generation. It is weak as a standalone system for a solar installer because it does not include a CRM, a website, a sales pipeline, follow-up sequences or on-site SEO. Solar operators who buy Podium almost always buy other tools around it.",
    },
    {
      q: "Can Volt Relay replace Podium for a solar company?",
      a: "Yes for the two main jobs Podium does best, review generation and two-way text messaging. Volt includes both plus a missed-call text back, a conversion website, a sales pipeline, follow-up sequences and on-site SEO on one monthly fee. The place Podium is genuinely deeper is multi-platform review monitoring across Facebook, Yelp and niche sites; Volt focuses on Google, where most solar reviews happen.",
    },
    {
      q: "What does Podium actually cost for a solar company?",
      a: "Podium's entry Core tier starts around $399 a month at list for a single location. Pro and Enterprise tiers are higher. Add Podium Payments processing fees and additional locations and most solar operators land between $500 and $900 a month. Volt Relay is $297 a month flat.",
    },
    {
      q: "Should I use Podium and Volt Relay together?",
      a: "Usually no. The messaging and review features overlap enough that running both wastes money. The honest answer is to pick one: Volt for a solar installer who needs the full system; Podium only for an operator who has every other piece already working and specifically wants Podium's multi-platform reputation layer.",
    },
    {
      q: "Does Volt Relay integrate with Podium?",
      a: "Volt Relay does not currently push data to Podium. Solar installers moving from Podium to Volt export their contact and conversation history on the way out; the Volt side is wired up with the solar follow-up and review flows already built.",
    },
  ],
};
