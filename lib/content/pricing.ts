import { getPublicProducts } from "@/lib/content/products";

/**
 * Pricing. The three plans and the one price per plan live here and nowhere
 * else in the codebase.
 *
 * Structure (as of 2026-11-16, replacing the earlier Core + Advanced split):
 *
 *   Basic           — $150 / month      Website, On-Site SEO, GBP Optimization
 *   Core System     — $297 / month      Basic + Reviews + MCTB + Follow-Up +
 *                                       free Lead Reactivation + Referrals
 *   Leadflow        — $500 / month      Core + leads delivered, plus the
 *                     + client budget   client's own lead budget on top and
 *                     + $100 / booked   a $100 performance fee per booked
 *                        appointment    appointment. How the leads are
 *                                       sourced is covered on the sales call
 *                                       and not disclosed on the public site.
 *
 * Every plan includes the website build at no extra charge. The client pays
 * for hosting on top (see `HOSTING_FEE` below) and for pass-through phone
 * and messaging spend at what the carriers charge.
 *
 * `PLAN` is kept as an alias for `CORE_PLAN` because dozens of other files
 * (hero, product pages, llms.txt, Organization schema) read the headline
 * monthly figure from it. Changing those to look up Core by name would be
 * a bigger refactor than the restructure warrants right now.
 */

export type PlanTier = "basic" | "core" | "leadflow";

export interface Plan {
  id: PlanTier;
  name: string;
  /** Flat base price per billing interval. */
  price: number;
  currency: string;
  /** "month". */
  interval: string;
  setupFee: number | null;
  /** Slugs of products included on the plan. Resolved against the registry. */
  includes: string[];
  /**
   * Additional products included at no extra charge, marketed as "free with
   * this plan" rather than as the baseline set. Used by Core to spotlight
   * the two services (Lead Reactivation, Referrals) that are otherwise sold
   * as separate add-ons.
   */
  bonusSlugs?: string[];
  terms: string[];
  /**
   * Lead Generation carries a performance-fee component on top of the base
   * price. Left undefined for Basic and Core.
   */
  performanceFee?: { amount: number; unit: string };
  /**
   * Lead Generation requires the client to fund their own lead budget on
   * top of the base fee. Not a line item we quote: we tell the client on
   * the sales call what a realistic figure is for their market.
   */
  clientBudgetRequired?: boolean;
  /** Short line shown under the price on the card, if any. */
  subheading?: string;
}

/**
 * The slugs of the products included on each plan, in reading order on the
 * card. Resolved against the registry at build time so a rename of a
 * product slug flags here rather than silently breaking the list.
 */
const BASIC_SLUGS = [
  "functional-website",
  "on-site-seo",
  "google-my-business-optimization",
];

const CORE_ADDITIONS = [
  "five-star-review-funnel",
  "missed-call-text-back",
  "automated-lead-follow-up",
  // Referrals are part of the Core plan at the plan price — included,
  // not a free extra. Moved into the main includes on 2026-11-16 after
  // the owner clarified "automatic referrals isn't free, customer
  // reactivation is free".
  "automated-referrals",
];

const CORE_BONUSES = [
  // The one free extra on Core and on Leadflow: Automatic Customer
  // Reactivation (the product at slug reactivation-campaigns). Rendered
  // on the plan cards under "Free with Core, plus", in accent, so it
  // reads as the bonus rather than as another paid product.
  "reactivation-campaigns",
];

export const BASIC_PLAN: Plan = {
  id: "basic",
  name: "Basic",
  price: 150,
  currency: "USD",
  interval: "month",
  setupFee: null,
  includes: BASIC_SLUGS,
  terms: ["No contracts", "Cancel anytime", "No setup fee"],
  subheading: "The storefront. Three products, one monthly fee.",
};

export const CORE_PLAN: Plan = {
  id: "core",
  name: "Core System",
  price: 297,
  currency: "USD",
  interval: "month",
  setupFee: null,
  includes: [...BASIC_SLUGS, ...CORE_ADDITIONS],
  bonusSlugs: CORE_BONUSES,
  terms: ["No contracts", "Cancel anytime", "No setup fee"],
  subheading:
    "Everything in Basic, plus the follow-up, review and referral system — with free Customer Reactivation.",
};

