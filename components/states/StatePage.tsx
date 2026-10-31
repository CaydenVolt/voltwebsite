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
import { stateHref, type State } from "@/lib/content/states";
import { cityHref, getCitiesByState } from "@/lib/content/cities";

/**
 * The shared wrapper every /solar/<state> page renders. Structured as:
 *
 *   breadcrumb -> H1 -> direct answer -> market snapshot (4 stat tiles) ->
 *   market notes -> net metering -> electric rates -> utilities ->
 *   incentives list -> permits -> installer landscape -> FAQ -> commercial
 *   CTA -> FinalCTA.
 *
 * Written to be useful for both a homeowner comparing solar in their state
 * and an installer researching the market. The commercial CTA is directed
 * at the installer because that is Volt's customer; the editorial content
 * is honest for either audience.
 */
export function StatePage({ state }: { state: State }) {
  const path = stateHref(state.slug);
  const cities = getCitiesByState(state.slug);

  const fmtInt = (n: number) => new Intl.NumberFormat("en-US").format(Math.round(n));
  const fmtMoney = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 }).format(n);

  return (
    <main className="flex-1">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Solar by state", path: "/solar" },
            { name: state.name, path },
          ]),
          faqSchema(state.faq, absolute(path)),
        ]}
      />

      <div aria-hidden className="h-nav-condensed" />
      <TrustStrip />

      {/* Header: breadcrumb, H1, framing paragraph, direct answer, CTA */}
      <Section as="header" aria-labelledby="state-h">
        <nav aria-label="Breadcrumb" className="label flex flex-wrap items-center gap-x-3 gap-y-1 text-muted">
          <Link href="/solar" className="hover:text-fg">
            Solar by state
          </Link>
          <span aria-hidden>/</span>
          <span className="text-accent">{state.name}</span>
        </nav>

        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <Reveal as="h1" id="state-h" className="text-display-md lg:col-span-8">
            {state.title}
          </Reveal>
          <Reveal
            as="p"
            index={1}
            className="mt-6 max-w-measure text-lead text-muted lg:col-span-4 lg:col-start-9 lg:mt-0"
          >
            Ranked {ordinal(state.market.nationalRank)} in the US for installed solar capacity.
          </Reveal>
        </div>

        <Reveal
          as="p"
          index={2}
          className="mt-10 max-w-measure border-l-2 border-accent pl-5 text-body text-fg"
        >
          {state.answer}
        </Reveal>
      </Section>

      {/* Market snapshot */}
      <Section rule="top" aria-labelledby="market-h">
        <SectionLabel rule>Market snapshot</SectionLabel>
        <h2 id="market-h" className="mt-6 text-h2">
          Solar in {state.name} by the numbers
        </h2>

        <dl className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          <Stat label="Installed capacity" value={`${fmtInt(state.market.installedCapacityMw)} MW`} />
          <Stat label="Homes powered" value={`${fmtInt(state.market.homesPoweredK)}K`} />
          <Stat label="Solar share of electricity" value={`${state.market.percentOfElectricity}%`} />
          <Stat label="Solar jobs in state" value={fmtInt(state.market.jobs)} />
          <Stat label="Typical cost per watt" value={fmtMoney(state.market.averageCostPerWatt)} />
          <Stat label="US ranking" value={`#${state.market.nationalRank}`} />
        </dl>

        <Reveal as="p" className="mt-10 max-w-measure text-body text-fg">
          {state.marketNotes}
        </Reveal>
      </Section>

      {/* Net metering + rates */}
      <Section rule="top" aria-labelledby="rates-h">
        <SectionLabel rule>Rates and net metering</SectionLabel>
        <h2 id="rates-h" className="mt-6 text-h2">
          Electric rates and how solar export is credited
        </h2>

        <div className="mt-10 grid gap-x-6 gap-y-10 lg:grid-cols-2">
          <Reveal as="div">
            <p className="label text-muted">Net metering status</p>
            <p className="mt-2 text-h3 text-fg">{state.netMetering.status}</p>
            <p className="mt-3 max-w-measure text-body text-fg">{state.netMetering.explanation}</p>
          </Reveal>
          <Reveal as="div" index={1}>
            <p className="label text-muted">Average residential rate</p>
            <p className="mt-2 text-h3 text-fg">{fmtMoney(state.averageRate)}/kWh</p>
            <p className="mt-3 max-w-measure text-body text-fg">{state.rateNote}</p>
          </Reveal>
        </div>

        <Reveal as="div" className="mt-10">
          <p className="label text-muted">Major utilities</p>
          <p className="mt-2 max-w-measure text-body text-fg">{state.utilities.join(", ")}.</p>
        </Reveal>
      </Section>

      {/* Incentives */}
      <Section rule="top" aria-labelledby="incentives-h">
        <SectionLabel rule>Incentives</SectionLabel>
        <h2 id="incentives-h" className="mt-6 text-h2">
          State and local solar incentives in {state.name}
        </h2>
        <p className="mt-6 max-w-measure text-body text-muted">
          Beyond the 30 percent federal Residential Clean Energy Credit, which applies in every US
          state through 2032, {state.name} has these state and local programmes.
        </p>

        <dl className="mt-10 flex flex-col gap-8">
          {state.incentives.map((inc, i) => (
            <Reveal as="div" key={inc.name} index={i} className="border-t border-line pt-6">
              <dt className="text-h3 text-fg">{inc.name}</dt>
              <dd className="mt-3 max-w-measure text-body text-fg">{inc.text}</dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      {/* Permits and interconnection */}
      <Section rule="top" aria-labelledby="permits-h">
        <SectionLabel rule>Permits and interconnection</SectionLabel>
        <h2 id="permits-h" className="sr-only">
          Permits and interconnection
        </h2>
        <Reveal as="p" className="mt-6 max-w-measure text-lead text-fg">
          {state.permits}
        </Reveal>
      </Section>

      {/* Installer landscape */}
      <Section rule="top" aria-labelledby="landscape-h">
        <SectionLabel rule>Running a solar company here</SectionLabel>
        <h2 id="landscape-h" className="sr-only">
          Running a solar company in {state.name}
        </h2>
        <Reveal as="p" className="mt-6 max-w-measure text-lead text-fg">
          {state.installerLandscape}
        </Reveal>
      </Section>

      {/* Cities covered within this state */}
      {cities.length > 0 ? (
        <Section rule="top" aria-labelledby="cities-h">
          <SectionLabel rule>Cities we cover</SectionLabel>
          <h2 id="cities-h" className="mt-6 text-h2">
            Solar in {state.name} metros
          </h2>
          <ul className="mt-8 grid gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((c, i) => (
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
          Solar in {state.name}: FAQ
        </h2>
        <dl className="mt-8 flex flex-col gap-8">
          {state.faq.map((f, i) => (
            <Reveal as="div" key={f.q} index={i} className="border-t border-line pt-6">
              <dt className="text-h3 text-fg">{f.q}</dt>
              <dd className="mt-3 max-w-measure text-body text-fg">{f.a}</dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      {/* Commercial CTA before FinalCTA */}
      <Section rule="top" aria-labelledby="apply-h" rhythm="sm">
        <SectionLabel rule>For {state.name} solar installers</SectionLabel>
        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <Reveal as="h2" id="apply-h" className="text-h2 lg:col-span-7">
            Running a solar company in {state.name}?
          </Reveal>
          <Reveal as="div" index={1} className="mt-6 max-w-measure lg:col-span-5 lg:col-start-8 lg:mt-0">
            <p className="text-body text-muted">
              Volt is the complete sales system for US solar companies: website, missed-call text
              back, follow-up sequences, review funnel and on-site SEO on one flat monthly fee.
              Already working with {state.name} installers.
            </p>
            <p className="mt-6">
              <Button
                href={bookingHref(`state_${state.slug}_apply`)}
                source={`state_${state.slug}_apply`}
                external
              >
                Book a 20-minute call
              </Button>
            </p>
          </Reveal>
        </div>
      </Section>

      <FinalCTA source={`state_${state.slug}_cta`} />
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

function ordinal(n: number): string {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
