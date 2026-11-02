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
  title: "Winter snow derating by city: where solar yield loss matters most",
  description:
    "US cities where winter snow materially reduces annual solar production. Honest annual yield modelling matters most in these metros.",
  path: "/resources/winter-snow-derating-cities",
});

/**
 * Cities whose climate.note mentions substantial winter snow derating or
 * lake-effect weather. Groups by severity based on text match.
 */
const SNOW_MARKERS = ["snow derating", "snow cover", "snow accumulation", "lake-effect snow", "winter snow"];

export default function WinterSnowDeratingCities() {
  const allCities = getCities();
  const cities = allCities.filter((c) =>
    SNOW_MARKERS.some((m) => c.climate.note.toLowerCase().includes(m.toLowerCase())),
  );

  // Separate severe (20%+ losses mentioned) from moderate
  const severe = cities.filter((c) => {
    const n = c.climate.note.toLowerCase();
    return n.includes("20 to 30") || n.includes("25 percent") || n.includes("20 to 25") || n.includes("lake-effect");
  });
  const moderate = cities.filter((c) => !severe.includes(c));

  return (
    <main className="flex-1">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Winter snow derating cities", path: "/resources/winter-snow-derating-cities" },
        ])}
      />
      <div aria-hidden className="h-nav-condensed" />
      <TrustStrip />

      <Section as="header" aria-labelledby="snow-h">
        <nav aria-label="Breadcrumb" className="label flex flex-wrap items-center gap-x-3 gap-y-1 text-muted">
          <Link href="/resources" className="hover:text-fg">Resources</Link>
          <span aria-hidden>/</span>
          <span className="text-accent">Winter snow derating cities</span>
        </nav>

        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <Reveal as="h1" id="snow-h" className="text-display-md lg:col-span-8">
            Winter snow derating by US city.
          </Reveal>
          <Reveal
            as="p"
            index={1}
            className="mt-6 max-w-measure text-lead text-muted lg:col-span-4 lg:col-start-9 lg:mt-0"
          >
            US cities where winter snow materially reduces annual solar
            production. Honest annual yield modelling matters most here.
          </Reveal>
        </div>

        <Reveal
          as="p"
          index={2}
          className="mt-10 max-w-measure border-l-2 border-accent pl-5 text-body text-fg"
        >
          Snow accumulation on solar panels during winter months reduces
          annual production by 5 to 30 percent depending on climate and
          installation. The worst are Great Lakes lake-effect-snow cities
          (Buffalo, Syracuse, Erie, Rochester) and northern plains cities
          (Fargo, Minneapolis). Steep south-facing panels shed snow faster
          than low-angle flat mounts; honest sales conversations model this
          derating rather than overselling year-one output.
        </Reveal>
      </Section>

      {severe.length > 0 && (
        <Section rule="top" aria-labelledby="severe-h">
          <SectionLabel rule>Severe winter snow derating</SectionLabel>
          <h2 id="severe-h" className="mt-6 text-h2">
            Severe (15-30 percent annual yield loss)
          </h2>
          <p className="mt-6 max-w-measure text-body text-muted">
            Great Lakes lake-effect-snow cities and northern plains cities
            where extended winter snow cover reduces annual yield meaningfully.
          </p>
          <ul className="mt-8 grid gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {severe.map((c, i) => {
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
                    <p className="mt-3 text-body-sm text-muted tabular-nums">
                      {c.climate.peakSunHours.toFixed(1)} peak sun hours/day
                    </p>
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </Section>
      )}

      {moderate.length > 0 && (
        <Section rule="top" aria-labelledby="moderate-h">
          <SectionLabel rule>Moderate winter snow derating</SectionLabel>
          <h2 id="moderate-h" className="mt-6 text-h2">
            Moderate (5-15 percent annual yield loss)
          </h2>
          <p className="mt-6 max-w-measure text-body text-muted">
            Northeastern and Midwestern cities where winter snow is a real
            factor but not as severe as lake-effect regions.
          </p>
          <ul className="mt-8 grid gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {moderate.map((c, i) => {
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
                    <p className="mt-3 text-body-sm text-muted tabular-nums">
                      {c.climate.peakSunHours.toFixed(1)} peak sun hours/day
                    </p>
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </Section>
      )}

      <FinalCTA source="resources_snow_cta" />
    </main>
  );
}
