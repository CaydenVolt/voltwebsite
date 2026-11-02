import type { City } from "../types";

export const PENSACOLA: City = {
  slug: "pensacola",
  stateSlug: "florida",
  name: "Pensacola",
  title: "Solar in Pensacola: FPL (formerly Gulf Power) and panhandle permits",
  metaTitle: "Solar Companies in Pensacola: FPL, Permits",
  metaDescription:
    "Honest guide to solar in Pensacola Florida: FPL retail net metering (formerly Gulf Power territory), City of Pensacola permits, Gulf Coast hurricane engineering, and running a solar company in the Florida panhandle.",
  answer:
    "Pensacola is served by FPL (which absorbed the former Gulf Power service area in 2022). FPL retail NEM applies the same as South Florida, but Pensacola is NOT in the HVHZ (Miami-Dade/Broward only). Gulf Coast hurricane engineering and salt-air corrosion are real considerations. Permits run through the City of Pensacola Building Inspection.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.9,
    sunnyDays: 227,
    note: "Pensacola gets around 4.9 peak sun hours per day with 227 sunny days per year, strong for solar. Hurricane exposure is real (Panhandle has taken direct hits from Ivan, Michael, Sally); Florida Building Code wind-load design in Escambia County runs 150 mph. Gulf Coast salt air requires marine-grade stainless hardware.",
  },
  market: {
    metroPopulationK: 510,
    averageCostPerWatt: 2.65,
    leadCostUsd: { low: 100, high: 180 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Florida Power & Light (FPL, absorbed former Gulf Power service area in 2022), investor-owned, serves most of the Florida panhandle including Pensacola",
    "Various electric cooperatives (Escambia River Electric Cooperative) serve outlying rural areas",
  ],
  permits: {
    office: "City of Pensacola Building Inspection",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Pensacola Building Inspection typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. 150 mph wind-load design applies but Pensacola is NOT in the Miami-Dade HVHZ. FPL interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Pensacola means working under FPL (same as South Florida) in a non-HVHZ panhandle market. The best Pensacola operators spec marine-grade stainless racking for coastal zip codes, understand the FPL interconnection paperwork is identical statewide, and handle hurricane wind-load design properly. Lead costs run $100 to $180 on Google search.",
  faq: [
    {
      q: "Does FPL serve Pensacola?",
      a: "Yes. FPL absorbed the former Gulf Power service area in 2022; Pensacola is now served by FPL under the same retail net metering programme as the rest of the state.",
    },
    {
      q: "Is Pensacola in the HVHZ?",
      a: "No. The High Velocity Hurricane Zone (HVHZ) under the Florida Building Code covers Miami-Dade and Broward counties only. Pensacola is in Escambia County, which uses the standard Florida Building Code wind-load design (150 mph) and does not require Miami-Dade NOA racking.",
    },
    {
      q: "How long does a solar permit take in Pensacola?",
      a: "City of Pensacola Building Inspection typically runs residential solar permits in 3 to 5 weeks. FPL interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Pensacola?",
      a: "Pensacola runs about $2.65 per watt installed for residential, meaning a 7 kW system typically costs around $18,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,000. Marine-grade hardware adds 5 to 10 percent for beachfront neighbourhoods.",
    },
    {
      q: "Is solar worth it in Pensacola?",
      a: "Yes for Pensacola homes with suitable roofs. The combination of FPL retail NEM, strong sun hours, and the federal tax credit makes residential solar payback typically 9 to 12 years with the federal tax credit. Hurricane resilience is a common secondary driver for battery storage attachment.",
    },
  ],
};
