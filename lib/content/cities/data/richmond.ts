import type { City } from "../types";

export const RICHMOND: City = {
  slug: "richmond",
  stateSlug: "virginia",
  name: "Richmond",
  title: "Solar in Richmond: Dominion Energy and Henrico County permits",
  metaTitle: "Solar Companies in Richmond: Dominion Energy, Permits, NEM",
  metaDescription:
    "Honest guide to solar in Richmond: Dominion Energy Virginia net metering under VCEA, City of Richmond and Henrico County permits, and running a solar company in Central Virginia.",
  answer:
    "Richmond is served by Dominion Energy Virginia under the state's net metering programme, which continues to offer close-to-retail compensation for residential exports (unlike some neighbouring states). The Virginia Clean Economy Act (VCEA) protects net metering through 2024 utility cap expansions. Permits run through the City of Richmond or Henrico County depending on specific address.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.7,
    sunnyDays: 215,
    note: "Richmond gets around 4.7 peak sun hours per day with 215 sunny days per year, moderate for solar. The James River valley and Central Virginia climate are favourable overall (moderate summers, rare winter snow). Hurricane remnants occasionally bring heavy rain and wind to the metro; standard Virginia Building Code wind-load design is sufficient for most installations.",
  },
  market: {
    metroPopulationK: 1340,
    averageCostPerWatt: 2.75,
    leadCostUsd: { low: 100, high: 190 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Dominion Energy Virginia, investor-owned, serves most of the Richmond metro",
    "Rappahannock Electric Cooperative serves parts of surrounding counties",
    "Various municipal utilities (Danville, Martinsville) serve specific pockets outside the Richmond metro",
  ],
  permits: {
    office: "City of Richmond Department of Planning and Development Review, plus Henrico County and Chesterfield County Building Inspections",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Richmond, Henrico County and Chesterfield County each run residential solar permits in 2 to 4 weeks typically. SolarAPP+ is not accepted as of 2026. Dominion Energy interconnection post-install typically runs 3 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Richmond means working in a growing Central Virginia market with moderate installer density. The VCEA-era net metering keeps the sales math straightforward (retail credit for exports, annual rollover). The best Richmond operators handle both the city permit office and the two major county offices (Henrico, Chesterfield) with templated submissions. Dominion Energy's interconnection portal is well-run compared with other large investor-owned utilities. Lead costs run $100 to $190 on Google search.",
  faq: [
    {
      q: "Does Dominion Energy have net metering?",
      a: "Yes. Dominion Energy Virginia offers net metering for residential solar systems up to 25 kW AC under Virginia State Corporation Commission rules protected by the Virginia Clean Economy Act. Credits accrue monthly at retail; annual true-up at the end of the billing year with excess credit paid at avoided cost (around $0.03 per kWh).",
    },
    {
      q: "How long does a solar permit take in Richmond?",
      a: "City of Richmond, Henrico County and Chesterfield County each run residential solar permits in 2 to 4 weeks typically. SolarAPP+ is not accepted in the Richmond metro. Dominion Energy interconnection post-install adds 3 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Richmond?",
      a: "Richmond runs about $2.75 per watt installed for residential, meaning a 7 kW system typically costs around $19,300 gross. After the 30 percent federal tax credit, net cost is approximately $13,500. Virginia has no state solar tax credit, so the federal credit is the only tax-based incentive.",
    },
    {
      q: "Is solar worth it in Richmond?",
      a: "Yes for Richmond homes with suitable roofs. The combination of Dominion Energy retail net metering, moderate sun hours, and the 30 percent federal tax credit makes residential solar payback typically 9 to 12 years. Right-sized systems that match annual load pencil out better than oversized systems because annual excess only pays at avoided cost.",
    },
  ],
};
