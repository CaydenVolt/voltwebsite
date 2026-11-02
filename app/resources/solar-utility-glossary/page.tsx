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
  title: "Solar utility glossary: NEM, SREC, HVHZ, DG tariff and the rest",
  description:
    "Plain-English explanations of the utility and regulatory terms residential solar actually depends on: net metering, net billing, TOU, SREC, HVHZ, DG tariff.",
  path: "/resources/solar-utility-glossary",
});

const TERMS: { term: string; abbr?: string; def: string }[] = [
  {
    term: "Net metering",
    abbr: "NEM",
    def: "The simplest residential solar billing structure: the utility credits exported solar energy against consumed energy at the same retail rate, with a monthly rollover and typically an annual true-up at avoided cost. 'Full retail' or '1-for-1' net metering is the strongest form. States like Arkansas, Oregon, Washington and Virginia still have it; California, Michigan, Louisiana and Kentucky have moved to other structures.",
  },
  {
    term: "NEM 3.0",
    def: "California's current net metering regime, in effect since April 2023 at PG&E, SCE and SDG&E. Residential solar exports are credited at the Avoided Cost Calculator rate (approximately $0.05 to $0.08 per kWh), substantially below retail. Pre-April 2023 customers are grandfathered on NEM 2.0 for 20 years. The regime shift made storage attachment essentially mandatory for favourable solar payback in CA investor-owned utility territory.",
  },
  {
    term: "Net billing",
    def: "A billing structure where consumption is credited at retail rate but exports are credited at a lower per-kWh rate (often avoided cost, sometimes a time-of-day differential). States that moved from retail NEM to net billing include California (NEM 3.0), Louisiana (2019), Michigan (DG tariff 2018), Idaho (ECR 2024), and Kentucky (2021). Net billing makes self-consumption sizing matter more than oversized export systems.",
  },
  {
    term: "Avoided cost",
    def: "The rate at which utilities credit excess solar generation under non-retail NEM: approximately what the utility would have paid to generate or buy that same kWh from a wholesale market. Typically $0.03 to $0.08 per kWh depending on utility and hour. Substantially below retail (which runs $0.11 to $0.45 per kWh depending on state and TOU hour).",
  },
  {
    term: "Time-of-use rate",
    abbr: "TOU",
    def: "A rate structure where the per-kWh price varies by hour: higher during on-peak hours (typically 4pm to 9pm weekdays), lower off-peak (overnight), with a mid-tier in between. Residential solar interacts with TOU because midday solar production is often credited at a different rate than the on-peak evening consumption it offsets. Storage attachment lets solar + battery systems export during on-peak hours when the credit is highest.",
  },
  {
    term: "Interconnection",
    def: "The utility process of connecting a residential solar system to the grid. Each utility has its own application, inspection and Permission to Operate (PTO) process. Timelines run 2 to 12 weeks post-install depending on utility; large investor-owned utilities (SCE, PG&E, Con Edison) often run 4 to 8 weeks, while well-run cooperatives and municipal utilities can be 2 to 4 weeks.",
  },
  {
    term: "Permission to Operate",
    abbr: "PTO",
    def: "The final utility approval that lets a residential solar system start producing. The install can be complete and inspected but the system cannot be energised until PTO is granted. PTO delays are a common installer complaint and the main driver of 'install to production' gap on project timelines.",
  },
  {
    term: "SolarAPP+",
    def: "The US Department of Energy-backed automated residential solar permit review tool. Where accepted by a city or county, SolarAPP+ drops permit review from weeks to a day or two for qualifying standard installations. As of 2026, around 30 US jurisdictions accept SolarAPP+ in production, with another 20+ in pilot. Non-SolarAPP+ permits still run through manual plan review with 2 to 8 week typical timelines.",
  },
  {
    term: "SREC",
    def: "Solar Renewable Energy Credit: a tradeable certificate representing one megawatt-hour of solar generation. States with Renewable Portfolio Standards (NJ, MD, PA, DE, IL, OH, DC, MA) create a market for SRECs that solar system owners can sell separately from the energy itself. SREC values vary wildly: NJ SuSI SREC-IIs trade around $85 for 15 years, MD SRECs around $50 to $70, OH SRECs around $5 to $10. SREC income can meaningfully extend residential solar payback math.",
  },
  {
    term: "REC",
    def: "Renewable Energy Credit: the broader category of tradeable certificates representing one MWh of renewable generation. SRECs are the solar-specific sub-category. Illinois Shines pays residential installations the equivalent of 15 years of REC-equivalent revenue upfront, which the installer typically passes through as a lower install price.",
  },
  {
    term: "HVHZ",
    def: "High Velocity Hurricane Zone under the Florida Building Code, covering Miami-Dade and Broward counties. HVHZ requires stamped structural engineering for 175 mph design wind speed and racking with a Miami-Dade Notice of Acceptance (NOA). Residential solar permits in HVHZ take substantially longer and cost 5 to 10 percent more than non-HVHZ Florida installations.",
  },
  {
    term: "Notice of Acceptance",
    abbr: "NOA",
    def: "The Miami-Dade County certification that solar racking and mounting hardware meets HVHZ 175 mph wind-load requirements. Only a limited subset of commonly-used solar racking products carry current NOAs. Installing non-NOA racking in Miami-Dade or Broward counties is a permit rejection; installer product selection matters more in HVHZ than in standard jurisdictions.",
  },
  {
    term: "DG tariff",
    def: "Distributed Generation tariff: Michigan's post-2018 billing structure for residential solar at DTE and Consumers Energy. Consumption credits at retail rate (around $0.18 per kWh); exports credit at a lower rate (around $0.08 per kWh). The inflow/outflow rate gap makes self-consumption sizing more important than oversized export systems.",
  },
  {
    term: "Demand charge",
    def: "A per-kW fee based on the single highest hour of monthly on-peak electricity consumption. Common in commercial rates and in some residential structures (SRP Customer Generation plan in Arizona). Residential solar systems that reduce total energy but do not reduce the peak demand hour do not reduce the demand charge; storage attachment that shaves peak demand is required to materially cut the charge.",
  },
  {
    term: "Export credit rate",
    abbr: "ECR",
    def: "Idaho Power's 2024 post-NEM structure for residential solar. Exports credit at an hourly rate derived from avoided energy cost (approximately $0.044 to $0.057 per kWh depending on time of day). Pre-2024 customers are grandfathered on retail NEM.",
  },
  {
    term: "Resource Comparison Proxy",
    abbr: "RCP",
    def: "Arizona's post-NEM export compensation rate for APS residential solar customers. Set annually by the Arizona Corporation Commission based on avoided cost; currently approximately $0.085 per kWh for APS. Pre-2017 customers are grandfathered on retail NEM for 20 years.",
  },
];

