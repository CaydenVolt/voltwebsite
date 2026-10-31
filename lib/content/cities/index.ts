import type { City } from "./types";

export * from "./types";

/**
 * Registry of US city solar market pages.
 *
 * Cities are nested under their state's URL (/solar/<state>/<city>) and the
 * state page renders a "Cities covered" block built from `getCitiesByState`.
 *
 * Order within a state is by population, so the state page lists the biggest
 * metro first.
 */
import { LOS_ANGELES } from "./data/los-angeles";
import { SAN_DIEGO } from "./data/san-diego";
import { HOUSTON } from "./data/houston";
import { DALLAS } from "./data/dallas";
import { AUSTIN } from "./data/austin";
import { PHOENIX } from "./data/phoenix";
import { MIAMI } from "./data/miami";
import { ORLANDO } from "./data/orlando";
import { TAMPA } from "./data/tampa";
import { CHARLOTTE } from "./data/charlotte";
import { SAN_FRANCISCO } from "./data/san-francisco";
import { SACRAMENTO } from "./data/sacramento";
import { SAN_ANTONIO } from "./data/san-antonio";
import { FORT_WORTH } from "./data/fort-worth";
import { JACKSONVILLE } from "./data/jacksonville";
import { TUCSON } from "./data/tucson";
import { MESA } from "./data/mesa";
import { SCOTTSDALE } from "./data/scottsdale";
import { RALEIGH } from "./data/raleigh";
import { LAS_VEGAS } from "./data/las-vegas";
import { HENDERSON } from "./data/henderson";
import { NEW_YORK_CITY } from "./data/new-york-city";
import { NEWARK } from "./data/newark";
import { BOSTON } from "./data/boston";
import { ATLANTA } from "./data/atlanta";
import { SAN_JOSE } from "./data/san-jose";
import { EL_PASO } from "./data/el-paso";
import { DURHAM } from "./data/durham";
import { GREENSBORO } from "./data/greensboro";
import { RENO } from "./data/reno";
import { LONG_ISLAND } from "./data/long-island";
import { BUFFALO } from "./data/buffalo";
import { JERSEY_CITY } from "./data/jersey-city";
import { WORCESTER } from "./data/worcester";
import { SAVANNAH } from "./data/savannah";

const ALL: readonly City[] = [
  LOS_ANGELES,
  SAN_DIEGO,
  HOUSTON,
  DALLAS,
  AUSTIN,
  PHOENIX,
  MIAMI,
  ORLANDO,
  TAMPA,
  CHARLOTTE,
  SAN_FRANCISCO,
  SACRAMENTO,
  SAN_ANTONIO,
  FORT_WORTH,
  JACKSONVILLE,
  TUCSON,
  MESA,
  SCOTTSDALE,
  RALEIGH,
  LAS_VEGAS,
  HENDERSON,
  NEW_YORK_CITY,
  NEWARK,
  BOSTON,
  ATLANTA,
  SAN_JOSE,
  EL_PASO,
  DURHAM,
  GREENSBORO,
  RENO,
  LONG_ISLAND,
  BUFFALO,
  JERSEY_CITY,
  WORCESTER,
  SAVANNAH,
];

const SORTED: readonly City[] = [...ALL].sort((a, b) =>
  b.market.metroPopulationK - a.market.metroPopulationK,
);

const BY_KEY = new Map(SORTED.map((c) => [`${c.stateSlug}/${c.slug}`, c]));

export const getCities = (): readonly City[] => SORTED;
export const getCity = (stateSlug: string, citySlug: string): City | undefined =>
  BY_KEY.get(`${stateSlug}/${citySlug}`);
export const getCitiesByState = (stateSlug: string): readonly City[] =>
  SORTED.filter((c) => c.stateSlug === stateSlug);
export const cityHref = (stateSlug: string, citySlug: string) =>
  `/solar/${stateSlug}/${citySlug}`;

/** Most recent revision across all city pages, for the index's lastModified. */
export function citiesLastModified(): string {
  return SORTED.reduce((latest, c) => {
    const d = c.updated ?? c.published;
    return d > latest ? d : latest;
  }, SORTED[0]?.published ?? "2026-01-01");
}
