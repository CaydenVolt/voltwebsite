import type { State } from "../types";

export const OHIO: State = {
  slug: "ohio",
  name: "Ohio",
  abbr: "OH",
  title: "Solar in Ohio: market, SREC programme and incentives",
  metaTitle: "Solar Companies in Ohio: Market, SRECs, Incentives",
  metaDescription:
    "Honest guide to Ohio solar: market size, the Ohio SREC market, AEP Ohio and FirstEnergy net metering, and running a solar company in OH.",
  answer:
    "Ohio is the twentieth-largest US solar market with over 1,900 MW installed, growing fast on the utility-scale side. Residential has retail net metering plus an SREC market: residential systems earn one Ohio SREC per MWh produced, which can be sold on the open market. Ohio SREC prices are modest but add meaningful lifetime income.",
  published: "2026-10-31",
  market: {
    installedCapacityMw: 1900,
    homesPoweredK: 240,
    percentOfElectricity: 2,
    jobs: 7200,
    averageCostPerWatt: 2.6,
    nationalRank: 20,
  },
  marketNotes:
    "Ohio's solar market has grown rapidly on utility-scale installations (the state is now a top-10 US market for utility-scale solar). Residential growth has been slower, hampered by modest state policy support and relatively low electric rates compared to the Northeast. Growth is concentrated in Columbus, Cincinnati, Cleveland and Dayton.",
  netMetering: {
    status: "Full retail net metering",
    explanation:
      "Ohio offers retail net metering for residential solar systems at the major investor-owned utilities (AEP Ohio, FirstEnergy, Duke Energy Ohio, Dayton Power & Light). Credits accrue monthly; the regime has been stable since 2008.",
  },
  averageRate: 0.14,
  rateNote:
    "Ohio residential rates average around $0.14 per kWh. The state has deregulated supply, so homeowners can switch between competing suppliers. Rates have risen approximately 20 percent since 2022.",
  utilities: ["AEP Ohio", "FirstEnergy (Ohio Edison, Toledo Edison, Cleveland Electric Illuminating)", "Duke Energy Ohio", "Dayton Power & Light"],
  incentives: [
    {
      name: "Ohio SREC programme",
      text: "Residential solar systems earn one Ohio SREC per MWh produced, which can be sold to utilities meeting the state's RPS requirement. Ohio SRECs currently trade around $5 to $10 per SREC, meaningfully lower than NJ or PA. A typical 7 kW system in Ohio earns roughly 8 to 10 SRECs per year, worth $40 to $100 annually.",
    },
    {
      name: "Property-tax exemption",
      text: "Ohio exempts the added value of residential solar systems from property-tax assessment under ORC 5709.53. Automatic.",
    },
    {
      name: "No state income tax credit",
      text: "Ohio does not currently have a state income-tax credit for residential solar. The main tax-based incentive is the 30 percent federal Residential Clean Energy Credit.",
    },
    {
      name: "ECO-Link low-interest financing",
      text: "Ohio Treasurer's ECO-Link programme provides 3 percent interest-rate reduction on residential solar loans for up to 7 years at participating lenders. Useful for homeowners financing through a bank loan rather than a solar lease.",
    },
  ],
  permits:
    "Permit timelines in Ohio vary by county. Columbus, Cincinnati and Cleveland metros commonly take 3 to 5 weeks for residential. Smaller jurisdictions can be faster or slower. SolarAPP+ adoption is minimal. Interconnection with AEP Ohio and FirstEnergy typically runs 3 to 6 weeks post-install.",
  installerLandscape:
    "Running a solar company in Ohio means operating in a growing residential market with modest incentive stacking. The absence of a strong state SREC price (compared to PA, NJ, MA) and no state income-tax credit makes the economics tighter than peer Midwest states. The installers who have grown fastest focus on homes with meaningful electric bills (large homes, electric heat, EV ownership) where the retail-NEM savings justify the system. Lead costs on Google Search are moderate ($90 to $140 range).",
  faq: [
    {
      q: "Does Ohio have net metering?",
      a: "Yes, retail net metering at the major investor-owned utilities for residential solar. Credits accrue monthly. The regime has been stable since 2008.",
    },
    {
      q: "What is an Ohio SREC worth?",
      a: "Ohio SRECs currently trade around $5 to $10 per SREC, meaningfully lower than Pennsylvania ($25-$45) or New Jersey ($85 SREC-II). A typical 7 kW residential system produces about 8 to 10 SRECs per year, worth $40 to $100 in annual SREC income.",
    },
    {
      q: "How much does solar cost in Ohio?",
      a: "Residential solar in Ohio averages around $2.60 per watt installed, meaning a typical 7 kW system costs about $18,000 gross. After the 30 percent federal tax credit, net cost is around $12,600.",
    },
    {
      q: "Is solar worth it in Ohio?",
      a: "Yes for most Ohio homes with suitable roofs, but with longer payback than northeastern states due to modest SREC prices and no state tax credit: typically 11 to 14 years for residential installations with the federal tax credit. Larger homes with higher electric bills see shorter payback.",
    },
  ],
};
