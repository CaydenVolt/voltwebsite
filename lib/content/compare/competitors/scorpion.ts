import type { Comparison } from "../types";

/**
 * Volt Relay vs Scorpion for US solar companies.
 *
 * Scorpion is a full-service marketing agency built for home-services trades
 * (HVAC, plumbing, electrical, legal, dental; some solar). It is a different
 * category to a software platform: Scorpion is a people business dressed up
 * with a software layer. The honest comparison is about control, contract
 * length and recurring cost, not feature parity.
 */
export const SCORPION: Comparison = {
  slug: "scorpion",
  competitor: {
    name: "Scorpion",
    tagline: "Full-service marketing agency for home-services trades: website, SEO, ads and reviews",
    category: "Marketing agency",
  },
  title: "Volt Relay vs Scorpion for US solar companies",
  metaTitle: "Volt Relay vs Scorpion: Which Is Right for Solar?",
  metaDescription:
    "An honest comparison of Volt Relay and Scorpion for US solar companies: who should pick which, where each is strong, the real pricing and the contract terms to look for.",
  answer:
    "Scorpion is the right pick for a solar operator who wants to hand marketing to an agency and never think about it: website, SEO, Google Ads, reviews, all delivered as a managed service by a team of account managers. Volt Relay is the right pick for an installer who wants to own the system, keep the leads under their own control, and pay roughly a tenth as much per month on a flat monthly fee rather than an agency retainer.",
  published: "2026-10-29",
  pickVolt: [
    "You want to own the website, the data and the leads, and keep them if you ever change providers.",
    "You want a flat monthly fee under $300 instead of a $2,000 to $5,000 a month agency retainer.",
    "You do not want to sign a 6 to 12 month contract to try the product.",
    "You are a solar operator and want a solar-specific system, not a generic home-services agency playbook adapted to solar.",
  ],
  pickOther: [
    "You want marketing fully done for you by an account manager and a service team.",
    "You have the budget to spend $2,000 to $5,000+ a month on a marketing retainer and the patience to sign a 6 to 12 month contract.",
    "You run multiple services (solar plus roofing plus HVAC) and want one agency across all of them.",
    "You want Google Ads and paid-media management included in the retainer, not run in-house.",
  ],
  matrix: [
    {
      group: "Lead response",
      rows: [
        {
          feature: "Missed-call text back",
          volt: "Built in. Fires inside seconds.",
          other: "Available in Scorpion Connect (their platform layer), configured by the account team at onboarding.",
        },
        {
          feature: "Speed-to-lead automation",
          volt: "Default solar sequence shipped out of the box.",
          other: "Available via Scorpion Connect workflows, built by the account team as part of the engagement.",
        },
        {
          feature: "Follow-up for cold or stalled leads",
          volt: "Eight-touch solar sequence shipped, editable by you.",
          other: "Configurable via Scorpion Connect. Edits usually go through the account team rather than being self-serve.",
        },
      ],
    },
    {
      group: "Reviews and reputation",
      rows: [
        {
          feature: "Google review funnel",
          volt: "Built in. Fires after install sign-off, routes 1 to 3 star feedback to the owner first.",
          other: "Part of Scorpion Reviews. Managed by the account team.",
        },
      ],
    },
    {
      group: "Website and landing pages",
      rows: [
        {
          feature: "Conversion website included",
          volt: "Part of the monthly fee. You own the content, the data and the domain.",
          other: "Scorpion builds and hosts the website. Ownership and portability depend on the contract: ask what happens on cancellation.",
        },
        {
          feature: "Solar-specific page templates",
          volt: "Pages ship with solar-shaped headlines, forms, trust strip, FAQ.",
          other: "Scorpion builds a custom site; template patterns are home-services industry-wide and adapted to solar as needed.",
        },
      ],
    },
    {
      group: "On-site SEO",
      rows: [
        {
          feature: "SEO included in the fee",
          volt: "Schema, metadata, sitemap, local-page templates. The on-site work is already done.",
          other: "SEO is a core Scorpion service, delivered as managed work by their team.",
        },
      ],
    },
    {
      group: "Paid media",
      rows: [
        {
          feature: "Google Ads management",
          volt: "Volt supports an ads add-on at $500 a month, limited to Google Ads for installers already running leads.",
          other: "Core Scorpion offering. Full-service PPC management included in the retainer.",
        },
      ],
    },
    {
      group: "Control and ownership",
      rows: [
        {
          feature: "Who owns the website",
          volt: "You do. If Volt stops, the content, the domain and the data stay with you.",
          other: "Depends on the contract. Scorpion typically hosts the site; portability on exit is a specific negotiation.",
        },
        {
          feature: "Who owns the leads and data",
          volt: "You do, inside Volt. Full export at any time.",
          other: "Depends on the contract. Confirm export terms before signing.",
        },
        {
          feature: "Contract length",
          volt: "Monthly. Cancel any time.",
          other: "Typically 6 to 12 month contracts. Confirm cancellation terms in the quote.",
        },
      ],
    },
    {
      group: "Pricing model",
      rows: [
        {
          feature: "Fee structure",
          volt: "One flat $297 a month, no setup fee.",
          other: "Monthly retainer, custom-quoted. Typically $2,000 to $5,000+ a month plus ad spend, often with a setup fee.",
        },
      ],
    },
  ],
  pricing: {
    volt: "$297 a month, flat. No setup fee, no per-user charge, no contract. Cancel any time.",
    other:
      "Scorpion does not publish list pricing. In practice retainers for a solar installer start around $2,000 a month for a basic engagement and run $3,000 to $5,000+ a month once Google Ads management is included, plus the ad spend itself. Expect a setup fee and a 6 to 12 month contract.",
    note: "Scorpion quotes are custom. Ask explicitly about setup fee, contract length, who owns the website, who owns the data on exit, and what the monthly retainer actually covers.",
  },
  solarFit:
    "Scorpion and Volt Relay are not really the same category. Scorpion is a marketing agency with a software layer; Volt Relay is a software platform. The honest trade-off is control and cost against convenience. Scorpion runs the whole marketing engine for you and charges accordingly: typically $2,000 to $5,000 a month plus ad spend, usually on a contract. Volt gives the installer the system and the leads at a flat $297 a month with no contract. For a solar operator with the budget and the preference for a done-for-you engagement, Scorpion is a legitimate choice. For an operator who wants to own the stack and control the spend, Volt is a different proposition entirely.",
  verdict:
    "Scorpion is the right pick for a solar company that wants to hand marketing to an agency and keep it off their plate, has the budget for a $2,000 to $5,000+ a month retainer, and is comfortable signing a 6 to 12 month contract. For every other US solar operator, Volt Relay delivers the website, review funnel, follow-up sequences, pipeline and on-site SEO on a flat monthly fee under $300, with no contract and the data staying under the installer's control.",
  faq: [
    {
      q: "Is Scorpion good for solar companies?",
      a: "Scorpion is a legitimate full-service marketing agency for home-services trades, with solar operators among their clients. The platform (Scorpion Connect) is capable, and the done-for-you model works for installers with the budget and the preference. The trade-offs are cost (usually $2,000 to $5,000+ a month plus ad spend), contract length (typically 6 to 12 months) and control (less self-serve than a software platform).",
    },
    {
      q: "Can Volt Relay replace Scorpion for a solar company?",
      a: "For most sub-$10M solar installers, yes. Volt delivers the website, missed-call text back, follow-up sequences, review funnel and on-site SEO on a flat monthly fee under $300. The place Scorpion is genuinely different is full-service PPC management and the done-for-you model: if the installer specifically wants ads managed by an agency and marketing kept off their plate, Scorpion is a different offering, not a competitor on features alone.",
    },
    {
      q: "What does Scorpion actually cost for a solar company?",
      a: "Scorpion does not publish list pricing. Retainers for a solar installer typically start around $2,000 a month for a basic engagement, run $3,000 to $5,000+ a month once PPC management is included, plus the ad spend itself. A setup fee and a 6 to 12 month contract are standard. Volt Relay is $297 a month flat with no setup fee and no contract.",
    },
    {
      q: "What questions should I ask before signing with Scorpion?",
      a: "Ask: what the monthly retainer actually covers (website, SEO, ads, reviews, each as a line item). Who owns the website and the domain on cancellation. Who owns the lead data and whether it is exportable in a usable format. What the contract length is and what happens if performance disappoints. What the setup fee is. What ad spend is expected to be on top of the retainer. The answers vary by engagement and should be in writing.",
    },
    {
      q: "Does Volt Relay offer managed ads like Scorpion?",
      a: "Volt offers a Google Ads add-on at $500 a month on top of the core $297 a month fee. It is narrower than a Scorpion engagement: Google Ads only, for installers already generating organic leads, run as a continuous optimisation rather than a full agency relationship. For an installer who wants the full managed marketing bundle (ads plus SEO plus website plus reviews, done for them), Scorpion is a different offering than Volt.",
    },
  ],
};
