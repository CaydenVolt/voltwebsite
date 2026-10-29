import type { Comparison } from "../types";

/**
 * Volt Relay vs Jobber for US solar companies.
 *
 * Jobber is the default field-service management tool for trades under $5M.
 * It is excellent at scheduling, dispatching, invoicing and taking card
 * payments in the field. It is not a marketing system: no missed-call text
 * back out of the box, no built-in review funnel beyond basic requests, no
 * conversion website, no on-site SEO work. Most solar operators who buy
 * Jobber also end up buying three or four other tools around it.
 *
 * Pricing moves — the paragraph says "at list" and asks the reader to
 * reconfirm on jobber.com before deciding.
 */
export const JOBBER: Comparison = {
  slug: "jobber",
  competitor: {
    name: "Jobber",
    tagline: "Field-service management for trades: scheduling, dispatch, invoicing and payments",
    category: "Field service",
  },
  title: "Volt Relay vs Jobber for US solar companies",
  metaTitle: "Volt Relay vs Jobber: Which Is Right for Solar?",
  metaDescription:
    "Honest comparison of Volt Relay and Jobber for US solar: who should pick which, where each is strong, the feature matrix and real pricing with every add-on counted.",
  answer:
    "Jobber is the right pick for a solar installer whose main pain is field-crew scheduling, dispatch and invoicing with no need for marketing automation on top. Volt Relay is the right pick for a solar operator who wants the entire front half of the business, the website, missed-call text back, follow-up sequences, review funnel and on-site SEO, built in on one flat monthly fee.",
  published: "2026-10-29",
  pickVolt: [
    "You want the lead-gen and conversion side of the business solved, not just the back-office side.",
    "You have missed calls, slow follow-up or weak reviews, and you want those fixed on the day Volt goes live.",
    "You want one flat $297 a month that already covers the website, the SEO and the review funnel instead of stacking Jobber plus a review tool plus a website agency.",
    "You are a solar-only installer and want pipeline stages, scripts and sequences that already match how a solar deal moves.",
  ],
  pickOther: [
    "Your main pain is crew dispatch and route optimisation for 10+ field techs doing short, high-frequency jobs.",
    "You take a lot of same-day card payments in the field and want the Jobber Payments reader built in.",
    "You already have a working marketing engine and only need the operations side of the business tightened.",
    "You run multiple trades (solar plus roofing plus HVAC) and want one scheduling system across all of them.",
  ],
  matrix: [
    {
      group: "Lead response",
      rows: [
        {
          feature: "Missed-call text back",
          volt: "Built in, fires inside seconds of a missed call, no setup.",
          other: "Not native. Needs Jobber's SMS add-on configured with a workflow or a third-party tool like OpenPhone.",
        },
        {
          feature: "Speed-to-lead automation for new web enquiries",
          volt: "Shipped as a default sequence: text, email, call reminder.",
          other: "Jobber's work-request form confirms the request. Follow-up beyond that is manual or needs Zapier wiring.",
        },
        {
          feature: "Follow-up cadence for solar leads",
          volt: "Eight-touch solar follow-up sequence shipped and editable.",
          other: "You build it. Jobber's automations are oriented around jobs and invoices, not sales nurture.",
        },
      ],
    },
    {
      group: "Reviews and reputation",
      rows: [
        {
          feature: "Google review funnel",
          volt: "Request fires after install sign-off and routes 1 to 3 star feedback to the owner before it is posted publicly.",
          other: "Jobber can send a review-request email after a job. No native negative-review buffer; the ask is public either way.",
        },
        {
          feature: "Multi-platform reputation",
          volt: "Google primary, with the honest answer that most solar reviews happen on Google.",
          other: "Would normally be bolted on with Podium or Birdeye at $300 to $700 a month on top of Jobber.",
        },
      ],
    },
    {
      group: "Website and landing pages",
      rows: [
        {
          feature: "Conversion website included",
          volt: "The site is part of the monthly fee: one primary action, local proof, honest pricing range.",
          other: "Jobber offers a basic website (Jobber Websites) on upper tiers. Not written for solar conversion.",
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
          volt: "On-site SEO is part of the system: schema, metadata, sitemap, local pages.",
          other: "Not part of Jobber. You either hire an SEO agency or leave the site unranked.",
        },
      ],
    },
    {
      group: "CRM and pipeline",
      rows: [
        {
          feature: "Pipeline shape",
          volt: "Lead, qualified, site survey booked, designed, contract sent, signed, installed.",
          other: "Pipeline is job-centred: Request, Quote, Job, Invoice, Paid. Great for a plumber, less natural for a 90-day solar deal.",
        },
        {
          feature: "Contact storage limit",
          volt: "No contact-tier pricing. Store every lead you have ever had.",
          other: "Jobber's client count is not capped by tier, but seat count IS: the Core plan caps users and the price per user escalates.",
        },
      ],
    },
    {
      group: "Field operations",
      rows: [
        {
          feature: "Dispatch, routing and crew scheduling",
          volt: "Not Volt's strongest area. Volt covers install scheduling but is not a routing tool for 20 trucks a day.",
          other: "Jobber's core strength. GPS tracking, drag-and-drop dispatch, route optimisation on upper tiers.",
        },
        {
          feature: "In-field card payments",
          volt: "Volt accepts deposits online. Not a card-reader-in-the-truck tool.",
          other: "Jobber Payments ships with card reader support, saved cards, auto-pay, Instant Payouts on upper tiers.",
        },
      ],
    },
    {
      group: "Pricing model",
      rows: [
        {
          feature: "Fee structure",
          volt: "One flat $297 a month. No per-user charge. No per-contact charge.",
          other: "Tiered (Core / Connect / Grow) with a user cap on each tier. The useful tier for most solar installers is Connect or Grow.",
        },
      ],
    },
  ],
  pricing: {
    volt: "$297 a month, flat. No setup fee, no per-user charge, no per-contact tier. Cancel any time.",
    other:
      "Jobber's list pricing starts at about $29 a month for a single user on Lite, around $169 a month for Connect, and about $349 a month for Grow (five users, more on request). Add Jobber Payments processing (card fees), the SMS add-on, and a review tool like Podium or Birdeye at $300 to $700 a month, and most solar operators end up at $800 to $1,200 a month across the stack.",
    note: "Jobber publishes current pricing on getjobber.com/pricing. Confirm the live number before deciding.",
  },
  solarFit:
    "A solar installer's week has two halves. The front half is enquiries, speed-to-lead, follow-up with the people who went quiet, and reviews from the install that just signed off. The back half is scheduling the install, running the crew that day, invoicing and taking the deposit. Jobber solves the back half very well. Volt Relay solves the front half very well. The honest answer for a lot of growing solar operators is that one tool is doing both halves badly: Jobber installers are losing the leads before the job ever reaches the schedule, and the problem shows up as 'we don't have enough jobs' when the real problem is a missed-call text back that never got built.",
  verdict:
    "Jobber is the right pick for a solar company whose booked work is strong and whose weakness is on the operations side: crew dispatch, scheduling and payments. For a solar operator who is losing leads at the top of the funnel, missing calls, not following up, not generating reviews, or whose website converts at 1%, Volt Relay is the shorter path to more booked surveys. Many installers end up running Volt for the front half and Jobber for the back half rather than making one tool stretch to cover both.",
  faq: [
    {
      q: "Is Jobber good for solar companies?",
      a: "Jobber is excellent for the operations side of a solar installer: scheduling the install day, dispatching the crew, invoicing the customer and taking payment. It is weak on the marketing side: no built-in missed-call text back, no native review funnel beyond basic requests, no conversion-focused website and no on-site SEO. Most solar operators who use Jobber long-term also pay for a review tool, an SMS tool and a website separately.",
    },
    {
      q: "Can Volt Relay replace Jobber for a solar company?",
      a: "Yes for most sub-$10M solar installers. Volt handles the website, the lead response, the follow-up sequences, the review funnel and the pipeline on one monthly fee. For an installer running more than ten field crews a day with heavy routing requirements, Jobber's dispatch and route-optimisation tools are stronger than Volt's. Many solar operators run Volt for the lead-to-signed deal half and keep Jobber for the install-day half.",
    },
    {
      q: "What does Jobber actually cost once a solar company adds the pieces that matter?",
      a: "Jobber's Grow plan starts around $349 a month at list for five users. Add Jobber Payments processing fees, the SMS add-on, a dedicated review tool like Podium or Birdeye ($300 to $700 a month), and a website built elsewhere, and most solar operators end up at $800 to $1,200 a month across the stack. Volt Relay bundles the lead response, website, reviews and SEO into one $297 a month fee.",
    },
    {
      q: "How long does Jobber take to set up for a solar company?",
      a: "Jobber's base configuration (pipeline, services, team) can be live in a few days. Reshaping the pipeline for a solar sales cycle (lead to site survey to design to contract to install) is extra work. Wiring the missing marketing pieces (text back, review funnel, website, SEO) is weeks to months of agency time on top. Volt ships with all of that already built for US solar.",
    },
    {
      q: "Does Volt Relay integrate with Jobber?",
      a: "Volt Relay does not currently push data to Jobber. Solar installers who want to run both can hand off a signed deal from Volt to Jobber manually or via a Zapier bridge. In practice most installers who move to Volt replace Jobber for the sales-and-marketing side; a few keep Jobber for crew dispatch on the operations side.",
    },
  ],
};
