import type { City } from "../types";

export const PEMBROKE_PINES: City = {
  slug: "pembroke-pines",
  stateSlug: "florida",
  name: "Pembroke Pines",
  title: "Solar in Pembroke Pines: FPL, Broward HVHZ and city permits",
  metaTitle: "Solar Companies in Pembroke Pines: FPL, HVHZ, Permits",
  metaDescription:
    "Honest guide to solar in Pembroke Pines Florida: FPL retail net metering, Broward County HVHZ requirements, City of Pembroke Pines permits, and running a solar company in central Broward.",
  answer:
    "Pembroke Pines is in Broward County under the Florida Building Code HVHZ. FPL retail NEM continues. The 175 mph wind-load design and Miami-Dade NOA racking apply the same as Miami. Permits run through the City of Pembroke Pines Building Division.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 5.3,
    sunnyDays: 248,
    note: "Pembroke Pines has essentially the same climate as other Broward cities: 5.3 peak sun hours per day, 248 sunny days per year. HVHZ 175 mph design wind speed applies. Afternoon summer thunderstorms reduce production more than most installers model.",
  },
  market: {
    metroPopulationK: 170,
    averageCostPerWatt: 2.65,
    leadCostUsd: { low: 140, high: 240 },
    installerDensity: "High",
  },
  utilities: ["Florida Power & Light (FPL), investor-owned, serves all of Pembroke Pines"],
  permits: {
    office: "City of Pembroke Pines Building Division",
    turnaroundWeeks: "3 to 6 weeks for standard residential (HVHZ engineering review required)",
    solarApp: "Not accepted",
    note: "Pembroke Pines is in Broward County, a designated HVHZ. Residential solar permits require stamped structural engineering for 175 mph design wind speed and NOA-approved racking. SolarAPP+ is not accepted. Permit turnarounds run 3 to 6 weeks. FPL interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Pembroke Pines means operating under the same HVHZ engineering constraints as Miami, Fort Lauderdale and Hollywood. The best Pembroke Pines operators have templated HVHZ submittals, use only NOA-approved racking, and handle FPL interconnection fluently. Lead costs run $140 to $240 on Google search.",
  faq: [
    {
      q: "Is Pembroke Pines in the HVHZ?",
      a: "Yes. Pembroke Pines is in Broward County, part of the Florida Building Code's High Velocity Hurricane Zone (which covers Miami-Dade and Broward). 175 mph wind-load design and Miami-Dade NOA racking requirements apply.",
    },
    {
      q: "Does FPL have net metering in Pembroke Pines?",
      a: "Yes, retail-rate net metering for residential solar systems up to 10 kW AC under Florida PSC rules. Credits accrue monthly at retail; annual excess paid at FPL's avoided cost rate.",
    },
    {
      q: "How long does a solar permit take in Pembroke Pines?",
      a: "City of Pembroke Pines Building Division typically runs residential solar permits in 3 to 6 weeks because of HVHZ engineering review. FPL interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Pembroke Pines?",
      a: "Pembroke Pines runs about $2.65 per watt installed for residential, essentially identical to other Broward HVHZ cities, meaning a 7 kW system typically costs around $18,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,000.",
    },
    {
      q: "Is solar worth it in Pembroke Pines?",
      a: "Yes for Pembroke Pines homes with suitable roofs. The combination of FPL retail NEM, strong sun hours and the federal tax credit makes residential solar payback typically 9 to 12 years. HVHZ engineering is essential for warranty integrity.",
    },
  ],
};
