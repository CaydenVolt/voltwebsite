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
  title: "Municipal utility cities for solar: where economics differ from the IOU",
  description:
    "US cities served by a municipal utility rather than the state's dominant investor-owned utility. Export compensation and permits often differ substantially.",
  path: "/resources/municipal-utility-cities",
});

/**
 * Cities whose primary utility (first entry in utilities[]) names a municipal
 * or public power provider rather than the state's dominant investor-owned
 * utility. The heuristic is a substring match on common municipal markers.
 */
const MUNICIPAL_MARKERS = [
  "municipal",
  "public power",
  "public utility",
  "LADWP",
  "SMUD",
  "LES",
  "OPPD",
  "APU",
  "PWP",
  "SCL",
  "Seattle City Light",
  "Austin Energy",
  "CPS Energy",
  "JEA",
  "OUC",
  "TECO",
  "Tacoma Power",
  "Burlington Electric",
  "BED",
  "RPU",
  "Rochester Public Utilities",
  "CWLP",
  "Lakeland Electric",
  "Marietta Power",
  "Garland Power",
  "Naperville Electric",
  "EWEB",
  "MID",
  "Modesto Irrigation",
  "Riverside Public Utilities",
  "LP&L",
  "Lubbock Power",
  "KUB",
  "MLGW",
  "NES",
  "EPB",
  "Chugach",
  "cooperative",
];

export default function MunicipalUtilityCities() {
  const cities = getCities().filter((c) =>
    c.utilities.some((u) => MUNICIPAL_MARKERS.some((m) => u.includes(m))),
  );

  return (
    <main className="flex-1">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Municipal utility cities", path: "/resources/municipal-utility-cities" },
        ])}
      />
      <div aria-hidden className="h-nav-condensed" />
      <TrustStrip />

      <Section as="header" aria-labelledby="muni-h">
        <nav aria-label="Breadcrumb" className="label flex flex-wrap items-center gap-x-3 gap-y-1 text-muted">
          <Link href="/resources" className="hover:text-fg">Resources</Link>
          <span aria-hidden>/</span>
          <span className="text-accent">Municipal utility cities</span>
        </nav>

        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <Reveal as="h1" id="muni-h" className="text-display-md lg:col-span-8">
            Municipal utility cities for solar.
          </Reveal>
          <Reveal
            as="p"
            index={1}
            className="mt-6 max-w-measure text-lead text-muted lg:col-span-4 lg:col-start-9 lg:mt-0"
          >
            Cities served by a municipal utility, public power district or
            cooperative rather than the state's dominant investor-owned utility.
          </Reveal>
        </div>

        <Reveal
          as="p"
          index={2}
          className="mt-10 max-w-measure border-l-2 border-accent pl-5 text-body text-fg"
        >
          Municipal utilities, public power districts and cooperatives are not
          regulated by the state public utility commission that oversees the
          dominant investor-owned utility. They set their own net metering
          rules, usually with close-to-retail export compensation that is
          substantially more favourable than the IOU regime in neighbouring
          cities. For a solar operator, the muni-vs-IOU boundary materially
          changes the economics of a quote; verifying utility by address up
          front saves both parties time.
        </Reveal>
      </Section>

      <Section rule="top" aria-labelledby="list-h">
        <SectionLabel rule>Cities</SectionLabel>
        <h2 id="list-h" className="sr-only">
          Municipal utility cities we cover
        </h2>
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
                    {c.utilities[0]}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </Section>

      <FinalCTA source="resources_muni_cta" />
    </main>
  );
}
