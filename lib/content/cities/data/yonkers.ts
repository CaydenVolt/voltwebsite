import type { City } from "../types";

export const YONKERS: City = {
  slug: "yonkers",
  stateSlug: "new-york",
  name: "Yonkers",
  title: "Solar in Yonkers: Con Edison, NY-Sun and Westchester permits",
  metaTitle: "Solar Companies in Yonkers: Con Edison, NY-Sun, Permits",
  metaDescription:
    "Honest guide to solar in Yonkers New York: Con Edison net metering with CBC fees, NY-Sun installer rebate, City of Yonkers permits, and running a solar company in Westchester County.",
  answer:
    "Yonkers is served by Con Edison under the current NEM with CBC (Customer Benefit Contribution) fees that reduce effective export credit. NY-Sun installer rebates apply at the NYC region block rates. The NY State 25 percent solar tax credit plus federal credit still make the stacked economics work. Permits run through the City of Yonkers Building Department.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.2,
    sunnyDays: 221,
    note: "Yonkers gets around 4.2 peak sun hours per day with 221 sunny days per year, moderate for solar. Winter snow derating is modest. Urban shading from neighbouring buildings matters more than in suburban Westchester.",
  },
  market: {
    metroPopulationK: 215,
    averageCostPerWatt: 3.3,
    leadCostUsd: { low: 160, high: 290 },
    installerDensity: "High",
  },
  utilities: [
    "Consolidated Edison (Con Edison), investor-owned, serves most of lower Westchester including Yonkers",
    "NYSEG (New York State Electric & Gas) serves parts of outlying Westchester",
  ],
  permits: {
    office: "City of Yonkers Building Department",
    turnaroundWeeks: "4 to 8 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Yonkers Building Department typically runs residential solar permits in 4 to 8 weeks. SolarAPP+ is not accepted. Multi-unit and co-op buildings require association approval. Con Edison interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Yonkers means working in a dense Westchester market with Con Edison's CBC-reduced NEM. The best Yonkers operators have templated NY-Sun registration workflows, understand the Con Edison CBC fee impact on payback, and handle multi-unit and co-op building approvals. Lead costs run $160 to $290 on Google search.",
  faq: [
    {
      q: "Does Con Edison have net metering in Yonkers?",
      a: "Yes, but reduced by Customer Benefit Contribution (CBC) fees. Residential solar exports credit at retail minus the CBC (currently around $0.69 to $1.09 per kW of installed capacity per month). Pre-CBC customers are grandfathered.",
    },
    {
      q: "What is NY-Sun for Yonkers?",
      a: "NY-Sun pays installer-side rebates for residential solar. Yonkers is in Con Edison territory which uses NYC region block pricing (confirm current block with NYSERDA before quoting). The rebate is paid to the installer and typically passed through.",
    },
    {
      q: "How long does a solar permit take in Yonkers?",
      a: "City of Yonkers Building Department typically runs residential solar permits in 4 to 8 weeks. SolarAPP+ is not accepted. Co-op and multi-unit buildings add association approval. Con Edison interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Yonkers?",
      a: "Yonkers runs about $3.30 per watt installed for residential, higher than most of NY State because of urban permit burden, meaning a 7 kW system typically costs around $23,100 gross. After the 30 percent federal tax credit, NY-Sun installer rebate pass-through, NY State 25 percent solar credit (capped $5,000), and the 15-year property tax exemption, effective net cost is often $10,000 to $13,000.",
    },
    {
      q: "Is solar worth it in Yonkers?",
      a: "Yes for Yonkers homes with suitable roofs. The stacked NY incentives make residential solar payback typically 7 to 10 years with the federal tax credit despite the Con Edison CBC fees.",
    },
  ],
};
