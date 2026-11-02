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
  title: "Community Choice Aggregator cities for solar",
  description:
    "US cities with a Community Choice Aggregator (CCA) bundling generation alongside the dominant utility's delivery. Mostly California.",
  path: "/resources/cca-cities",
});

const CCA_MARKERS = [
  "CCA",
  "Community Choice",
  "Clean Energy",
  "EBCE",
  "SJCE",
  "San Diego Community Power",
  "CleanPowerSF",
  "San Jose Clean Energy",
  "East Bay Community Energy",
  "SVCE",
  "Silicon Valley Clean Energy",
  "Alliance",
  "SJVPA",
];

export default function CCACities() {
  const cities = getCities().filter((c) =>
    c.utilities.some((u) => CCA_MARKERS.some((m) => u.includes(m))),
  );

  return (
    <main className="flex-1">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "CCA cities", path: "/resources/cca-cities" },
        ])}
      />
      <div aria-hidden className="h-nav-condensed" />
      <TrustStrip />

      <Section as="header" aria-labelledby="cca-h">
        <nav aria-label="Breadcrumb" className="label flex flex-wrap items-center gap-x-3 gap-y-1 text-muted">
          <Link href="/resources" className="hover:text-fg">Resources</Link>
          <span aria-hidden>/</span>
          <span className="text-accent">CCA cities</span>
        </nav>

        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <Reveal as="h1" id="cca-h" className="text-display-md lg:col-span-8">
            Community Choice Aggregator cities.
          </Reveal>
          <Reveal
            as="p"
            index={1}
            className="mt-6 max-w-measure text-lead text-muted lg:col-span-4 lg:col-start-9 lg:mt-0"
          >
            US cities with a CCA bundling the generation portion of
            electricity alongside the dominant utility's delivery.
          </Reveal>
        </div>

        <Reveal
          as="p"
          index={2}
          className="mt-10 max-w-measure border-l-2 border-accent pl-5 text-body text-fg"
        >
          A Community Choice Aggregator sources the generation portion of
          electricity from a different mix than the dominant investor-owned
          utility, often with higher renewable content and sometimes at a
          lower generation rate. The IOU still delivers the electricity and
          handles billing. For residential solar, the CCA affects the
          generation rate on consumed electricity but does not change net
          metering treatment, which is governed by the delivery utility's
          tariff (PG&E's NEM 3.0 in California, for example). CCAs are
          concentrated in California with a few in New York, Massachusetts
          and Illinois.
        </Reveal>
      </Section>

      <Section rule="top" aria-labelledby="list-h">
        <SectionLabel rule>Cities with CCAs</SectionLabel>
        <h2 id="list-h" className="sr-only">CCA cities covered</h2>
        <ul className="mt-8 grid gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((c, i) => {
            const state = getState(c.stateSlug);
            return (
              <Reveal key={`${c.stateSlug}/${c.slug}`} as="li" index={i}>
                <Link
                  href={cityHref(c.stateSlug, c.slug)}
                  data-cursor="grow"
                  className="group flex h-full flex-col rounded-control border border-line bg-surface p-6 transition-colors duration-100 hover:border-fg"
                >
                  <p className="label text-muted">
                    {state ? (
                      <Link href={stateHref(c.stateSlug)} className="hover:underline">
                        {state.name}
                      </Link>
                    ) : (
                      c.stateSlug
                    )}
                  </p>
                  <h3 className="mt-2 text-h3 text-fg">Solar in {c.name}</h3>
                  <p className="mt-3 text-body-sm text-muted">
                    {c.utilities.find((u) => CCA_MARKERS.some((m) => u.includes(m))) ?? c.utilities[0]}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </Section>

      <FinalCTA source="resources_cca_cta" />
    </main>
  );
}
