import type { City } from "../types";

export const ST_PETERSBURG: City = {
  slug: "st-petersburg",
  stateSlug: "florida",
  name: "St. Petersburg",
  title: "Solar in St. Petersburg: Duke Energy, Pinellas permits and coastal climate",
  metaTitle: "Solar Companies in St. Petersburg: Duke Energy, Permits",
  metaDescription:
    "Honest guide to solar in St. Petersburg: Duke Energy Florida net metering, City of St. Petersburg permits, Pinellas County coastal climate, hurricane considerations, and running a solar company in St. Pete.",
  answer:
    "St. Petersburg is served by Duke Energy Florida (not TECO, which serves the east side of Tampa Bay). Duke retail net metering applies under Florida PSC rules. The Milton 2024 hurricane experience in the Tampa Bay area increased battery-attached solar demand substantially. Permits run through the City of St. Petersburg Development Review Services.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 5.4,
    sunnyDays: 253,
    note: "St. Petersburg gets around 5.4 peak sun hours per day with 253 sunny days per year, excellent for solar. Hurricane exposure is real; the Pinellas peninsula took heavy damage during Hurricane Milton (2024), and homeowner priorities have shifted toward battery-attached systems. Coastal salt air requires marine-grade stainless hardware for beachfront installations. Florida Building Code wind-load design (150 mph in Pinellas) applies but St. Pete is NOT in the HVHZ.",
  },
  market: {
    metroPopulationK: 1000,
    averageCostPerWatt: 2.6,
    leadCostUsd: { low: 125, high: 220 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Duke Energy Florida, investor-owned, serves most of Pinellas County including St. Petersburg",
    "City of St. Petersburg does not operate its own electric utility (Duke Energy serves)",
  ],
  permits: {
    office: "City of St. Petersburg Development Review Services",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of St. Petersburg Development Review Services typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Florida Building Code wind-load design (typically 150 mph in Pinellas) applies but St. Pete is NOT in the HVHZ, so NOA racking is not required. Duke Energy Florida interconnection post-install typically runs 2 to 4 weeks.",
  },
  installerLandscape:
    "Running a solar company in St. Petersburg means working in a Tampa Bay west-side market reshaped by Hurricane Milton. Battery-attached quotes close at substantially higher rates than they did pre-Milton. The best St. Pete operators handle Duke Energy Florida interconnection fluently (different from TECO on the east side of the bay), carry Powerwall-class battery inventory for faster installs on the hurricane-anxiety sales motion, and spec marine-grade hardware for beachfront neighbourhoods. Lead costs run $125 to $220 on Google search.",
  faq: [
    {
      q: "Does Duke Energy Florida have net metering?",
      a: "Yes, retail-rate net metering for residential solar systems up to 10 kW AC under Florida PSC rules. Credits accrue monthly at retail; annual excess is paid out at Duke's avoided cost rate (around $0.03 per kWh), lower than retail. Interconnection application runs through Duke's online solar portal.",
    },
    {
      q: "Is St. Petersburg in the HVHZ?",
      a: "No. The High Velocity Hurricane Zone (HVHZ) under the Florida Building Code covers Miami-Dade and Broward counties only. St. Petersburg is in Pinellas County, which uses the standard Florida Building Code wind-load design (typically 150 mph) and does not require Miami-Dade Notice of Acceptance (NOA) racking.",
    },
    {
      q: "How long does a solar permit take in St. Petersburg?",
      a: "City of St. Petersburg Development Review Services typically runs residential solar permits in 3 to 5 weeks. Duke Energy Florida interconnection post-install adds 2 to 4 weeks.",
    },
    {
      q: "How much does solar cost in St. Petersburg?",
      a: "St. Petersburg runs about $2.60 per watt installed for residential, meaning a 7 kW system typically costs around $18,200 gross. After the 30 percent federal tax credit, net cost is approximately $12,700. Battery storage, in high demand post-Milton, adds $12,000 to $18,000 for a Powerwall-class system.",
    },
    {
      q: "Is solar worth it in St. Petersburg?",
      a: "Yes for most St. Petersburg homes with suitable roofs. The combination of Duke retail NEM, strong sun hours and the federal tax credit makes residential solar payback typically 9 to 12 years. Hurricane resilience is a major driver post-Milton; battery-attached systems close at substantially higher rates than they did in 2023.",
    },
  ],
};
