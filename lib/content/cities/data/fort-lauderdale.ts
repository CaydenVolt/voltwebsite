import type { City } from "../types";

export const FORT_LAUDERDALE: City = {
  slug: "fort-lauderdale",
  stateSlug: "florida",
  name: "Fort Lauderdale",
  title: "Solar in Fort Lauderdale: FPL, Broward HVHZ and Permits",
  metaTitle: "Solar Companies in Fort Lauderdale: FPL, HVHZ, Permits",
  metaDescription:
    "Honest guide to solar in Fort Lauderdale: FPL net metering, Broward County HVHZ permit requirements, City of Fort Lauderdale Building Services, hurricane-rated attachment, and running a solar company in Broward.",
  answer:
    "Fort Lauderdale sits inside the Florida Building Code's High Velocity Hurricane Zone (HVHZ, which covers both Miami-Dade and Broward counties). The HVHZ 175 mph wind-load design and Miami-Dade NOA racking requirements apply the same as Miami. FPL retail net metering continues. The practical difference from Miami is the specific City of Fort Lauderdale Building Services queue (slightly faster than city of Miami).",
  published: "2026-11-01",
  climate: {
    peakSunHours: 5.3,
    sunnyDays: 250,
    note: "Fort Lauderdale gets around 5.3 peak sun hours per day with 250 sunny days per year, strong for solar. Hurricane season is the dominant engineering factor; HVHZ 175 mph design wind speed under the Florida Building Code. Afternoon summer thunderstorm cloud cover reduces afternoon production. Coastal salt air requires marine-grade stainless hardware for installations within 2 miles of the coast.",
  },
  market: {
    metroPopulationK: 1950,
    averageCostPerWatt: 2.65,
    leadCostUsd: { low: 140, high: 250 },
    installerDensity: "High",
  },
  utilities: [
    "Florida Power & Light (FPL), investor-owned, serves most of Broward County including Fort Lauderdale",
    "City of Lauderhill Electric Utility serves parts of Lauderhill (municipal)",
  ],
  permits: {
    office: "City of Fort Lauderdale Building Services, plus Broward County Building Code Services",
    turnaroundWeeks: "3 to 6 weeks for standard residential (HVHZ engineering review required)",
    solarApp: "Not accepted",
    note: "Broward County is designated High Velocity Hurricane Zone (HVHZ) under the Florida Building Code. Residential solar permits require stamped structural engineering for 175 mph design wind speed, and all racking and mounting hardware must have a Miami-Dade Notice of Acceptance (NOA). SolarAPP+ is not accepted in HVHZ jurisdictions. City of Fort Lauderdale Building Services runs 3 to 6 weeks typically. FPL interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Fort Lauderdale means operating under the same HVHZ engineering constraints as Miami. Companies without in-house structural engineering or a reliable PE partner struggle to pass HVHZ permit review on the first submission. The best Fort Lauderdale operators have templated HVHZ submittals, use only NOA-approved racking, and build hurricane-season scheduling buffers into project plans. Coastal install knowledge (marine-grade stainless hardware) matters for the oceanfront neighbourhoods. Lead costs run $140 to $250 on Google search, similar to Miami.",
  faq: [
    {
      q: "Is Fort Lauderdale in the HVHZ?",
      a: "Yes. The High Velocity Hurricane Zone (HVHZ) under the Florida Building Code covers both Miami-Dade and Broward counties. Fort Lauderdale is in Broward County, so HVHZ 175 mph wind-load design and Miami-Dade Notice of Acceptance (NOA) racking requirements apply the same as in Miami.",
    },
    {
      q: "Does FPL have net metering in Fort Lauderdale?",
      a: "Yes, retail-rate net metering for residential solar systems up to 10 kW AC under Florida PSC rules. Credits accrue monthly at retail; annual excess at year-end is paid out at FPL's avoided cost rate (around $0.03 per kWh). For most residential systems sized to annual load this true-up is a small portion of total value.",
    },
    {
      q: "How long does a solar permit take in Fort Lauderdale?",
      a: "City of Fort Lauderdale Building Services typically runs residential solar permits in 3 to 6 weeks because of HVHZ engineering review. Surrounding Broward cities (Hollywood, Pembroke Pines, Coral Springs, Pompano Beach) each run their own permits with 3 to 6 week typical timelines. FPL interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Fort Lauderdale?",
      a: "Fort Lauderdale runs about $2.65 per watt installed for residential, essentially identical to Miami, meaning a 7 kW system typically costs around $18,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,000. HVHZ-rated racking adds roughly 5 to 10 percent compared with non-HVHZ Florida metros.",
    },
    {
      q: "Is solar worth it in Fort Lauderdale?",
      a: "Yes for Broward homes with suitable roofs. The combination of FPL retail NEM, strong sun hours and rising retail rates makes residential solar payback typically 9 to 12 years with the federal tax credit. Hurricane resilience is a common secondary driver that homeowners add battery storage for.",
    },
  ],
};
