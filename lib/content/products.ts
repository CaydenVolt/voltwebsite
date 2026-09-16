/**
 * Products. Single source for the nav mega-menu, /products, the product
 * pages, the footer, the homepage "Everything included" rail, the ticker, the
 * homepage blocks, the sitemap and the pricing page. Nothing else lists
 * products.
 *
 * Order follows a solar company's funnel: capture, respond, organise,
 * reputation, get found. Do not reorder alphabetically.
 *
 * visibility:
 *   public  the six core products. In the monthly fee, everywhere on the site.
 *   addon   sold separately from the plan. Four carry `page` content and get a
 *           page and a homepage block; the rest are a row on /pricing only.
 *   hidden  nothing, reserved.
 *
 * The separation is load-bearing: an add-on is never described as part of the
 * monthly fee, never carries a plan numeral, and always states its own price
 * footing. Read through the selectors below; never filter ad hoc.
 */

export type Visibility = "public" | "addon" | "hidden";

export type ProductMedia =
  | { kind: "image"; src: string; alt: string }
  /**
   * The real thing from `public/services/`: a screenshot, or a silent looping
   * recording. Shown as itself, no dither, no slant, no frame and no bleed off
   * the page edge, because a cropped interface is an unreadable interface.
   * Falls back to the type-only fragment while the file is missing.
   */
  | {
      kind: "shot";
      src: string;
      alt: string;
      /** Phone-shaped: held to a phone's width instead of filling the column. */
      portrait?: boolean;
      fallback?: ProductMedia;
    }
  | {
      kind: "clip";
      src: string;
      /** First frame: the poster, and what reduced motion sees instead. */
      poster: string;
      alt: string;
      /** Intrinsic size, so the row reserves its space before the file loads. */
      width: number;
      height: number;
      portrait?: boolean;
      fallback?: ProductMedia;
    }
  | { kind: "textback" }
  | { kind: "followup" }
  | { kind: "inbox" }
  | { kind: "reviews" }
  | { kind: "search" }
  | { kind: "nurture" }
  | { kind: "reactivation" }
  | { kind: "referrals" }
  | { kind: "ads" };

/**
 * One figure beside the media. These are how the product is built, not
 * results we are claiming: timings, counts and coverage that hold for every
 * client. Keep `value` short, nine characters at most, or it wraps in the
 * three-up band on phones.
 */
export interface Stat {
  value: string;
  label: string;
}

export interface Step {
  title: string;
  body: string;
}

interface Base {
  slug: string;
  name: string;
  visibility: Visibility;
  /** One line, under the name in menus, rows and the pricing list. */
  description: string;
  /** Two or three sentences. */
  intro: string;
}

/** Everything needed to render a product page and a homepage block. */
interface PageContent {
  /** Short form for the nav and tight columns. */
  navLabel: string;
  /** Benefit-first headline for the block and the page. */
  headline: string;
  benefits: readonly string[];
  /** Three steps from sign-up to running. */
  steps: readonly Step[];
  /** Three figures, shown beside the media. */
  stats: readonly Stat[];
  media: ProductMedia;
  /** Slugs of two related products. Only public products may appear here. */
  related: readonly string[];
  /** One sentence naming the line between this and a neighbouring product. */
  boundary?: { text: string; sibling: string };
  /** Rendered as the ink slab in its run of homepage blocks. */
  slab?: boolean;
}

/** A core product: in the monthly fee, with a page, a nav entry, a block. */
export interface PublicProduct extends Base, PageContent {
  visibility: "public" | "hidden";
}

/** Sold separately from the plan. With `page`, it also gets a page and a block. */
export interface AddonService extends Base {
  visibility: "addon";
  page?: PageContent;
}

/** An add-on with its own page and homepage block. */
export interface FeaturedAddon extends AddonService {
  page: PageContent;
}

export type Product = PublicProduct | AddonService;

