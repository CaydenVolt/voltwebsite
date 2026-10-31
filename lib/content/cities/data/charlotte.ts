import type { City } from "../types";

export const CHARLOTTE: City = {
  slug: "charlotte",
  stateSlug: "north-carolina",
  name: "Charlotte",
  title: "Solar in Charlotte: Duke Energy, HB 589 and local permits",
  metaTitle: "Solar Companies in Charlotte: Duke Energy, Permits, NEM",
  metaDescription:
    "Honest guide to solar in Charlotte: Duke Energy Carolinas net metering under HB 589, Mecklenburg County permits, and running a solar company in the Charlotte metro.",
  answer:
    "Charlotte is served by Duke Energy Carolinas, which operates under North Carolina's HB 589-era net metering rules. Residential solar exports are credited monthly at a time-of-use rate rather than retail-rate 1-for-1; new customers (post-2023) are on the Residential Solar Choice rate schedule with on-peak and off-peak differential pricing. Mecklenburg County permits run 3 to 5 weeks typically.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 4.7,
    sunnyDays: 218,
    note: "Charlotte gets around 4.7 peak sun hours per day with 218 sunny days per year, moderate for solar. Climate is favourable overall (lower summer temperatures than Southeast peers mean less panel derating, winter snow is rare), and tree-shading audits matter more here than in Western cities because many Charlotte neighbourhoods have substantial deciduous canopy that reduces annual yield meaningfully.",
  },
  market: {
    metroPopulationK: 2800,
    averageCostPerWatt: 2.8,
    leadCostUsd: { low: 100, high: 190 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Duke Energy Carolinas, investor-owned, serves Charlotte and surrounding Mecklenburg, Union, Cabarrus, Gaston counties",
    "EnergyUnited (electric cooperative, serves parts of Iredell and Lincoln counties)",
    "Rutherford EMC (serves parts of Cleveland County)",
  ],
  permits: {
    office: "Mecklenburg County Code Enforcement, plus City of Charlotte for city-specific projects",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "Mecklenburg County Code Enforcement runs residential solar permits in 3 to 5 weeks typically; the city of Charlotte handles the few permits that require city-specific review. SolarAPP+ is not accepted in Mecklenburg as of 2026. Union, Cabarrus and Gaston county permits run 2 to 4 weeks typically. Duke Energy Carolinas interconnection post-install typically runs 3 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Charlotte means working in a growing market with moderate installer density and lower lead costs than coastal metros. The HB 589-era TOU-based NEM makes system sizing and sales conversations more technical than in retail-NEM markets like Miami or Orlando; customers want to understand what the on-peak/off-peak differential means for payback. The best Charlotte operators carry fluency on both Duke Energy Carolinas interconnection and the surrounding EMC co-op rules (which differ meaningfully from Duke's). Tree-canopy audits matter here; the shaded roofs that homeowners expect to work often do not pencil out, and installer honesty on that cost differential beats a cheap first quote. Lead costs run $100 to $190, among the lowest of the top-25 metros covered.",
  faq: [
    {
      q: "Does Duke Energy Carolinas have net metering?",
      a: "Yes, but not retail-rate 1-for-1. Under North Carolina's HB 589-era rules, new residential solar customers are on the Residential Solar Choice rate schedule, which uses time-of-use pricing with on-peak and off-peak differential rates. Solar exports during on-peak hours earn credits at the on-peak rate; off-peak exports earn the off-peak rate. The effective credit is close to retail during on-peak and below retail during off-peak. Pre-2023 customers are grandfathered on the previous retail-NEM rules.",
    },
    {
      q: "How long does a solar permit take in Charlotte?",
      a: "Mecklenburg County Code Enforcement typically runs residential solar permits in 3 to 5 weeks. Surrounding counties (Union, Cabarrus, Gaston) run 2 to 4 weeks typically. Duke Energy Carolinas interconnection post-install adds 3 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Charlotte?",
      a: "Charlotte runs about $2.80 per watt installed for residential, meaning a 7 kW system typically costs around $19,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,700. North Carolina has no state solar tax credit, so the federal credit is the only tax-based incentive.",
    },
    {
      q: "What is the Duke Residential Solar Choice rate?",
      a: "Duke Energy Carolinas' Residential Solar Choice schedule is a time-of-use rate with on-peak hours (typically 6pm to 9pm weekdays in summer, 7am to 10am and 6pm to 9pm in winter) and off-peak hours covering the rest. On-peak rates are substantially higher than off-peak; solar exports earn credit at whichever rate applies during the hour of export. Residential customers can elect Solar Choice or stick with a standard rate; most installers recommend Solar Choice when the system is sized correctly for TOU.",
    },
    {
      q: "Is solar worth it in Charlotte?",
      a: "Yes for most Charlotte homes with unshaded roofs. Payback typically runs 10 to 14 years with the federal tax credit under the Residential Solar Choice schedule. Heavily shaded roofs (common in older Charlotte neighbourhoods with mature trees) often fail to pencil out; honest shade audits before quoting save both parties time.",
    },
  ],
};
