import type { City } from "../types";

export const BOULDER: City = {
  slug: "boulder",
  stateSlug: "colorado",
  name: "Boulder",
  title: "Solar in Boulder: Xcel Energy, state rebate and foothills climate",
  metaTitle: "Solar Companies in Boulder: Xcel Energy, Rebate, Permits",
  metaDescription:
    "Honest guide to solar in Boulder Colorado: Xcel Energy retail net metering, Colorado Solar for Residential rebate, City of Boulder permits, foothills climate, and running a solar company in Boulder County.",
  answer:
    "Boulder is served by Xcel Energy under full retail net metering plus the Colorado Solar for Residential rebate (income-tiered $1,500 to $5,500). The front-range altitude boost helps production. Permits run through the City of Boulder Planning and Development Services. The university town homeowner base is well-informed.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 5.6,
    sunnyDays: 245,
    note: "Boulder gets around 5.6 peak sun hours per day with 245 sunny days per year, strong for solar. Front-range altitude (around 5,400 feet) provides modest production boost. Hail is a real risk during May to August; Class 4 panels are standard. Chinook winds in winter are a secondary structural factor.",
  },
  market: {
    metroPopulationK: 330,
    averageCostPerWatt: 2.95,
    leadCostUsd: { low: 130, high: 220 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Xcel Energy Colorado, investor-owned, serves most of the Boulder metro",
    "United Power (electric cooperative) serves parts of outlying areas",
    "The City of Boulder has long explored municipalisation but Xcel remains the utility",
  ],
  permits: {
    office: "City of Boulder Planning and Development Services",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "In pilot",
    note: "City of Boulder Planning and Development Services typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is in pilot. Xcel Energy interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Boulder means working with the university town homeowner base and the city's active climate policy. The best Boulder operators lead with technical depth (CU faculty and tech workers research extensively), have templated workflows for the state rebate, and spec Class 4 hail panels. Lead costs run $130 to $220 on Google search.",
  faq: [
    {
      q: "Does Xcel Energy serve Boulder?",
      a: "Yes. Xcel Energy Colorado serves most of the Boulder metro under full retail net metering. The City of Boulder has explored municipalisation (becoming a muni) over the past decade but Xcel remains the utility.",
    },
    {
      q: "Does the Colorado state rebate apply in Boulder?",
      a: "Yes. Colorado's Solar for Residential rebate ($1,500 to $5,500 based on income tier) applies in Boulder. The rebate stacks with the 30 percent federal credit.",
    },
    {
      q: "How long does a solar permit take in Boulder?",
      a: "City of Boulder Planning and Development Services typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is in pilot. Xcel Energy interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Boulder?",
      a: "Boulder runs about $2.95 per watt installed for residential, meaning a 7 kW system typically costs around $20,700 gross. After the 30 percent federal tax credit and the state rebate (if income-qualified), effective net cost is often $9,000 to $12,500.",
    },
    {
      q: "Is solar worth it in Boulder?",
      a: "Yes substantially. The combination of Xcel retail NEM, state rebate, altitude boost, and the federal tax credit makes residential solar payback typically 7 to 10 years.",
    },
  ],
};
