import type { City } from "../types";

export const PROVIDENCE: City = {
  slug: "providence",
  stateSlug: "rhode-island",
  name: "Providence",
  title: "Solar in Providence: Rhode Island Energy, REG and city permits",
  metaTitle: "Solar Companies in Providence: RI Energy, REG, Permits",
  metaDescription:
    "Honest guide to solar in Providence: Rhode Island Energy retail net metering, Renewable Energy Growth (REG) performance incentive, City of Providence permits, and running a solar company in RI.",
  answer:
    "Providence is served by Rhode Island Energy under retail-rate net metering plus the Renewable Energy Growth (REG) programme that pays per-kWh for 15 years. High retail rates ($0.30 per kWh) plus REG performance incentives make residential payback among the fastest in the Northeast. Permits run through the City of Providence Department of Inspection and Standards.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.3,
    sunnyDays: 199,
    note: "Providence gets around 4.3 peak sun hours per day with 199 sunny days per year, moderate for solar. Winter snow derating is modest (5 to 15 percent annual loss). Coastal climate on Narragansett Bay requires marine-grade stainless hardware for installations within 1 mile of the water.",
  },
  market: {
    metroPopulationK: 1620,
    averageCostPerWatt: 3.1,
    leadCostUsd: { low: 130, high: 220 },
    installerDensity: "High",
  },
  utilities: [
    "Rhode Island Energy (PPL subsidiary, formerly National Grid Rhode Island), investor-owned, serves all of Providence",
    "Pascoag Utility District serves Pascoag",
  ],
  permits: {
    office: "City of Providence Department of Inspection and Standards",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Providence Department of Inspection and Standards typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding cities (Warwick, Cranston, Pawtucket, East Providence) each run their own permits with 2 to 5 week typical timelines. Rhode Island Energy interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Providence means working in a mature market where REG payments do serious economic lifting. The best Providence operators have templated REG registration workflows (block pricing fills over time; timing matters), fluent Rhode Island Energy interconnection, and marine-grade hardware fluency for coastal zip codes. Lead costs run $130 to $220 on Google search.",
  faq: [
    {
      q: "Does Rhode Island Energy have net metering?",
      a: "Yes, retail-rate net metering for residential solar systems up to 25 kW AC under PUC rules. Credits accrue monthly at retail; annual true-up at year-end with excess rolled forward.",
    },
    {
      q: "What is the REG programme in Providence?",
      a: "The RI Renewable Energy Growth programme pays residential solar installations a per-kWh performance incentive for 15 years at block-rate pricing (currently approximately $0.28 to $0.36 per kWh depending on current block). For a typical 7 kW system producing 8,000 kWh annually, REG payments add $2,200 to $2,900 per year.",
    },
    {
      q: "How long does a solar permit take in Providence?",
      a: "City of Providence Department of Inspection and Standards typically runs residential solar permits in 3 to 5 weeks. Surrounding cities run 2 to 5 weeks typically. Rhode Island Energy interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Providence?",
      a: "Providence runs about $3.10 per watt installed for residential, meaning a 7 kW system typically costs around $21,700 gross. After the 30 percent federal tax credit and the 15-year REG income stream, effective net cost is often net-positive from day one depending on current block pricing.",
    },
    {
      q: "Is solar worth it in Providence?",
      a: "Yes substantially. The combination of Rhode Island Energy retail NEM, 15 years of REG performance incentives, and the 30 percent federal credit makes residential solar payback typically 4 to 7 years for Providence homes with suitable roofs.",
    },
  ],
};
