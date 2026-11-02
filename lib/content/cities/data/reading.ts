import type { City } from "../types";

export const READING: City = {
  slug: "reading",
  stateSlug: "pennsylvania",
  name: "Reading",
  title: "Solar in Reading PA: Met-Ed FirstEnergy and Berks County",
  metaTitle: "Solar Companies in Reading PA: Met-Ed, SRECs, Permits",
  metaDescription:
    "Honest guide to solar in Reading Pennsylvania: Met-Ed (FirstEnergy) net metering, PA SREC market, City of Reading permits, and running a solar company in Berks County.",
  answer:
    "Reading is served by Met-Ed (Metropolitan Edison, FirstEnergy subsidiary, same as York). Met-Ed operates retail-rate net metering under PA PUC rules; PA SRECs apply. Permits run through the City of Reading Codes Administration.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.3,
    sunnyDays: 198,
    note: "Reading gets around 4.3 peak sun hours per day with 198 sunny days per year, moderate for solar. Winter snow derating is modest. Lehigh/Berks County climate.",
  },
  market: {
    metroPopulationK: 420,
    averageCostPerWatt: 2.95,
    leadCostUsd: { low: 95, high: 175 },
    installerDensity: "Moderate",
  },
  utilities: ["Met-Ed (Metropolitan Edison, FirstEnergy subsidiary), investor-owned, serves most of Berks County including Reading"],
  permits: {
    office: "City of Reading Codes Administration",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Reading Codes Administration typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Met-Ed interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Reading means working under Met-Ed FirstEnergy. The best Reading operators handle Met-Ed interconnection fluently and PA SREC registration. Lead costs run $95 to $175 on Google search.",
  faq: [
    {
      q: "Does Met-Ed serve Reading PA?",
      a: "Yes. Met-Ed (FirstEnergy subsidiary) serves most of Berks County including Reading. Same utility that serves York PA.",
    },
    {
      q: "How long does a solar permit take in Reading?",
      a: "City of Reading Codes Administration typically runs residential solar permits in 3 to 5 weeks. Met-Ed interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Reading PA?",
      a: "Reading runs about $2.95 per watt installed for residential, meaning a 7 kW system typically costs around $20,700 gross. After the 30 percent federal tax credit, net cost is approximately $14,500. SREC income adds roughly $200 to $280 per year.",
    },
    {
      q: "Is solar worth it in Reading PA?",
      a: "Yes for Reading homes with suitable roofs. The combination of Met-Ed retail NEM, PA SREC income, and the federal tax credit makes residential solar payback typically 10 to 13 years.",
    },
  ],
};
