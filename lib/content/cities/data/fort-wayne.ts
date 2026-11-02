import type { City } from "../types";

export const FORT_WAYNE: City = {
  slug: "fort-wayne",
  stateSlug: "indiana",
  name: "Fort Wayne",
  title: "Solar in Fort Wayne: Indiana Michigan Power and northeast IN",
  metaTitle: "Solar Companies in Fort Wayne: I&M, Permits",
  metaDescription:
    "Honest guide to solar in Fort Wayne Indiana: Indiana Michigan Power (AEP subsidiary, NOT AES Indiana) EDG tariff, City of Fort Wayne permits, and running a solar company in Allen County.",
  answer:
    "Fort Wayne is served by Indiana Michigan Power (I&M, an AEP subsidiary), NOT AES Indiana which serves Indianapolis. I&M operates under Indiana's post-2017 Excess Distributed Generation (EDG) tariff: exports credit at wholesale rate (around $0.03 to $0.04 per kWh). Permits run through the City of Fort Wayne Department of Planning Services.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.3,
    sunnyDays: 183,
    note: "Fort Wayne gets around 4.3 peak sun hours per day with 183 sunny days per year, moderate for solar. Lake Michigan-effect winter weather reaches the northeast IN region. Spring tornado risk. Summer thunderstorms reduce afternoon production.",
  },
  market: {
    metroPopulationK: 420,
    averageCostPerWatt: 2.8,
    leadCostUsd: { low: 90, high: 170 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Indiana Michigan Power (I&M, AEP subsidiary), investor-owned, serves most of Allen County including Fort Wayne",
    "Various rural electric cooperatives serve outlying areas",
  ],
  permits: {
    office: "City of Fort Wayne Department of Planning Services",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Fort Wayne Department of Planning Services typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Indiana Michigan Power interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Fort Wayne means working under Indiana Michigan Power (AEP subsidiary, different from AES Indiana that serves Indianapolis). Same Indiana post-2017 EDG tariff economics apply: self-consumption sizing matters. The best Fort Wayne operators have templated I&M interconnection workflows. Lead costs run $90 to $170 on Google search.",
  faq: [
    {
      q: "Does AES Indiana serve Fort Wayne?",
      a: "No. Fort Wayne is served by Indiana Michigan Power (I&M), an AEP subsidiary. AES Indiana serves Indianapolis and central Indiana but not Fort Wayne.",
    },
    {
      q: "Does Indiana Michigan Power have net metering?",
      a: "Not retail-rate for new customers. Indiana's 2017 EDG tariff applies: residential solar exports credit at a wholesale rate (approximately $0.03 to $0.04 per kWh). Pre-2018 customers are grandfathered on retail NEM through 2047.",
    },
    {
      q: "How long does a solar permit take in Fort Wayne?",
      a: "City of Fort Wayne Department of Planning Services typically runs residential solar permits in 3 to 5 weeks. Indiana Michigan Power interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Fort Wayne?",
      a: "Fort Wayne runs about $2.80 per watt installed for residential, meaning a 7 kW system typically costs around $19,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,700. Indiana has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Fort Wayne?",
      a: "For Fort Wayne homes sized to self-consumption, yes: payback typically runs 10 to 14 years with the federal tax credit. Oversized systems that export heavily under the EDG tariff pay back more slowly.",
    },
  ],
};
