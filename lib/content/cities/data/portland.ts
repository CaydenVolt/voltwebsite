import type { City } from "../types";

export const PORTLAND: City = {
  slug: "portland",
  stateSlug: "oregon",
  name: "Portland",
  title: "Solar in Portland: PGE, Energy Trust of Oregon and winter cloud cover",
  metaTitle: "Solar Companies in Portland: PGE, Energy Trust, Permits",
  metaDescription:
    "Honest guide to solar in Portland: Portland General Electric net metering, Energy Trust of Oregon rebate, City of Portland permits, Pacific Northwest cloud cover, and running a solar company in Oregon.",
  answer:
    "Portland is served by Portland General Electric (PGE) under retail net metering, with Energy Trust of Oregon paying installer-side rebates ($0.20 to $0.60 per watt depending on current block pricing) and the ODOE Residential Solar + Storage rebate adding further support. Pacific Northwest cloud cover during the winter months is a real production factor. Permits run through City of Portland Bureau of Development Services.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 3.9,
    sunnyDays: 144,
    note: "Portland gets around 3.9 peak sun hours per day with 144 sunny days per year, among the lowest sunny-day counts in the US. The dominant climate factor is winter cloud cover: November through February production is 60 to 70 percent lower than June through August production, more pronounced than most US metros. Honest annual yield modelling must account for the heavy winter deficit.",
  },
  market: {
    metroPopulationK: 2510,
    averageCostPerWatt: 2.95,
    leadCostUsd: { low: 120, high: 210 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Portland General Electric (PGE), investor-owned, serves most of the Portland metro",
    "Pacific Power (PacifiCorp subsidiary) serves parts of outlying suburbs",
    "Various municipal utilities (Columbia River People's Utility District, Clatskanie People's Utility District) serve areas outside the metro",
  ],
  permits: {
    office: "City of Portland Bureau of Development Services",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Portland Bureau of Development Services typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Multnomah, Washington and Clackamas county jurisdictions run their own permits with 2 to 5 week typical timelines. PGE interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Portland means working in a market where the stacked incentives (ETO rebate + ODOE rebate + federal credit + retail NEM) do substantial economic work despite the modest sun hours. The best Portland operators are explicit about winter cloud-cover production loss in sales conversations, have templated Energy Trust registration workflows (block-rate pricing fills over time), and understand the PGE vs Pacific Power vs municipal utility differences. Lead costs run $120 to $210 on Google search.",
  faq: [
    {
      q: "Does PGE have net metering?",
      a: "Yes, retail-rate net metering for residential solar systems up to 25 kW AC under Oregon PUC rules. Credits accrue monthly at retail; annual true-up at year-end with excess usually credited to the account rather than paid out.",
    },
    {
      q: "What is Energy Trust of Oregon?",
      a: "Energy Trust of Oregon (ETO) is a non-profit funded by a public purpose charge on PGE and Pacific Power bills. ETO pays installer-side rebates for residential solar at block-rate pricing (currently approximately $0.20 to $0.60 per watt depending on utility and current block availability; confirm current rate with ETO before quoting). The rebate is paid to the installer and typically passed through to the homeowner.",
    },
    {
      q: "How long does a solar permit take in Portland?",
      a: "City of Portland Bureau of Development Services typically runs residential solar permits in 3 to 5 weeks. Surrounding Multnomah, Washington and Clackamas counties run 2 to 5 weeks typically. PGE interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Portland?",
      a: "Portland runs about $2.95 per watt installed for residential, meaning a 7 kW system typically costs around $20,700 gross. After the 30 percent federal tax credit, the Energy Trust rebate pass-through, and the ODOE Residential Solar + Storage rebate (if applicable), effective net cost is often $10,000 to $13,000.",
    },
    {
      q: "Is solar worth it in Portland?",
      a: "Yes for Portland homes with suitable roofs despite the heavy winter cloud-cover deficit. The stacked incentives make residential solar payback typically 9 to 12 years with the federal tax credit. Honest sales conversations model the heavy winter production deficit; summer production is strong but annual yield depends on realistic modelling.",
    },
  ],
};
