import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { TrustStrip } from "@/components/site/TrustStrip";

export const metadata: Metadata = pageMetadata({
  title: "Solar resources: cross-state references for installers and homeowners",
  description:
    "Reference pages pulling the US solar market together across all 50 states: net metering, state tax credits, permit timelines, utility export rates, glossary.",
  path: "/resources",
});

/**
 * /resources index.
 *
 * Each child page aggregates the same underlying typed data (state and city
 * registries) into a cross-cutting view that answers a specific informational
 * query, like "which US states have retail net metering" or "which cities
 * accept SolarAPP+". The pages do not invent new facts; they reorganise what
 * the state and city pages already carry.
 */

interface ResourceCard {
  slug: string;
  title: string;
  description: string;
}

const RESOURCES: ResourceCard[] = [
  {
    slug: "net-metering-by-state",
    title: "Net metering by state",
    description:
      "All 50 US states' current net-metering status in one table: retail NEM, net billing, partial, no NEM. Honest about each state's export compensation rate.",
  },
  {
    slug: "state-solar-tax-credits",
    title: "State solar tax credits and rebates",
    description:
      "Every US state's solar tax credit, rebate programme and property-tax exemption. Updated with current cap amounts, income tiers and expiration dates.",
  },
  {
    slug: "solar-permits-by-state",
    title: "Solar permits by state and city",
    description:
      "Permit office turnaround and SolarAPP+ acceptance for 140+ US cities. The real reason project timelines vary across the country.",
  },
  {
    slug: "state-electric-rates",
    title: "State electric rates comparison",
    description:
      "Average residential electric rate for every US state, sorted. The single biggest driver of solar payback math alongside sun hours.",
  },
  {
    slug: "municipal-utility-cities",
    title: "Municipal utility cities for solar",
    description:
      "US cities served by a municipal utility rather than the state's dominant investor-owned utility. The economics work very differently.",
  },
  {
    slug: "cca-cities",
    title: "Community Choice Aggregator cities",
    description:
      "US cities with a CCA bundling generation alongside the utility's delivery. Mostly California; the generation rate differs from the utility default.",
  },
  {
    slug: "hurricane-and-hvhz-permits",
    title: "Hurricane and HVHZ solar permits",
    description:
      "US coastal cities where hurricane wind-load engineering adds cost and timeline to residential solar install. HVHZ specifics for Miami-Dade and Broward.",
  },
  {
    slug: "winter-snow-derating-cities",
    title: "Winter snow derating by city",
    description:
      "US cities where winter snow materially reduces annual solar yield. Honest annual yield modelling matters most in these metros.",
  },
  {
    slug: "solar-utility-glossary",
    title: "Solar utility glossary",
    description:
      "Net metering vs net billing vs TOU vs avoided cost. SREC vs REC. HVHZ. DG tariff. The terminology an installer or homeowner actually encounters.",
  },
];

export default function ResourcesIndex() {
  return (
    <main className="flex-1">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
        ])}
      />
      <div aria-hidden className="h-nav-condensed" />
      <TrustStrip />

      <Section as="header" aria-labelledby="resources-index-h">
        <SectionLabel rule>Solar resources</SectionLabel>
        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <Reveal as="h1" id="resources-index-h" className="text-display-xl lg:col-span-8">
            Cross-state references for installers and homeowners.
          </Reveal>
          <Reveal
            as="p"
            index={1}
            className="mt-6 max-w-measure text-lead text-muted lg:col-span-4 lg:col-start-9 lg:mt-0"
          >
            Reference pages pulling the US solar market together across all 50
            states and 140+ cities. Net metering, state credits, permit
            timelines, utility export rates, glossary.
          </Reveal>
        </div>
      </Section>

      <Section rule="top" aria-label="Resources">
        <SectionLabel rule>Topics</SectionLabel>
        <ul className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2">
          {RESOURCES.map((r, i) => (
            <Reveal key={r.slug} as="li" index={i}>
              <Link
                href={`/resources/${r.slug}`}
                data-cursor="grow"
                className="group flex h-full flex-col rounded-control border border-line bg-surface p-6 transition-colors duration-100 hover:border-fg"
              >
                <h2 className="text-h3 text-fg">{r.title}</h2>
                <p className="mt-3 text-body-sm text-muted">{r.description}</p>
                <p className="label mt-auto flex items-center gap-2 pt-6 text-accent">
                  Open resource
                  <svg aria-hidden width="1em" height="1em" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
                    <path d="M2 8h11M8.5 3.5 13 8l-4.5 4.5" />
                  </svg>
                </p>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      <FinalCTA source="resources_index_cta" />
    </main>
  );
}
