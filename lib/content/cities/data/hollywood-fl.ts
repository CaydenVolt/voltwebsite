import type { City } from "../types";

export const HOLLYWOOD_FL: City = {
  slug: "hollywood-fl",
  stateSlug: "florida",
  name: "Hollywood",
  title: "Solar in Hollywood FL: FPL, Broward HVHZ and city permits",
  metaTitle: "Solar Companies in Hollywood FL: FPL, HVHZ, Permits",
  metaDescription:
    "Honest guide to solar in Hollywood Florida: FPL retail net metering, Broward County HVHZ requirements, City of Hollywood permits, and running a solar company in central Broward.",
  answer:
    "Hollywood is in Broward County under the Florida Building Code HVHZ (same as Fort Lauderdale and Miami-Dade). FPL retail NEM continues. 175 mph wind-load design and Miami-Dade NOA racking apply. Permits run through the City of Hollywood Building Division.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 5.3,
    sunnyDays: 249,
    note: "Hollywood has essentially the same climate as Fort Lauderdale and Miami: 5.3 peak sun hours per day, 249 sunny days per year. HVHZ 175 mph design wind speed applies. Coastal salt air near the Atlantic requires marine-grade stainless hardware.",
  },
  market: {
    metroPopulationK: 155,
    averageCostPerWatt: 2.65,
    leadCostUsd: { low: 140, high: 240 },
    installerDensity: "High",
  },
  utilities: ["Florida Power & Light (FPL), investor-owned, serves all of Hollywood"],
  permits: {
    office: "City of Hollywood Building Division",
    turnaroundWeeks: "3 to 6 weeks for standard residential (HVHZ engineering review required)",
    solarApp: "Not accepted",
    note: "Hollywood is in Broward County, a designated HVHZ. Residential solar permits require stamped structural engineering for 175 mph design wind speed, and all racking must have a Miami-Dade NOA. SolarAPP+ is not accepted in HVHZ jurisdictions. Permit turnarounds run 3 to 6 weeks. FPL interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Hollywood means operating under the same HVHZ engineering constraints as Miami and Fort Lauderdale. The best Hollywood operators have templated HVHZ submittals, use only NOA-approved racking, and spec marine-grade hardware for oceanfront neighbourhoods. Lead costs run $140 to $240 on Google search.",
  faq: [
    {
      q: "Is Hollywood FL in the HVHZ?",
      a: "Yes. Hollywood is in Broward County, part of the Florida Building Code's High Velocity Hurricane Zone (which covers Miami-Dade and Broward). 175 mph wind-load design and Miami-Dade NOA racking requirements apply.",
    },
    {
      q: "Does FPL have net metering in Hollywood?",
      a: "Yes, retail-rate net metering for residential solar systems up to 10 kW AC under Florida PSC rules. Credits accrue monthly at retail; annual excess is paid at FPL's avoided cost rate.",
    },
    {
      q: "How long does a solar permit take in Hollywood FL?",
      a: "City of Hollywood Building Division typically runs residential solar permits in 3 to 6 weeks because of HVHZ engineering review. FPL interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Hollywood FL?",
      a: "Hollywood runs about $2.65 per watt installed for residential, essentially identical to Fort Lauderdale and Miami, meaning a 7 kW system typically costs around $18,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,000.",
    },
    {
      q: "Is solar worth it in Hollywood FL?",
      a: "Yes for Hollywood homes with suitable roofs. The combination of FPL retail NEM, strong sun hours, and the federal tax credit makes residential solar payback typically 9 to 12 years. HVHZ engineering is essential for warranty integrity.",
    },
  ],
};
