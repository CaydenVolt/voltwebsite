import type { City } from "../types";

export const CAMBRIDGE: City = {
  slug: "cambridge",
  stateSlug: "massachusetts",
  name: "Cambridge",
  title: "Solar in Cambridge: Eversource, SMART and historic district permits",
  metaTitle: "Solar Companies in Cambridge MA: Eversource, SMART, Permits",
  metaDescription:
    "Honest guide to solar in Cambridge Massachusetts: Eversource net metering, SMART incentive, Cambridge Inspectional Services with historic district review, and running a solar company in Middlesex County.",
  answer:
    "Cambridge is served by Eversource under Massachusetts retail-rate net metering plus the SMART performance incentive. Dense condo and triple-decker housing stock dominates; historic district review adds weeks to project timelines in neighbourhoods like Harvard Square and Mid-Cambridge. Permits run through Cambridge Inspectional Services Department.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.1,
    sunnyDays: 201,
    note: "Cambridge has essentially the same climate as Boston: 4.1 peak sun hours per day, 201 sunny days per year. Winter snow derating is substantial. Dense tree canopy in many Cambridge neighbourhoods limits suitable rooftops more than most of the metro.",
  },
  market: {
    metroPopulationK: 120,
    averageCostPerWatt: 3.3,
    leadCostUsd: { low: 170, high: 300 },
    installerDensity: "High",
  },
  utilities: ["Eversource Energy, investor-owned, serves all of Cambridge"],
  permits: {
    office: "Cambridge Inspectional Services Department",
    turnaroundWeeks: "4 to 8 weeks for standard residential",
    solarApp: "Not accepted",
    note: "Cambridge Inspectional Services Department typically runs residential solar permits in 4 to 8 weeks. SolarAPP+ is not accepted. Historic district review applies in Mid-Cambridge, Harvard Square and other designated districts, adding 2 to 6 weeks. Condo building projects require condo-board approval that runs in parallel. Eversource interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Cambridge means handling dense urban housing stock, condo-dominated multi-family buildings, and historic district aesthetic review. The best Cambridge operators specialise in multi-unit buildings with legal infrastructure for condo-board approvals, have templated SMART registration workflows, and understand historic district aesthetic constraints. Lead costs run $170 to $300 on Google search, among the higher in Massachusetts.",
  faq: [
    {
      q: "Does Eversource have net metering in Cambridge?",
      a: "Yes, retail-rate net metering for residential solar systems up to 25 kW AC. Credits accrue monthly at retail; annual true-up at year-end with excess rolled forward or paid at avoided cost.",
    },
    {
      q: "What is the SMART incentive for Cambridge?",
      a: "Massachusetts SMART pays residential solar installations a per-kWh performance incentive for 10 years at approximately $0.08 to $0.15 per kWh depending on current block availability. For a typical 7 kW system, SMART adds $400 to $800 per year for 10 years.",
    },
    {
      q: "How long does a solar permit take in Cambridge?",
      a: "Cambridge Inspectional Services Department typically runs residential solar permits in 4 to 8 weeks. Historic district review in designated districts adds 2 to 6 weeks. Condo building projects require condo-board approval. Eversource interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Cambridge?",
      a: "Cambridge runs about $3.30 per watt installed for residential, higher than most of Massachusetts because of urban permit burden and condo complexity, meaning a 7 kW system typically costs around $23,100 gross. After the 30 percent federal tax credit and the 10-year SMART income stream, effective net cost is often $11,000 to $14,000.",
    },
    {
      q: "Is solar worth it in Cambridge?",
      a: "Yes for Cambridge homes with suitable roofs. The combination of Eversource retail NEM, SMART payments, and the federal tax credit makes residential solar payback typically 7 to 10 years. Condo and historic district complexity add project burden but do not change the underlying economics.",
    },
  ],
};
