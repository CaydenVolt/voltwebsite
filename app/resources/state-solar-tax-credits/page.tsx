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
  title: "State solar tax credits, rebates and incentives across all 50 states",
  description:
    "Every US state's current solar tax credits, rebate programmes and property-tax exemptions. Compiled from the state market guides.",
  path: "/resources/state-solar-tax-credits",
});

/**
 * /resources/state-solar-tax-credits.
 *
 * Reads each state's `incentives` array and renders a compact per-state
 * card showing the state-level incentives that stack with the 30% federal
 * credit. Honest about which states have no state credit.
 */
export default function StateSolarTaxCredits() {
  const states = getStates();

  return (
    <main className="flex-1">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "State solar tax credits", path: "/resources/state-solar-tax-credits" },
        ])}
      />
      <div aria-hidden className="h-nav-condensed" />
      <TrustStrip />

      <Section as="header" aria-labelledby="credits-h">
        <nav aria-label="Breadcrumb" className="label flex flex-wrap items-center gap-x-3 gap-y-1 text-muted">
          <Link href="/resources" className="hover:text-fg">Resources</Link>
          <span aria-hidden>/</span>
          <span className="text-accent">State solar tax credits</span>
        </nav>

        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <Reveal as="h1" id="credits-h" className="text-display-md lg:col-span-8">
            State solar tax credits and rebates.
          </Reveal>
          <Reveal
            as="p"
            index={1}
            className="mt-6 max-w-measure text-lead text-muted lg:col-span-4 lg:col-start-9 lg:mt-0"
          >
            The state-level incentives that stack with the 30 percent federal
            Residential Clean Energy Credit. Where none exist, the page says so.
          </Reveal>
        </div>

        <Reveal
          as="p"
          index={2}
          className="mt-10 max-w-measure border-l-2 border-accent pl-5 text-body text-fg"
        >
          The 30 percent federal Residential Clean Energy Credit applies in
          every US state through 2032. State incentives on top vary widely:
          New York stacks a 25 percent state credit on NY-Sun installer rebates
          and property-tax exemption; Hawaii offers 35 percent capped at $5,000;
          most of the Southeast offers nothing state-level and relies on the
          federal credit alone. The pages linked below carry the current cap
          amounts and expiration dates.
        </Reveal>
      </Section>

      <Section rule="top" aria-labelledby="list-h">
        <SectionLabel rule>State by state</SectionLabel>
        <h2 id="list-h" className="sr-only">
          Incentives by state
        </h2>
        <ul className="mt-8 grid gap-x-6 gap-y-10 lg:grid-cols-2">
          {states.map((s, i) => (
            <Reveal key={s.slug} as="li" index={i}>
              <div className="rounded-control border border-line bg-surface p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-h3 text-fg">
                    <Link href={stateHref(s.slug)} className="hover:underline">
                      {s.name}
                    </Link>
                  </h3>
                  <span className="label text-muted tabular-nums">#{s.market.nationalRank}</span>
                </div>
                <ul className="mt-4 flex flex-col gap-3">
                  {s.incentives.map((inc) => (
                    <li key={inc.name} className="text-body-sm">
                      <p className="font-medium text-fg">{inc.name}</p>
                      <p className="mt-1 text-muted">{inc.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <FinalCTA source="resources_credits_cta" />
    </main>
  );
}
