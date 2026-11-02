import type { City } from "../types";

export const SHREVEPORT: City = {
  slug: "shreveport",
  stateSlug: "louisiana",
  name: "Shreveport",
  title: "Solar in Shreveport: SWEPCO (not Entergy) and Caddo Parish permits",
  metaTitle: "Solar Companies in Shreveport: SWEPCO, Permits",
  metaDescription:
    "Honest guide to solar in Shreveport Louisiana: SWEPCO (AEP subsidiary, not Entergy LA) net billing, City of Shreveport permits, and running a solar company in northwest Louisiana.",
  answer:
    "Shreveport is unusual in Louisiana: served by SWEPCO (Southwestern Electric Power Company, an AEP subsidiary), NOT Entergy Louisiana. SWEPCO operates under similar post-2019 net billing: residential exports credit at avoided cost (around $0.03 to $0.05 per kWh). Permits run through the City of Shreveport Permits and Inspections.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.9,
    sunnyDays: 215,
    note: "Shreveport gets around 4.9 peak sun hours per day with 215 sunny days per year, strong for solar. Summer thunderstorms reduce afternoon production. Tornado-prone weather in spring. High humidity year-round requires marine-grade stainless hardware for durability.",
  },
  market: {
    metroPopulationK: 380,
    averageCostPerWatt: 2.65,
    leadCostUsd: { low: 85, high: 160 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Southwestern Electric Power Company (SWEPCO, AEP subsidiary), investor-owned, serves most of Caddo Parish including Shreveport",
    "Various electric cooperatives (Northeast Louisiana Power Cooperative) serve outlying rural areas",
  ],
  permits: {
    office: "City of Shreveport Permits and Inspections",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Shreveport Permits and Inspections typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. SWEPCO interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Shreveport means working under SWEPCO, not Entergy Louisiana (which serves the rest of the state). The best Shreveport operators size systems to self-consumption, handle SWEPCO interconnection paperwork fluently, and understand that East Texas SWEPCO customers across the state line are also eligible for the same AEP subsidiary paperwork. Lead costs run $85 to $160 on Google search.",
  faq: [
    {
      q: "Is Shreveport on Entergy?",
      a: "No. Shreveport is served by SWEPCO (Southwestern Electric Power Company), an AEP subsidiary. Entergy Louisiana serves most of the rest of the state. SWEPCO operates under similar net billing post-2019 but with its own tariff schedules.",
    },
    {
      q: "Does SWEPCO have net metering in Shreveport?",
      a: "Not retail-rate 1-for-1 for new customers. SWEPCO operates under Louisiana's post-2019 net billing structure: residential solar exports credit at the utility's avoided cost rate (approximately $0.03 to $0.05 per kWh). Pre-2019 customers are grandfathered on retail NEM.",
    },
    {
      q: "How long does a solar permit take in Shreveport?",
      a: "City of Shreveport Permits and Inspections typically runs residential solar permits in 3 to 5 weeks. SWEPCO interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Shreveport?",
      a: "Shreveport runs about $2.65 per watt installed for residential, meaning a 7 kW system typically costs around $18,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,000. Louisiana has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Shreveport?",
      a: "For Shreveport homes with high electricity use and south-facing roofs sized to self-consumption, yes but with longer payback than retail-NEM Southeast peers: typically 11 to 15 years with the federal tax credit.",
    },
  ],
};
