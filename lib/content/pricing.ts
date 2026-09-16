import { getPublicProducts } from "@/lib/content/products";

/**
 * The one plan. The price lives here and nowhere else in the codebase.
 * PLACEHOLDER: 297/month until the real figure is set.
 */
export interface Plan {
  price: number;
  currency: string;
  /** "month" */
  interval: string;
  setupFee: number | null;
  /** Slugs of the six public products. Derived, so it cannot drift. */
  includes: string[];
  terms: string[];
}

export const PLAN: Plan = {
  price: 297,
  currency: "USD",
  interval: "month",
  setupFee: null,
  includes: getPublicProducts().map((p) => p.slug),
  // Three things that are true of the plan. Deliberately not "one flat fee":
  // phone numbers and messaging are billed separately, so that claim would
  // contradict the terms page.
  terms: ["No contracts", "Cancel anytime", "No setup fee"],
};

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

const setup =
  PLAN.setupFee === null
    ? "No. The build, the copy and the launch call are covered by your first month."
    : `Yes, a one-off ${new Intl.NumberFormat("en-US", { style: "currency", currency: PLAN.currency, maximumFractionDigits: 0 }).format(PLAN.setupFee)} for the build and the launch call. After that it is the monthly fee only.`;

export const PRICING_FAQ = [
  {
    q: "What is actually included for the monthly fee?",
    a: "All six products: the website, missed-call text-back, automated lead follow-up, the inbox, the review funnel and on-site SEO. Hosting, the phone number forwarding, the monthly report and support are part of it. Anything under Separate products is its own product, bought on top of the plan and quoted on its own.",
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
    q: "What happens to my website if I cancel?",
    a: "It stays live for 30 days so you can move. The domain is yours and always was. The site itself runs on our platform, so it would need rebuilding elsewhere; we hand over the copy, the photos and an export of your contacts and conversation history.",
  },
  {
    q: "How fast will I see results?",
    a: "Text-back and the review funnel work from the day they are switched on. Follow-up shows up as booked appointments within 2–3 weeks, but only if leads are already coming in and someone on your side answers the inbox when a homeowner replies. SEO takes 3–6 months. If your current marketing sends you two leads a month, the system will handle those two very well and will not conjure a third.",
  },
  {
    q: "Do I need to buy the separate products?",
    a: "No. The plan works on its own, and most clients run it for a few months before adding anything. AI Lead Nurturing, Automatic Customer Returns, Automatic Referrals and Google Ads Management are separate products, not part of the system. We suggest one when your numbers say so, and we will say when they do not.",
  },
  {
    q: "Is ad spend included?",
    a: "No. If you add Google Ads Management, our management fee is separate and the ad budget goes to Google directly, in your own account. We will tell you what a realistic budget looks like for your area before you commit to either.",
  },
  {
    q: "Who owns the domain and content?",
    a: "You do. The domain is registered in your name, the photos and copy are yours, and your contacts export at any time.",
  },
] as const;
