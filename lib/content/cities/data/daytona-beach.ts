import type { City } from "../types";

export const DAYTONA_BEACH: City = {
  slug: "daytona-beach",
  stateSlug: "florida",
  name: "Daytona Beach",
  title: "Solar in Daytona Beach: FPL and Volusia County coastal climate",
  metaTitle: "Solar Companies in Daytona Beach: FPL, Permits",
  metaDescription:
    "Honest guide to solar in Daytona Beach Florida: FPL retail net metering, City of Daytona Beach permits, Atlantic coastal climate, hurricane engineering, and running a solar company in Volusia County.",
  answer:
    "Daytona Beach is served by FPL under retail-rate net metering. Atlantic coastal climate requires marine-grade stainless hardware. Not in the HVHZ (Miami-Dade/Broward only), but Florida Building Code wind-load design (150 mph) applies. Permits run through the City of Daytona Beach Development and Administrative Services.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 5.2,
    sunnyDays: 229,
    note: "Daytona Beach gets around 5.2 peak sun hours per day with 229 sunny days per year, strong for solar. Hurricane and tropical storm exposure is real; Volusia County Building Code wind-load design runs 140 to 150 mph. Atlantic coastal salt air requires marine-grade stainless hardware.",
  },
  market: {
    metroPopulationK: 695,
    averageCostPerWatt: 2.65,
    leadCostUsd: { low: 115, high: 200 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Florida Power & Light (FPL), investor-owned, serves most of Volusia County including Daytona Beach",
    "Beach cities (New Smyrna Beach Utility, Ormond Beach municipal services) serve specific pockets",
  ],
  permits: {
    office: "City of Daytona Beach Development and Administrative Services",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Daytona Beach Development and Administrative Services typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. 140 to 150 mph wind-load design applies but Daytona Beach is NOT in the Miami-Dade HVHZ. FPL interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Daytona Beach means working under FPL in a non-HVHZ Atlantic coastal market. The best Daytona Beach operators spec marine-grade stainless racking for beachfront zip codes, handle FPL interconnection fluently, and understand the Volusia County wind-load design. Lead costs run $115 to $200 on Google search.",
  faq: [
    {
      q: "Does FPL serve Daytona Beach?",
      a: "Yes. FPL serves most of Volusia County including Daytona Beach under retail-rate net metering, same programme as the rest of Florida.",
    },
    {
      q: "Is Daytona Beach in the HVHZ?",
      a: "No. The HVHZ covers Miami-Dade and Broward counties only. Daytona Beach is in Volusia County, which uses standard Florida Building Code wind-load design (140 to 150 mph) and does not require Miami-Dade NOA racking.",
    },
    {
      q: "How long does a solar permit take in Daytona Beach?",
      a: "City of Daytona Beach Development and Administrative Services typically runs residential solar permits in 3 to 5 weeks. FPL interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Daytona Beach?",
      a: "Daytona Beach runs about $2.65 per watt installed for residential, meaning a 7 kW system typically costs around $18,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,000. Marine-grade hardware adds 5 to 10 percent for beachfront neighbourhoods.",
    },
    {
      q: "Is solar worth it in Daytona Beach?",
      a: "Yes for Daytona Beach homes with suitable roofs. The combination of FPL retail NEM, strong sun hours and the federal tax credit makes residential solar payback typically 9 to 12 years.",
    },
  ],
};
