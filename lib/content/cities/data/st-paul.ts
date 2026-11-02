import type { City } from "../types";

export const ST_PAUL: City = {
  slug: "st-paul",
  stateSlug: "minnesota",
  name: "St. Paul",
  title: "Solar in St. Paul: Xcel Energy, Solar*Rewards and Ramsey County permits",
  metaTitle: "Solar Companies in St. Paul: Xcel Energy, Solar*Rewards, Permits",
  metaDescription:
    "Honest guide to solar in St. Paul Minnesota: Xcel Energy retail net metering, Solar*Rewards production incentive, City of St. Paul permits, and running a solar company in Ramsey County.",
  answer:
    "St. Paul is served by Xcel Energy Minnesota under retail-rate net metering plus Solar*Rewards production incentive (same as Minneapolis). Permits run through the City of St. Paul Department of Safety and Inspections. Twin Cities' SMART-equivalent stacked incentives make Minnesota economics work despite winter weather.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.3,
    sunnyDays: 198,
    note: "St. Paul has essentially the same climate as Minneapolis: 4.3 peak sun hours per day, 198 sunny days per year. Winter snow derating is substantial (15 to 25 percent annual loss). Mississippi River valley climate marginally different from west Twin Cities but production is similar.",
  },
  market: {
    metroPopulationK: 310,
    averageCostPerWatt: 3.0,
    leadCostUsd: { low: 105, high: 190 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Xcel Energy Minnesota, investor-owned, serves most of St. Paul",
    "Various municipal utilities (Shakopee Public Utilities, Elk River Municipal Utilities, others) serve specific suburbs",
  ],
  permits: {
    office: "City of St. Paul Department of Safety and Inspections",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of St. Paul Department of Safety and Inspections typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Ramsey and Dakota county jurisdictions run 2 to 4 weeks typically. Xcel Energy interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in St. Paul means working under the same Xcel + Solar*Rewards stack as Minneapolis. The best St. Paul operators have templated Solar*Rewards registration workflows (10-year contract, per-kWh payment on block schedule), handle Xcel Energy interconnection fluently, and model winter snow derating honestly. Lead costs run $105 to $190 on Google search.",
  faq: [
    {
      q: "Does Xcel Energy have net metering in St. Paul?",
      a: "Yes, retail-rate net metering for residential solar systems up to 40 kW AC under Minnesota PUC rules. Credits accrue monthly at retail; annual true-up at avoided cost.",
    },
    {
      q: "What is Solar*Rewards?",
      a: "Xcel Energy's Solar*Rewards pays residential solar installations a per-kWh production incentive for 10 years at approximately $0.07 per kWh. A typical 7 kW system earns around $600 per year for 10 years. Combined with the federal credit, this is the main driver of Twin Cities solar economics.",
    },
    {
      q: "How long does a solar permit take in St. Paul?",
      a: "City of St. Paul Department of Safety and Inspections typically runs residential solar permits in 3 to 5 weeks. Surrounding Ramsey and Dakota counties run 2 to 4 weeks typically. Xcel Energy interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in St. Paul?",
      a: "St. Paul runs about $3.00 per watt installed for residential, meaning a 7 kW system typically costs around $21,000 gross. After the 30 percent federal tax credit and the 10-year Solar*Rewards income stream, effective net cost is often $11,000 to $13,000.",
    },
    {
      q: "Is solar worth it in St. Paul?",
      a: "Yes for St. Paul homes with suitable roofs. The combination of Xcel retail NEM, Solar*Rewards, and the federal tax credit makes residential solar payback typically 8 to 11 years, same as Minneapolis.",
    },
  ],
};
