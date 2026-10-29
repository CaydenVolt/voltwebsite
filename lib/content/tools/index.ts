import type { Tool, ToolAudience } from "./types";
import { LEAD_COST } from "./calculators/lead-cost";
import { CLOSE_RATE } from "./calculators/close-rate";
import { SPEED_TO_LEAD } from "./calculators/speed-to-lead";
import { GOOGLE_ADS_BUDGET } from "./calculators/google-ads-budget";
import { REVIEW_IMPACT } from "./calculators/review-impact";
import { SOLAR_ROI } from "./calculators/solar-roi";
import { BATTERY_PAYBACK } from "./calculators/battery-payback";
import { SYSTEM_SIZE } from "./calculators/system-size";

export * from "./types";

/**
 * Registry of all interactive tools under /tools.
 *
 * Order here does not drive URL order (slug does), but it drives the default
 * order on the /tools index. Newest tools at the top; older ones below. Add
 * a new tool by importing its data file and inserting it here, then creating
 * the matching app/tools/<slug>/page.tsx shell.
 */
const ALL: readonly Tool[] = [
  LEAD_COST,
  CLOSE_RATE,
  SPEED_TO_LEAD,
  GOOGLE_ADS_BUDGET,
  REVIEW_IMPACT,
  SOLAR_ROI,
  BATTERY_PAYBACK,
  SYSTEM_SIZE,
];

const SORTED: readonly Tool[] = [...ALL].sort(
  (a, b) => b.published.localeCompare(a.published) || a.slug.localeCompare(b.slug),
);

const BY_SLUG = new Map(SORTED.map((t) => [t.slug, t]));

export const getTools = (): readonly Tool[] => SORTED;
export const getTool = (slug: string): Tool | undefined => BY_SLUG.get(slug);
export const toolHref = (slug: string) => `/tools/${slug}`;

/** Grouping used by the /tools index to section the list by audience. */
export function getToolsByAudience(): Record<ToolAudience, readonly Tool[]> {
  const groups: Partial<Record<ToolAudience, Tool[]>> = {};
  for (const t of SORTED) {
    const a = t.audience;
    if (!groups[a]) groups[a] = [];
    groups[a]!.push(t);
  }
  return groups as Record<ToolAudience, readonly Tool[]>;
}

/** Most recent revision across all tools, for the index's lastModified. */
export function toolsLastModified(): string {
  return SORTED.reduce((latest, t) => {
    const d = t.updated ?? t.published;
    return d > latest ? d : latest;
  }, SORTED[0]?.published ?? "2026-01-01");
}
