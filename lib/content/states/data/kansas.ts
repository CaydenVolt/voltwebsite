import type { State } from "../types";

export const KANSAS: State = {
  slug: "kansas",
  name: "Kansas",
  abbr: "KS",
  title: "Solar in Kansas: market, Evergy Kansas and net metering reality",
  metaTitle: "Solar Companies in Kansas: Evergy Kansas, KCP&L, Permits",
  metaDescription:
    "Honest guide to Kansas solar: market size, Evergy Kansas net metering, state market dynamics, and running a solar company in Kansas.",
  answer:
    "Kansas is the forty-second-largest US solar market with over 230 MW installed, dominated by utility-scale. Residential operates under Evergy Kansas net metering with monthly rollover at retail; annual excess is paid at avoided cost. Severe weather risk (hail, tornadoes) is a dominant structural consideration. The federal tax credit remains the primary driver.",
  published: "2026-11-01",
  market: {
    installedCapacityMw: 230,
    homesPoweredK: 32,
    percentOfElectricity: 1,
    jobs: 400,
    averageCostPerWatt: 2.7,
    nationalRank: 42,
  },
  marketNotes:
    "Kansas's residential solar market has grown slowly compared with neighbouring states. Wichita and Kansas City (KS side) metros dominate residential. The 2024 Kansas Corporation Commission order kept monthly rollover at retail but set lower true-up rates. The federal tax credit remains the dominant economic driver.",
  netMetering: {
    status: "Partial net metering",
    explanation:
      "Kansas Corporation Commission rules provide monthly rollover at retail with avoided-cost true-up at year-end for residential solar systems up to 25 kW at Evergy Kansas. Westar Energy and KCP&L (now operating as Evergy Kansas Central and Evergy Kansas Metro) continue the same structure. True-up value is lower than retail, so right-sizing matters.",
  },
  averageRate: 0.14,
  rateNote:
    "Kansas residential rates average around $0.14 per kWh at Evergy Kansas. Rates have risen approximately 15 percent since 2022.",
  utilities: ["Evergy Kansas Central (formerly Westar Energy), investor-owned, serves most of Kansas including Wichita and Topeka", "Evergy Kansas Metro (formerly KCP&L), investor-owned, serves the KC metro Kansas side", "Various electric cooperatives (Victory Electric Cooperative, Flint Hills REC, others) serve rural areas", "Municipal utilities (Kansas City BPU, Winfield City Light, others) serve specific cities"],
  incentives: [
    {
      name: "No state solar tax credit",
      text: "Kansas does not offer a state income tax credit for residential solar. The 30 percent federal Residential Clean Energy Credit remains the primary tax-based incentive.",
    },
    {
      name: "Property-tax exemption",
      text: "Kansas exempts the added value of residential solar systems from property-tax assessment under K.S.A. 79-201 for a 10-year period. After 10 years the exemption may lapse.",
    },
    {
      name: "No state sales-tax exemption",
      text: "Kansas does not currently offer a sales-tax exemption for residential solar equipment. The standard 6.5 percent state sales tax plus local additions applies.",
    },
  ],
  permits:
    "Permit timelines in Kansas vary by jurisdiction. Wichita, Topeka, Kansas City Kansas and Overland Park commonly take 3 to 5 weeks for residential. Smaller cities can be faster. SolarAPP+ is not accepted. Interconnection with Evergy Kansas typically runs 4 to 6 weeks post-install.",
  installerLandscape:
    "Running a solar company in Kansas means working in a market with modest incentives and real severe weather risk. The best Kansas operators spec UL 61730 Class 4 impact-rated panels for the hail-prone climate, model summer heat and winter cloud derating honestly, and handle Evergy Kansas interconnection fluently. Tornado-prone weather requires proper structural attachment. Lead costs run $85 to $160 on Google search.",
  faq: [
    {
      q: "Does Kansas have net metering?",
      a: "Partially. Kansas Corporation Commission rules provide monthly rollover at retail with avoided-cost true-up at year-end for residential solar systems up to 25 kW at Evergy Kansas. True-up value is lower than retail, so right-sizing to annual load matters more than in retail-NEM states.",
    },
    {
      q: "How much does solar cost in Kansas?",
      a: "Residential solar in Kansas averages around $2.70 per watt installed, meaning a typical 7 kW system costs about $18,900 gross. After the 30 percent federal tax credit, net cost is approximately $13,200. Kansas has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Kansas?",
      a: "For Kansas homes with high electricity use and south-facing roofs sized to self-consumption, yes but with payback stretched by the partial net metering: typically 11 to 14 years with the federal tax credit. Hail resilience with Class 4 panels is essential; cheap non-rated panels regularly fail in Kansas hail events.",
    },
  ],
};
