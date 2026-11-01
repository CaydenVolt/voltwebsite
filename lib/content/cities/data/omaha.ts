import type { City } from "../types";

export const OMAHA: City = {
  slug: "omaha",
  stateSlug: "nebraska",
  name: "Omaha",
  title: "Solar in Omaha: OPPD, public power and net metering",
  metaTitle: "Solar Companies in Omaha: OPPD, Permits, NEM",
  metaDescription:
    "Honest guide to solar in Omaha: Omaha Public Power District (OPPD) retail net metering, City of Omaha permits, winter weather, and running a solar company in Douglas County.",
  answer:
    "Omaha is served by Omaha Public Power District (OPPD), one of the US's largest public power utilities. OPPD offers retail-rate net metering for residential solar systems. Low retail rates ($0.11 per kWh) and winter weather stretch payback compared with Sun Belt peers. The federal tax credit remains the dominant incentive. Permits run through the City of Omaha Permits and Inspections Division.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.5,
    sunnyDays: 213,
    note: "Omaha gets around 4.5 peak sun hours per day with 213 sunny days per year, moderate for solar. Winter snow derating typically reduces annual production by 10 to 20 percent. Summer thunderstorms reduce afternoon production. Tornado-prone weather in spring requires proper structural attachment.",
  },
  market: {
    metroPopulationK: 970,
    averageCostPerWatt: 2.8,
    leadCostUsd: { low: 85, high: 160 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Omaha Public Power District (OPPD), public power, serves most of the Omaha metro",
    "Various rural electric cooperatives serve outlying areas",
    "Metropolitan Utilities District (MUD) handles gas and water, not electricity",
  ],
  permits: {
    office: "City of Omaha Permits and Inspections Division",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Omaha Permits and Inspections Division typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Douglas and Sarpy county jurisdictions run their own permits with 2 to 4 week typical timelines. OPPD interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Omaha means working under Nebraska's unique all-public-power structure. OPPD is one of the largest public power utilities in the US. The best Omaha operators handle OPPD interconnection fluently (which differs from investor-owned utility processes), model winter snow derating honestly, and sell on energy independence alongside payback (low retail rates stretch pure payback). Lead costs run $85 to $160 on Google search.",
  faq: [
    {
      q: "Does OPPD have net metering?",
      a: "Yes, retail-rate net metering for residential solar systems up to 25 kW AC. Credits accrue monthly at retail; annual true-up at year-end with excess typically paid at avoided cost. OPPD is a public power district, not an investor-owned utility, so rules are set by its own board rather than a state commission.",
    },
    {
      q: "What makes Omaha unique for solar?",
      a: "Omaha is served by OPPD, a public power district (not an investor-owned utility). Nebraska is the only US state with 100 percent public power. This has advantages (public accountability, no profit motive) and disadvantages (programme capacity varies, rules differ from statewide IOU norms).",
    },
    {
      q: "How long does a solar permit take in Omaha?",
      a: "City of Omaha Permits and Inspections Division typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Douglas and Sarpy counties run 2 to 4 weeks typically. OPPD interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Omaha?",
      a: "Omaha runs about $2.80 per watt installed for residential, meaning a 7 kW system typically costs around $19,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,700. Nebraska has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Omaha?",
      a: "For Omaha homes with high electricity use and south-facing roofs, yes but with longer payback than Sun Belt peers: typically 12 to 15 years with the federal tax credit. Low OPPD retail rates (around $0.11 per kWh) and winter weather stretch payback. Many Omaha homeowners install solar for energy independence alongside payback.",
    },
  ],
};
