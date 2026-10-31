import type { State } from "../types";

export const MARYLAND: State = {
  slug: "maryland",
  name: "Maryland",
  abbr: "MD",
  title: "Solar in Maryland: market, SREC programme and incentives",
  metaTitle: "Solar Companies in Maryland: Market, SRECs, Incentives",
  metaDescription:
    "Honest guide to Maryland solar: market size, strong SREC market, BGE and Pepco net metering, state rebate, and running a solar company in MD.",
  answer:
    "Maryland is the twenty-first-largest US solar market with over 1,900 MW installed. The state has one of the strongest residential solar economics in the US thanks to a robust SREC market, retail net metering, a direct state rebate programme, and high electric rates in the BGE and Pepco territories.",
  published: "2026-10-31",
  market: {
    installedCapacityMw: 1900,
    homesPoweredK: 240,
    percentOfElectricity: 6,
    jobs: 5100,
    averageCostPerWatt: 2.9,
    nationalRank: 21,
  },
  marketNotes:
    "Maryland's residential solar market has grown steadily on the strength of the Maryland SREC programme (one of the stronger SREC markets in the US) and the direct Residential Clean Energy Rebate from the state. Growth is concentrated in Baltimore, Montgomery and Anne Arundel counties.",
  netMetering: {
    status: "Full retail net metering",
    explanation:
      "Maryland offers full retail net metering for residential solar systems up to 2 MW at BGE, Pepco, Delmarva Power, Potomac Edison and SMECO. Credits accrue monthly; annual excess at year-end is paid out at avoided-cost rate. Programme caps have been raised multiple times.",
  },
  averageRate: 0.18,
  rateNote:
    "Maryland residential rates average around $0.18 per kWh, higher than most mid-Atlantic peers. BGE and Pepco rates have risen sharply since 2022, driven partly by natural gas supply volatility.",
  utilities: ["BGE (Baltimore Gas and Electric)", "Pepco (Potomac Electric Power)", "Delmarva Power", "Potomac Edison", "SMECO (Southern Maryland Electric Cooperative)"],
  incentives: [
    {
      name: "Maryland SREC programme",
      text: "Residential solar systems earn one Maryland SREC per MWh produced, which can be sold to utilities meeting the state's RPS requirement. Maryland SRECs currently trade around $40 to $75 per SREC. A typical 7 kW system in MD earns roughly 8 to 10 SRECs per year, worth $320 to $750 annually.",
    },
    {
      name: "Residential Clean Energy Rebate",
      text: "Maryland Energy Administration direct rebate for residential solar: $1,000 for solar PV, $5,000 for geothermal, $500 for solar water heating. Capped funding; applications processed in order received.",
    },
    {
      name: "Energy Storage Income Tax Credit",
      text: "30 percent of installed energy storage cost, up to $5,000 for residential, as a Maryland income-tax credit. Pairs with the federal battery tax credit; combined, both credits can cover 60 percent of residential battery cost.",
    },
    {
      name: "Property-tax exemption",
      text: "Maryland exempts the added value of residential solar systems from property-tax assessment at the county's option; most Maryland counties have opted in.",
    },
    {
      name: "Sales-tax exemption",
      text: "Residential solar PV equipment is exempt from Maryland's 6 percent sales tax.",
    },
  ],
  permits:
    "Permit timelines in Maryland vary by county. Montgomery County, Baltimore County and Prince George's County commonly take 3 to 6 weeks for residential. SolarAPP+ adoption is growing but not universal. Interconnection with BGE and Pepco typically runs 3 to 6 weeks post-install.",
  installerLandscape:
    "Running a solar company in Maryland means operating in a market with excellent per-household economics (SRECs + retail NEM + state rebate + storage credit + federal credit). The installers who have grown fastest build the SREC projection cleanly into every proposal and include the state battery credit when quoting solar-plus-storage. Baltimore and Montgomery County have moderate lead costs ($130 to $180 range); the Eastern Shore is cheaper and less saturated.",
  faq: [
    {
      q: "Does Maryland have net metering?",
      a: "Yes, full retail net metering for residential systems up to 2 MW at the major utilities. Credits accrue monthly; year-end excess at avoided-cost rate. The regime has been stable with periodic cap increases.",
    },
    {
      q: "What is a Maryland SREC worth?",
      a: "Maryland SRECs currently trade around $40 to $75 per SREC. A typical 7 kW residential system produces about 8 to 10 SRECs per year, worth $320 to $750 in annual SREC income. Over the 15-year earning window, this adds up to $5,000 to $11,000 of lifetime SREC income.",
    },
    {
      q: "How much does solar cost in Maryland?",
      a: "Residential solar in MD averages around $2.90 per watt installed, meaning a typical 7 kW system costs about $20,000 gross. After the 30 percent federal credit and the $1,000 state rebate, net cost is around $13,000. Factor in 15 years of SREC income and the real net cost over the earning period is often under $7,000.",
    },
    {
      q: "Is solar worth it in Maryland?",
      a: "Yes, strongly. The combination of retail NEM, Maryland SRECs, state rebate, state battery credit (if adding storage), federal tax credit, and sales/property tax exemption produces 5 to 8 year payback for most residential installations with the full stack applied.",
    },
  ],
};
