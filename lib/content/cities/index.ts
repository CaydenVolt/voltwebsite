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
import { RICHMOND } from "./data/richmond";
import { DETROIT } from "./data/detroit";
import { MINNEAPOLIS } from "./data/minneapolis";
import { CHARLESTON } from "./data/charleston";
import { INDIANAPOLIS } from "./data/indianapolis";
import { PHILADELPHIA } from "./data/philadelphia";
import { DENVER } from "./data/denver";
import { CHICAGO } from "./data/chicago";
import { PORTLAND } from "./data/portland";
import { COLUMBUS } from "./data/columbus";
import { BALTIMORE } from "./data/baltimore";
import { ALBUQUERQUE } from "./data/albuquerque";
import { NEW_ORLEANS } from "./data/new-orleans";
import { SEATTLE } from "./data/seattle";
import { SALT_LAKE_CITY } from "./data/salt-lake-city";
import { OAKLAND } from "./data/oakland";
import { FRESNO } from "./data/fresno";
import { RIVERSIDE } from "./data/riverside";
import { FORT_LAUDERDALE } from "./data/fort-lauderdale";
import { ST_PETERSBURG } from "./data/st-petersburg";
import { CHANDLER } from "./data/chandler";
import { ARLINGTON } from "./data/arlington";
import { PITTSBURGH } from "./data/pittsburgh";
import { CINCINNATI } from "./data/cincinnati";
import { AUGUSTA } from "./data/augusta";
import { HARTFORD } from "./data/hartford";
import { HONOLULU } from "./data/honolulu";
import { WILMINGTON } from "./data/wilmington";
import { BOISE } from "./data/boise";
import { MILWAUKEE } from "./data/milwaukee";
import { BURLINGTON } from "./data/burlington";
import { PORTLAND_ME } from "./data/portland-me";
import { BIRMINGHAM } from "./data/birmingham";
import { ST_LOUIS } from "./data/st-louis";
import { MANCHESTER } from "./data/manchester";
import { PROVIDENCE } from "./data/providence";
import { JACKSON } from "./data/jackson";
import { DES_MOINES } from "./data/des-moines";
import { OKLAHOMA_CITY } from "./data/oklahoma-city";
import { LITTLE_ROCK } from "./data/little-rock";
import { LOUISVILLE } from "./data/louisville";
import { WICHITA } from "./data/wichita";
import { CHARLESTON_WV } from "./data/charleston-wv";
import { BILLINGS } from "./data/billings";
import { OMAHA } from "./data/omaha";
import { NASHVILLE } from "./data/nashville";
import { CHEYENNE } from "./data/cheyenne";
import { SIOUX_FALLS } from "./data/sioux-falls";
import { FARGO } from "./data/fargo";
import { ANCHORAGE } from "./data/anchorage";
import { CAMBRIDGE } from "./data/cambridge";
import { ROCHESTER } from "./data/rochester";
import { ALBANY } from "./data/albany";
import { TRENTON } from "./data/trenton";
import { EDISON } from "./data/edison";
import { WINSTON_SALEM } from "./data/winston-salem";
import { FAYETTEVILLE } from "./data/fayetteville";
import { COLUMBUS_GA } from "./data/columbus-ga";
import { MACON } from "./data/macon";
import { SPOKANE } from "./data/spokane";
import { MEMPHIS } from "./data/memphis";
import { KNOXVILLE } from "./data/knoxville";
import { CHATTANOOGA } from "./data/chattanooga";
import { VIRGINIA_BEACH } from "./data/virginia-beach";
import { BATON_ROUGE } from "./data/baton-rouge";
import { ANAHEIM } from "./data/anaheim";
import { LONG_BEACH } from "./data/long-beach";
import { BAKERSFIELD } from "./data/bakersfield";
import { PLANO } from "./data/plano";
import { FRISCO } from "./data/frisco";
import { CORPUS_CHRISTI } from "./data/corpus-christi";
import { LUBBOCK } from "./data/lubbock";
import { HIALEAH } from "./data/hialeah";
import { CAPE_CORAL } from "./data/cape-coral";
import { HOLLYWOOD_FL } from "./data/hollywood-fl";
import { SYRACUSE } from "./data/syracuse";
import { PATERSON } from "./data/paterson";
import { CARY } from "./data/cary";
import { WILMINGTON_NC } from "./data/wilmington-nc";
import { YONKERS } from "./data/yonkers";

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
  RICHMOND,
  DETROIT,
  MINNEAPOLIS,
  CHARLESTON,
  INDIANAPOLIS,
  PHILADELPHIA,
  DENVER,
  CHICAGO,
  PORTLAND,
  COLUMBUS,
  BALTIMORE,
  ALBUQUERQUE,
  NEW_ORLEANS,
  SEATTLE,
  SALT_LAKE_CITY,
  OAKLAND,
  FRESNO,
  RIVERSIDE,
  FORT_LAUDERDALE,
  ST_PETERSBURG,
  CHANDLER,
  ARLINGTON,
  PITTSBURGH,
  CINCINNATI,
  AUGUSTA,
  HARTFORD,
  HONOLULU,
  WILMINGTON,
  BOISE,
  MILWAUKEE,
  BURLINGTON,
  PORTLAND_ME,
  BIRMINGHAM,
  ST_LOUIS,
  MANCHESTER,
  PROVIDENCE,
  JACKSON,
  DES_MOINES,
  OKLAHOMA_CITY,
  LITTLE_ROCK,
  LOUISVILLE,
  WICHITA,
  CHARLESTON_WV,
  BILLINGS,
  OMAHA,
  NASHVILLE,
  CHEYENNE,
  SIOUX_FALLS,
  FARGO,
  ANCHORAGE,
  CAMBRIDGE,
  ROCHESTER,
  ALBANY,
  TRENTON,
  EDISON,
  WINSTON_SALEM,
  FAYETTEVILLE,
  COLUMBUS_GA,
  MACON,
  SPOKANE,
  MEMPHIS,
  KNOXVILLE,
  CHATTANOOGA,
  VIRGINIA_BEACH,
  BATON_ROUGE,
  ANAHEIM,
  LONG_BEACH,
  BAKERSFIELD,
  PLANO,
  FRISCO,
  CORPUS_CHRISTI,
  LUBBOCK,
  HIALEAH,
  CAPE_CORAL,
  HOLLYWOOD_FL,
  SYRACUSE,
  PATERSON,
  CARY,
  WILMINGTON_NC,
  YONKERS,
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