export const LEADFLOW_PLAN: Plan = {
  id: "leadflow",
  name: "Leadflow",
  price: 500,
  currency: "USD",
  interval: "month",
  setupFee: null,
  // Leadflow includes everything on Core plus leads delivered to the inbox
  // and appointments booked straight into the client's calendar.
  includes: [...CORE_PLAN.includes],
  bonusSlugs: CORE_BONUSES,
  performanceFee: { amount: 100, unit: "booked appointment" },
  clientBudgetRequired: true,
  terms: ["No contracts", "Cancel anytime", "No setup fee"],
  subheading:
    "Everything in Core, plus leads delivered to your inbox and appointments booked straight into your calendar.",
};

/**
 * Backwards-compatible default export. Core is the main plan everywhere else
 * on the site, so `PLAN` points at it. getPublicProducts() stayed as the
 * `includes` source on the old PLAN; the new CORE_PLAN uses an explicit slug
 * list, which is a stronger guarantee that the card can never drift from the
 * registry under a product rename. Kept here for the files that still import
 * PLAN directly (hero, llms.txt, Organization schema).
 */
export const PLAN: Plan = CORE_PLAN;

/** Ordered list for rendering, cheapest first. */
export const PLANS: readonly Plan[] = [BASIC_PLAN, CORE_PLAN, LEADFLOW_PLAN];

/**
 * Hosting is included in every plan price (changed 2026-11-16 at the
 * owner's instruction — previously billed on top). Exported as 0 rather
 * than removed so downstream callers that referenced the constant keep
 * typechecking, and so the pricing page can render "hosting included in
 * the plan" uniformly without a conditional branch per card.
 */
export const HOSTING_FEE: number = 0;

/**
 * Add-on products rendered on the pricing page outside the three plans. The
 * user-facing list the sales pitch names: the Facebook/Instagram AI Booking
 * Bot and AI Lead Nurturing. Resolved against the registry so a slug rename
 * flags here. The Booking Bot product does not yet exist as a full page; it
 * is listed by name in the add-ons section by the slug in `PRICING_ADDONS`.
 */
export const PRICING_ADDONS: readonly string[] = [
  // Full product pages exist for all three.
  "ai-lead-nurturing",
  // Booking Bot (added 2026-11-16). Registered as an addon in products.ts.
  "ai-booking-bot",
  // ChatGPT Business Optimization (added 2026-11-16). Addresses the
  // AI-search layer (ChatGPT, Perplexity, Google AI Overviews).
  "chatgpt-business-optimization",
] as const;

/** "$297", no decimals, locale en-US. */
export function formatPrice(plan: Plan = PLAN): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: plan.currency,
    maximumFractionDigits: 0,
  }).format(plan.price);
}

/** Currency symbol alone, for setting it small beside the large numeral. */
export function currencySymbol(plan: Plan = PLAN): string {
  return formatPrice({ ...plan, price: 0 }).replace(/[\d.,\s]/g, "");
}

/** The digits alone, for the display numeral. */
export function priceDigits(plan: Plan = PLAN): string {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(plan.price);
}

/**
 * What a solar company typically pays for separately. PLACEHOLDER ranges:
 * conservative, from the companies we onboard, not from any competitor. Swap
 * for sourced figures before launch.
 */
export const REPLACES = [
  { item: "Website build and hosting", figure: "$150–400" },
  { item: "CRM subscription", figure: "$99–300" },
  { item: "Review request tool", figure: "$75–150" },
  { item: "Texting and phone platform", figure: "$50–150" },
  { item: "Someone to run all of it", figure: "$600+" },
] as const;

/** Re-expose derived stat: every public product slug, for other callers. */
export const PUBLIC_PRODUCT_SLUGS = getPublicProducts().map((p) => p.slug);

const setup =
  PLAN.setupFee === null
    ? "No. The build, the copy and the launch call are covered by your first month."
    : `Yes, a one-off ${new Intl.NumberFormat("en-US", { style: "currency", currency: PLAN.currency, maximumFractionDigits: 0 }).format(PLAN.setupFee)} for the build and the launch call. After that it is the monthly fee only.`;