export default function SolarUtilityGlossary() {
  return (
    <main className="flex-1">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Solar utility glossary", path: "/resources/solar-utility-glossary" },
        ])}
      />
      <div aria-hidden className="h-nav-condensed" />
      <TrustStrip />

      <Section as="header" aria-labelledby="glossary-h">
        <nav aria-label="Breadcrumb" className="label flex flex-wrap items-center gap-x-3 gap-y-1 text-muted">
          <Link href="/resources" className="hover:text-fg">Resources</Link>
          <span aria-hidden>/</span>
          <span className="text-accent">Solar utility glossary</span>
        </nav>

        <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
          <Reveal as="h1" id="glossary-h" className="text-display-md lg:col-span-8">
            Solar utility glossary.
          </Reveal>
          <Reveal
            as="p"
            index={1}
            className="mt-6 max-w-measure text-lead text-muted lg:col-span-4 lg:col-start-9 lg:mt-0"
          >
            Plain-English explanations of the utility and regulatory terms
            residential solar actually depends on.
          </Reveal>
        </div>
      </Section>

      <Section rule="top" aria-labelledby="list-h">
        <SectionLabel rule>Terms</SectionLabel>
        <h2 id="list-h" className="sr-only">
          Glossary
        </h2>
        <dl className="mt-8 flex flex-col gap-8">
          {TERMS.map((t, i) => (
            <Reveal key={t.term} as="div" index={i} className="border-t border-line pt-6">
              <dt className="text-h3 text-fg">
                {t.term}
                {t.abbr ? <span className="ml-3 text-body-sm text-muted">({t.abbr})</span> : null}
              </dt>
              <dd className="mt-3 max-w-measure text-body text-fg">{t.def}</dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      <FinalCTA source="resources_glossary_cta" />
    </main>
  );
}
