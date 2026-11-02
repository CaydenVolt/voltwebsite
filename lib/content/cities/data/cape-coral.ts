import type { City } from "../types";

export const CAPE_CORAL: City = {
  slug: "cape-coral",
  stateSlug: "florida",
  name: "Cape Coral",
  title: "Solar in Cape Coral: LCEC cooperative and Southwest Florida permits",
  metaTitle: "Solar Companies in Cape Coral: LCEC, Permits",
  metaDescription:
    "Honest guide to solar in Cape Coral Florida: LCEC (Lee County Electric Cooperative) net metering, City of Cape Coral permits, post-Ian hurricane experience, and running a solar company in Southwest Florida.",
  answer:
    "Cape Coral is served by LCEC (Lee County Electric Cooperative), not FPL. LCEC offers net metering with its own cooperative rules. Hurricane Ian (2022) devastated the area and reshaped homeowner priorities around backup power; battery-attached quotes close at high rates post-Ian. Permits run through the City of Cape Coral Permitting Division.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 5.3,
    sunnyDays: 251,
    note: "Cape Coral gets around 5.3 peak sun hours per day with 251 sunny days per year, strong for solar. Hurricane exposure is severe (Ian 2022 was a direct hit); Florida Building Code wind-load design in Lee County runs 150 mph. Not in the HVHZ. Coastal salt air requires marine-grade stainless hardware.",
  },
  market: {
    metroPopulationK: 760,
    averageCostPerWatt: 2.7,
    leadCostUsd: { low: 130, high: 230 },
    installerDensity: "High",
  },
  utilities: [
    "Lee County Electric Cooperative (LCEC), cooperative, serves most of Cape Coral and parts of Lee County",
    "Florida Power & Light serves parts of surrounding Lee County outside LCEC territory",
  ],
  permits: {
    office: "City of Cape Coral Permitting Division",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Cape Coral Permitting Division typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. 150 mph wind-load design applies but Cape Coral is NOT in the Miami-Dade HVHZ. LCEC interconnection post-install typically runs 3 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Cape Coral means working in a market reshaped by Hurricane Ian. The best Cape Coral operators carry Powerwall-class battery inventory for the hurricane-resilience sales motion, handle LCEC interconnection fluently (different from FPL), and spec marine-grade stainless racking for coastal zip codes. Lead costs run $130 to $230 on Google search; demand remains elevated post-Ian.",
  faq: [
    {
      q: "Does LCEC have net metering?",
      a: "Yes, LCEC offers net metering for residential solar systems. Credits accrue monthly at retail; annual true-up at year-end with excess typically paid at avoided cost. Interconnection application runs through LCEC's cooperative member process.",
    },
    {
      q: "Is Cape Coral in the HVHZ?",
      a: "No. Cape Coral is in Lee County, which uses the standard Florida Building Code wind-load design (150 mph) and does not require Miami-Dade NOA racking. Despite severe hurricane exposure (Ian 2022), the HVHZ designation is only Miami-Dade and Broward.",
    },
    {
      q: "How long does a solar permit take in Cape Coral?",
      a: "City of Cape Coral Permitting Division typically runs residential solar permits in 3 to 5 weeks. LCEC interconnection post-install adds 3 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Cape Coral?",
      a: "Cape Coral runs about $2.70 per watt installed for residential, meaning a 7 kW system typically costs around $18,900 gross. After the 30 percent federal tax credit, net cost is approximately $13,200. Battery storage, in high demand post-Ian, adds $12,000 to $18,000.",
    },
    {
      q: "Is solar worth it in Cape Coral?",
      a: "Yes for most Cape Coral homes with suitable roofs. Payback typically runs 9 to 12 years with the federal tax credit. Hurricane resilience is a major secondary driver post-Ian; battery-attached systems close at substantially higher rates than pre-2022.",
    },
  ],
};