export const PRICING_FAQ = [
  {
    q: "What's the difference between Basic, Core and Leadflow?",
    a: "Basic at $150 a month is the storefront: the website, on-site SEO and Google Business Profile optimization. Core at $297 a month is Basic plus the sales system: the review funnel, missed-call text-back and automated lead follow-up, with lead reactivation and the referrals programme included at no extra charge. Leadflow at $500 a month is everything in Core plus leads delivered to your inbox, on top of a lead budget you fund and a $100 fee per booked appointment. Core is the right pick for most operators. Basic is for companies who already have lead flow and just need the website done properly. Leadflow is for companies who want us to handle the whole pipeline, including the top.",
  },
  {
    q: "Is the website really free?",
    a: "Yes. The website build, the copy, the hosting and the launch call are included at no extra charge in every plan. You pay the monthly plan fee and that is it for the website side. We do not upsell a separate website product because it is already in what you are paying for the plan, and we do not bill hosting on top either.",
  },
  {
    q: "What is the $100 per booked appointment on Leadflow?",
    a: "A performance fee on top of the $500 management fee and your lead budget. It is only charged when a lead we delivered is converted into a booked appointment on your calendar — not on a lead delivered but never contacted, and not on an appointment you booked from a channel we are not running. It is in your dashboard before it is charged.",
  },
  {
    q: "Is ad spend included?",
    a: "No. If you add Google Ads Management, our management fee is separate and the ad budget goes to Google directly, in your own account. For Leadflow, you still fund the lead budget directly — we quote a realistic monthly figure for your area on the sales call before you commit to anything.",
  },
  {
    q: "Is there a setup fee?",
    a: setup,
  },
  {
    q: "Am I locked into a contract?",
    a: "No. Month to month, cancel with a month's notice. If you cancel in month two we will ask what went wrong, but we will not make it hard.",
  },
  {
    q: "Is there really a 30-day money back guarantee?",
    a: "Yes, on the standard monthly plan. Cancel inside 30 days of your first payment and we refund the subscription fee in full. Request it in your account or email support@mail.voltagencyio.com. What is not refundable is the pass-through spend on phone numbers, texts and calls, because we have already paid those onwards. The one exception: if you agree on a sales call to the Quarterly Prepay Plan (three months upfront in exchange for a one-off free Google Business Profile optimization), a different rule applies. Within 30 days you can cancel and get the two unused months back, but the first month is used and the GBP optimization is not refunded. After 30 days, the prepaid quarter is final. Full detail is in section 7 of the terms.",
  },
  {
    q: "What happens to my website if I cancel?",
    a: "It stays live for 30 days so you can move. The domain is yours and always was. The site itself runs on our platform, so it would need rebuilding elsewhere; we hand over the copy, the photos and an export of your contacts and conversation history.",
  },
  {
    q: "How fast will I see results?",
    a: "Text-back and the review funnel work from the day they are switched on. Follow-up shows up as booked appointments within 2–3 weeks, but only if leads are already coming in and someone on your side answers the inbox when a homeowner replies. SEO takes 3–6 months. If your current marketing sends you two leads a month, the plan handles those two very well and will not conjure a third. Leadflow is what you buy when you want the third one too.",
  },
  {
    q: "Do I need to buy the add-ons?",
    a: "No. Each plan works on its own, and most clients run their plan for a few months before adding anything. The Facebook and Instagram AI Booking Bot and AI Lead Nurturing are add-ons sold on top of the plan when your numbers say so, not before. We will tell you when they do not.",
  },
  {
    q: "Who owns the domain and content?",
    a: "You do. The domain is registered in your name, the photos and copy are yours, and your contacts export at any time.",
  },
  {
    q: "Do you work with solar companies outside the United States?",
    a: "Rarely, and only case by case. The system is purpose-built for US solar: US regulatory references (NABCEP, NEM, the post-ITC pricing landscape), US dollar pricing, US review platforms (Google, BBB, Yelp) and US customer psychology. If you operate outside the United States and the fundamentals line up (English-speaking market, similar sales cycle, comparable auction economics on paid), say so on the demo call and we will tell you honestly whether the system fits. The default answer is US-only.",
  },
] as const;
