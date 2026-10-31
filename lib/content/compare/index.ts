import type { Comparison, CompetitorCategory } from "./types";
import { HUBSPOT } from "./competitors/hubspot";
import { JOBBER } from "./competitors/jobber";
import { HOUSECALL_PRO } from "./competitors/housecall-pro";
import { SERVICETITAN } from "./competitors/servicetitan";
import { ENERFLO } from "./competitors/enerflo";
import { SCOOP } from "./competitors/scoop";
import { AURORA_SOLAR } from "./competitors/aurora-solar";
import { PODIUM } from "./competitors/podium";
import { BIRDEYE } from "./competitors/birdeye";
import { SCORPION } from "./competitors/scorpion";
import { FIELDPULSE } from "./competitors/fieldpulse";
import { SALESFORCE } from "./competitors/salesforce";
import { ZOHO_CRM } from "./competitors/zoho-crm";
import { PIPEDRIVE } from "./competitors/pipedrive";
import { SOLO } from "./competitors/solo";
import { OPENSOLAR } from "./competitors/opensolar";
import { SUNBASE } from "./competitors/sunbase";
import { ACCULYNX } from "./competitors/acculynx";
import { ACTIVECAMPAIGN } from "./competitors/activecampaign";
import { COMPANYCAM } from "./competitors/companycam";

export * from "./types";

/**
 * Registry of all competitor comparison pages.
 *
 * Order here does not drive URL order (slug does), but it drives the default
 * order on the /compare index when no sort is applied. Newest comparisons
 * sit at the top; older ones below. Add a new competitor by importing its
 * data file and inserting it here.
 */
const ALL: readonly Comparison[] = [
  HUBSPOT,
  JOBBER,
  HOUSECALL_PRO,
  SERVICETITAN,
  ENERFLO,
  SCOOP,
  AURORA_SOLAR,
  PODIUM,
  BIRDEYE,
  SCORPION,
  FIELDPULSE,
  SALESFORCE,
  ZOHO_CRM,
  PIPEDRIVE,
  SOLO,
  OPENSOLAR,
  SUNBASE,
  ACCULYNX,
  ACTIVECAMPAIGN,
  COMPANYCAM,
];

/** Newest first, with slug as tiebreaker for a stable sort. */
const SORTED: readonly Comparison[] = [...ALL].sort(
  (a, b) => b.published.localeCompare(a.published) || a.slug.localeCompare(b.slug),
);

const BY_SLUG = new Map(SORTED.map((c) => [c.slug, c]));

export const getComparisons = (): readonly Comparison[] => SORTED;
export const getComparison = (slug: string): Comparison | undefined => BY_SLUG.get(slug);
export const comparisonHref = (slug: string) => `/compare/${slug}`;

/** Grouping used by the /compare index to section the list by competitor category. */
export function getComparisonsByCategory(): Record<CompetitorCategory, readonly Comparison[]> {
  const groups: Partial<Record<CompetitorCategory, Comparison[]>> = {};
  for (const c of SORTED) {
    const cat = c.competitor.category;
    if (!groups[cat]) groups[cat] = [];
    groups[cat]!.push(c);
  }
  return groups as Record<CompetitorCategory, readonly Comparison[]>;
}

/** Most recent revision across all comparisons, for the index's lastModified. */
export function comparisonsLastModified(): string {
  return SORTED.reduce((latest, c) => {
    const d = c.updated ?? c.published;
    return d > latest ? d : latest;
  }, SORTED[0]?.published ?? "2026-01-01");
}
