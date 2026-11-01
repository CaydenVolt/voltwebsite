import type { City } from "../types";

export const ROCHESTER: City = {
  slug: "rochester",
  stateSlug: "new-york",
  name: "Rochester",
  title: "Solar in Rochester: RG&E, NY-Sun and Finger Lakes climate",
  metaTitle: "Solar Companies in Rochester NY: RG&E, NY-Sun, Permits",
  metaDescription:
    "Honest guide to solar in Rochester New York: Rochester Gas & Electric (RG&E) net metering, NY-Sun installer rebate, City of Rochester permits, lake-effect weather, and running a solar company in Monroe County.",
  answer:
    "Rochester is served by RG&E (Avangrid subsidiary) under New York retail net metering plus NY-Sun installer rebates at the Upstate block rates. Finger Lakes weather and Lake Ontario-effect cloud cover reduce annual production. Permits run through the City of Rochester Building Services.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 3.9,
    sunnyDays: 160,
    note: "Rochester gets around 3.9 peak sun hours per day with 160 sunny days per year, among the lower in the US. Lake Ontario-effect cloud cover and snow reduce annual production by 15 to 25 percent. The Finger Lakes climate is similar to Buffalo's but with slightly less lake-effect snow.",
  },
  market: {
    metroPopulationK: 1050,
    averageCostPerWatt: 3.05,
    leadCostUsd: { low: 100, high: 180 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Rochester Gas & Electric (RG&E, Avangrid subsidiary), investor-owned, serves most of the Rochester metro",
    "New York State Electric & Gas (NYSEG, Avangrid subsidiary) serves parts of outlying areas",
    "Various municipal utilities and electric cooperatives serve specific pockets",
  ],
  permits: {
    office: "City of Rochester Building Services",
    turnaroundWeeks: "3 to 6 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Rochester Building Services typically runs residential solar permits in 3 to 6 weeks. SolarAPP+ is not accepted. Surrounding Monroe County towns run their own permits with 2 to 5 week typical timelines. RG&E interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Rochester means working under stacked NY incentives (retail NEM, NY-Sun, state tax credit, property-tax exemption) while managing winter weather honestly. The best Rochester operators are explicit about lake-effect snow derating in sales conversations, have templated NY-Sun registration workflows for the Upstate region block pricing, and handle RG&E interconnection fluently. Lead costs run $100 to $180 on Google search.",
  faq: [
    {
      q: "Does RG&E have net metering?",
      a: "Yes, retail-rate net metering for residential solar systems up to 25 kW AC under New York PSC rules. Credits accrue monthly at retail; annual true-up at avoided cost.",
    },
    {
      q: "What is NY-Sun for Rochester?",
      a: "NY-Sun pays installer-side rebates for residential solar at block-rate pricing. Upstate NY block rates (which include Rochester) are typically $0.40 to $0.70 per watt (confirm current block with NYSERDA before quoting). The rebate is paid to the installer and typically passed through.",
    },
    {
      q: "How long does a solar permit take in Rochester?",
      a: "City of Rochester Building Services typically runs residential solar permits in 3 to 6 weeks. Surrounding Monroe County towns run 2 to 5 weeks typically. RG&E interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Rochester?",
      a: "Rochester runs about $3.05 per watt installed for residential, meaning a 7 kW system typically costs around $21,400 gross. After the 30 percent federal tax credit, NY-Sun installer rebate pass-through, NY State 25 percent solar credit (capped $5,000), and the 15-year property tax exemption, effective net cost is often $9,000 to $12,000.",
    },
    {
      q: "Is solar worth it in Rochester?",
      a: "Yes for Rochester homes with suitable roofs. The stacked NY incentives make residential solar payback typically 7 to 10 years with the federal tax credit, slightly longer than NYC or Long Island because of lake-effect snow derating but still competitive.",
    },
  ],
};
