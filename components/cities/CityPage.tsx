import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { absolute, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { TrustStrip } from "@/components/site/TrustStrip";
import { bookingHref } from "@/lib/site";
import {
  cityHref,
  getCitiesByState,
  type City,
} from "@/lib/content/cities";
import { stateHref, type State } from "@/lib/content/states";

/**
 * The shared wrapper every /solar/<state>/<city> page renders. Structured as:
 *
 *   breadcrumb -> H1 -> direct answer -> market snapshot ->
 *   climate -> utilities -> permits -> installer landscape ->
 *   nearby cities -> FAQ -> commercial CTA -> FinalCTA.
 *
 * Written for both a homeowner comparing installers in their city and a
 * solar operator researching that market. The commercial CTA targets the
 * operator because that is Volt's customer; the editorial content is honest
 * for either audience.
 */
export function CityPage({ city, state }: { city: City; state: State }) {
  const path = cityHref(city.stateSlug, city.slug);
  const statePath = stateHref(state.slug);

  const fmtInt = (n: number) => new Intl.NumberFormat("en-US").format(Math.round(n));
  const fmtMoney = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 }).format(n);

  const nearby = getCitiesByState(city.stateSlug).filter((c) => c.slug !== city.slug);

  return (
    <main className="flex-1">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Solar by state", path: "/solar" },
            { name: state.name, path: statePath },
            { name: city.name, path },
          ]),
          faqSchema(city.faq, absolute(path)),
        ]}
      />

      <div aria-hidden className="h-nav-condensed" />
      <TrustStrip />

      {/* Header */}
      <Section as="header" aria-labelledby="city-h">
        <nav aria-label="Breadcrumb" className="label flex flex-wrap items-center gap-x-3 gap-y-1 text-muted">
          <Link href="/solar" className="hover:text-fg">
            Solar by state
          </Link>
          <span aria-hidden>/</span>
          <Link href={statePath} className="hover:text-fg">
            {state.name}
          </Link>
          <span aria-hidden>/</span>
          <span className="text-accent">{city.name}</span>
        </nav>

        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <Reveal as="h1" id="city-h" className="text-display-md lg:col-span-8">
            {city.title}
          </Reveal>
          <Reveal
            as="p"
            index={1}
            className="mt-6 max-w-measure text-lead text-muted lg:col-span-4 lg:col-start-9 lg:mt-0"
          >
            Metro of {fmtInt(city.market.metroPopulationK)}K residents in {state.name}.
          </Reveal>
        </div>

        <Reveal
          as="p"
          index={2}
          className="mt-10 max-w-measure border-l-2 border-accent pl-5 text-body text-fg"
        >
          {city.answer}
        </Reveal>
      </Section>

      {/* Market snapshot */}
      <Section rule="top" aria-labelledby="market-h">
        <SectionLabel rule>Local market</SectionLabel>
        <h2 id="market-h" className="mt-6 text-h2">
          Solar in {city.name} by the numbers
        </h2>

        <dl className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          <Stat label="Metro population" value={`${fmtInt(city.market.metroPopulationK)}K`} />
          <Stat label="Typical cost per watt" value={fmtMoney(city.market.averageCostPerWatt)} />
          <Stat
            label="Paid lead cost"
            value={`${fmtMoney(city.market.leadCostUsd.low)} to ${fmtMoney(city.market.leadCostUsd.high)}`}
          />
          <Stat label="Installer density" value={city.market.installerDensity} />
        </dl>
      </Section>

      {/* Climate */}
      <Section rule="top" aria-labelledby="climate-h">
        <SectionLabel rule>Climate for solar</SectionLabel>
        <h2 id="climate-h" className="mt-6 text-h2">
          How much sun does {city.name} get?
        </h2>

        <div className="mt-10 grid gap-x-6 gap-y-10 lg:grid-cols-2">
          <Reveal as="div">
            <p className="label text-muted">Peak sun hours per day</p>
            <p className="mt-2 text-h3 text-fg tabular-nums">{city.climate.peakSunHours.toFixed(1)}</p>
          </Reveal>
          <Reveal as="div" index={1}>
            <p className="label text-muted">Sunny days per year</p>
            <p className="mt-2 text-h3 text-fg tabular-nums">{fmtInt(city.climate.sunnyDays)}</p>
          </Reveal>
        </div>

        <Reveal as="p" className="mt-10 max-w-measure text-body text-fg">
          {city.climate.note}
        </Reveal>
      </Section>

      {/* Utilities */}
      <Section rule="top" aria-labelledby="utilities-h">
        <SectionLabel rule>Who delivers power here</SectionLabel>
        <h2 id="utilities-h" className="mt-6 text-h2">
          Utilities serving {city.name}
        </h2>
        <Reveal as="p" className="mt-6 max-w-measure text-lead text-fg">
          {city.utilities.join(", ")}.
        </Reveal>
        <Reveal as="p" index={1} className="mt-6 max-w-measure text-body text-muted">
          For how exports are credited and what the statewide rules look like, see the{" "}
          <Link href={statePath} className="text-accent underline-offset-4 hover:underline">
            {state.name} solar market guide
          </Link>
          .
        </Reveal>
      </Section>

      {/* Permits */}
      <Section rule="top" aria-labelledby="permits-h">
        <SectionLabel rule>Permits and inspection</SectionLabel>
        <h2 id="permits-h" className="mt-6 text-h2">
          Pulling a residential solar permit in {city.name}
        </h2>

        <div className="mt-10 grid gap-x-6 gap-y-10 lg:grid-cols-3">
          <Reveal as="div">
            <p className="label text-muted">Permit office</p>
            <p className="mt-2 text-body text-fg">{city.permits.office}</p>
          </Reveal>
          <Reveal as="div" index={1}>
            <p className="label text-muted">Typical turnaround</p>
            <p className="mt-2 text-body text-fg">{city.permits.turnaroundWeeks}</p>
          </Reveal>
          <Reveal as="div" index={2}>
            <p className="label text-muted">SolarAPP+ status</p>
            <p className="mt-2 text-body text-fg">{city.permits.solarApp}</p>
          </Reveal>
        </div>

        <Reveal as="p" className="mt-10 max-w-measure text-body text-fg">
          {city.permits.note}
        </Reveal>
      </Section>

      {/* Installer landscape */}
      <Section rule="top" aria-labelledby="landscape-h">
        <SectionLabel rule>Running a solar company here</SectionLabel>
        <h2 id="landscape-h" className="sr-only">
          Running a solar company in {city.name}
        </h2>
        <Reveal as="p" className="mt-6 max-w-measure text-lead text-fg">
          {city.installerLandscape}
        </Reveal>
      </Section>

      {/* Nearby cities */}
      {nearby.length > 0 ? (
        <Section rule="top" aria-labelledby="nearby-h">
          <SectionLabel rule>Other cities in {state.name}</SectionLabel>
          <h2 id="nearby-h" className="sr-only">
            Other {state.name} cities covered
          </h2>
          <ul className="mt-8 grid gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {nearby.map((c, i) => (
              <Reveal key={c.slug} as="li" index={i}>
                <Link
                  href={cityHref(c.stateSlug, c.slug)}
                  data-cursor="grow"
                  className="group flex items-center justify-between rounded-control border border-line bg-surface px-5 py-4 transition-colors duration-100 hover:border-fg"
                >
                  <span className="text-h3 text-fg">Solar in {c.name}</span>
                  <svg aria-hidden width="1em" height="1em" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" className="text-accent">
                    <path d="M2 8h11M8.5 3.5 13 8l-4.5 4.5" />
                  </svg>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Section>
      ) : null}

      {/* FAQ */}
      <Section rule="top" aria-labelledby="faq-h">
        <SectionLabel rule>Questions people ask</SectionLabel>
        <h2 id="faq-h" className="mt-6 text-h2">
          Solar in {city.name}: FAQ
        </h2>
        <dl className="mt-8 flex flex-col gap-8">
          {city.faq.map((f, i) => (
            <Reveal as="div" key={f.q} index={i} className="border-t border-line pt-6">
              <dt className="text-h3 text-fg">{f.q}</dt>
              <dd className="mt-3 max-w-measure text-body text-fg">{f.a}</dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      {/* Commercial CTA */}
      <Section rule="top" aria-labelledby="apply-h" rhythm="sm">
        <SectionLabel rule>For {city.name} solar installers</SectionLabel>
        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <Reveal as="h2" id="apply-h" className="text-h2 lg:col-span-7">
            Running a solar company in {city.name}?
          </Reveal>
          <Reveal as="div" index={1} className="mt-6 max-w-measure lg:col-span-5 lg:col-start-8 lg:mt-0">
            <p className="text-body text-muted">
              Volt is the complete sales system for US solar companies: website, missed-call text
              back, follow-up sequences, review funnel and on-site SEO on one flat monthly fee.
              Built for operators who already have the leads but are losing them in the follow-up.
            </p>
            <p className="mt-6">
              <Button
                href={bookingHref(`city_${city.stateSlug}_${city.slug}_apply`)}
                source={`city_${city.stateSlug}_${city.slug}_apply`}
                external
              >
                Book a 20-minute call
              </Button>
            </p>
          </Reveal>
        </div>
      </Section>

      <FinalCTA source={`city_${city.stateSlug}_${city.slug}_cta`} />
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="label text-muted">{label}</dt>
      <dd className="mt-2 font-display text-h2 text-fg tabular-nums">{value}</dd>
    </div>
  );
}
