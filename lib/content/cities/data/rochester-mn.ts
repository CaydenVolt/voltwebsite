import type { City } from "../types";

export const ROCHESTER_MN: City = {
  slug: "rochester-mn",
  stateSlug: "minnesota",
  name: "Rochester",
  title: "Solar in Rochester MN: Rochester Public Utilities municipal",
  metaTitle: "Solar Companies in Rochester MN: RPU, Permits",
  metaDescription:
    "Honest guide to solar in Rochester Minnesota: Rochester Public Utilities (RPU) municipal utility, Mayo Clinic market, City of Rochester permits, and running a solar company in Olmsted County.",
  answer:
    "Rochester MN is served by Rochester Public Utilities (RPU), a municipal utility (NOT Xcel Energy). RPU operates its own net metering programme with its own rules. The Mayo Clinic medical hub creates a stable high-income homeowner base. Permits run through the City of Rochester Building Safety.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.3,
    sunnyDays: 194,
    note: "Rochester MN gets around 4.3 peak sun hours per day with 194 sunny days per year, moderate for solar given the latitude. Winter snow derating is substantial (15 to 25 percent annual loss). Steep south-facing panels shed snow faster.",
  },
  market: {
    metroPopulationK: 230,
    averageCostPerWatt: 3.0,
    leadCostUsd: { low: 95, high: 170 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Rochester Public Utilities (RPU), municipal utility, serves most of the city of Rochester MN",
    "Various electric cooperatives (People's Energy Cooperative, Freeborn-Mower Cooperative) serve surrounding Olmsted County outside city limits",
  ],
  permits: {
    office: "City of Rochester Building Safety",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Rochester Building Safety typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted. Surrounding Olmsted County unincorporated runs similar timelines. RPU interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Rochester MN means working under RPU municipal net metering (not Xcel Solar*Rewards). The best Rochester operators are explicit about the Solar*Rewards gap (which only applies to Xcel customers) in sales conversations, handle RPU interconnection fluently, and serve the stable Mayo Clinic professional homeowner base. Lead costs run $95 to $170 on Google search.",
  faq: [
    {
      q: "Does RPU have net metering?",
      a: "Yes. Rochester Public Utilities operates its own net metering programme for residential solar customers. Credits accrue monthly at retail; annual true-up at avoided cost. RPU is a municipal utility distinct from Xcel Energy.",
    },
    {
      q: "Does Solar*Rewards apply to Rochester MN?",
      a: "No for RPU customers. Xcel Energy's Solar*Rewards production incentive applies only to Xcel customers; RPU municipal customers do not qualify. For RPU residents, the 30 percent federal tax credit is the primary incentive.",
    },
    {
      q: "How long does a solar permit take in Rochester MN?",
      a: "City of Rochester Building Safety typically runs residential solar permits in 2 to 4 weeks. RPU interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Rochester MN?",
      a: "Rochester MN runs about $3.00 per watt installed for residential, meaning a 7 kW system typically costs around $21,000 gross. After the 30 percent federal tax credit, net cost is approximately $14,700.",
    },
    {
      q: "Is solar worth it in Rochester MN?",
      a: "For Rochester homes with suitable roofs, yes but with longer payback than Minneapolis Xcel customers who get Solar*Rewards: typically 11 to 14 years with the federal tax credit under RPU municipal rates. Honest comparison with Minneapolis incentives matters.",
    },
  ],
};
