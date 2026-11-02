import type { City } from "../types";

export const LAKELAND: City = {
  slug: "lakeland",
  stateSlug: "florida",
  name: "Lakeland",
  title: "Solar in Lakeland: Lakeland Electric municipal and Polk County permits",
  metaTitle: "Solar Companies in Lakeland: Lakeland Electric, Permits",
  metaDescription:
    "Honest guide to solar in Lakeland Florida: Lakeland Electric municipal utility (not Duke FL or TECO), City of Lakeland permits, central Florida climate, and running a solar company in Polk County.",
  answer:
    "Lakeland is served by Lakeland Electric, a municipal utility (NOT Duke Energy Florida or TECO). Lakeland Electric operates its own net metering programme. Central Florida climate is favourable for solar; the metro sits between Tampa Bay and Orlando. Permits run through the City of Lakeland Permits Department.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 5.3,
    sunnyDays: 237,
    note: "Lakeland gets around 5.3 peak sun hours per day with 237 sunny days per year, strong for solar. Central Florida afternoon thunderstorms reduce production more than most installers model. Florida Building Code wind-load design (130 to 140 mph) applies; Lakeland is NOT in the HVHZ.",
  },
  market: {
    metroPopulationK: 230,
    averageCostPerWatt: 2.6,
    leadCostUsd: { low: 110, high: 200 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Lakeland Electric, municipal utility, serves all of Lakeland",
    "Duke Energy Florida serves parts of surrounding Polk County outside Lakeland",
    "Tampa Electric (TECO) serves parts of eastern Polk County",
  ],
  permits: {
    office: "City of Lakeland Permits Department",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Lakeland Permits Department typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. 130 to 140 mph wind-load design applies but Lakeland is NOT in the Miami-Dade HVHZ. Lakeland Electric interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Lakeland means handling the Lakeland Electric vs Duke FL vs TECO three-way split across Polk County. The best Lakeland operators verify utility by address up front and handle Lakeland Electric interconnection fluently (different paperwork from Duke FL or TECO). Lead costs run $110 to $200 on Google search.",
  faq: [
    {
      q: "Is Lakeland served by Duke Energy?",
      a: "No for most of the city. Lakeland is served by Lakeland Electric, a municipal utility. Duke Energy Florida serves parts of surrounding Polk County outside Lakeland city limits. TECO serves parts of eastern Polk. Confirming utility by address matters.",
    },
    {
      q: "Does Lakeland Electric have net metering?",
      a: "Yes. Lakeland Electric operates its own net metering programme for residential solar customers under Florida PSC rules. Monthly credit rollover; annual true-up at avoided cost.",
    },
    {
      q: "How long does a solar permit take in Lakeland?",
      a: "City of Lakeland Permits Department typically runs residential solar permits in 3 to 5 weeks. Lakeland Electric interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Lakeland?",
      a: "Lakeland runs about $2.60 per watt installed for residential, meaning a 7 kW system typically costs around $18,200 gross. After the 30 percent federal tax credit, net cost is approximately $12,700.",
    },
    {
      q: "Is solar worth it in Lakeland?",
      a: "Yes for Lakeland homes with suitable roofs. The combination of Lakeland Electric retail NEM, strong Central Florida sun hours, and the federal tax credit makes residential solar payback typically 9 to 12 years with the federal tax credit.",
    },
  ],
};
