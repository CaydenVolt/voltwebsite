/**
 * Content model for the US state solar market pages under /solar/<state>.
 *
 * Each state page is a structured snapshot (market stats, utilities,
 * incentives, net-metering status) wrapped in editorial prose that explains
 * what those numbers mean for a solar operator or a homeowner in that state.
 *
 * The pages exist to answer two overlapping queries honestly:
 *   - "solar companies in <state>" (homeowner intent)
 *   - "solar market in <state>" / "running a solar company in <state>" (installer)
 *
 * Each field is required so a missing figure fails the typecheck rather than
 * silently rendering a blank. Figures should be cited to a source where one
 * exists; the sources list on each page documents what the numbers come from.
 *
 * Inline markup inside `text` fields matches the blog's rules:
 *   [label](/path) for links, **bold** for emphasis, nothing else.
 */

export type NetMeteringStatus =
  | "Full retail net metering"
  | "Partial net metering"
  | "Net billing / avoided cost"
  | "No net metering"
  | "NEM 3.0 (net billing with export compensation)";

export interface MarketSnapshot {
  /** Installed solar capacity in megawatts (cumulative). */
  installedCapacityMw: number;
  /** Homes powered by installed capacity (approximate, SEIA methodology). */
  homesPoweredK: number;
  /** Solar share of state electricity (%). */
  percentOfElectricity: number;
  /** Solar jobs supported in-state. */
  jobs: number;
  /** Typical turnkey cost per watt for residential ($). */
  averageCostPerWatt: number;
  /** National ranking (1 = largest). */
  nationalRank: number;
}

export interface Incentive {
  /** Short name of the incentive, e.g. "SMART program". */
  name: string;
  /** One or two sentences on what it does and who qualifies. */
  text: string;
}

export interface StateFaq {
  q: string;
  a: string;
}

export interface State {
  /** URL segment under /solar/. Lowercase, kebab-case, no spaces. */
  slug: string;
  /** Full state name (e.g. "California"). */
  name: string;
  /** Two-letter postal abbreviation (e.g. "CA"). */
  abbr: string;
  /** The H1 on the page. */
  title: string;
  /** <title>, under ~60 characters. */
  metaTitle: string;
  /** Meta description, 150 to 160 characters, with a reason to click. */
  metaDescription: string;
  /** The 40 to 60 word direct answer, above the fold. */
  answer: string;
  /** Published date, ISO. */
  published: string;
  /** Optional revision date. */
  updated?: string;
  /** Structured market stats. */
  market: MarketSnapshot;
  /** One or two paragraphs on how solar sells in this state right now. */
  marketNotes: string;
  /** Net metering regime, with a short explanation. */
  netMetering: {
    status: NetMeteringStatus;
    explanation: string;
  };
  /** Average residential electric rate, $/kWh. */
  averageRate: number;
  /** Short note on rate structure (TOU, tiered, flat). */
  rateNote: string;
  /** Major investor-owned utilities in the state. */
  utilities: readonly string[];
  /** State-level incentives beyond the 30% federal ITC. 2 to 6 items. */
  incentives: readonly Incentive[];
  /** Permit and interconnection reality in the state. One paragraph. */
  permits: string;
  /** Paragraph on what it is like to RUN a solar business here. */
  installerLandscape: string;
  /** FAQ, 4 to 7 state-specific questions. */
  faq: readonly StateFaq[];
}
