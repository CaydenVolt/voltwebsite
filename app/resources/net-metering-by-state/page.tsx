import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { TrustStrip } from "@/components/site/TrustStrip";
import { getStates, stateHref, type State } from "@/lib/content/states";

export const metadata: Metadata = pageMetadata({
  title: "Net metering by US state: 50-state comparison",
  description:
    "Every US state's current net-metering status in one table: retail NEM, net billing, partial, no NEM. Honest about each state's export compensation.",
  path: "/resources/net-metering-by-state",
});

/**
 * /resources/net-metering-by-state.
 *
 * Aggregates each state registry entry's `netMetering.status` and
 * `averageRate` into a single comparison table so a scanner can compare
 * all 50 states on one page. Each row links back to the full state guide.
 */

function groupByStatus(states: readonly State[]): Map<string, State[]> {
  const groups = new Map<string, State[]>();
  for (const s of states) {
    const key = s.netMetering.status;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(s);
  }
  return groups;
}

const STATUS_ORDER = [
  "Full retail net metering",
  "Partial net metering",
  "NEM 3.0 (net billing with export compensation)",
  "Net billing / avoided cost",
  "No net metering",
] as const;

export default function NetMeteringByState() {
  const states = getStates();
  const groups = groupByStatus(states);
  const fmtRate = (r: number) => `$${r.toFixed(3)}/kWh`;

  return (
    <main className="flex-1">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Net metering by state", path: "/resources/net-metering-by-state" },
        ])}
      />
      <div aria-hidden className="h-nav-condensed" />
      <TrustStrip />

      <Section as="header" aria-labelledby="nem-h">
        <nav aria-label="Breadcrumb" className="label flex flex-wrap items-center gap-x-3 gap-y-1 text-muted">
          <Link href="/resources" className="hover:text-fg">Resources</Link>
          <span aria-hidden>/</span>
          <span className="text-accent">Net metering by state</span>
        </nav>

        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <Reveal as="h1" id="nem-h" className="text-display-md lg:col-span-8">
            Net metering by US state.
          </Reveal>
          <Reveal
            as="p"
            index={1}
            className="mt-6 max-w-measure text-lead text-muted lg:col-span-4 lg:col-start-9 lg:mt-0"
          >
            Every US state's current net-metering regime for new residential
            solar, grouped by category.
          </Reveal>
        </div>

        <Reveal
          as="p"
          index={2}
          className="mt-10 max-w-measure border-l-2 border-accent pl-5 text-body text-fg"
        >
          Net metering is the single biggest driver of residential solar
          payback. Retail-rate NEM states see the fastest payback; net-billing
          and avoided-cost states need storage attachment or careful self-
          consumption sizing to pencil out. This table groups all 50 states
          by current regime so the comparison is explicit.
        </Reveal>
      </Section>

      {STATUS_ORDER.map((status) => {
        const list = groups.get(status) ?? [];
        if (list.length === 0) return null;
        return (
          <Section key={status} rule="top" aria-labelledby={`g-${status}`}>
            <SectionLabel rule>{status}</SectionLabel>
            <h2 id={`g-${status}`} className="mt-6 text-h2">
              {status} ({list.length} state{list.length === 1 ? "" : "s"})
            </h2>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full border-collapse text-body-sm">
                <thead>
                  <tr className="border-b border-line text-left label text-muted">
                    <th className="py-3 pr-4">State</th>
                    <th className="py-3 pr-4">Rank</th>
                    <th className="py-3 pr-4">Avg retail rate</th>
                    <th className="py-3 pr-4">Capacity (MW)</th>
                    <th className="py-3">Full guide</th>
                  </tr>
                </thead>
                <tbody>
                  {list
                    .slice()
                    .sort((a, b) => a.market.nationalRank - b.market.nationalRank)
                    .map((s) => (
                      <tr key={s.slug} className="border-b border-line/50">
                        <td className="py-3 pr-4 text-fg">{s.name}</td>
                        <td className="py-3 pr-4 text-muted tabular-nums">#{s.market.nationalRank}</td>
                        <td className="py-3 pr-4 text-muted tabular-nums">{fmtRate(s.averageRate)}</td>
                        <td className="py-3 pr-4 text-muted tabular-nums">
                          {new Intl.NumberFormat("en-US").format(s.market.installedCapacityMw)}
                        </td>
                        <td className="py-3">
                          <Link href={stateHref(s.slug)} className="text-accent hover:underline">
                            Open
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </Section>
        );
      })}

      <FinalCTA source="resources_nem_cta" />
    </main>
  );
}
