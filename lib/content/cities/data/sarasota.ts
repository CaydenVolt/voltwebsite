import type { City } from "../types";

export const SARASOTA: City = {
  slug: "sarasota",
  stateSlug: "florida",
  name: "Sarasota",
  title: "Solar in Sarasota: FPL and Southwest Florida coastal climate",
  metaTitle: "Solar Companies in Sarasota: FPL, Permits",
  metaDescription:
    "Honest guide to solar in Sarasota Florida: FPL retail net metering, City of Sarasota permits, Gulf Coast climate, hurricane engineering, and running a solar company in Sarasota County.",
  answer:
    "Sarasota is served by FPL under retail-rate net metering. Southwest Florida Gulf Coast climate is excellent for solar but hurricane exposure is severe. Not in the HVHZ. Permits run through the City of Sarasota Development Services.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 5.4,
    sunnyDays: 253,
    note: "Sarasota gets around 5.4 peak sun hours per day with 253 sunny days per year, excellent for solar. Hurricane exposure is severe; Southwest Florida has taken direct hits from recent major storms. Sarasota County Building Code wind-load design runs 150 mph. Gulf Coast salt air requires marine-grade stainless hardware.",
  },
  market: {
    metroPopulationK: 835,
    averageCostPerWatt: 2.65,
    leadCostUsd: { low: 125, high: 215 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Florida Power & Light (FPL), investor-owned, serves most of Sarasota County",
    "Various small municipal utilities (Sarasota Water & Sewer handles water only, not electric)",
  ],
  permits: {
    office: "City of Sarasota Development Services",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Sarasota Development Services typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. 150 mph wind-load design applies but Sarasota is NOT in the Miami-Dade HVHZ. FPL interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Sarasota means working FPL in a non-HVHZ Southwest Florida market reshaped by recent hurricane experience. Battery-attached systems close at substantially higher rates. The best Sarasota operators spec marine-grade stainless racking and carry Powerwall-class battery inventory. Lead costs run $125 to $215 on Google search.",
  faq: [
    {
      q: "Does FPL serve Sarasota?",
      a: "Yes. FPL serves most of Sarasota County under retail-rate net metering, same programme as the rest of Florida.",
    },
    {
      q: "Is Sarasota in the HVHZ?",
      a: "No. The HVHZ covers Miami-Dade and Broward counties only. Sarasota is in Sarasota County, which uses standard Florida Building Code wind-load design (150 mph) and does not require Miami-Dade NOA racking.",
    },
    {
      q: "How long does a solar permit take in Sarasota?",
      a: "City of Sarasota Development Services typically runs residential solar permits in 3 to 5 weeks. FPL interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Sarasota?",
      a: "Sarasota runs about $2.65 per watt installed for residential, meaning a 7 kW system typically costs around $18,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,000. Marine-grade hardware adds 5 to 10 percent for beachfront neighbourhoods.",
    },
    {
      q: "Is solar worth it in Sarasota?",
      a: "Yes for Sarasota homes with suitable roofs. The combination of FPL retail NEM, excellent sun hours and the federal tax credit makes residential solar payback typically 9 to 12 years. Hurricane resilience is a major secondary driver that homeowners add battery storage for.",
    },
  ],
};
