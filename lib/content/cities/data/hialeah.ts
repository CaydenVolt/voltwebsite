import type { City } from "../types";

export const HIALEAH: City = {
  slug: "hialeah",
  stateSlug: "florida",
  name: "Hialeah",
  title: "Solar in Hialeah: FPL, Miami-Dade HVHZ and city permits",
  metaTitle: "Solar Companies in Hialeah: FPL, HVHZ, Permits",
  metaDescription:
    "Honest guide to solar in Hialeah Florida: FPL retail net metering, Miami-Dade HVHZ requirements, City of Hialeah permits, Spanish-speaking homeowner market, and running a solar company in north Miami-Dade.",
  answer:
    "Hialeah is in Miami-Dade County under the Florida Building Code's High Velocity Hurricane Zone (HVHZ) requirements. FPL retail NEM continues. The 175 mph wind-load design and Miami-Dade NOA racking requirements apply the same as Miami proper. Hialeah's Spanish-speaking homeowner base is substantial. Permits run through the City of Hialeah Building Division.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 5.2,
    sunnyDays: 248,
    note: "Hialeah has essentially the same climate as Miami: 5.2 peak sun hours per day, 248 sunny days per year. HVHZ 175 mph design wind speed applies. Afternoon summer thunderstorms reduce production.",
  },
  market: {
    metroPopulationK: 220,
    averageCostPerWatt: 2.65,
    leadCostUsd: { low: 130, high: 230 },
    installerDensity: "High",
  },
  utilities: ["Florida Power & Light (FPL), investor-owned, serves all of Hialeah"],
  permits: {
    office: "City of Hialeah Building Division",
    turnaroundWeeks: "3 to 6 weeks for standard residential (HVHZ engineering review required)",
    solarApp: "Not accepted",
    note: "Hialeah is in Miami-Dade County, a designated HVHZ. Residential solar permits require stamped structural engineering for 175 mph design wind speed, and all racking must have a Miami-Dade NOA. SolarAPP+ is not accepted in HVHZ jurisdictions. Permit turnarounds run 3 to 6 weeks. FPL interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Hialeah means operating under HVHZ engineering constraints and serving a predominantly Spanish-speaking homeowner market. The best Hialeah operators have templated HVHZ submittals, use only NOA-approved racking, and have bilingual sales and customer service. Lead costs run $130 to $230 on Google search.",
  faq: [
    {
      q: "Is Hialeah in the HVHZ?",
      a: "Yes. Hialeah is in Miami-Dade County, part of the Florida Building Code's High Velocity Hurricane Zone. 175 mph wind-load design and Miami-Dade NOA racking requirements apply.",
    },
    {
      q: "Does FPL have net metering in Hialeah?",
      a: "Yes, retail-rate net metering for residential solar systems up to 10 kW AC under Florida PSC rules. Credits accrue monthly at retail; annual excess is paid at FPL's avoided cost rate.",
    },
    {
      q: "How long does a solar permit take in Hialeah?",
      a: "City of Hialeah Building Division typically runs residential solar permits in 3 to 6 weeks because of HVHZ engineering review. FPL interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Hialeah?",
      a: "Hialeah runs about $2.65 per watt installed for residential, essentially identical to Miami, meaning a 7 kW system typically costs around $18,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,000.",
    },
    {
      q: "Is solar worth it in Hialeah?",
      a: "Yes for Hialeah homes with suitable roofs. The combination of FPL retail NEM, strong sun hours, and the federal tax credit makes residential solar payback typically 9 to 12 years. HVHZ engineering adds 5 to 10 percent to install cost but is essential for warranty integrity.",
    },
  ],
};
