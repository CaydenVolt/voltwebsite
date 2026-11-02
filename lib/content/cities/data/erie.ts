import type { City } from "../types";

export const ERIE: City = {
  slug: "erie",
  stateSlug: "pennsylvania",
  name: "Erie",
  title: "Solar in Erie: Penelec, PA SRECs and lake-effect snow",
  metaTitle: "Solar Companies in Erie PA: Penelec, SRECs, Permits",
  metaDescription:
    "Honest guide to solar in Erie Pennsylvania: Penelec (FirstEnergy subsidiary) net metering, Pennsylvania SRECs, City of Erie permits, lake-effect snow, and running a solar company in Erie County.",
  answer:
    "Erie is served by Penelec (Pennsylvania Electric Company, FirstEnergy subsidiary, different from PECO or Duquesne Light) under retail-rate net metering. Pennsylvania AEPS SRECs apply. Lake Erie-effect snow is severe (Erie averages 101 inches annually). Permits run through the City of Erie Office of Code Enforcement.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 3.9,
    sunnyDays: 162,
    note: "Erie gets around 3.9 peak sun hours per day with 162 sunny days per year, among the lower in the US. Lake Erie-effect snow is severe (Erie averages 101 inches of snow annually, among the snowiest major US cities). Annual production loss from winter snow typically runs 20 to 25 percent.",
  },
  market: {
    metroPopulationK: 270,
    averageCostPerWatt: 2.95,
    leadCostUsd: { low: 95, high: 175 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Penelec (Pennsylvania Electric Company, FirstEnergy subsidiary), investor-owned, serves most of Erie County including the city of Erie",
    "Various electric cooperatives (Northwestern Rural Electric Cooperative) serve rural outlying areas",
  ],
  permits: {
    office: "City of Erie Office of Code Enforcement",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Erie Office of Code Enforcement typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Erie County jurisdictions run 2 to 4 weeks typically. Penelec interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Erie means working under Penelec (FirstEnergy, different from PECO or Duquesne). The best Erie operators are explicit about lake-effect snow derating (annual production loss can reach 25 percent), spec steep-pitch roof mounting, and have templated SREC registration workflows. Lead costs run $95 to $175 on Google search.",
  faq: [
    {
      q: "Does Penelec have net metering?",
      a: "Yes, retail-rate net metering for residential solar systems up to 50 kW AC under Pennsylvania PUC rules. Credits accrue monthly at retail; annual true-up at year-end with excess rolled forward.",
    },
    {
      q: "How much lake-effect snow does Erie get?",
      a: "Erie averages 101 inches of snow annually, among the snowiest major US cities (and more than Buffalo). Lake-effect snow from Lake Erie reduces annual solar production by 20 to 25 percent for most residential installations. Honest sales conversations model this derating.",
    },
    {
      q: "How long does a solar permit take in Erie?",
      a: "City of Erie Office of Code Enforcement typically runs residential solar permits in 3 to 5 weeks. Surrounding Erie County jurisdictions run 2 to 4 weeks typically. Penelec interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Erie?",
      a: "Erie runs about $2.95 per watt installed for residential, meaning a 7 kW system typically costs around $20,700 gross. After the 30 percent federal tax credit, net cost is approximately $14,500. SREC income adds roughly $200 to $280 per year on top.",
    },
    {
      q: "Is solar worth it in Erie?",
      a: "Yes for Erie homes with unshaded steep-pitch roofs. The combination of Penelec retail NEM, PA SREC income, and the federal tax credit makes residential solar payback typically 10 to 13 years. Severe lake-effect snow derating stretches payback compared with inland Pennsylvania.",
    },
  ],
};
