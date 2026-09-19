/**
 * The blog's content model.
 *
 * Articles are typed data, not MDX: the same decision the rest of this site
 * makes. A block union keeps every article renderable through the design
 * system's own primitives, so a post cannot introduce a rounded card, a
 * gradient or a type size that is not in the scale.
 *
 * Inline markup inside `text` fields is deliberately tiny, two forms only:
 *   [label](/path)   a link. Internal paths render as <Link>, http(s) as <a>.
 *   **emphasis**     bold.
 * Anything richer is a block.
 */

/** The seven clusters. Each is a hub with nine spokes. */
export type CategoryId =
  | "leads"
  | "reviews"
  | "local-seo"
  | "follow-up"
  | "software"
  | "website"
  | "ads"
  /* Cluster 8, in progress. The id exists so posts/incentives.ts typechecks
     while it is written; it joins CATEGORIES only once all nine articles are
     there, because the content gate requires exactly nine per cluster. */
  | "incentives";

/** Search intent, shown on the card the way a trade magazine tags a column. */
export type Intent = "Informational" | "Commercial";

export interface Category {
  id: CategoryId;
  /** Card tag and archive H1. */
  name: string;
  /** URL segment under /blog/category/. */
  slug: string;
  /** One line under the archive heading. */
  blurb: string;
  /** Archive page intro, two or three sentences. Unique per category. */
  intro: string;
  /** Archive page <title> and meta description. */
  metaTitle: string;
  metaDescription: string;
}

export type Block =
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  /** Numbered rows with a title and a paragraph. The house "how it works" shape. */
  | { t: "steps"; items: { title: string; body: string }[] }
  /** A real table. Scrolls horizontally on phones rather than squeezing. */
  | { t: "table"; caption?: string; head: string[]; rows: string[][] }
  /** Hairline-ruled aside: a warning, a rule of thumb, a definition. */
  | { t: "callout"; label: string; text: string }
  /** Two or three figures on a ruled band. `source` is the attribution line. */
  | { t: "figures"; items: { value: string; label: string }[]; source?: string }
  /** Pull quote. Display face, no quotation marks drawn. */
  | { t: "quote"; text: string; cite?: string }
  /** Inline route back into the site. One or two per article, never more. */
  | { t: "link"; href: string; label: string; note: string };

/**
 * The mark on the article's card and at the head of the article.
 *
 * A closed set, so a typo is a build error rather than a blank square, and
 * small enough that each glyph is drawn properly. Articles that share a page
 * of nine never share a mark; the content gate enforces it.
 */
export type IconKey =
  | "magnet"
  | "funnel"
  | "tag"
  | "scales"
  | "handshake"
  | "bulb"
  | "building"
  | "star"
  | "chat"
  | "shield"
  | "pin"
  | "search"
  | "chart"
  | "stopwatch"
  | "phone"
  | "envelope"
  | "database"
  | "grid"
  | "browser"
  | "cursor"
  | "megaphone"
  | "calendar"
  | "checklist"
  | "gauge";

export interface FaqItem {
  q: string;
  a: string;
}

export interface Post {
  /** The keyword, verbatim, as the URL segment. /blog/<slug>. */
  slug: string;
  /** The H1. Written for a reader, with the keyword intact. */
  title: string;
  /** The <title>. Kept under ~60 characters so it survives the SERP. */
  metaTitle: string;
  /** The meta description. 150 to 160 characters, with a reason to click. */
  metaDescription: string;
  /** The primary keyword this page is built to answer. */
  keyword: string;
  /** Secondary terms the body is expected to cover. Never stuffed, just tracked. */
  secondary: readonly string[];
  /** Card teaser. One or two sentences, plain. */
  excerpt: string;
  category: CategoryId;
  intent: Intent;
  /** The mark on the card and at the head of the article. */
  icon: IconKey;
  /** The cluster hub. Exactly one post per category sets this. */
  pillar?: boolean;
  /** ISO date. Drives the order of the index and the paging. */
  published: string;
  /** ISO date, when the piece was last revised. Defaults to `published`. */
  updated?: string;
  /**
   * The 40 to 60 word direct answer, above the article. This is the block a
   * featured snippet or an AI Overview lifts, so it has to answer the title
   * question on its own, with no pronoun pointing back at the heading.
   */
  answer: string;
  /** Three or four scannable takeaways under the answer. */
  takeaways: readonly string[];
  body: readonly Block[];
  /** Asked-and-answered at the foot of the article. Rendered, not schema'd. */
  faq: readonly FaqItem[];
  /** Sibling slugs, three of them, for the "Read next" rail. */
  related: readonly string[];
}
