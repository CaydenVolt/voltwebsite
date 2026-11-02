import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { TrustStrip } from "@/components/site/TrustStrip";
import { getStates, stateHref } from "@/lib/content/states";

export const metadata: Metadata = pageMetadata({
  title: "State electric rates comparison: residential retail rates across the US",
  description:
    "Average residential electric rate for every US state, sorted highest to lowest. The single biggest driver of solar payback math alongside sun hours.",
  path: "/resources/state-electric-rates",
});

export default function StateElectricRates() {
  const states = [...getStates()].sort((a, b) => b.averageRate - a.averageRate);
  const fmtRate = (r: number) => `$${r.toFixed(3)}/kWh`;

  return (
    <main className="flex-1">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "State electric rates", path: "/resources/state-electric-rates" },
        ])}
      />
      <div aria-hidden className="h-nav-condensed" />
      <TrustStrip />

      <Section as="header" aria-labelledby="rates-h">
        <nav aria-label="Breadcrumb" className="label flex flex-wrap items-center gap-x-3 gap-y-1 text-muted">
          <Link href="/resources" className="hover:text-fg">Resources</Link>
          <span aria-hidden>/</span>
          <span className="text-accent">State electric rates</span>
        </nav>

        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <Reveal as="h1" id="rates-h" className="text-display-md lg:col-span-8">
            US state electric rates, highest to lowest.
          </Reveal>
          <Reveal
            as="p"
            index={1}
            className="mt-6 max-w-measure text-lead text-muted lg:col-span-4 lg:col-start-9 lg:mt-0"
          >
            Average residential retail rate across all 50 states. Rates sorted
            highest to lowest.
          </Reveal>
        </div>

        <Reveal
          as="p"
          index={2}
          className="mt-10 max-w-measure border-l-2 border-accent pl-5 text-body text-fg"
        >
          The retail electric rate is one of the two primary drivers of
          residential solar payback (the other is annual sun hours). High-rate
          states see faster payback: Hawaii, Connecticut, Massachusetts and
          California top the list. Low-rate states have longer payback despite
          sometimes-excellent sun: Washington, Nebraska, Idaho, Wyoming,
          Louisiana. The numbers below are state averages across the dominant
          investor-owned utilities; specific utilities vary.
        </Reveal>
      </Section>

      <Section rule="top" aria-labelledby="list-h">
        <SectionLabel rule>Sorted by retail rate</SectionLabel>
        <h2 id="list-h" className="sr-only">Rates by state</h2>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full border-collapse text-body-sm">
            <thead>
              <tr className="border-b border-line text-left label text-muted">
                <th className="py-3 pr-4">Rank</th>
                <th className="py-3 pr-4">State</th>
                <th className="py-3 pr-4">Avg retail rate</th>
                <th className="py-3 pr-4">Net metering status</th>
                <th className="py-3">Full guide</th>
              </tr>
            </thead>
            <tbody>
              {states.map((s, i) => (
                <tr key={s.slug} className="border-b border-line/50">
                  <td className="py-3 pr-4 text-muted tabular-nums">{i + 1}</td>
                  <td className="py-3 pr-4 text-fg">{s.name}</td>
                  <td className="py-3 pr-4 text-accent tabular-nums">{fmtRate(s.averageRate)}</td>
                  <td className="py-3 pr-4 text-muted">{s.netMetering.status}</td>
                  <td className="py-3">
                    <Link href={stateHref(s.slug)} className="text-accent hover:underline">Open</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <FinalCTA source="resources_rates_cta" />
    </main>
  );
}