export const PRODUCTS: readonly Product[] = [
  /* ---------------- core products, in funnel order ---------------- */
  {
    slug: "functional-website",
    name: "Functional Website",
    navLabel: "Website",
    description: "A site that turns visitors into booked installs",
    visibility: "public",
    related: ["on-site-seo", "missed-call-text-back"],
    headline: "A website that starts conversations, not a brochure.",
    intro:
      "Ten to twenty pages, built to turn a visitor into a text thread on your phone within a minute. Every form, chat and call button lands in the same inbox.",
    benefits: [
      "Every page has one job: get a text or a call",
      "Loads fast on a phone in a driveway",
      "Your reviews, your installs, your service area",
      "Ranks for local solar searches from day one",
    ],
    steps: [
      { title: "We collect", body: "Your photos, reviews, pricing and the towns you serve. About an hour of your time." },
      { title: "We build, you approve", body: "Pages and copy in 7–10 days. You read it, we change what is wrong." },
      { title: "It goes live", body: "Every form and button wired to the inbox and the follow-up sequence." },
    ],
    stats: [
      { value: "7–10 days", label: "From kickoff to live" },
      { value: "10–20", label: "Pages built for your area" },
      { value: "1 inbox", label: "Where every form lands" },
    ],
    media: {
      kind: "clip",
      src: "/services/functional-website.mp4",
      poster: "/services/functional-website.jpg",
      alt: "A solar company's website, with a homeowner filling in the quote form",
      width: 1152,
      height: 648,
    },
  },
  {
    slug: "missed-call-text-back",
    name: "Missed-Call Text-Back",
    navLabel: "Missed-call text-back",
    description: "Every missed call gets an instant text back",
    visibility: "public",
    related: ["automated-lead-follow-up", "all-in-one-inbox"],
    headline: "Miss the call. Keep the lead.",
    intro:
      "When nobody can pick up, one text goes out in seconds with your name on it. The homeowner replies, and the conversation is already going by the time you are off the roof.",
    benefits: [
      "Fires within five seconds of a missed call",
      "Works while you are on a roof",
      "Homeowner texts back, you answer when you can",
      "Every missed call becomes a written lead",
    ],
    steps: [
      { title: "We forward your number", body: "Your existing number stays. Missed rings trigger the text." },
      { title: "You approve one message", body: "It is a single text, written in your name. You sign it off." },
      { title: "It runs", body: "Every unanswered call turns into a written lead in the inbox." },
    ],
    stats: [
      { value: "5 sec", label: "From missed ring to text sent" },
      { value: "24/7", label: "Nights, weekends, roof days" },
      { value: "100%", label: "Of missed calls get a reply" },
    ],
    boundary: {
      text: "This is one automatic reply, triggered by the missed ring. The scheduled chasing over the following days is Automated Lead Follow-Up.",
      sibling: "automated-lead-follow-up",
    },
    media: {
      kind: "clip",
      src: "/services/missed-call-text-back.mp4",
      poster: "/services/missed-call-text-back.jpg",
      alt: "A phone receiving the automatic text that goes out after a missed call",
      width: 648,
      height: 1388,
      portrait: true,
      fallback: { kind: "textback" },
    },
    slab: true,
  },
  {
    slug: "automated-lead-follow-up",
    name: "Automated Lead Follow-Up",
    navLabel: "Lead follow-up",
    description: "Leads get chased automatically until they reply",
    visibility: "public",
    related: ["missed-call-text-back", "all-in-one-inbox"],
    headline: "Every new lead gets chased until they answer.",
    intro:
      "A scheduled sequence of calls, texts and emails over the first thirty days, for any new lead whether or not they called. It is rule-based: the same messages in the same order every time, so you always know exactly what was sent.",
    benefits: [
      "Call and text within 60 seconds of the lead arriving",
      "Twelve touches over thirty days, then a monthly check-in",
      "Stops the moment they reply or book",
      "Every message visible in the inbox",
    ],
    steps: [
      { title: "We connect your lead sources", body: "Website forms, phone, and any lead marketplaces you already pay for." },
      { title: "You approve the sequence", body: "Twelve messages, written for solar, edited for your area." },
      { title: "It runs on every lead", body: "From the first day, every new lead gets the same sequence until they answer." },
    ],
    stats: [
      { value: "60 sec", label: "To the first call and text" },
      { value: "12", label: "Touches over thirty days" },
      { value: "30 days", label: "Then a monthly check-in" },
    ],
    boundary: {
      text: "This is the scheduled sequence over days. The single instant reply to an unanswered call is Missed-Call Text-Back.",
      sibling: "missed-call-text-back",
    },
    media: {
      kind: "clip",
      src: "/services/automated-lead-follow-up.mp4",
      poster: "/services/automated-lead-follow-up.jpg",
      alt: "A website and a phone side by side, with the follow-up thread running on the phone",
      width: 1152,
      height: 822,
      fallback: { kind: "followup" },
    },
  },
  {
    slug: "all-in-one-inbox",
    name: "All-In-One Inbox",
    navLabel: "Inbox",
    description: "Calls, texts and emails in one place",
    visibility: "public",
    related: ["missed-call-text-back", "five-star-review-funnel"],
    headline: "One inbox for every call, text and email.",
    intro:
      "Every conversation with every lead and customer in one thread, on your phone and on the office computer. Nothing lives in somebody's personal phone anymore.",
    benefits: [
      "Calls, texts, emails and web chat in one thread per contact",
      "Your whole team sees the same history",
      "Reply from your phone in the truck",
      "Notes and reminders on every contact",
    ],
    steps: [
      { title: "We connect the channels", body: "Your number, your email and every website form." },
      { title: "Your team logs in", body: "On their phones. Ten minutes to learn." },
      { title: "Everything lands here", body: "Every other product writes into this inbox." },
    ],
    stats: [
      { value: "4", label: "Channels in one thread" },
      { value: "1 login", label: "For the whole team" },
      { value: "0", label: "Threads stuck on a personal phone" },
    ],
    media: {
      kind: "shot",
      src: "/services/all-in-one-inbox.png",
      alt: "One inbox holding calls, texts, emails and web chat from every lead",
      fallback: { kind: "inbox" },
    },
  },
  {
    slug: "five-star-review-funnel",
    name: "5-Star Review Funnel",
    navLabel: "Review funnel",
    description: "More five-star reviews, answered for you",
    visibility: "public",
    related: ["on-site-seo", "all-in-one-inbox"],
    headline: "Ask every happy customer. Reply to every review.",
    intro:
      "After the install, a review request goes out, then reminders, until they leave one. Every review that lands is replied to automatically, in your voice, so your profile never shows a wall of silence under the stars.",
    benefits: [
      "Request sent the day the system is switched on",
      "Two reminders, then it stops",
      "Every review answered automatically, good or bad",
      "Unhappy customers reach you first, so you can fix it",
    ],
    steps: [
      { title: "We connect your Google profile", body: "Reviews land where homeowners actually look, and replies post back there." },
      { title: "You approve the messages", body: "The request, two reminders and the reply wording, in your voice." },
      { title: "Every job triggers the ask", body: "Mark the install complete and the funnel takes it from there, replies included." },
    ],
    stats: [
      { value: "Day 1", label: "The ask goes out after switch-on" },
      { value: "2", label: "Reminders, then it stops" },
      { value: "Every one", label: "Review replied to automatically" },
    ],
    media: {
      kind: "clip",
      src: "/services/five-star-review-funnel.mp4",
      poster: "/services/five-star-review-funnel.jpg",
      alt: "The review funnel asking an unhappy customer what went wrong before it reaches Google",
      width: 1152,
      height: 648,
      fallback: { kind: "reviews" },
    },
  },
  {
    slug: "on-site-seo",
    name: "On-Site SEO",
    navLabel: "On-site SEO",
    description: "Actually get found when people search",
    visibility: "public",
    related: ["functional-website", "five-star-review-funnel"],
    headline: "Set up to rank for solar searches in your area.",
    intro:
      "Every page is structured, titled and linked so Google understands what you do and where you do it. It is the slow product: expect 3–6 months before it moves, and we will say if your market makes that longer.",
    benefits: [
      "City and service pages built in",
      "Titles, schema and speed handled",
      "Google Business Profile linked",
      "A monthly report you can read in two minutes",
    ],
    steps: [
      { title: "We map the searches", body: "The towns and services you want to rank for." },
      { title: "Pages are built to match", body: "Titles, schema and internal links done on the website." },
      { title: "Rankings are tracked", body: "One page in your monthly report, no jargon." },
    ],
    stats: [
      { value: "3–6 mo", label: "Before rankings move" },
      { value: "1 page", label: "Per town you install in" },
      { value: "Monthly", label: "Ranking report in plain words" },
    ],
    media: {
      kind: "clip",
      src: "/services/on-site-seo.mp4",
      poster: "/services/on-site-seo.jpg",
      alt: "A phone showing local search results for solar companies",
      width: 648,
      height: 1152,
      portrait: true,
      fallback: { kind: "search" },
    },
  },

  /* ---------------- sold separately from the plan ----------------
     Rows on /pricing. The four with `page` also get a product page and a
     homepage block, always labelled as separate from the monthly fee. */
  {
    slug: "google-my-business-optimization",
    name: "Google My Business Optimization",
    visibility: "addon",
    description: "Show up properly when they search solar near me",
    intro:
      "Your Google Business Profile is the first thing a homeowner sees when they search for solar near them, and most solar companies leave it half-filled. We rebuild the profile properly: categories, service areas, photos, products, Q&A. Then we keep posting to it so it stays active. It is usually the cheapest way to get more calls without spending on ads.",
  },
  {
    slug: "advanced-seo",
    name: "Advanced SEO",
    visibility: "addon",
    description: "Rank for the searches that convert, town by town",
    intro:
      "On-site SEO gets your pages in order. This goes further: keyword research across your service area, dedicated pages for each town you install in, technical fixes, and content built to rank for the searches that actually convert. It takes months, not weeks. If you need leads next Tuesday, run ads instead.",
  },
  {
    slug: "ai-lead-nurturing",
    name: "AI Lead Nurturing",
    visibility: "addon",
    description: "Replies that read the lead and book the appointment",
    intro:
      "Standard follow-up sends the same messages on the same schedule to everyone. This reads what the lead actually replies, answers their questions, qualifies them, and books the appointment straight into your calendar. It works nights and weekends, which is when most homeowners get round to replying.",
    page: {
      navLabel: "AI lead nurturing",
      headline: "It reads the reply, answers it, and books the slot.",
      benefits: [
        "Answers questions about price, panels, timelines and finance",
        "Qualifies the lead before it reaches your calendar",
        "Books straight into your calendar, nights and weekends included",
        "Hands over to a human the moment the lead asks for one",
        "Every message visible in your inbox, same as the rest",
      ],
      steps: [
        { title: "We train it on your business", body: "Your pricing, your panels, your finance options, your service area and the answers you already give." },
        { title: "You set the rules", body: "What it may say, what it must never say, and the point where it hands the thread to a person." },
        { title: "It works your leads", body: "On top of the follow-up sequence in the plan, on the leads you point it at." },
      ],
      stats: [
        { value: "60 sec", label: "To a written reply, any hour" },
        { value: "24/7", label: "Nights and weekends covered" },
        { value: "0", label: "Leads left waiting on a callback" },
      ],
      boundary: {
        text: "Automated Lead Follow-Up, which is in the monthly fee, sends the same rule-based sequence to everyone. This is the separate product that reads the reply and writes back to it.",
        sibling: "automated-lead-follow-up",
      },
      related: ["automated-lead-follow-up", "all-in-one-inbox"],
      media: { kind: "nurture" },
    },
  },
  {
    slug: "reactivation-campaigns",
    name: "Automatic Customer Returns",
    visibility: "addon",
    description: "Jobs out of the leads you already paid for",
    intro:
      "You have a database of old quotes and dead leads sitting in your CRM doing nothing. We write a campaign, send it to that list, and hand you the conversations that come back. It is the fastest way to get jobs out of money you have already spent.",
    page: {
      navLabel: "Customer returns",
      headline: "The jobs are already in your database.",
      benefits: [
        "Works the list you already own, no new ad spend",
        "Old quotes, dead leads and past customers, segmented",
        "Replies land in your inbox as normal conversations",
        "Re-runs on a schedule as the list grows again",
        "You approve every message before it sends",
      ],
      steps: [
        { title: "We import and clean the list", body: "Old quotes, past customers and dead leads out of whatever system they are sitting in." },
        { title: "We write the campaign", body: "A short run of texts and emails with a reason to reply now. You approve it." },
        { title: "You work the replies", body: "Conversations come back into your inbox. We report what the campaign returned." },
      ],
      stats: [
        { value: "0", label: "New ad spend needed" },
        { value: "14 days", label: "Campaign start to finish" },
        { value: "1 list", label: "The database you already own" },
      ],
      related: ["all-in-one-inbox", "automated-lead-follow-up"],
      media: { kind: "reactivation" },
      slab: true,
    },
  },
  {
    slug: "automated-referrals",
    name: "Automatic Referrals",
    visibility: "addon",
    description: "Turn finished installs into the next lead",
    intro:
      "Your happy customers would refer you. They just never think to. After a job closes, we ask, we make it one tap for them to pass your details on, and we follow up if they do not. Referred leads close faster and cost you nothing.",
    page: {
      navLabel: "Referrals",
      headline: "Your customers would refer you. Nobody asks.",
      benefits: [
        "The ask goes out automatically after every closed job",
        "One tap for the customer to pass your details on",
        "A reminder if they do not, then it stops",
        "Referred leads arrive in your inbox like any other lead",
        "You can see who referred whom, for whatever you want to do about it",
      ],
      steps: [
        { title: "We set the trigger", body: "Job marked complete, or a five-star review left. Usually both." },
        { title: "You approve the ask", body: "One message, your wording, with a link that takes one tap to forward." },
        { title: "Referrals come in", body: "Straight into the inbox, tagged, and into the same follow-up as every other lead." },
      ],
      stats: [
        { value: "1 tap", label: "For a customer to refer you" },
        { value: "3 asks", label: "Across the first month, then stop" },
        { value: "Every job", label: "Triggers the ask on close" },
      ],
      related: ["five-star-review-funnel", "all-in-one-inbox"],
      media: { kind: "referrals" },
    },
  },
  {
    slug: "google-ads-management",
    name: "Google Ads Management",
    visibility: "addon",
    description: "Leads now, with a straight answer on budget",
    intro:
      "When you need leads now rather than in six months. We build the campaigns, write the ads, point them at pages designed to convert, and manage them month to month. Your ad spend goes to Google directly and is separate from this fee. We will be straight with you about what a realistic budget looks like for your area.",
    page: {
      navLabel: "Google Ads",
      headline: "Leads this week, if the budget is there.",
      benefits: [
        "Campaigns built for solar searches in your towns",
        "Ads pointed at pages built to convert, not your homepage",
        "Ad spend paid to Google from your own account, never through us",
        "Every lead lands in the inbox and goes into follow-up",
        "One report a month: spend, leads, cost per lead",
      ],
      steps: [
        { title: "We agree a budget", body: "A straight answer on what your area costs per lead before you commit to anything." },
        { title: "We build and launch", body: "Campaigns, keywords, ads and landing pages, in your own Google Ads account." },
        { title: "We manage it monthly", body: "Bids, negatives and ad copy adjusted against the cost per lead, reported every month." },
      ],
      stats: [
        { value: "Monthly", label: "Managed month to month" },
        { value: "Direct", label: "Ad spend paid to Google by you" },
        { value: "1 report", label: "Spend, leads and cost per lead" },
      ],
      related: ["functional-website", "automated-lead-follow-up"],
      media: { kind: "ads" },
    },
  },
];

