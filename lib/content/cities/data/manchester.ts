import type { City } from "../types";

export const MANCHESTER: City = {
  slug: "manchester",
  stateSlug: "new-hampshire",
  name: "Manchester",
  title: "Solar in Manchester NH: Eversource, Renewable Energy Rebate and permits",
  metaTitle: "Solar Companies in Manchester NH: Eversource, Rebate, Permits",
  metaDescription:
    "Honest guide to solar in Manchester New Hampshire: Eversource NH retail net metering, NH Renewable Energy Rebate programme, City of Manchester permits, and running a solar company in southern NH.",
  answer:
    "Manchester is served by Eversource NH under retail-rate net metering, with the NH Renewable Energy Rebate ($0.20 per watt capped at $1,000) adding a modest incentive on top of the 30 percent federal credit. High Eversource retail rates (around $0.26 per kWh) do most of the economic work for solar. Permits run through the City of Manchester Office of Building Regulations.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.2,
    sunnyDays: 199,
    note: "Manchester gets around 4.2 peak sun hours per day with 199 sunny days per year, moderate for solar. Winter snow derating typically reduces annual production by 10 to 20 percent. Summer thunderstorms reduce afternoon production more than most installers model.",
  },
  market: {
    metroPopulationK: 410,
    averageCostPerWatt: 3.1,
    leadCostUsd: { low: 100, high: 180 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Eversource New Hampshire, investor-owned, serves most of southern NH including Manchester",
    "Liberty Utilities (NH) serves parts of central NH",
    "Various municipal utilities (Manchester has limited municipal operations) serve specific pockets",
  ],
  permits: {
    office: "City of Manchester Office of Building Regulations",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Manchester Office of Building Regulations typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Hillsborough and Rockingham county towns run their own permits with 2 to 4 week typical timelines. Eversource NH interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Manchester means working in a small southern NH market where high retail electric rates do most of the sales work. The best Manchester operators have templated Renewable Energy Rebate workflows (post-install application via NH PUC's Office of Energy Innovation), handle Eversource NH interconnection fluently, and model winter snow derating honestly. Lead costs run $100 to $180 on Google search.",
  faq: [
    {
      q: "Does Eversource NH have net metering in Manchester?",
      a: "Yes, retail-rate net metering for residential solar systems up to 100 kW AC under Public Utilities Commission rules. Credits accrue monthly at retail; annual true-up at year-end with excess rolled forward or credited at avoided cost.",
    },
    {
      q: "What is the NH Renewable Energy Rebate for Manchester?",
      a: "The NH Renewable Energy Rebate pays residential solar installations $0.20 per watt DC capped at $1,000. For a typical 7 kW system this is $1,000 (reaching the cap). The rebate is paid post-install and stacks with the 30 percent federal tax credit.",
    },
    {
      q: "How long does a solar permit take in Manchester?",
      a: "City of Manchester Office of Building Regulations typically runs residential solar permits in 3 to 5 weeks. Surrounding Hillsborough and Rockingham counties run 2 to 4 weeks typically. Eversource NH interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Manchester?",
      a: "Manchester runs about $3.10 per watt installed for residential, meaning a 7 kW system typically costs around $21,700 gross. After the 30 percent federal tax credit and the NH Renewable Energy Rebate, net cost is approximately $14,200.",
    },
    {
      q: "Is solar worth it in Manchester?",
      a: "Yes for most Manchester homes with suitable roofs. The combination of high retail electric rates (around $0.26 per kWh at Eversource NH), retail-rate NEM, the Renewable Energy Rebate, and the 30 percent federal credit makes residential solar payback typically 8 to 11 years. Winter snow derating stretches payback; honest annual yield modelling matters.",
    },
  ],
};
