import type { City } from "../types";

export const AKRON: City = {
  slug: "akron",
  stateSlug: "ohio",
  name: "Akron",
  title: "Solar in Akron: Ohio Edison and Summit County permits",
  metaTitle: "Solar Companies in Akron: Ohio Edison, Permits",
  metaDescription:
    "Honest guide to solar in Akron Ohio: Ohio Edison (FirstEnergy subsidiary) retail net metering, City of Akron permits, and running a solar company in Summit County.",
  answer:
    "Akron is served by Ohio Edison, a FirstEnergy subsidiary distinct from Toledo Edison (also FirstEnergy), AEP Ohio (Columbus), Duke Ohio (Cincinnati) and AES Ohio (Dayton). Ohio Edison operates retail-rate net metering under Ohio PUC rules. Permits run through the City of Akron Division of Building Inspection.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.1,
    sunnyDays: 164,
    note: "Akron gets around 4.1 peak sun hours per day with 164 sunny days per year, among the lower in the US. Lake Erie-effect snow in winter reduces annual production by 15 to 20 percent. Summer thunderstorms reduce afternoon production.",
  },
  market: {
    metroPopulationK: 700,
    averageCostPerWatt: 2.85,
    leadCostUsd: { low: 90, high: 170 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Ohio Edison (FirstEnergy subsidiary), investor-owned, serves most of Summit County including Akron",
    "Cleveland Electric Illuminating (FirstEnergy subsidiary) serves parts of adjacent Cuyahoga County",
  ],
  permits: {
    office: "City of Akron Division of Building Inspection",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Akron Division of Building Inspection typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Summit County unincorporated and surrounding Cuyahoga/Portage counties run 2 to 4 weeks typically. Ohio Edison interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Akron means working under Ohio Edison. The best Akron operators understand FirstEnergy's interconnection paperwork (which is similar across Ohio Edison, Toledo Edison and Cleveland Electric Illuminating), model lake-effect winter weather honestly, and handle Summit County permits fluently. Lead costs run $90 to $170 on Google search.",
  faq: [
    {
      q: "Does Ohio Edison serve Akron?",
      a: "Yes. Ohio Edison, a FirstEnergy subsidiary, serves most of Summit County including Akron under retail-rate net metering per Ohio PUC rules.",
    },
    {
      q: "How long does a solar permit take in Akron?",
      a: "City of Akron Division of Building Inspection typically runs residential solar permits in 3 to 5 weeks. Ohio Edison interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Akron?",
      a: "Akron runs about $2.85 per watt installed for residential, meaning a 7 kW system typically costs around $20,000 gross. After the 30 percent federal tax credit, net cost is approximately $14,000.",
    },
    {
      q: "Is solar worth it in Akron?",
      a: "Yes for Akron homes with suitable roofs. The combination of Ohio Edison retail NEM and the federal tax credit makes residential solar payback typically 11 to 14 years. Lake Erie-effect weather stretches payback compared with Sun Belt peers.",
    },
  ],
};
