import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { TrustStrip } from "@/components/site/TrustStrip";
import { getCities, cityHref } from "@/lib/content/cities";
import { getState, stateHref } from "@/lib/content/states";

export const metadata: Metadata = pageMetadata({
  title: "Solar permits by state and city: SolarAPP+ map + turnaround",
  description:
    "Permit office turnaround and SolarAPP+ acceptance for 140+ US cities. See which cities approve residential solar permits same-day vs 4-8 weeks.",
  path: "/resources/solar-permits-by-state",
});

/**
 * /resources/solar-permits-by-state.
 *
 * Aggregates each city's `permits.office`, `permits.turnaroundWeeks` and
 * `permits.solarApp` into a scannable cross-city table grouped by state.
 * Highlights SolarAPP+ accepting cities so operators can target them.
 */
export default function SolarPermitsByState() {
  const cities = getCities();
  const byState = new Map<string, typeof cities[number][]>();
  for (const c of cities) {
    if (!byState.has(c.stateSlug)) byState.set(c.stateSlug, []);
    byState.get(c.stateSlug)!.push(c);
  }
  const stateSlugs = Array.from(byState.keys()).sort((a, b) => {
    const sa = getState(a);
    const sb = getState(b);
    return (sa?.market.nationalRank ?? 99) - (sb?.market.nationalRank ?? 99);
  });

  const solarAppAccepted = cities.filter((c) => c.permits.solarApp === "Accepted");

  return (
    <main className="flex-1">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Solar permits by state", path: "/resources/solar-permits-by-state" },
        ])}
      />
      <div aria-hidden className="h-nav-condensed" />
      <TrustStrip />

      <Section as="header" aria-labelledby="permits-h">
        <nav aria-label="Breadcrumb" className="label flex flex-wrap items-center gap-x-3 gap-y-1 text-muted">
          <Link href="/resources" className="hover:text-fg">Resources</Link>
          <span aria-hidden>/</span>
          <span className="text-accent">Solar permits by state</span>
        </nav>

        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <Reveal as="h1" id="permits-h" className="text-display-md lg:col-span-8">
            Solar permits by US state and city.
          </Reveal>
          <Reveal
            as="p"
            index={1}
            className="mt-6 max-w-measure text-lead text-muted lg:col-span-4 lg:col-start-9 lg:mt-0"
          >
            Permit turnaround and SolarAPP+ acceptance for {cities.length} US
            cities. The real reason project timelines vary by jurisdiction.
          </Reveal>
        </div>

        <Reveal
          as="p"
          index={2}
          className="mt-10 max-w-measure border-l-2 border-accent pl-5 text-body text-fg"
        >
          SolarAPP+ (Solar Automated Permit Processing) is the US DOE-backed
          instant-approval system for standard residential solar installations.
          Where accepted, it drops permit turnaround from weeks to a day or
          two. As of the last update, {solarAppAccepted.length} of {cities.length}{" "}
          cities covered here accept SolarAPP+. The rest still run manual
          review with turnarounds from 2 to 8 weeks.
        </Reveal>
      </Section>

      {stateSlugs.map((slug) => {
        const state = getState(slug);
        const list = byState.get(slug) ?? [];
        if (!state || list.length === 0) return null;
        return (
          <Section key={slug} rule="top" aria-labelledby={`s-${slug}`}>
            <SectionLabel rule>
              <Link href={stateHref(slug)} className="hover:underline">
                {state.name}
              </Link>
            </SectionLabel>
            <h2 id={`s-${slug}`} className="mt-6 text-h2">
              {state.name} permit timelines
            </h2>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full border-collapse text-body-sm">
                <thead>
                  <tr className="border-b border-line text-left label text-muted">
                    <th className="py-3 pr-4">City</th>
                    <th className="py-3 pr-4">Permit office</th>
                    <th className="py-3 pr-4">Turnaround</th>
                    <th className="py-3 pr-4">SolarAPP+</th>
                    <th className="py-3">Full guide</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((c) => (
                    <tr key={c.slug} className="border-b border-line/50">
                      <td className="py-3 pr-4 text-fg">{c.name}</td>
                      <td className="py-3 pr-4 text-muted">{c.permits.office}</td>
                      <td className="py-3 pr-4 text-muted">{c.permits.turnaroundWeeks}</td>
                      <td className="py-3 pr-4">
                        <span
                          className={
                            c.permits.solarApp === "Accepted"
                              ? "text-accent"
                              : c.permits.solarApp === "In pilot"
                              ? "text-fg"
                              : "text-muted"
                          }
                        >
                          {c.permits.solarApp}
                        </span>
                      </td>
                      <td className="py-3">
                        <Link href={cityHref(c.stateSlug, c.slug)} className="text-accent hover:underline">
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

      <FinalCTA source="resources_permits_cta" />
    </main>
  );
}
