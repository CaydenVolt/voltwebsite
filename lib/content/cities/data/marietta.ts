import type { City } from "../types";

export const MARIETTA: City = {
  slug: "marietta",
  stateSlug: "georgia",
  name: "Marietta",
  title: "Solar in Marietta: Marietta Power municipal and Cobb County permits",
  metaTitle: "Solar Companies in Marietta GA: Marietta Power, Permits",
  metaDescription:
    "Honest guide to solar in Marietta Georgia: Marietta Power municipal utility (NOT Georgia Power), City of Marietta permits, and running a solar company in Cobb County.",
  answer:
    "Marietta is unusual in metro Atlanta: served by Marietta Power, a municipal utility (NOT Georgia Power). Marietta Power operates its own net metering programme with structure that typically beats Georgia Power's non-retail NEM. Permits run through the City of Marietta Development Services.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.9,
    sunnyDays: 217,
    note: "Marietta has essentially the same climate as Atlanta: 4.9 peak sun hours per day, 217 sunny days per year. Dense tree canopy in many Marietta neighbourhoods limits suitable rooftops; shade audits matter.",
  },
  market: {
    metroPopulationK: 65,
    averageCostPerWatt: 2.85,
    leadCostUsd: { low: 105, high: 190 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Marietta Power, municipal utility, serves all of Marietta",
    "Georgia Power (Southern Company) serves surrounding Cobb County outside Marietta",
    "Cobb EMC serves parts of outlying Cobb County",
  ],
  permits: {
    office: "City of Marietta Development Services",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Marietta Development Services typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted. Marietta Power interconnection post-install typically runs 3 to 5 weeks (faster than Georgia Power in surrounding Cobb).",
  },
  installerLandscape:
    "Running a solar company in Marietta means handling the Marietta Power vs Georgia Power vs Cobb EMC three-way split across Cobb County. The best Marietta operators verify utility by address up front and lead with Marietta Power's net metering advantage over Georgia Power's non-retail NEM. Lead costs run $105 to $190 on Google search.",
  faq: [
    {
      q: "Is Marietta served by Georgia Power?",
      a: "No for most of the city. Marietta is served by Marietta Power, a municipal utility. Georgia Power serves surrounding Cobb County outside Marietta city limits. Cobb EMC serves outlying areas. Confirming utility by address matters because the economics work very differently.",
    },
    {
      q: "Does Marietta Power have net metering?",
      a: "Yes. Marietta Power operates its own net metering programme for residential solar customers. Export compensation is typically closer to retail than Georgia Power's avoided-cost rate, which materially improves solar economics compared with the surrounding Atlanta metro.",
    },
    {
      q: "How long does a solar permit take in Marietta?",
      a: "City of Marietta Development Services typically runs residential solar permits in 2 to 4 weeks. Marietta Power interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Marietta?",
      a: "Marietta runs about $2.85 per watt installed for residential, meaning a 7 kW system typically costs around $20,000 gross. After the 30 percent federal tax credit, net cost is approximately $14,000.",
    },
    {
      q: "Is solar worth it in Marietta?",
      a: "Yes, especially for Marietta Power customers. On Marietta Power's net metering, residential solar typically pays back in 8 to 11 years with the federal tax credit, substantially faster than Georgia Power customers in surrounding Cobb County (11 to 14 years under avoided-cost NEM).",
    },
  ],
};
