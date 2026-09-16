/** Placeholder: swap for the GoHighLevel funnel URL. Every booking CTA goes through bookingHref(). */
export const BOOKING_URL = "https://booking.example.com/volt/20-minute-call";

/**
 * The booking link tagged with where on the site the click came from, so the
 * funnel's contact record shows which button sent the lead. `source` matches
 * the Button's `source` prop (hero_primary, nav_book, final_cta, ...).
 * Existing query parameters on the funnel URL are preserved.
 */
export function bookingHref(source: string): string {
  const url = new URL(BOOKING_URL);
  url.searchParams.set("utm_source", "website");
  url.searchParams.set("utm_medium", "cta");
  url.searchParams.set("utm_content", source);
  return url.toString();
}

/** The mega-menus the bar can open. */
export type MenuKey = "products" | "about";

export interface NavLink {
  label: string;
  /** Homepage anchors are written as "#id"; the nav prefixes "/" off the homepage. */
  href: string;
  /** Opens this mega-menu instead of navigating. */
  menu?: MenuKey;
}

/** One row in the About menu. `icon` keys the mark set in components/ui/MenuIcon.tsx. */
export interface MenuItem {
  label: string;
  description: string;
  href: string;
  icon: string;
}

/**
 * The About menu. Our Process and Trades We Serve point at the homepage
 * sections that already carry that content; the rest have their own pages.
 */
export const ABOUT_MENU: readonly MenuItem[] = [
  { label: "About Us", description: "Get to know Volt", href: "/about", icon: "people" },
  { label: "Our Process", description: "Discover how we work", href: "/our-process", icon: "process" },
  { label: "Trades We Serve", description: "Who we work with", href: "/#trades", icon: "trades" },
  { label: "Careers", description: "Join the team", href: "/careers", icon: "careers" },
  { label: "Partners", description: "Meet our partners", href: "/partners", icon: "partners" },
  { label: "Contact", description: "Chat with us", href: "/contact", icon: "contact" },
  { label: "Press", description: "Volt in the news", href: "/press", icon: "press" },
];

export const SITE = {
  name: "Volt",
  /** Volt's own follow-up system. The only name used for it anywhere on the site. */
  system: "Volt Relay",
  tagline: "The complete sales system for solar companies",
  /** Fits one line at 375px next to the eyebrow rule. */
  taglineShort: "Sales systems for solar companies",
  description:
    "Volt builds and runs the complete sales system for solar companies: website, missed-call text-back, automated follow-up, one inbox, review funnel and on-site SEO, for one monthly fee.",
  /**
   * Canonical origin. Every canonical tag, sitemap entry, social card URL and
   * schema @id on the site resolves from this one value, so it has to match
   * the domain the site is actually served from, including the www choice.
   */
  url: "https://voltagencyio.com",
  /** Raw funnel URL. Prefer bookingHref(source) for links so the click is attributed. */
  bookingUrl: BOOKING_URL,
  /** Placeholder region for the social proof strip. */
  region: "the United States",
  /** Review sources shown in the social proof strip. Placeholder figures. */
  reviews: [
    { source: "Google", rating: "4.9" },
    { source: "Facebook", rating: "4.8" },
    { source: "Trustpilot", rating: "4.7" },
  ],
  nav: [
    { label: "Products", href: "/products", menu: "products" },
    { label: "Pricing", href: "/pricing" },
    // Top level on purpose: the blog is sixty-three pages deep and a link in
    // the bar on every page is the strongest internal signal we can give it.
    { label: "Blog", href: "/blog" },
    // Process moved into the About menu, so the bar does not carry it twice.
    { label: "About", href: "/about", menu: "about" },
    { label: "FAQ", href: "#faq" },
  ] as readonly NavLink[],
  /** Footer columns. Legal routes are placeholders until those pages exist. */
  company: [
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Process", href: "/our-process" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/contact" },
    { label: "Book a call", href: bookingHref("footer_book"), external: true },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    /* Cookies are covered as a section of the privacy policy rather than in a
       document of their own, so this is a deep link rather than a page. The
       fragment is the `cookies-and-tracking` section id in
       lib/content/privacy.ts; renaming that section breaks this link, and
       nothing else points at it. */
    { label: "Cookies", href: "/privacy#cookies-and-tracking" },
    { label: "DPA", href: "/dpa" },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "YouTube", href: "https://youtube.com/" },
  ],
} as const;
