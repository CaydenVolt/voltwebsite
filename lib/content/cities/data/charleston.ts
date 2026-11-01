import type { City } from "../types";

export const CHARLESTON: City = {
  slug: "charleston",
  stateSlug: "south-carolina",
  name: "Charleston",
  title: "Solar in Charleston: Dominion Energy SC, state tax credit, coastal permits",
  metaTitle: "Solar Companies in Charleston SC: Dominion, Tax Credit, Permits",
  metaDescription:
    "Honest guide to solar in Charleston SC: Dominion Energy South Carolina net metering, the 25 percent state solar tax credit, Charleston County permits, coastal climate factors, and running a solar company in the Lowcountry.",
  answer:
    "Charleston is served by Dominion Energy South Carolina under retail net metering (one of the strongest NEM regimes in the Southeast). South Carolina's 25 percent state solar tax credit stacks with the 30 percent federal credit, making Charleston solar economics among the strongest in the US. Coastal engineering (salt air, hurricane wind-load) is required.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 5.0,
    sunnyDays: 230,
    note: "Charleston gets around 5.0 peak sun hours per day with 230 sunny days per year, strong for solar. Hurricane and tropical storm exposure is real; South Carolina Building Code wind-load design in coastal Charleston County runs 140 to 150 mph. Salt-air corrosion from the Atlantic requires marine-grade stainless hardware for installations within 2 miles of the coast.",
  },
  market: {
    metroPopulationK: 810,
    averageCostPerWatt: 2.85,
    leadCostUsd: { low: 110, high: 200 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Dominion Energy South Carolina, investor-owned, serves most of Charleston County including the city of Charleston",
    "Berkeley Electric Cooperative serves parts of Berkeley County",
    "Edisto Electric Cooperative serves parts of outlying rural areas",
  ],
  permits: {
    office: "City of Charleston Permit Center, plus Charleston County Building Services and surrounding municipality offices",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Charleston Permit Center typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Charleston County, Mount Pleasant, North Charleston, Summerville each have their own permit offices with 2 to 5 week typical timelines. Dominion Energy SC interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Charleston means working in a market with strong stacked incentives (state tax credit + federal credit + retail NEM) and real coastal engineering requirements. The best Charleston operators spec marine-grade stainless racking for coastal zip codes, model hurricane wind-load properly, and have templated SC tax credit guidance for customers (the state credit is non-refundable but carries forward for 10 years, which matters for lower-tax-liability homeowners). Historic District installations in downtown Charleston add aesthetic review burden. Lead costs run $110 to $200 on Google search.",
  faq: [
    {
      q: "Does Dominion Energy South Carolina have net metering?",
      a: "Yes, retail-rate net metering for residential solar systems. Dominion credits exports monthly at retail; annual true-up with excess typically paid at avoided cost. South Carolina's net metering continues under PSC rules and is among the stronger NEM regimes in the Southeast.",
    },
    {
      q: "What is the South Carolina solar tax credit?",
      a: "South Carolina offers a 25 percent state income tax credit on residential solar installations, capped at $35,000 or 50 percent of state tax liability per year. The credit is non-refundable but carries forward for up to 10 years, which lets lower-tax-liability homeowners use the full credit over multiple years. Stacks with the 30 percent federal Residential Clean Energy Credit.",
    },
    {
      q: "How long does a solar permit take in Charleston?",
      a: "City of Charleston Permit Center typically runs residential solar permits in 3 to 5 weeks. Charleston County, Mount Pleasant, North Charleston and Summerville each run 2 to 5 weeks typically. Dominion Energy SC interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Charleston?",
      a: "Charleston runs about $2.85 per watt installed for residential, meaning a 7 kW system typically costs around $20,000 gross. After the 30 percent federal tax credit and the 25 percent SC state credit, effective net cost is often $9,000 to $11,000, among the lowest in the US per installed watt.",
    },
    {
      q: "Is solar worth it in Charleston?",
      a: "Yes substantially. The combination of Dominion SC retail net metering, the 25 percent SC state tax credit (carryforward for 10 years), and the 30 percent federal credit makes residential solar payback typically 6 to 8 years, among the strongest in the US. Marine-grade hardware for coastal installations adds 5 to 10 percent to the install cost but is essential for 25-year warranty integrity.",
    },
  ],
};
