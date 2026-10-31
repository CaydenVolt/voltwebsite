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
