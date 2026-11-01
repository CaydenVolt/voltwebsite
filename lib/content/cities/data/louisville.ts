import type { City } from "../types";

export const LOUISVILLE: City = {
  slug: "louisville",
  stateSlug: "kentucky",
  name: "Louisville",
  title: "Solar in Louisville: LG&E, 2021 two-rate restructure and permits",
  metaTitle: "Solar Companies in Louisville: LG&E, Permits, NEM",
  metaDescription:
    "Honest guide to solar in Louisville: LG&E 2021 two-rate net metering, Louisville Metro permits, and running a solar company in Jefferson County.",
  answer:
    "Louisville is served by LG&E (Louisville Gas and Electric) under Kentucky's 2021 two-rate structure: consumption at retail ($0.14 per kWh), exports at avoided cost ($0.055 per kWh). The economics work only with careful sizing to self-consumption plus the federal tax credit. Permits run through Louisville Metro Codes and Regulations.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.5,
    sunnyDays: 189,
    note: "Louisville gets around 4.5 peak sun hours per day with 189 sunny days per year, moderate for solar. Winter snow derating is modest (5 to 15 percent annual loss). Summer thunderstorms reduce afternoon production. Ohio River valley cloud cover reduces annual yield more than most installers model.",
  },
  market: {
    metroPopulationK: 1290,
    averageCostPerWatt: 2.75,
    leadCostUsd: { low: 85, high: 160 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Louisville Gas and Electric (LG&E, LG&E and KU Energy LLC subsidiary), investor-owned, serves most of the Louisville metro",
    "Various electric cooperatives serve rural outlying areas",
    "Jefferson County PVA (property valuation administrator) handles property-related solar questions",
  ],
  permits: {
    office: "Louisville Metro Codes and Regulations",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "Louisville Metro Codes and Regulations typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Oldham, Bullitt and Shelby county jurisdictions run their own permits with 2 to 4 week typical timelines. LG&E interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Louisville means working under the 2021 LG&E net metering restructure, where oversized systems earn only avoided cost for exports. The best Louisville operators size systems to self-consumption, run honest annual load-match analyses, and spec equipment that handles Ohio River valley climate variations. Lead costs run $85 to $160 on Google search.",
  faq: [
    {
      q: "Does LG&E have net metering?",
      a: "Not retail-rate for new customers since 2021. LG&E operates a two-rate structure: consumption at retail (around $0.14 per kWh), exports at avoided cost (approximately $0.055 per kWh). Pre-2021 customers are grandfathered on retail NEM.",
    },
    {
      q: "How long does a solar permit take in Louisville?",
      a: "Louisville Metro Codes and Regulations typically runs residential solar permits in 3 to 5 weeks. Surrounding counties (Oldham, Bullitt, Shelby) run 2 to 4 weeks typically. LG&E interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Louisville?",
      a: "Louisville runs about $2.75 per watt installed for residential, meaning a 7 kW system typically costs around $19,300 gross. After the 30 percent federal tax credit, net cost is approximately $13,500. Kentucky has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Louisville?",
      a: "For Louisville homes with high electricity use and south-facing roofs sized to self-consumption, yes but with longer payback than retail-NEM states: typically 11 to 15 years with the federal tax credit. The 2021 net metering restructure stretched payback meaningfully. Right-sized systems match annual load pencil out better than oversized ones.",
    },
  ],
};
