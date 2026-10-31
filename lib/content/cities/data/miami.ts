import type { City } from "../types";

export const MIAMI: City = {
  slug: "miami",
  stateSlug: "florida",
  name: "Miami",
  title: "Solar in Miami: FPL net metering, HVHZ permits and hurricanes",
  metaTitle: "Solar Companies in Miami: FPL, HVHZ Permits, Hurricanes",
  metaDescription:
    "Honest guide to solar in Miami: FPL net metering reality, Miami-Dade HVHZ permit requirements, hurricane-rated mounting standards, and running a solar company in Miami.",
  answer:
    "Miami's residential solar market is defined by Florida Power & Light (FPL) net metering and the High Velocity Hurricane Zone (HVHZ) permit requirements that cover Miami-Dade and Broward counties. HVHZ requires enhanced wind-load engineering (175 mph design standard) and limits racking and mounting hardware to products with Miami-Dade Notice of Acceptance (NOA). Permit turnarounds run 3 to 6 weeks because of the engineering review burden; cheap out-of-state installers regularly fail HVHZ submittals.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 5.2,
    sunnyDays: 248,
    note: "Miami gets around 5.2 peak sun hours per day with 248 sunny days per year, strong for solar. The dominant climate factor is hurricane season (June through November); roof-mount systems in Miami must meet the HVHZ 175 mph design wind speed under the Florida Building Code. Afternoon thunderstorm cloud cover reduces summer-afternoon production more than homeowners typically expect from the sunny-days count.",
  },
  market: {
    metroPopulationK: 6200,
    averageCostPerWatt: 2.65,
    leadCostUsd: { low: 140, high: 250 },
    installerDensity: "High",
  },
  utilities: [
    "Florida Power & Light (FPL), investor-owned, serves most of Miami-Dade and Broward",
    "Florida Public Utilities (serves a small part of South Dade)",
  ],
  permits: {
    office: "Miami-Dade County Regulatory and Economic Resources (RER), plus individual city building departments",
    turnaroundWeeks: "3 to 6 weeks for standard residential (HVHZ engineering review required)",
    solarApp: "Not accepted",
    note: "Miami-Dade is a High Velocity Hurricane Zone (HVHZ) under the Florida Building Code. Residential solar permits require stamped structural engineering for 175 mph design wind speed, and all racking and mounting hardware must have a Miami-Dade Notice of Acceptance (NOA). SolarAPP+ is not accepted in HVHZ jurisdictions. Permit turnarounds run 3 to 6 weeks; cheap out-of-state installers regularly submit non-NOA racking and get rejected. Each individual city within Miami-Dade (Miami, Coral Gables, Doral, Homestead) has its own building department with its own queue.",
  },
  installerLandscape:
    "Running a solar company in Miami means operating in a market with a real technical moat: HVHZ engineering competence. Companies without in-house structural engineering or a reliable PE partner struggle to pass HVHZ permit review on the first submission, which stretches project timelines by weeks and burns margin. The best Miami operators have templated HVHZ submittals, use only NOA-approved racking (IronRidge, S-5, Unirac Everest D with current NOAs), and build hurricane-season scheduling buffers into their project plans. Lead costs run $140 to $250, moderate for coastal metros. The Spanish-speaking homeowner market is substantial and underserved by English-only installers.",
  faq: [
    {
      q: "Does FPL have net metering?",
      a: "Yes, retail-rate net metering for residential solar systems up to 10 kW AC, continuing under Florida PSC rules (notwithstanding the 2022 attempt to phase it out, which the governor vetoed). Credits accrue monthly at retail; annual excess at year-end is paid out at FPL's avoided cost rate (roughly $0.03 per kWh), substantially lower than retail. For most residential systems sized to annual load this true-up is a small portion of total value.",
    },
    {
      q: "What are HVHZ permit requirements in Miami?",
      a: "Miami-Dade and Broward counties are designated High Velocity Hurricane Zones (HVHZ) under the Florida Building Code. Residential solar permits require stamped structural engineering for 175 mph design wind speed, and all racking and mounting hardware must have a current Miami-Dade Notice of Acceptance (NOA). Not all commonly-used solar racking products have HVHZ NOAs, so product selection matters more here than in most other US metros.",
    },
    {
      q: "How long does a solar permit take in Miami?",
      a: "Residential solar permits in Miami-Dade typically run 3 to 6 weeks because of the HVHZ engineering review burden. The specific city building department (Miami, Coral Gables, Doral, Homestead, etc.) matters because each runs its own queue. First-time applicants and those without HVHZ engineering experience often see submissions rejected and resubmitted, which can extend timelines to 8 to 10 weeks.",
    },
    {
      q: "How much does solar cost in Miami?",
      a: "Miami runs about $2.65 per watt installed for residential, meaning a 7 kW system typically costs around $18,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,000. HVHZ-rated racking adds roughly 5 to 10 percent to turnkey cost compared with non-HVHZ Florida metros like Orlando or Tampa.",
    },
    {
      q: "Is solar worth it in Miami?",
      a: "Yes for Miami-Dade homes with suitable roofs. The combination of strong FPL retail NEM, strong sun hours and rising retail rates makes residential solar payback typically 9 to 12 years with the federal tax credit. Hurricane resilience is a common secondary driver that homeowners add battery storage for, which stretches payback but reduces the outage risk that Miami households regularly face.",
    },
  ],
};
