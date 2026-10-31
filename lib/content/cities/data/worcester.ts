import type { City } from "../types";

export const WORCESTER: City = {
  slug: "worcester",
  stateSlug: "massachusetts",
  name: "Worcester",
  title: "Solar in Worcester: National Grid, SMART and Central Mass permits",
  metaTitle: "Solar Companies in Worcester: National Grid, SMART, Permits",
  metaDescription:
    "Honest guide to solar in Worcester: National Grid Massachusetts net metering, SMART incentive, City of Worcester permits, Central Massachusetts market dynamics, and running a solar company in Worcester.",
  answer:
    "Worcester is served by National Grid Massachusetts (not Eversource, which serves Boston). The SMART incentive applies at the National Grid Massachusetts block rate, with current residential incentives of $0.08 to $0.15 per kWh for 10 years depending on block availability. City of Worcester Inspectional Services permits run 3 to 5 weeks typically.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 4.0,
    sunnyDays: 197,
    note: "Worcester gets around 4.0 peak sun hours per day with 197 sunny days per year, among the lower in the US. Winter snow is a serious factor; snow accumulation on panels during January and February typically reduces annual production by 10 to 20 percent for Worcester residential installations. Central Massachusetts gets more total snow than coastal Boston.",
  },
  market: {
    metroPopulationK: 870,
    averageCostPerWatt: 3.1,
    leadCostUsd: { low: 130, high: 230 },
    installerDensity: "Moderate",
  },
  utilities: [
    "National Grid Massachusetts, investor-owned, serves Worcester and most of Central Massachusetts",
    "Various municipal utilities (Holden, Shrewsbury, Westborough, others) serve specific suburbs with their own solar programmes",
  ],
  permits: {
    office: "City of Worcester Inspectional Services Division",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Worcester Inspectional Services typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Worcester County suburbs each have their own permit offices with 2 to 5 week typical timelines. National Grid interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Worcester means working in a Central Massachusetts market with less installer density than Boston. The SMART incentive at the National Grid Massachusetts block rate does serious economic work. The best Worcester operators have templated SMART registration workflows, fluent National Grid interconnection, and honest winter snow production conversations with homeowners. Municipal utility customers in surrounding suburbs often have different solar programmes worth understanding. Lead costs run $130 to $230 on Google search.",
  faq: [
    {
      q: "What utility serves Worcester?",
      a: "Worcester is served by National Grid Massachusetts, not Eversource (which serves Boston). The utility offers retail-rate net metering for residential solar under Massachusetts DPU rules. Interconnection application runs through National Grid's online solar portal.",
    },
    {
      q: "What is the Massachusetts SMART incentive?",
      a: "The Solar Massachusetts Renewable Target (SMART) programme pays per-kWh of generation for 10 years. Current block rates for residential installations are approximately $0.08 to $0.15 per kWh depending on utility territory and whether storage is attached (confirm with the Massachusetts DOER before quoting). A typical 7 kW system earns $400 to $800 annually from SMART for 10 years.",
    },
    {
      q: "How long does a solar permit take in Worcester?",
      a: "City of Worcester Inspectional Services typically runs residential solar permits in 3 to 5 weeks. Surrounding suburbs run 2 to 5 weeks typically. National Grid interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Worcester?",
      a: "Worcester runs about $3.10 per watt installed for residential, meaning a 7 kW system typically costs around $21,700 gross. After the 30 percent federal tax credit, the 10-year SMART income stream (present value approximately $3,500 to $6,500), and the Massachusetts personal income-tax credit for solar (15 percent capped at $1,000), effective net cost is often $10,000 to $12,500.",
    },
    {
      q: "Is solar worth it in Worcester?",
      a: "Yes for Worcester homes with suitable roofs. Payback typically runs 7 to 10 years with the federal tax credit under the stacked incentives (SMART, state tax credit, federal credit), similar to Boston. The lower sun hours and higher winter snow derating are partially offset by the strong incentive stack. Honest shade audits and winter snow conversations matter.",
    },
  ],
};
