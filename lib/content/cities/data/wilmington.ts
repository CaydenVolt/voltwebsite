import type { City } from "../types";

export const WILMINGTON: City = {
  slug: "wilmington",
  stateSlug: "delaware",
  name: "Wilmington",
  title: "Solar in Wilmington: Delmarva Power, SRECs and Green Energy Program",
  metaTitle: "Solar Companies in Wilmington DE: Delmarva, SRECs, Permits",
  metaDescription:
    "Honest guide to solar in Wilmington Delaware: Delmarva Power retail net metering, Delaware SREC market, Green Energy Program grant, City of Wilmington permits, and running a solar company in New Castle County.",
  answer:
    "Wilmington is served by Delmarva Power under retail net metering plus the Delaware SREC market and the Green Energy Program grant ($0.70 per watt capped at $5,000). Together with the federal tax credit the stacked incentives make Wilmington solar economics among the stronger in the Mid-Atlantic. Permits run through the City of Wilmington Department of Licenses and Inspections.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.4,
    sunnyDays: 203,
    note: "Wilmington gets around 4.4 peak sun hours per day with 203 sunny days per year, moderate for solar. Winter snow derating is modest (5 to 10 percent annual loss). Summer thunderstorms reduce afternoon production more than most installers model.",
  },
  market: {
    metroPopulationK: 710,
    averageCostPerWatt: 2.9,
    leadCostUsd: { low: 100, high: 180 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Delmarva Power (Exelon subsidiary), investor-owned, serves most of New Castle County including Wilmington",
    "City of New Castle Municipal Services serves parts of New Castle (city-level distribution)",
  ],
  permits: {
    office: "City of Wilmington Department of Licenses and Inspections",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "In pilot",
    note: "City of Wilmington Department of Licenses and Inspections typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is in pilot for select contractors. New Castle County unincorporated areas run through the county with similar timelines. Delmarva Power interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Wilmington means working in a small, mature market with strong stacked incentives (SRECs + Green Energy Program grant + federal credit + retail NEM). The best Wilmington operators have templated workflows for all three incentive programmes. Lead costs run $100 to $180 on Google search, among the lowest in the US because installer density is modest.",
  faq: [
    {
      q: "Does Delmarva Power have net metering in Wilmington?",
      a: "Yes, retail-rate net metering for residential solar systems up to 25 kW AC at Delmarva Power. Credits accrue monthly at retail; annual true-up at year-end with excess rolled forward.",
    },
    {
      q: "What incentives apply in Wilmington?",
      a: "Three stackable incentives: the Delaware Green Energy Program grant ($0.70 per watt DC capped at $5,000), ongoing SREC income (approximately $200 to $360 per year for a 7 kW system), and the 30 percent federal tax credit. All three apply to Wilmington residential installations.",
    },
    {
      q: "How long does a solar permit take in Wilmington?",
      a: "City of Wilmington Department of Licenses and Inspections typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is in pilot. New Castle County unincorporated runs similar timelines. Delmarva Power interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Wilmington?",
      a: "Wilmington runs about $2.90 per watt installed for residential, meaning a 7 kW system typically costs around $20,300 gross. After the 30 percent federal tax credit, the Green Energy Program grant, and the present value of 10 years of SREC income, effective net cost is often $8,500 to $10,500.",
    },
    {
      q: "Is solar worth it in Wilmington?",
      a: "Yes substantially. The combination of Delmarva Power retail NEM, the Green Energy Program grant, DE SREC income, and the 30 percent federal credit makes residential solar payback typically 6 to 9 years for Wilmington homes with suitable roofs.",
    },
  ],
};
