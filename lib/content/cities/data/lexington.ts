import type { City } from "../types";

export const LEXINGTON: City = {
  slug: "lexington",
  stateSlug: "kentucky",
  name: "Lexington",
  title: "Solar in Lexington: KU, 2021 two-rate restructure and Bluegrass permits",
  metaTitle: "Solar Companies in Lexington KY: Kentucky Utilities, Permits",
  metaDescription:
    "Honest guide to solar in Lexington Kentucky: Kentucky Utilities (KU) two-rate net metering, Lexington-Fayette Urban County permits, and running a solar company in the Bluegrass.",
  answer:
    "Lexington is served by Kentucky Utilities (KU, same corporate parent as LG&E but a separate utility), under Kentucky's 2021 two-rate structure: consumption at retail, exports at avoided cost (~$0.055/kWh). The economics require sizing to self-consumption. Permits run through the Lexington-Fayette Urban County Government Division of Building Inspection.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.5,
    sunnyDays: 191,
    note: "Lexington gets around 4.5 peak sun hours per day with 191 sunny days per year, moderate for solar. Winter snow derating is modest (5 to 15 percent annual loss). Summer thunderstorms reduce afternoon production. Pine pollen in spring temporarily reduces panel output.",
  },
  market: {
    metroPopulationK: 520,
    averageCostPerWatt: 2.75,
    leadCostUsd: { low: 85, high: 160 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Kentucky Utilities (KU, LG&E and KU Energy LLC subsidiary), investor-owned, serves most of central and eastern Kentucky including Lexington",
    "Various electric cooperatives (Blue Grass Energy Cooperative, Clark Energy Cooperative) serve rural outlying areas",
  ],
  permits: {
    office: "Lexington-Fayette Urban County Government Division of Building Inspection",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "Lexington-Fayette Urban County Government Division of Building Inspection typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Fayette, Scott and Jessamine counties run 2 to 4 week typical timelines. KU interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Lexington means working under the 2021 KY net metering restructure where oversized systems earn only avoided cost for exports. The best Lexington operators size systems to self-consumption, run honest annual load-match analyses, and understand KU-specific interconnection paperwork (which differs from LG&E in Louisville despite same parent company). Lead costs run $85 to $160 on Google search.",
  faq: [
    {
      q: "Does KU have net metering?",
      a: "Not retail-rate for new customers since 2021. KU operates a two-rate structure: consumption at retail (around $0.14 per kWh), exports at avoided cost (approximately $0.055 per kWh). Pre-2021 customers are grandfathered on retail NEM.",
    },
    {
      q: "How long does a solar permit take in Lexington?",
      a: "Lexington-Fayette Urban County Government Division of Building Inspection typically runs residential solar permits in 3 to 5 weeks. Surrounding counties run 2 to 4 weeks typically. KU interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Lexington?",
      a: "Lexington runs about $2.75 per watt installed for residential, meaning a 7 kW system typically costs around $19,300 gross. After the 30 percent federal tax credit, net cost is approximately $13,500. Kentucky has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Lexington?",
      a: "For Lexington homes with high electricity use and south-facing roofs sized to self-consumption, yes but with longer payback than retail-NEM states: typically 11 to 15 years with the federal tax credit. The 2021 restructure stretched payback meaningfully; right-sized systems match annual load better than oversized ones.",
    },
  ],
};
