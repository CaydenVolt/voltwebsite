/**
 * Content model for US city/metro solar market pages, served at
 * /solar/<state>/<city>. Each city sits beneath its state in the URL and
 * links back to its state page as a breadcrumb parent.
 *
 * The pages answer the local search queries honestly:
 *   - "solar companies in <city>" (homeowner intent)
 *   - "solar installers in <city>" (homeowner intent)
 *   - "solar permits <city>" / "<utility> net metering <city>" (operator)
 *
 * They complement the /solar/<state> pages: the state page covers the
 * statewide regime (NEM, state tax credit); the city page covers what is
 * local (permit office, which specific utility serves this city, climate,
 * typical install cost, lead-cost ballpark).
 *
 * Each field is required so a missing figure fails the typecheck rather
 * than silently rendering a blank. Inline markup matches the blog's rules:
 * [label](/path) for links, **bold** for emphasis, nothing else.
 */

export interface CityClimate {
  /** Peak sun hours per day, residential rooftop average. */
  peakSunHours: number;
  /** Average sunny days per year, from local climate data. */
  sunnyDays: number;
  /** Short note on the climate for solar (hail, heat derating, cloud cover). */
  note: string;
}

export interface CityMarket {
  /** Metropolitan statistical area population (approximate). */
  metroPopulationK: number;
  /** Typical turnkey cost per watt installed, residential ($). */
  averageCostPerWatt: number;
  /** Rough paid-search lead cost ($) for operators. */
  leadCostUsd: {
    low: number;
    high: number;
  };
  /** Qualitative note on installer density in the city. */
  installerDensity: "Low" | "Moderate" | "High" | "Saturated";
}

export interface CityPermits {
  /** Local permit office name, e.g. "City of Los Angeles Building & Safety". */
  office: string;
  /** Typical residential permit turnaround (weeks). */
  turnaroundWeeks: string;
  /** Whether SolarAPP+ is accepted here. */
  solarApp: "Accepted" | "In pilot" | "Not accepted";
  /** Short paragraph on the local permit reality. */
  note: string;
}

export interface CityFaq {
  q: string;
  a: string;
}

export interface City {
  /** URL segment, lowercase kebab-case, e.g. "los-angeles". */
  slug: string;
  /** The parent state's slug, e.g. "california". */
  stateSlug: string;
  /** Full city name, e.g. "Los Angeles". */
  name: string;
  /** The H1 on the page. */
  title: string;
  /** <title>, under ~60 characters. */
  metaTitle: string;
  /** Meta description, 150 to 160 characters. */
  metaDescription: string;
  /** 40 to 60 word direct answer, above the fold. */
  answer: string;
  /** Published date, ISO. */
  published: string;
  /** Optional revision date. */
  updated?: string;
  /** Local climate for solar. */
  climate: CityClimate;
  /** Local market dynamics for operators + homeowners. */
  market: CityMarket;
  /** The utility (or utilities) that serve this city specifically. */
  utilities: readonly string[];
  /** Local permit reality. */
  permits: CityPermits;
  /** Paragraph on running a solar company in this city specifically. */
  installerLandscape: string;
  /** FAQ, 4 to 6 city-specific questions. */
  faq: readonly CityFaq[];
}
