/**
 * Case studies on /our-work. Real client builds Volt shipped, not fabricated
 * proof. New entries slot in by adding to this array; the index page lays them
 * out three to a row and the slug drives the detail route at /our-work/<slug>.
 *
 * Images live in `public/our-work/<slug>.webp`. The device-mockup composition
 * (desktop + laptop + tablet + phone on a brand-colour background) is the
 * house style for the thumbnail, because it reads as "we built every surface
 * of this" in one glance.
 *
 * `liveUrl` is optional. Leave it empty until the client has given explicit
 * permission to publish the link; the detail page omits the "Visit the live
 * site" button when it is not set.
 */
export interface Work {
  slug: string;
  name: string;
  /** One-line description shown under the name on the card and detail page. */
  tagline: string;
  /** The industry tag, used for filtering later and shown in the detail metadata. */
  industry: string;
  /** City or region the client operates in. */
  location: string;
  /** The year the build shipped, used in the detail metadata. */
  year: number;
  /** Path to the thumbnail image under /public. */
  image: string;
  /** Live site URL, when the client has okayed publishing it. */
  liveUrl?: string;
  /**
   * Longer summary for the detail page. One or two sentences explaining what
   * was built, so the page has substance even before a full case study is
   * written.
   */
  summary: string;
}

export const WORKS: readonly Work[] = [
  {
    slug: "goal-green-world",
    name: "Goal Green World",
    tagline: "Painting and waterproofing contractor in Singapore",
    industry: "Painting and waterproofing",
    location: "Singapore",
    year: 2026,
    image: "/our-work/goal-green-world.webp",
    summary:
      "A conversion-focused site for an ethical, sustainability-driven contractor group serving HDB, condominium, landed and commercial properties across Singapore. Built around the Get a Free Estimate flow with WhatsApp as a parallel path, so visitors can convert on whichever channel they prefer.",
  },
  {
    slug: "lava-solar",
    name: "Lava Solar",
    tagline: "Solar panel installation in Kuching, Sarawak",
    industry: "Solar installation",
    location: "Kuching, Sarawak",
    year: 2026,
    image: "/our-work/lava-solar.webp",
    summary:
      "A rooftop solar site built around the NEM subsidy deadline, with a countdown bar driving the sign-by date, a savings calculator as the primary CTA, and WhatsApp as the secondary. Astronergy panels and GoodWe inverters named in the hero so visitors know exactly what they are quoting.",
  },
];

export const workHref = (slug: string) => `/our-work/${slug}`;
