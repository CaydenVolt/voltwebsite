import type { City } from "../types";

export const DAYTON: City = {
  slug: "dayton",
  stateSlug: "ohio",
  name: "Dayton",
  title: "Solar in Dayton: AES Ohio and Miami Valley permits",
  metaTitle: "Solar Companies in Dayton: AES Ohio, Permits",
  metaDescription:
    "Honest guide to solar in Dayton Ohio: AES Ohio (formerly DP&L) retail net metering, City of Dayton permits, Miami Valley climate, and running a solar company in Montgomery County.",
  answer:
    "Dayton is served by AES Ohio (formerly Dayton Power & Light, rebranded in 2022), a different utility from AEP Ohio in Columbus or Duke Energy Ohio in Cincinnati. AES Ohio offers retail-rate net metering under Ohio PUC rules. Permits run through the City of Dayton Combined Health District and Division of Building Services.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.4,
    sunnyDays: 173,
    note: "Dayton gets around 4.4 peak sun hours per day with 173 sunny days per year, moderate for solar. Winter snow and Ohio Valley cloud cover reduce annual production by 10 to 20 percent. Spring and summer tornado risk requires proper structural attachment.",
  },
  market: {
    metroPopulationK: 810,
    averageCostPerWatt: 2.85,
    leadCostUsd: { low: 90, high: 170 },
    installerDensity: "Moderate",
  },
  utilities: [
    "AES Ohio (formerly Dayton Power & Light, DP&L), investor-owned, serves most of the Miami Valley including Dayton",
    "Various electric cooperatives serve rural outlying counties",
  ],
  permits: {
    office: "City of Dayton Division of Building Services",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Dayton Division of Building Services typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Montgomery, Greene and Warren county jurisdictions run their own permits with 2 to 4 week typical timelines. AES Ohio interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Dayton means working under AES Ohio's retail-rate NEM. The best Dayton operators have templated AES Ohio interconnection workflows (different from AEP Ohio in Columbus and Duke Ohio in Cincinnati), model winter snow derating honestly, and understand the Wright-Patterson AFB military-relocation market. Lead costs run $90 to $170 on Google search.",
  faq: [
    {
      q: "Does AES Ohio have net metering?",
      a: "Yes, retail-rate net metering for residential solar systems up to 25 kW AC under Public Utilities Commission of Ohio rules. Credits accrue monthly at retail; annual true-up at avoided cost. AES Ohio (formerly DP&L) rebranded in 2022.",
    },
    {
      q: "How long does a solar permit take in Dayton?",
      a: "City of Dayton Division of Building Services typically runs residential solar permits in 3 to 5 weeks. Surrounding Montgomery, Greene and Warren counties run 2 to 4 weeks typically. AES Ohio interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Dayton?",
      a: "Dayton runs about $2.85 per watt installed for residential, meaning a 7 kW system typically costs around $20,000 gross. After the 30 percent federal tax credit, net cost is approximately $14,000. Ohio has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Dayton?",
      a: "Yes for Dayton homes with suitable roofs. The combination of AES Ohio retail NEM and the federal tax credit makes residential solar payback typically 10 to 13 years. Modest sun hours and winter weather stretch payback compared with Sun Belt peers.",
    },
  ],
};
