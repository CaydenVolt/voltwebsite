import type { City } from "../types";

export const COLUMBUS: City = {
  slug: "columbus",
  stateSlug: "ohio",
  name: "Columbus",
  title: "Solar in Columbus: AEP Ohio, retail net metering and permits",
  metaTitle: "Solar Companies in Columbus: AEP Ohio, Permits, NEM",
  metaDescription:
    "Honest guide to solar in Columbus: AEP Ohio retail net metering, City of Columbus permits, modest Ohio SREC market, and running a solar company in Central Ohio.",
  answer:
    "Columbus is served by AEP Ohio under Ohio's retail net metering, with a modest SREC market under the state Alternative Energy Portfolio Standard (currently paying around $5 to $10 per SREC). The economics work on retail NEM plus the federal tax credit; Ohio SREC income is minor relative to Pennsylvania or Illinois. Permits run through City of Columbus Department of Building and Zoning Services.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.4,
    sunnyDays: 177,
    note: "Columbus gets around 4.4 peak sun hours per day with 177 sunny days per year, moderate for solar. Winter snow and cloud cover reduce annual production by 10 to 20 percent for most residential installations. Summer thunderstorms reduce afternoon production more than the sunny-days count suggests.",
  },
  market: {
    metroPopulationK: 2170,
    averageCostPerWatt: 2.8,
    leadCostUsd: { low: 95, high: 175 },
    installerDensity: "Moderate",
  },
  utilities: [
    "AEP Ohio (American Electric Power subsidiary), investor-owned, serves Columbus and most of Central Ohio",
    "FirstEnergy (Ohio Edison, Cleveland Electric Illuminating, Toledo Edison) serves other parts of Ohio but not Columbus",
    "Various municipal utilities (Westerville Electric Division, Columbus own small operations) serve specific pockets",
  ],
  permits: {
    office: "City of Columbus Department of Building and Zoning Services",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Columbus Department of Building and Zoning Services typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Franklin, Delaware and Fairfield county jurisdictions run their own permits with 2 to 4 week typical timelines. AEP Ohio interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Columbus means working in a growing Central Ohio market with lower lead costs than most US metros. The retail net metering plus federal tax credit stack makes the sales conversation straightforward; the thin Ohio SREC market is a minor add-on rather than a central value driver. The best Columbus operators have templated AEP Ohio interconnection workflows and model winter snow derating honestly. Lead costs run $95 to $175 on Google search.",
  faq: [
    {
      q: "Does AEP Ohio have net metering?",
      a: "Yes, retail-rate net metering for residential solar systems up to 25 kW AC under Public Utilities Commission of Ohio rules. Credits accrue monthly at retail; annual true-up at year-end with excess paid at avoided cost (currently around $0.03 per kWh).",
    },
    {
      q: "What is the Ohio SREC market?",
      a: "Ohio's Alternative Energy Portfolio Standard creates a market for solar renewable energy credits, but the SREC spot price is modest (currently around $5 to $10 per SREC) because the solar carve-out is small. A typical 7 kW system producing 8,000 kWh annually earns 8 SRECs worth $40 to $80 per year. SRECs are sold through aggregators but represent only a minor income stream compared with PA or IL.",
    },
    {
      q: "How long does a solar permit take in Columbus?",
      a: "City of Columbus Department of Building and Zoning Services typically runs residential solar permits in 3 to 5 weeks. Surrounding Franklin, Delaware and Fairfield county jurisdictions run 2 to 4 weeks typically. AEP Ohio interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Columbus?",
      a: "Columbus runs about $2.80 per watt installed for residential, meaning a 7 kW system typically costs around $19,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,700. Ohio has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Columbus?",
      a: "Yes for Columbus homes with suitable roofs. The combination of AEP Ohio retail NEM and the federal tax credit makes residential solar payback typically 10 to 13 years. Winter snow derating stretches payback compared to Sun Belt peers; honest annual yield modelling matters.",
    },
  ],
};