/**
 * A product flattened for a page or a homepage block, whether it is in the
 * plan or sold separately. `addon` drives every "not in the monthly fee"
 * marker; `index` is null for add-ons because the numerals belong to the six.
 */
export interface ProductPage extends PageContent {
  slug: string;
  name: string;
  description: string;
  intro: string;
  addon: boolean;
  index: number | null;
}

/** Every core product a visitor may see, in funnel order. */
export function getPublicProducts(): PublicProduct[] {
  return PRODUCTS.filter((p): p is PublicProduct => p.visibility === "public");
}

/** Everything sold separately, in order. Six rows on /pricing. */
export function getAddonServices(): AddonService[] {
  return PRODUCTS.filter((p): p is AddonService => p.visibility === "addon");
}

/** The separate products with a page and a homepage block, in order. */
export function getFeaturedAddons(): FeaturedAddon[] {
  return getAddonServices().filter((a): a is FeaturedAddon => a.page !== undefined);
}

/** A public product by slug, or undefined. Add-ons and hidden entries resolve to undefined. */
export function getProduct(slug: string): PublicProduct | undefined {
  return getPublicProducts().find((p) => p.slug === slug);
}

/** 1-based position among public products, for the numerals. */
export function getProductIndex(product: { slug: string }): number {
  return getPublicProducts().findIndex((p) => p.slug === product.slug) + 1;
}

/** Related products, resolved and filtered so nothing non-public can leak in. */
export function getRelated(product: { related: readonly string[] }): PublicProduct[] {
  return product.related
    .map((slug) => getProduct(slug))
    .filter((p): p is PublicProduct => p !== undefined);
}

/** The six, flattened for blocks and pages. */
export function getProductPages(): ProductPage[] {
  return getPublicProducts().map((p, i) => ({ ...p, addon: false, index: i + 1 }));
}

/** The four separate products, flattened the same way. */
export function getAddonPages(): ProductPage[] {
  return getFeaturedAddons().map((a) => ({
    ...a.page,
    slug: a.slug,
    name: a.name,
    description: a.description,
    intro: a.intro,
    addon: true,
    index: null,
  }));
}

/** Everything with a page, core first. The route and the sitemap read this. */
export function getAllPages(): ProductPage[] {
  return [...getProductPages(), ...getAddonPages()];
}

/** One page by slug. Add-ons without page content, and hidden entries, are undefined. */
export function getPage(slug: string): ProductPage | undefined {
  return getAllPages().find((p) => p.slug === slug);
}

export const productHref = (slug: string) => `/products/${slug}`;
