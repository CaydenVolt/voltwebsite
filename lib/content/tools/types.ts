/**
 * Content model for the interactive calculators under /tools.
 *
 * Each calculator has:
 *   - A short direct answer (the paragraph above the fold, for AI Overviews).
 *   - An interactive component rendered by its own page.tsx (not stored here).
 *   - A "how this is calculated" explainer rendered as structured prose.
 *   - A 3 to 5 question FAQ for schema and on-page use.
 *
 * The actual calculator widget lives next to the page as a client component
 * because every tool has unique inputs; a shared widget would collapse into
 * configuration hell. The data file only carries the surrounding content.
 *
 * Inline markup inside `text` fields matches the blog's rules:
 *   [label](/path) for links, **bold** for emphasis, nothing else.
 */

export type ToolAudience =
  /** Written for a US solar installer running the business. */
  | "Installer"
  /** Written for a homeowner. Installer uses it as a lead magnet or embed. */
  | "Homeowner";

export interface ToolExplainerStep {
  heading: string;
  text: string;
}

export interface ToolFaq {
  q: string;
  a: string;
}

export interface Tool {
  /** URL segment under /tools/. Lowercase, kebab-case. */
  slug: string;
  /** H1 and tool-card title. Short, specific. */
  title: string;
  /** <title>. Under ~60 characters. */
  metaTitle: string;
  /** Meta description, 150 to 160 characters, with a reason to click. */
  metaDescription: string;
  /** One-line summary used on the /tools index card. */
  tagline: string;
  /** Who the tool is for; drives the category grouping on the /tools index. */
  audience: ToolAudience;
  /** The 40 to 60 word direct answer, rendered above the calculator. */
  intro: string;
  /** How the number is actually derived. 2 to 5 steps. */
  how: readonly ToolExplainerStep[];
  /** Caveats, assumptions, limits of the model. One paragraph. */
  caveat: string;
  /** FAQ, 3 to 5 questions. Rendered on-page and mirrored into FAQPage schema. */
  faq: readonly ToolFaq[];
  /** Published date, ISO. */
  published: string;
  /** Optional revision date. */
  updated?: string;
  /** Related tool slugs or /compare slugs. Rendered as a "see also" strip. */
  related?: readonly string[];
}
