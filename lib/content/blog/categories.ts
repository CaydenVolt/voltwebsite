import type { Category, CategoryId } from "./types";

/**
 * Seven clusters, nine articles each. Every cluster has one hub (the pillar)
 * and eight spokes that link back to it, which is the whole point of grouping
 * them: a search engine reads the hub as the authority on the topic because
 * everything around it says so.
 *
 * Order is the order a solar company's problem usually arrives in: no leads,
 * no proof, not found, too slow, too many logins, a site that does not sell,
 * and finally paid. Incentives came last, in September 2026, because the
 * federal residential credit ended and the industry's sales conversation
 * changed with it.
 */
export const CATEGORIES: readonly Category[] = [
  {
    id: "leads",
    name: "Lead generation",
    slug: "solar-lead-generation",
    blurb: "Where the next job comes from",
    intro:
      "Every solar company hits the same wall: the pipeline is full one month and empty the next. These pieces cover where solar leads actually come from, what they cost, which ones are worth buying, and how to tell a real enquiry from a tyre-kicker before a rep gets in a truck.",
    metaTitle: "Solar Lead Generation",
    metaDescription:
      "How solar companies find, buy and qualify leads: real costs, exclusive versus shared, and the channels that hold up when the ad account is off.",
  },
  {
    id: "reviews",
    name: "Reviews & reputation",
    slug: "solar-reviews",
    blurb: "The proof that closes the deal",
    intro:
      "Solar is a trust sale. A homeowner is handing over roof access and twenty years of finance, and the first thing they check is what other people said. These pieces cover how to ask for reviews without breaking Google's rules, what to do about the bad ones, and how many you actually need.",
    metaTitle: "Solar Reviews & Reputation",
    metaDescription:
      "How solar installers earn Google reviews, answer bad ones, and turn a review count into booked jobs. Templates, timing and the rules Google enforces.",
  },
  {
    id: "local-seo",
    name: "Local SEO",
    slug: "solar-local-seo",
    blurb: "Getting found in your own postcode",
    intro:
      "Most solar searches are local, and most local searches end in the map pack. These pieces cover the Google Business Profile, service area pages, citations and the keyword work behind ranking in the towns you actually install in, rather than for the whole country.",
    metaTitle: "Local SEO for Solar Companies",
    metaDescription:
      "Rank in the Google map pack for solar. Business Profile setup, service area pages, citations, keywords and a realistic timeline for solar contractors.",
  },
  {
    id: "follow-up",
    name: "Speed & follow-up",
    slug: "solar-lead-follow-up",
    blurb: "What happens in the first five minutes",
    intro:
      "The company that answers first usually wins the job, and most solar companies answer in hours. These pieces cover response time, missed calls, follow-up sequences that keep going after the third attempt, and why leads that looked dead were only ever ignored.",
    metaTitle: "Solar Lead Follow-Up & Speed to Lead",
    metaDescription:
      "Why solar leads go cold and how to stop it: response time benchmarks, missed-call text-back, follow-up sequences and no-show recovery for installers.",
  },
  {
    id: "software",
    name: "Software & systems",
    slug: "solar-software",
    blurb: "The stack behind the sale",
    intro:
      "Most solar companies are not short of software. They are short of one place where the software agrees with itself. These pieces cover CRMs, proposal tools, pipelines and the numbers worth tracking, written for an owner choosing a stack rather than a vendor selling one.",
    metaTitle: "Solar Contractor Software & CRM",
    metaDescription:
      "Choosing solar contractor software: CRM comparisons, proposal tools, pipeline stages and the KPIs that tell you whether the stack is earning its fee.",
  },
  {
    id: "website",
    name: "Website & conversion",
    slug: "solar-website",
    blurb: "Turning visits into booked surveys",
    intro:
      "A solar website has one job: turn a stranger who is already interested into a booked appointment. These pieces cover what belongs on the page, what to cut, what a site should cost, and the conversion work that matters more than the design does.",
    metaTitle: "Solar Company Websites & Conversion",
    metaDescription:
      "What a solar company website needs to book jobs: page structure, quote forms, copy, speed, realistic costs, and the mistakes that cost installers leads.",
  },
  {
    id: "ads",
    name: "Paid ads & referrals",
    slug: "solar-ads-and-referrals",
    blurb: "Bought demand, and the free kind",
    intro:
      "Paid traffic is the fastest lever and the easiest one to waste. These pieces cover what solar clicks and leads really cost, how paid compares to search over a year, and the two cheapest channels almost nobody runs properly: referrals and the leads already sitting in the database.",
    metaTitle: "Solar Google Ads, Referrals & Database",
    metaDescription:
      "Solar Google Ads costs, Facebook ads, Local Services Ads, referral programmes and database reactivation: what each channel really returns for installers.",
  },
  {
    id: "incentives",
    name: "Incentives & financing",
    slug: "solar-incentives",
    blurb: "Selling after the credit ended",
    intro:
      "The federal residential credit ended for systems installed after 2025, and the sales conversation changed with it. These pieces cover what still carries the 30%, what to stop saying at a kitchen table, how to answer a homeowner who is waiting for it to come back, and how to rebuild a pitch that no longer opens with a rebate.",
    metaTitle: "Solar Incentives & Financing",
    metaDescription:
      "Selling solar after the federal credit ended: what still qualifies, lease versus PPA, state programmes that remain, and how to rebuild a pitch without a rebate.",
  },
] as const;

const BY_ID = new Map(CATEGORIES.map((c) => [c.id, c]));
const BY_SLUG = new Map(CATEGORIES.map((c) => [c.slug, c]));

export const getCategory = (id: CategoryId): Category => {
  const c = BY_ID.get(id);
  // Unreachable while CategoryId and CATEGORIES stay in step; a thrown error
  // beats a silently unlabelled card if they ever drift.
  if (!c) throw new Error(`Unknown blog category: ${id}`);
  return c;
};

export const getCategoryBySlug = (slug: string): Category | undefined => BY_SLUG.get(slug);

export const categoryHref = (c: Category) => `/blog/category/${c.slug}`;
