import type { City } from "../types";

export const JACKSONVILLE: City = {
  slug: "jacksonville",
  stateSlug: "florida",
  name: "Jacksonville",
  title: "Solar in Jacksonville: JEA, net metering and First Coast permits",
  metaTitle: "Solar Companies in Jacksonville: JEA, Permits, Net Metering",
  metaDescription:
    "Honest guide to solar in Jacksonville: JEA (Jacksonville Electric Authority) net metering, City of Jacksonville permits (non-HVHZ), and running a solar company in the First Coast.",
  answer:
    "Jacksonville is served by JEA, one of the largest municipal utilities in the US. JEA offers net metering for residential solar, with credits accruing monthly and annual excess paid at avoided cost. Jacksonville is NOT in the Florida Building Code's High Velocity Hurricane Zone, so permits and racking requirements are cheaper and simpler than Miami or Fort Lauderdale.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 5.1,
    sunnyDays: 221,
    note: "Jacksonville gets around 5.1 peak sun hours per day with 221 sunny days per year, moderate-to-strong for solar. Hurricane and tropical storm exposure is real (northeast Florida sees direct hits every 5 to 10 years on average); Florida Building Code wind-load design (typically 130 to 140 mph in Duval County) applies. Afternoon summer thunderstorms reduce production more than the sunny-days count suggests.",
  },
  market: {
    metroPopulationK: 1740,
    averageCostPerWatt: 2.55,
    leadCostUsd: { low: 115, high: 210 },
    installerDensity: "Moderate",
  },
  utilities: [
    "JEA (Jacksonville Electric Authority), municipal utility, serves most of Duval County and parts of surrounding counties",
    "Florida Power & Light serves parts of St. Johns and Clay counties south and west of Jacksonville",
    "Clay Electric Cooperative serves parts of Clay County",
  ],
  permits: {
    office: "City of Jacksonville Building Inspection Division",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Jacksonville Building Inspection Division typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted as of 2026. St. Johns County, Clay County and Nassau County each have their own permit offices with 2 to 4 week typical timelines. Jacksonville is NOT in the Miami-Dade HVHZ, so Florida Building Code wind-load design (130 to 140 mph in most of the metro) applies but NOA racking is not required. JEA interconnection post-install typically runs 2 to 4 weeks.",
  },
  installerLandscape:
    "Running a solar company in Jacksonville means working in a growing market with moderate installer density and lower lead costs than coastal South Florida. JEA's net metering programme makes the sales conversation straightforward (retail credit for exports, annual true-up), and the lack of HVHZ requirements keeps install costs down. The best Jacksonville operators fluently handle both JEA and FPL interconnection (since the First Coast metro crosses the utility boundary), understand Florida Building Code wind-load design for the Duval and St. Johns counties, and avoid the common out-of-state installer mistake of over-sizing systems past JEA's net metering interconnection size limit. Lead costs run $115 to $210.",
  faq: [
    {
      q: "Does JEA have net metering?",
      a: "Yes. JEA offers net metering for residential solar systems up to 25 kW AC. Credits accrue monthly at retail; annual excess at year-end is paid out at JEA's avoided cost rate (roughly $0.03 per kWh). Interconnection application runs through JEA's online portal with typical approval in 2 to 4 weeks post-install.",
    },
    {
      q: "Is Jacksonville in the HVHZ?",
      a: "No. The High Velocity Hurricane Zone (HVHZ) under the Florida Building Code covers Miami-Dade and Broward counties only. Jacksonville is in Duval County, which uses the standard Florida Building Code wind-load design (typically 130 to 140 mph in most of the metro) and does not require Miami-Dade Notice of Acceptance (NOA) racking. This is why solar costs run cheaper in Jacksonville than Miami.",
    },
    {
      q: "How long does a solar permit take in Jacksonville?",
      a: "City of Jacksonville Building Inspection typically runs residential solar permits in 3 to 5 weeks. Surrounding counties (St. Johns, Clay, Nassau) run 2 to 4 weeks typically. JEA interconnection post-install adds 2 to 4 weeks.",
    },
    {
      q: "How much does solar cost in Jacksonville?",
      a: "Jacksonville runs about $2.55 per watt installed for residential, meaning a 7 kW system typically costs around $17,900 gross. After the 30 percent federal tax credit, net cost is approximately $12,500. Jacksonville runs similar to Orlando because neither requires HVHZ engineering.",
    },
    {
      q: "Is solar worth it in Jacksonville?",
      a: "Yes for most Jacksonville homes with suitable roofs. The combination of JEA retail NEM, strong sun hours and rising retail rates makes residential solar payback typically 9 to 12 years with the federal tax credit. Hurricane resilience is a secondary driver some homeowners add battery storage for.",
    },
  ],
};
