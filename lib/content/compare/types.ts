/**
 * Content model for competitor comparison pages.
 *
 * Typed data, not MDX, matching the discipline the rest of the site uses: a
 * stale slug in `related` is a build error, a missing field is a build error,
 * and every page clears the same shape rather than drifting into one-offs.
 *
 * The pages are built to answer the "X vs Y" and "X alternative for solar"
 * search queries honestly. Each one picks a real competitor a solar installer
 * is actually choosing between, says who should pick which, and sits a
 * structured feature matrix next to the prose rather than selling against
 * either tool.
 *
 * Inline markup inside `text` fields matches the blog's rules: [label](/path)
 * for links, **bold** for emphasis, nothing else.
 */

export type CompetitorCategory =
  /** Generic marketing/CRM platforms built for everyone */
  | "Generic CRM"
  /** Field-service management, usually trades-wide */
  | "Field service"
  /** Software written for the solar industry specifically */
  | "Solar-specific"
  /** Reviews, reputation, messaging-first tools */
  | "Reputation"
  /** Website + marketing agencies for trades */
  | "Marketing agency";

export interface Competitor {
  /** Public brand name. The vendor's own capitalisation. */
  name: string;
  /** One line that places the tool: what it IS, before any comparison. */
  tagline: string;
  /** Where the tool fits in the market. Drives the category index at /compare. */
  category: CompetitorCategory;
}

export interface MatrixRow {
  feature: string;
  /** What Volt Relay does for this feature. Short, factual. */
  volt: string;
  /** What the competitor does for this feature. Short, factual. */
  other: string;
}

export interface MatrixGroup {
  group: string;
  rows: readonly MatrixRow[];
}

export interface ComparisonFaq {
  q: string;
  a: string;
}

export interface Comparison {
  /** URL segment under /compare/. Lowercase, kebab-case, usually the competitor's slug. */
  slug: string;
  /** The competitor being compared against. */
  competitor: Competitor;
  /** The H1 on the page. Keeps the "vs" framing visible to a scanner. */
  title: string;
  /** <title>. Under ~60 characters so it survives the SERP. */
  metaTitle: string;
  /** Meta description, 150 to 160 characters, with a reason to click. */
  metaDescription: string;
  /** The 40 to 60 word direct answer, above the fold. Answers "which should I pick" without a pronoun. */
  answer: string;
  /** Published date, ISO. */
  published: string;
  /** Optional revision date. */
  updated?: string;
  /** 3 to 5 bullets. When a solar installer should pick Volt. */
  pickVolt: readonly string[];
  /** 3 to 5 bullets. When a solar installer should pick the competitor instead. */
  pickOther: readonly string[];
  /** The honest structured comparison, in groups. */
  matrix: readonly MatrixGroup[];
  /** Short, specific pricing read for each side. Avoid stale numbers; cite source. */
  pricing: {
    volt: string;
    other: string;
    note?: string;
  };
  /** Why this comparison matters specifically for a solar operator. One or two paragraphs. */
  solarFit: string;
  /** The honest verdict. One paragraph. Does not pretend both win. */
  verdict: string;
  /** FAQ, four to six questions. Rendered and mirrored into FAQPage schema. */
  faq: readonly ComparisonFaq[];
}
