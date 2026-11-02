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
  title: "Hurricane and HVHZ solar permits: coastal cities with wind-load engineering",
  description:
    "US coastal cities where hurricane wind-load engineering is a real residential solar permit requirement. HVHZ specifics for Miami-Dade and Broward.",
  path: "/resources/hurricane-and-hvhz-permits",
});

/**
 * Cities with hurricane exposure flagged in climate.note or permits.note.
 * Also surfaces HVHZ-specific cities (Miami-Dade and Broward counties).
 */
const HURRICANE_MARKERS = ["hurricane", "HVHZ", "wind-load", "wind load", "tropical storm"];

export default function HurricaneAndHVHZPermits() {
  const cities = getCities().filter((c) =>
    HURRICANE_MARKERS.some(
      (m) =>
        c.climate.note.toLowerCase().includes(m.toLowerCase()) ||
        c.permits.note.toLowerCase().includes(m.toLowerCase()),
    ),
  );

  const hvhzCities = cities.filter(
    (c) => c.permits.note.toLowerCase().includes("hvhz") || c.climate.note.toLowerCase().includes("hvhz"),
  );
  const nonHvhzCoastal = cities.filter((c) => !hvhzCities.includes(c));

  return (
    <main className="flex-1">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Hurricane and HVHZ permits", path: "/resources/hurricane-and-hvhz-permits" },
        ])}
      />
      <div aria-hidden className="h-nav-condensed" />
      <TrustStrip />

      <Section as="header" aria-labelledby="hurricane-h">
        <nav aria-label="Breadcrumb" className="label flex flex-wrap items-center gap-x-3 gap-y-1 text-muted">
          <Link href="/resources" className="hover:text-fg">Resources</Link>
          <span aria-hidden>/</span>
          <span className="text-accent">Hurricane and HVHZ permits</span>
        </nav>

        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <Reveal as="h1" id="hurricane-h" className="text-display-md lg:col-span-8">
            Hurricane and HVHZ solar permit cities.
          </Reveal>
          <Reveal
            as="p"
            index={1}
            className="mt-6 max-w-measure text-lead text-muted lg:col-span-4 lg:col-start-9 lg:mt-0"
          >
            US coastal cities where hurricane wind-load engineering is a real
            residential solar permit requirement.
          </Reveal>
        </div>

        <Reveal
          as="p"
          index={2}
          className="mt-10 max-w-measure border-l-2 border-accent pl-5 text-body text-fg"
        >
          Hurricane and tropical storm exposure drives permit requirements
          along the US coast. The strictest regime is the Florida Building
          Code's High Velocity Hurricane Zone (HVHZ), which covers Miami-Dade
          and Broward counties and requires 175 mph wind-load design plus
          Miami-Dade Notice of Acceptance (NOA) racking. Outside the HVHZ,
          coastal cities still require 130 to 155 mph wind-load design under
          state building codes; Orleans Parish Louisiana post-Katrina
          enforcement is strict at 155 mph.
        </Reveal>
      </Section>

      {hvhzCities.length > 0 && (
        <Section rule="top" aria-labelledby="hvhz-h">
          <SectionLabel rule>HVHZ cities (Miami-Dade and Broward)</SectionLabel>
          <h2 id="hvhz-h" className="mt-6 text-h2">
            High Velocity Hurricane Zone (175 mph design)
          </h2>
          <p className="mt-6 max-w-measure text-body text-muted">
            Residential solar permits require stamped structural engineering
            for 175 mph design wind speed and NOA-approved racking. SolarAPP+
            is not accepted in HVHZ jurisdictions.
          </p>
          <ul className="mt-8 grid gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {hvhzCities.map((c, i) => {
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
                      {c.permits.turnaroundWeeks}
                    </p>
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </Section>
      )}

      {nonHvhzCoastal.length > 0 && (
        <Section rule="top" aria-labelledby="coastal-h">
          <SectionLabel rule>Hurricane-exposed cities outside HVHZ</SectionLabel>
          <h2 id="coastal-h" className="mt-6 text-h2">
            Other hurricane-exposed cities
          </h2>
          <p className="mt-6 max-w-measure text-body text-muted">
            State building codes require 130 to 155 mph wind-load design in
            these cities. Standard commercial racking that is not NOA-rated
            is acceptable. Marine-grade stainless hardware is sensible for
            beachfront installations.
          </p>
          <ul className="mt-8 grid gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {nonHvhzCoastal.map((c, i) => {
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
                      {c.permits.turnaroundWeeks}
                    </p>
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </Section>
      )}

      <FinalCTA source="resources_hurricane_cta" />
    </main>
  );
}
