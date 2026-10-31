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
import { pad } from "@/lib/format";

export const metadata: Metadata = pageMetadata({
  title: "Solar by US state: market guides for the top 25",
  description:
    "Honest state-by-state guides to the US solar market: California, Texas, Florida, Arizona and the rest of the top 25 by installed capacity. Incentives, net metering, utilities, running a solar company.",
  path: "/solar",
});

/**
 * /solar index.
 *
 * Lists the state market pages in national-rank order (largest market at the
 * top). The individual pages serve the "solar companies in <state>" search
 * query; this index exists so a crawler can find them without the sitemap
 * and a visitor can jump between neighbouring states.
 */
export default function SolarByStateIndex() {
  const states = getStates();

  return (
    <main className="flex-1">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Solar by state", path: "/solar" },
        ])}
      />
      <div aria-hidden className="h-nav-condensed" />
      <TrustStrip />

      <Section as="header" aria-labelledby="states-index-h">
        <SectionLabel rule>Solar by state</SectionLabel>
        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <Reveal as="h1" id="states-index-h" className="text-display-xl lg:col-span-8">
            The US solar market, state by state.
          </Reveal>
          <Reveal
            as="p"
            index={1}
            className="mt-6 max-w-measure text-lead text-muted lg:col-span-4 lg:col-start-9 lg:mt-0"
          >
            Market size, incentives, net metering and utilities for the top
            twenty-five US states by installed solar capacity. Written for both
            operators running a solar business there and homeowners weighing
            the economics.
          </Reveal>
        </div>
      </Section>

      <Section rule="top" aria-label="Top ten US solar states">
        <SectionLabel rule>Ranked by installed capacity</SectionLabel>
        <ul className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {states.map((s, i) => (
            <Reveal key={s.slug} as="li" index={i}>
              <Link
                href={stateHref(s.slug)}
                data-cursor="grow"
                className="group flex h-full flex-col rounded-control border border-line bg-surface p-6 transition-colors duration-100 hover:border-fg"
              >
                <span className="label text-muted">#{pad(s.market.nationalRank)}</span>
                <h2 className="mt-4 text-h3 text-fg">Solar in {s.name}</h2>
                <p className="mt-3 text-body-sm text-muted">
                  {new Intl.NumberFormat("en-US").format(s.market.installedCapacityMw)} MW installed. {s.netMetering.status}.
                </p>
                <p className="label mt-auto flex items-center gap-2 pt-6 text-accent">
                  Open guide
                  <svg aria-hidden width="1em" height="1em" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
                    <path d="M2 8h11M8.5 3.5 13 8l-4.5 4.5" />
                  </svg>
                </p>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      <FinalCTA source="solar_states_index_cta" />
    </main>
  );
}
