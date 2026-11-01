import type { State } from "../types";

export const NEBRASKA: State = {
  slug: "nebraska",
  name: "Nebraska",
  abbr: "NE",
  title: "Solar in Nebraska: market, public power and net metering",
  metaTitle: "Solar Companies in Nebraska: LES, OPPD, NPPD, Permits",
  metaDescription:
    "Honest guide to Nebraska solar: market size, public power state structure, LES and OPPD net metering, and running a solar company in Nebraska.",
  answer:
    "Nebraska is the forty-fifth-largest US solar market with over 120 MW installed. Nebraska is the only US state with 100 percent public power (no investor-owned utilities); residential solar operates under district-specific net metering at LES (Lincoln), OPPD (Omaha), and NPPD (statewide wholesale). Low retail rates and winter weather stretch payback compared with Sun Belt peers.",
  published: "2026-11-01",
  market: {
    installedCapacityMw: 120,
    homesPoweredK: 18,
    percentOfElectricity: 1,
    jobs: 350,
    averageCostPerWatt: 2.8,
    nationalRank: 45,
  },
  marketNotes:
    "Nebraska's residential solar market is small but growing. Lincoln and Omaha metros dominate residential. The state's unique public-power structure means each public power district operates under its own board; LES and OPPD both offer net metering with district-specific rules. Rural co-op customers operate under NPPD wholesale through local distributors.",
  netMetering: {
    status: "Full retail net metering",
    explanation:
      "Nebraska offers net metering at the public power district level. LES (Lincoln Electric System) and OPPD (Omaha Public Power District) both offer retail-rate net metering for residential solar systems up to 25 kW AC. Credits accrue monthly at retail; annual true-up at year-end with excess typically paid at avoided cost. Rural co-op customers operate under local tariffs varying by district.",
  },
  averageRate: 0.11,
  rateNote:
    "Nebraska residential rates average around $0.11 per kWh at LES and OPPD, among the lower in the US due to abundant coal and nuclear generation. Rates have risen modestly since 2022.",
  utilities: ["LES (Lincoln Electric System), municipal/public power, serves Lincoln", "OPPD (Omaha Public Power District), public power, serves Omaha and surrounding counties", "NPPD (Nebraska Public Power District), statewide wholesale, serves rural areas through local distributors", "Various local public power districts and electric cooperatives serve specific areas"],
  incentives: [
    {
      name: "No state solar tax credit (no state income tax rebate)",
      text: "Nebraska does not offer a state income tax credit for residential solar. The 30 percent federal Residential Clean Energy Credit remains the primary tax-based incentive.",
    },
    {
      name: "Local public power district incentives (varies)",
      text: "Some Nebraska public power districts offer modest residential solar rebates. OPPD has offered limited solar rebate programmes historically; confirm current programme structure with the specific district before quoting.",
    },
    {
      name: "No state property-tax exemption",
      text: "Nebraska does not have a statewide property-tax exemption for residential solar. The added value may be included in assessment at the county level.",
    },
  ],
  permits:
    "Permit timelines in Nebraska vary by jurisdiction. Lincoln and Omaha commonly take 3 to 5 weeks for residential. Smaller cities and county offices can be faster. SolarAPP+ is in pilot in Lincoln but not broadly deployed. Interconnection with LES or OPPD typically runs 4 to 6 weeks post-install.",
  installerLandscape:
    "Running a solar company in Nebraska means working under the state's unique all-public-power structure, with each district operating its own rules. The best Nebraska operators handle both LES and OPPD interconnection fluently, understand the rural co-op variations, and model winter snow derating honestly. Low electric rates mean Nebraska solar is sold more on energy independence than fast payback. Lead costs run $85 to $160 on Google search.",
  faq: [
    {
      q: "Does Nebraska have net metering?",
      a: "Yes, at public power district level. LES (Lincoln) and OPPD (Omaha) both offer retail-rate net metering for residential solar systems up to 25 kW AC. Rural co-op customers operate under local tariffs that vary.",
    },
    {
      q: "What makes Nebraska unique for solar?",
      a: "Nebraska is the only US state with 100 percent public power: no investor-owned utilities. Residential solar operates under district-specific rules rather than statewide IOU rules. This has advantages (public accountability) and disadvantages (rules vary by district, programme capacity can be limited).",
    },
    {
      q: "How much does solar cost in Nebraska?",
      a: "Residential solar in Nebraska averages around $2.80 per watt installed, meaning a typical 7 kW system costs about $19,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,700. Nebraska has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Nebraska?",
      a: "For Nebraska homes with high electricity use and south-facing roofs, yes but with longer payback than Sun Belt peers: typically 12 to 15 years with the federal tax credit. Low retail rates (around $0.11 per kWh) and winter weather stretch payback compared with sunnier higher-rate states. Homeowners who install in Nebraska are often motivated by energy independence alongside payback.",
    },
  ],
};
