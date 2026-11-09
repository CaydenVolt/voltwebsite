/**
 * The byline. One author, stated plainly, with a page of his own.
 *
 * This exists for a reason beyond vanity. Google's helpful-content guidance
 * asks three questions of a page: who made it, how, and why. A named author
 * with a real role and a reachable page answers the first one, and the
 * schema on the article points at it. Nothing here is a claim we cannot
 * stand behind: no invented years, no invented client counts.
 */
export const AUTHOR = {
  name: "Cayden Chern",
  /** URL segment under /blog/author/. */
  slug: "cayden-chern",
  role: "Founder, Volt",
  /** One line under the byline on an article. */
  short: "Founder of Volt. Builds and runs sales systems for solar companies.",
  /** The author page, and the bio block at the foot of every article. */
  bio: [
    "Cayden Chern is the founder of Volt, where he builds and runs the sales system solar companies use to catch a lead, answer it, follow it up and turn it into a booked survey. That means he spends most of his week inside solar pipelines: reading missed-call logs, watching where follow-up stops, and working out why a lead that looked dead in March signed in June.",
    "He writes here about what that work actually shows. Not theory, and not the version of marketing that needs a glossary. Solar is a trust sale with a long decision window and an expensive appointment, and almost every growth problem in it turns out to be an operational one wearing a marketing costume.",
    "If something on this blog is wrong, or your numbers say otherwise, he would rather hear it than not.",
  ],
  /**
   * What the author is qualified to talk about, and nothing else. Used as the
   * `knowsAbout` list in the Person schema.
   *
   * The list was expanded on 2026-11-09 for topical-authority reasons. Google's
   * E-E-A-T signal reads this field (and the matching `about` on individual
   * articles) as the claim an author is making about their expertise, and a
   * handful of broad terms is a weaker signal than a dense, specific list.
   * Every entry has to correspond to real content the author has written on
   * this blog: do not pad it with topics the archive does not actually cover,
   * because Google's helpful-content system discounts claims that content
   * fails to back up.
   */
  knowsAbout: [
    // Lead generation surface
    "Solar lead generation",
    "Solar lead qualification",
    "Cost per solar lead",
    "Shared vs exclusive solar leads",
    "Solar lead reactivation",
    // Follow-up and sales motion
    "Sales follow-up automation",
    "Speed to lead for solar",
    "Missed-call text-back",
    "Solar sales pipeline stages",
    "Solar appointment setting",
    // Reviews and reputation
    "Review generation and reputation",
    "Google Business Profile optimization",
    "Responding to negative solar reviews",
    // Local and on-site SEO
    "Local SEO for solar companies",
    "Google Local Service Ads for solar",
    "On-site SEO for solar websites",
    // Paid acquisition
    "Google Ads for solar contractors",
    "Facebook and Meta ads for solar",
    "Landing page conversion",
    // Websites and software
    "Conversion-focused websites",
    "Solar contractor software and CRM",
    "Solar proposal and design software",
    // Market and economics
    "Post-ITC solar economics",
    "State-by-state solar incentives",
    "Net metering by state",
  ],
} as const;

export const authorHref = `/blog/author/${AUTHOR.slug}`;
