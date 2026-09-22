/**
 * The booking destination: the quiz on the grow subdomain, which qualifies and
 * then books. Every booking CTA on the site goes through bookingHref(), so
 * this is the only place the URL appears.
 *
 * Set 2026-09-23. It must stay on HTTPS: the HSTS header in next.config.ts
 * carries includeSubDomains, so once a visitor has seen the apex their browser
 * will refuse plain HTTP to this host too.
 */
export const BOOKING_URL = "https://grow.voltagencyio.com/quiz";

/**
 * The booking link tagged with where on the site the click came from, so the
 * landing page can see which button sent the visitor. `source` matches the
 * Button's `source` prop (hero_primary, nav_book, final_cta, ...). Existing
 * query parameters on the URL are preserved.
 *
 * This is the whole of the site's lead attribution. The marketing site takes
 * no submissions of its own, so there is no CRM adapter here; that belongs in
 * the client sites we build, not in this one.
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
 *
 * Press was removed on 2026-09-17. The /press route still exists as a
 * placeholder but nothing links to it now, and it stays out of the sitemap
 * and blocked in robots.txt, so it is unreachable rather than thin.
 *
 * Careers went further on 2026-09-19: the route was deleted outright rather
 * than left blocked, because a link in the global nav to a page robots.txt
 * forbids is a contradiction on every page of the site.
 */
export const ABOUT_MENU: readonly MenuItem[] = [
  { label: "About Us", description: "Get to know Volt", href: "/about", icon: "people" },
  { label: "Our Process", description: "Discover how we work", href: "/our-process", icon: "process" },
  { label: "Trades We Serve", description: "Who we work with", href: "/#trades", icon: "trades" },
  { label: "Partners", description: "Meet our partners", href: "/partners", icon: "partners" },
  { label: "Contact", description: "Chat with us", href: "/contact", icon: "contact" },
];

export const SITE = {
  name: "Volt",
  /** Volt's own follow-up system. The only name used for it anywhere on the site. */
  system: "Volt Relay",
  tagline: "The complete sales system for solar companies",
  /** Fits one line at 375px next to the eyebrow rule. */
  taglineShort: "Sales systems for solar companies",
  description:
    "Volt builds and runs the complete sales system for solar companies: website, missed-call text-back, automated follow-up, one inbox, review funnel and on-site SEO, on one monthly subscription.",
  /**
   * Canonical origin. Every canonical tag, sitemap entry, social card URL and
   * schema @id on the site resolves from this one value, so it has to match
   * the domain the site is actually served from, including the www choice.
   */
  url: "https://voltagencyio.com",
  /** Raw funnel URL. Prefer bookingHref(source) for links so the click is attributed. */
  bookingUrl: BOOKING_URL,
  /**
   * Where the business serves, published as `areaServed` in the Organization
   * and Service schema. The invented star ratings that used to sit beside this
   * went on 2026-09-19 with the strip that rendered them.
   */
  region: "the United States",
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
  /**
   * Social profiles. These are still the bare platform homepages, which is why
   * `realSocial()` filters them out: a footer link to instagram.com helps
   * nobody, and listing it as `sameAs` in the Organization schema actively
   * tells a search engine that instagram.com is Volt's profile, which is wrong
   * entity data rather than merely missing data.
   *
   * Replace each href with the real profile URL and both the footer links and
   * the schema start working.
   */
  social: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "YouTube", href: "https://youtube.com/" },
  ],
} as const;

/**
 * Only the social links that point at an actual profile. A bare platform
 * origin with no path is a placeholder, and publishing one is worse than
 * publishing none.
 */
export function realSocial(): readonly { label: string; href: string }[] {
  return SITE.social.filter((s) => {
    try {
      return new URL(s.href).pathname.replace(/\/+$/, "") !== "";
    } catch {
      return false;
    }
  });
}
