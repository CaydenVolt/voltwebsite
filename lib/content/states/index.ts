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
import { VIRGINIA } from "./data/virginia";
import { MICHIGAN } from "./data/michigan";
import { MINNESOTA } from "./data/minnesota";
import { SOUTH_CAROLINA } from "./data/south-carolina";
import { INDIANA } from "./data/indiana";
import { PENNSYLVANIA } from "./data/pennsylvania";
import { COLORADO } from "./data/colorado";
import { ILLINOIS } from "./data/illinois";
import { OREGON } from "./data/oregon";
import { OHIO } from "./data/ohio";
import { MARYLAND } from "./data/maryland";
import { NEW_MEXICO } from "./data/new-mexico";
import { LOUISIANA } from "./data/louisiana";
import { WASHINGTON } from "./data/washington";
import { UTAH } from "./data/utah";
import { CONNECTICUT } from "./data/connecticut";
import { HAWAII } from "./data/hawaii";
import { DELAWARE } from "./data/delaware";
import { IDAHO } from "./data/idaho";
import { WISCONSIN } from "./data/wisconsin";
import { VERMONT } from "./data/vermont";
import { MAINE } from "./data/maine";
import { ALABAMA } from "./data/alabama";
import { MISSOURI } from "./data/missouri";
import { NEW_HAMPSHIRE } from "./data/new-hampshire";
import { RHODE_ISLAND } from "./data/rhode-island";
import { MISSISSIPPI } from "./data/mississippi";
import { IOWA } from "./data/iowa";
import { OKLAHOMA } from "./data/oklahoma";
import { ARKANSAS } from "./data/arkansas";
import { KENTUCKY } from "./data/kentucky";
import { KANSAS } from "./data/kansas";
import { WEST_VIRGINIA } from "./data/west-virginia";
import { MONTANA } from "./data/montana";
import { NEBRASKA } from "./data/nebraska";
import { TENNESSEE } from "./data/tennessee";
import { WYOMING } from "./data/wyoming";
import { SOUTH_DAKOTA } from "./data/south-dakota";
import { NORTH_DAKOTA } from "./data/north-dakota";
import { ALASKA } from "./data/alaska";

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
  VIRGINIA,
  MICHIGAN,
  MINNESOTA,
  SOUTH_CAROLINA,
  INDIANA,
  PENNSYLVANIA,
  COLORADO,
  ILLINOIS,
  OREGON,
  OHIO,
  MARYLAND,
  NEW_MEXICO,
  LOUISIANA,
  WASHINGTON,
  UTAH,
  CONNECTICUT,
  HAWAII,
  DELAWARE,
  IDAHO,
  WISCONSIN,
  VERMONT,
  MAINE,
  ALABAMA,
  MISSOURI,
  NEW_HAMPSHIRE,
  RHODE_ISLAND,
  MISSISSIPPI,
  IOWA,
  OKLAHOMA,
  ARKANSAS,
  KENTUCKY,
  KANSAS,
  WEST_VIRGINIA,
  MONTANA,
  NEBRASKA,
  TENNESSEE,
  WYOMING,
  SOUTH_DAKOTA,
  NORTH_DAKOTA,
  ALASKA,
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
