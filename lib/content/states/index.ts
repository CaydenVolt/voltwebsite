import type { State } from "./types";
import { CALIFORNIA } from "./data/california";
import { TEXAS } from "./data/texas";
import { FLORIDA } from "./data/florida";
import { ARIZONA } from "./data/arizona";
import { NORTH_CAROLINA } from "./data/north-carolina";
import { NEVADA } from "./data/nevada";
import { NEW_YORK } from "./data/new-york";
import { NEW_JERSEY } from "./data/new-jersey";
import { MASSACHUSETTS } from "./data/massachusetts";
import { GEORGIA } from "./data/georgia";

export * from "./types";

/**
 * Registry of US state solar market pages.
 *
 * Ordered by national rank (1 = largest market) rather than alphabetically,
 * because that is the useful presentation on the /solar index: biggest market
 * at the top, which matches a visitor's instinct when scanning the list.
 */
const ALL: readonly State[] = [
  CALIFORNIA,
  TEXAS,
  FLORIDA,
  ARIZONA,
  NORTH_CAROLINA,
  NEVADA,
  NEW_YORK,
  NEW_JERSEY,
  MASSACHUSETTS,
  GEORGIA,
];

const SORTED: readonly State[] = [...ALL].sort(
  (a, b) => a.market.nationalRank - b.market.nationalRank,
);

const BY_SLUG = new Map(SORTED.map((s) => [s.slug, s]));

export const getStates = (): readonly State[] => SORTED;
export const getState = (slug: string): State | undefined => BY_SLUG.get(slug);
export const stateHref = (slug: string) => `/solar/${slug}`;

/** Most recent revision across all state pages, for the index's lastModified. */
export function statesLastModified(): string {
  return SORTED.reduce((latest, s) => {
    const d = s.updated ?? s.published;
    return d > latest ? d : latest;
  }, SORTED[0]?.published ?? "2026-01-01");
}
