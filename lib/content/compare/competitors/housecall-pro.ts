import type { Comparison } from "../types";

/**
 * Volt Relay vs Housecall Pro for US solar companies.
 *
 * Housecall Pro sits right next to Jobber in the market: SMB field-service
 * management for home-service trades. It is slightly stronger than Jobber on
 * basic marketing (postcards, email, review requests) and slightly weaker on
 * routing. Same core gap for solar operators though: it is a jobs-and-crews
 * platform, not a lead-generation and conversion system.
 */
export const HOUSECALL_PRO: Comparison = {
  slug: "housecall-pro",
  competitor: {
    name: "Housecall Pro",
    tagline: "Field-service management for home-services trades: scheduling, dispatch and payments",
    category: "Field service",
  },
  title: "Volt Relay vs Housecall Pro for US solar companies",
  metaTitle: "Volt Relay vs Housecall Pro: Which Is Right for Solar?",
  metaDescription:
    "An honest comparison of Volt Relay and Housecall Pro for US solar: who should pick which, the feature matrix, the real pricing with every add-on counted, and the solar fit.",
  answer:
    "Housecall Pro is the right pick for a solar installer whose first pain is scheduling the install day, dispatching the crew and taking card payments in the field. Volt Relay is the right pick for a solar operator whose first pain is answering enquiries fast, following up with the people who went quiet, generating reviews, and running a website that actually converts, on one flat monthly fee.",
  published: "2026-10-29",
  pickVolt: [
    "You are losing leads at the top of the funnel, not at the install stage.",
    "You want a conversion-focused solar website and the SEO behind it included in the fee.",
    "You want a review funnel that routes negative feedback to the owner before it is posted publicly, built in.",
    "You want one flat $297 a month instead of stacking Housecall Pro, an SMS tool, a review tool and a website agency.",
  ],
  pickOther: [
    "You dispatch five or more field crews a day and need the routing, GPS tracking and in-app chat.",
    "You take a high volume of same-day card payments in the field and want the Housecall Pro card reader.",
    "You already have a working marketing engine (website that converts, reviews flowing, follow-up automated) and only need the operations stack.",
    "You offer multiple services beyond solar (roofing, HVAC, electrical) and want one scheduling system across them all.",
  ],
  matrix: [
    {
      group: "Lead response",
      rows: [
        {
          feature: "Missed-call text back",
          volt: "Built in. Fires inside seconds of a missed call, no configuration.",
          other: "Available via the Housecall Pro Pipeline add-on or a third-party SMS tool, usually at extra cost.",
        },
        {
          feature: "Speed-to-lead automation",
          volt: "Shipped as a default sequence for new solar enquiries: text, email, call reminder.",
          other: "Housecall Pro supports basic email automation. SMS follow-up is thinner and needs the Marketing add-on.",
        },
        {
          feature: "Follow-up cadence for solar leads",
          volt: "Eight-touch solar-shaped follow-up sequence shipped, editable.",
          other: "You build it. The native templates are generic home-services (reminders, invoices, review asks).",
        },
      ],
    },
    {
      group: "Reviews and reputation",
      rows: [
        {
          feature: "Google review funnel",
          volt: "Request fires after install sign-off, routes 1 to 3 star feedback to the owner first.",
          other: "Housecall Pro sends review requests after a job. No native internal buffer for negative feedback.",
        },
        {
          feature: "Reputation management across platforms",
          volt: "Focused on Google (where most solar reviews happen) rather than scattering effort across sites.",
          other: "Housecall Pro Marketing covers Google. Multi-site monitoring usually needs Birdeye or Podium on top.",
        },
      ],
    },
    {
      group: "Website and landing pages",
      rows: [
        {
          feature: "Conversion website included",
          volt: "The site is part of the monthly fee, written for solar conversion.",
          other: "Housecall Pro offers a basic website builder in the Marketing add-on. Not written for solar.",
        },
        {
          feature: "Solar-specific page templates",
          volt: "Pages ship with solar-shaped headlines, forms, trust strip and FAQ.",
          other: "Templates are generic home-services. Solar-specific messaging is on the installer to write.",
        },
      ],
    },
    {
      group: "On-site SEO",
      rows: [
        {
          feature: "SEO included in the fee",
          volt: "Schema, metadata, sitemap and local-page templates are part of the system.",
          other: "Not part of Housecall Pro. SEO is a separate agency engagement or left undone.",
        },
      ],
    },
    {
      group: "CRM and pipeline",
      rows: [
        {
          feature: "Pipeline shape",
          volt: "Lead, qualified, site survey booked, designed, contract sent, signed, installed.",
          other: "Jobs-and-estimates centred. Workable for solar but is reshaped for a 90-day sales cycle, not out of the box.",
        },
        {
          feature: "Contact and client limits",
          volt: "No contact tier. Store every lead you have ever had.",
          other: "Housecall Pro is per-user. Price per user climbs on upper tiers and the useful features are gated above the Basic plan.",
        },
      ],
    },
    {
      group: "Field operations",
      rows: [
        {
          feature: "Dispatch, routing and crew scheduling",
          volt: "Volt handles install scheduling. It is not a route-optimisation tool for ten trucks a day.",
          other: "Housecall Pro's core strength. GPS tracking, drag-and-drop dispatch, time tracking and in-app chat.",
        },
        {
          feature: "In-field card payments",
          volt: "Volt accepts deposits online. Not a card-reader-in-the-truck tool.",
          other: "Housecall Pro Payments ships with a card reader, saved cards, financing and consumer financing (Wisetack).",
        },
      ],
    },
    {
      group: "Pricing model",
      rows: [
        {
          feature: "Fee structure",
          volt: "One flat $297 a month. No per-user charge. No per-contact charge.",
          other: "Tiered (Basic / Essentials / Max) with a user cap on each tier. Marketing add-on and consumer financing priced separately.",
        },
      ],
    },
  ],
  pricing: {
    volt: "$297 a month, flat. No setup fee, no per-user charge, no per-contact tier. Cancel any time.",
    other:
      "Housecall Pro's Basic plan starts at about $69 a month for one user at list, Essentials around $149 a month for up to five users, and Max is custom. Add the Marketing add-on (website, email, review), payments processing, and a dedicated review tool if the native one is thin, and most solar operators end up at $600 to $1,000 a month across the stack.",
    note: "Housecall Pro's current pricing is published on housecallpro.com/pricing. Confirm before deciding.",
  },
  solarFit:
    "Housecall Pro was built for the HVAC, plumbing, electrical and cleaning trades: short-cycle, one-visit, in-and-out jobs with a card payment at the end. A solar deal is nothing like that. It is a 60 to 120 day cycle with a site survey, a design, a contract, a utility interconnection and an install day that is scheduled weeks ahead. Housecall Pro can be reshaped to run it, but it is reshaping. Volt Relay is written around how solar actually sells: the lead comes in, the first text goes out inside seconds, the follow-up sequence runs for 90 days if it has to, and the review funnel fires when the install is signed off, not when a one-visit job is done.",
  verdict:
    "Housecall Pro is the right pick for a solar company whose booked work is strong and whose weakness is on the operations side: crew dispatch, scheduling, in-field payments. For an installer whose weakness is at the top of the funnel, slow lead response, inconsistent follow-up, a website that doesn't convert, no review flow, Volt Relay is the shorter path to more booked surveys and costs less in total than Housecall Pro plus the marketing add-ons stacked on top of it.",
  faq: [
    {
      q: "Is Housecall Pro good for solar companies?",
      a: "Housecall Pro is strong on the operations side of a solar install (scheduling, dispatch, invoicing, payments) and weak on the sales-and-marketing side (lead response, follow-up, reviews, conversion website, SEO). It was built around short-cycle one-visit home-services jobs rather than the 60 to 120 day sales cycle a solar deal actually has, which means the pipeline needs to be reshaped and the marketing pieces are either add-ons or missing.",
    },
    {
      q: "Can Volt Relay replace Housecall Pro for a solar company?",
      a: "Yes for most sub-$10M solar installers. Volt handles the lead response, follow-up, reviews, website, SEO and pipeline on one monthly fee. The place where Housecall Pro is genuinely stronger is multi-crew dispatch, route optimisation and in-field card payments. Many solar operators run Volt for the lead-to-signed-deal half of the business and keep Housecall Pro only for the install-day half.",
    },
    {
      q: "What does Housecall Pro actually cost for a solar company?",
      a: "Housecall Pro's Essentials plan is around $149 a month for five users. Add the Marketing add-on (website, email, review requests), payments processing, and usually a dedicated review tool like Podium or Birdeye, and most solar operators end up at $600 to $1,000 a month across the stack. Volt Relay bundles the website, lead response, reviews and SEO into $297 a month.",
    },
    {
      q: "What is the difference between Housecall Pro and Jobber?",
      a: "The two are the closest competitors in SMB field service. Jobber is slightly stronger on route optimisation and dispatch for multi-crew operations. Housecall Pro is slightly stronger on marketing basics (email, postcards, consumer financing). Neither was built for solar. Both leave the lead-generation and conversion half of the business for the installer to solve elsewhere, which is where Volt Relay fits in.",
    },
    {
      q: "Does Volt Relay integrate with Housecall Pro?",
      a: "Volt Relay does not currently push data to Housecall Pro. A solar installer running both would hand off a signed deal from Volt to Housecall Pro manually or via a Zapier bridge. In practice most installers who move to Volt replace Housecall Pro's marketing add-ons and keep the base plan only for operations, or replace it entirely once Volt has proven itself on the sales side.",
    },
  ],
};
