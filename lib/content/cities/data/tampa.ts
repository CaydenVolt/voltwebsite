import type { City } from "../types";

export const TAMPA: City = {
  slug: "tampa",
  stateSlug: "florida",
  name: "Tampa",
  title: "Solar in Tampa: TECO net metering, permits and the West Coast market",
  metaTitle: "Solar Companies in Tampa: TECO, Duke Energy, Permits",
  metaDescription:
    "Honest guide to solar in Tampa: TECO (Tampa Electric) net metering, Duke Energy service in the suburbs, Hillsborough County permits, hurricane considerations, and running a solar company in Tampa Bay.",
  answer:
    "Tampa is served primarily by TECO (Tampa Electric) in Hillsborough County and Duke Energy Florida in Pinellas and Pasco counties. Both offer retail-rate net metering under Florida PSC rules. Tampa is not in the HVHZ, so permits are faster and systems cheaper than Miami, though hurricane-rated attachment is still essential given the Gulf Coast's exposure to tropical storms and the lesson of Hurricane Milton (2024).",
  published: "2026-10-31",
  climate: {
    peakSunHours: 5.3,
    sunnyDays: 244,
    note: "Tampa gets around 5.3 peak sun hours per day with 244 sunny days per year, strong for solar. Hurricane and tropical storm exposure is real: Hurricane Milton (2024) was a reminder that direct-hit potential on the West Coast of Florida is non-trivial. Florida Building Code wind-load design (typically 150 mph in Hillsborough and Pinellas counties) applies. Thunderstorm cloud cover in summer afternoons reduces production more than the sunny-days figure suggests.",
  },
  market: {
    metroPopulationK: 3220,
    averageCostPerWatt: 2.6,
    leadCostUsd: { low: 125, high: 225 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Tampa Electric Company (TECO), investor-owned, serves Hillsborough County including the city of Tampa",
    "Duke Energy Florida, serves most of Pinellas, Pasco and Hernando counties",
    "Withlacoochee River Electric Cooperative (serves parts of Pasco, Hernando)",
  ],
  permits: {
    office: "Hillsborough County, City of Tampa Construction Services; Pinellas County, City of St. Petersburg permits",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "Hillsborough County and City of Tampa run residential solar permits in 3 to 5 weeks typically; Pinellas County and City of St. Petersburg run similar timelines. SolarAPP+ is not accepted in Tampa Bay as of 2026. Florida Building Code wind-load design (150 mph in most of the metro) applies but Tampa is NOT in the Miami-Dade HVHZ, so NOA racking is not required. TECO and Duke Energy interconnection post-install typically runs 2 to 4 weeks.",
  },
  installerLandscape:
    "Running a solar company in Tampa Bay means working across two utilities (TECO on the east side of the bay, Duke on the west) and several county permit offices. The Milton 2024 hurricane reset homeowner priorities around backup power; battery-attached quotes close at substantially higher rates in Tampa than they did pre-Milton. The best Tampa operators handle both TECO and Duke interconnection paperwork fluently, carry inventory of Powerwall-class batteries for faster installs on the hurricane-anxiety sales motion, and have strong Hillsborough and Pinellas County permit template submissions. Lead costs run $125 to $225, moderate for Florida.",
  faq: [
    {
      q: "Does TECO have net metering?",
      a: "Yes. Tampa Electric Company offers retail-rate net metering for residential solar systems up to 10 kW AC under Florida PSC rules. Credits accrue monthly at retail; annual excess at year-end is paid out at TECO's avoided cost rate (roughly $0.03 per kWh), substantially lower than retail. Interconnection application runs through TECO's online solar portal with typical approval in 2 to 4 weeks post-install.",
    },
    {
      q: "Is Tampa in the HVHZ?",
      a: "No. The High Velocity Hurricane Zone (HVHZ) under the Florida Building Code covers Miami-Dade and Broward counties only. Tampa is in Hillsborough County, which uses the standard Florida Building Code wind-load design (typically 150 mph) and does not require Miami-Dade Notice of Acceptance (NOA) racking. This is why solar costs run cheaper in Tampa than Miami despite similar hurricane exposure.",
    },
    {
      q: "How long does a solar permit take in Tampa?",
      a: "Hillsborough County and City of Tampa Construction Services typically run residential solar permits in 3 to 5 weeks. Pinellas County and St. Petersburg run similar timelines. TECO or Duke Energy interconnection post-install adds 2 to 4 weeks.",
    },
    {
      q: "How much does solar cost in Tampa?",
      a: "Tampa runs about $2.60 per watt installed for residential, meaning a 7 kW system typically costs around $18,200 gross. After the 30 percent federal tax credit, net cost is approximately $12,700. Battery storage (which many Tampa homeowners add after Hurricane Milton) adds $12,000 to $18,000 for a Powerwall-class system.",
    },
    {
      q: "Is solar worth it in Tampa?",
      a: "Yes for most Tampa homes with suitable roofs. The combination of strong TECO and Duke retail NEM, strong sun hours and rising retail rates makes residential solar payback typically 9 to 12 years with the federal tax credit. Hurricane resilience is a major driver post-Milton; battery-attached systems close at substantially higher rates than they did in 2023.",
    },
  ],
};
