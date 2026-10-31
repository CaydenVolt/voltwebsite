import type { City } from "../types";

export const NEW_YORK_CITY: City = {
  slug: "new-york-city",
  stateSlug: "new-york",
  name: "New York City",
  title: "Solar in New York City: Con Edison, NY-Sun, DOB permits",
  metaTitle: "Solar Companies in NYC: Con Edison, NY-Sun, DOB Permits",
  metaDescription:
    "Honest guide to solar in New York City: Con Edison net metering with CBC fees, NY-Sun incentive, NYC DOB permits (slow), property tax abatement, and running a solar company in NYC.",
  answer:
    "NYC solar is complex: Con Edison net metering now includes Customer Benefit Contribution (CBC) fees that reduce effective export credit, the NY-Sun programme pays installer-side rebates ($0.20 to $0.60 per watt depending on sector), and the NYC Department of Buildings permit process is among the slowest in the US (8 to 16 weeks is common). The NYC Property Tax Abatement for Solar provides a 30 percent credit over four years on top of the federal tax credit.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 4.2,
    sunnyDays: 224,
    note: "NYC gets around 4.2 peak sun hours per day with 224 sunny days per year, moderate for solar. Winter snow accumulation on panels reduces January and February production more than homeowners typically expect. Urban shading from neighbouring buildings is the dominant site-specific factor in Manhattan, Brooklyn and the Bronx; shade analyses by neighbourhood matter critically. Rooftop square footage is a common limiting factor in dense residential areas.",
  },
  market: {
    metroPopulationK: 19500,
    averageCostPerWatt: 3.6,
    leadCostUsd: { low: 180, high: 320 },
    installerDensity: "High",
  },
  utilities: [
    "Consolidated Edison (Con Edison), investor-owned, serves Manhattan, Bronx, Brooklyn, Queens, Staten Island, lower Westchester",
    "National Grid (New York) serves parts of eastern Queens and Brooklyn",
    "PSEG Long Island serves Long Island (not NYC proper but adjacent)",
  ],
  permits: {
    office: "NYC Department of Buildings (DOB), with FDNY review for battery storage",
    turnaroundWeeks: "8 to 16 weeks for standard residential",
    solarApp: "Not accepted",
    note: "NYC DOB permits are among the slowest in the US. Residential solar permits typically run 8 to 16 weeks because of the required structural engineering, FDNY review for battery storage, and co-op/condo board approvals in multi-unit buildings. SolarAPP+ is not accepted. Flat-roof installations require NYC-specific setback requirements that differ meaningfully from suburban installations. Con Edison interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in NYC means operating in the most complex residential solar market in the US. Multi-unit buildings dominate the housing stock, which brings co-op and condo board approvals in addition to DOB permits, FDNY battery storage review, and the longest permit queues of any US metro. The best NYC operators are specialists: either rowhouse Brooklyn and Queens teams, or multi-unit co-op/condo specialists with legal infrastructure for board approvals. Lead costs run $180 to $320 on Google search. The NY-Sun installer rebate and NYC Property Tax Abatement combine with the federal credit to make the sales math workable despite the high install cost; without those three stacked incentives NYC solar would barely pencil.",
  faq: [
    {
      q: "Does Con Edison have net metering?",
      a: "Yes, but reduced by Customer Benefit Contribution (CBC) fees that apply to new interconnections. Residential solar exports credit at retail minus the CBC (currently around $0.69 to $1.09 per kW of installed capacity per month, which effectively reduces the per-kWh value of exports). Pre-CBC customers are grandfathered. New installations should model the CBC into payback calculations.",
    },
    {
      q: "What is the NY-Sun incentive?",
      a: "NY-Sun is the New York State Energy Research and Development Authority (NYSERDA) programme that pays installer-side rebates for residential solar. Current rates are approximately $0.20 to $0.60 per watt depending on sector (block pricing steps down as program caps are hit). The rebate is paid to the installer and typically passed through to the homeowner as a lower install price. Confirm the current block rate with NYSERDA before quoting; the rate changes as regional caps are reached.",
    },
    {
      q: "What is the NYC Property Tax Abatement for solar?",
      a: "NYC offers a Property Tax Abatement (PTA) for Solar Electric Generating Systems: a 30 percent abatement of the system cost spread over four years, applied against NYC property taxes. The abatement caps at $62,500 per year ($250,000 total). The PTA stacks with the 30 percent federal Residential Clean Energy Credit and the NY State solar credit. The combined effective subsidy exceeds 60 percent of install cost for most residential NYC installations.",
    },
    {
      q: "How long does a solar permit take in NYC?",
      a: "NYC DOB permits typically run 8 to 16 weeks for residential solar, among the slowest in the US. Battery storage adds FDNY review, which can extend timelines to 20 weeks or more. Co-op or condo board approval runs in parallel but adds months in some buildings. Con Edison interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in NYC?",
      a: "NYC residential solar runs about $3.60 per watt installed, among the highest in the US, meaning a 6 kW system (typical for NYC's smaller roof areas) costs around $21,600 gross. After the 30 percent federal tax credit, the NY-Sun installer rebate (passed through), the NY State solar credit, and the NYC Property Tax Abatement spread over four years, net cost is often $8,000 to $12,000, which is competitive despite the high gross.",
    },
  ],
};
