import type { City } from "../types";

export const MEMPHIS: City = {
  slug: "memphis",
  stateSlug: "tennessee",
  name: "Memphis",
  title: "Solar in Memphis: MLGW, TVA Green Flex and Shelby County permits",
  metaTitle: "Solar Companies in Memphis: MLGW, TVA Green Flex, Permits",
  metaDescription:
    "Honest guide to solar in Memphis: Memphis Light Gas & Water (MLGW) TVA distributor, Green Flex programme, City of Memphis permits, and running a solar company in Shelby County.",
  answer:
    "Memphis is served by Memphis Light Gas & Water (MLGW), the largest three-service municipal utility in the US and a TVA distributor. Residential solar operates under TVA Green Flex which replaced Green Power Providers in 2019; exports credit at approximately $0.03 to $0.05 per kWh. Permits run through the City of Memphis Office of Construction Code Enforcement.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.8,
    sunnyDays: 213,
    note: "Memphis gets around 4.8 peak sun hours per day with 213 sunny days per year, moderate-to-strong for solar. Summer thunderstorms reduce afternoon production. Mississippi River valley humidity year-round requires marine-grade stainless hardware for durability. Spring storms occasionally bring hail.",
  },
  market: {
    metroPopulationK: 1340,
    averageCostPerWatt: 2.75,
    leadCostUsd: { low: 85, high: 160 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Memphis Light Gas & Water (MLGW), municipal TVA distributor, serves most of Shelby County including Memphis",
    "Various electric cooperatives (Southwest Tennessee EMC, Chickasaw Electric Cooperative) serve surrounding counties",
  ],
  permits: {
    office: "City of Memphis Office of Construction Code Enforcement",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Memphis Office of Construction Code Enforcement typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Shelby County unincorporated and surrounding municipalities (Germantown, Collierville, Bartlett) run their own permits with 2 to 4 week typical timelines. MLGW interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Memphis means working under TVA Green Flex via MLGW. The best Memphis operators size systems to self-consumption rather than oversize for export, understand MLGW-specific interconnection paperwork, and spec marine-grade hardware for humidity-related durability. Lead costs run $85 to $160 on Google search.",
  faq: [
    {
      q: "Does MLGW have net metering?",
      a: "Not retail-rate 1-for-1. MLGW follows the TVA Green Flex programme that replaced Green Power Providers in 2019. Residential solar generation credits at approximately $0.03 to $0.05 per kWh for 20 years, below the retail rate of about $0.11.",
    },
    {
      q: "How long does a solar permit take in Memphis?",
      a: "City of Memphis Office of Construction Code Enforcement typically runs residential solar permits in 3 to 5 weeks. Surrounding Shelby County municipalities run 2 to 4 weeks typically. MLGW interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Memphis?",
      a: "Memphis runs about $2.75 per watt installed for residential, meaning a 7 kW system typically costs around $19,300 gross. After the 30 percent federal tax credit, net cost is approximately $13,500. Tennessee has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Memphis?",
      a: "For Memphis homes with high electricity use and south-facing roofs sized to self-consumption, yes but with longer payback than retail-NEM states: typically 11 to 15 years with the federal tax credit. Green Flex compensation is less favourable than pre-2019 Green Power Providers.",
    },
  ],
};
