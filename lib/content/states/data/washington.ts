import type { State } from "../types";

export const WASHINGTON: State = {
  slug: "washington",
  name: "Washington",
  abbr: "WA",
  title: "Solar in Washington: market, incentives and net metering reality",
  metaTitle: "Solar Companies in Washington: Market, Net Metering, Incentives",
  metaDescription:
    "Honest guide to Washington solar: market size, Puget Sound Energy and Seattle City Light net metering, state sales-tax exemption, and running a solar company in WA.",
  answer:
    "Washington is the twenty-fourth-largest US solar market with over 1,300 MW installed. The state has retail net metering across the major utilities, modest sun hours (around 3.7 peak sun hours per day), low electric rates thanks to abundant hydroelectric generation, and a state sales-tax exemption. The economics are tighter than most states but the Washington Clean Energy Transformation Act continues to drive growth.",
  published: "2026-10-31",
  market: {
    installedCapacityMw: 1300,
    homesPoweredK: 165,
    percentOfElectricity: 1,
    jobs: 3800,
    averageCostPerWatt: 2.9,
    nationalRank: 24,
  },
  marketNotes:
    "Washington's solar market is small relative to the state's population because of two factors: low electric rates (the lowest in the contiguous US) and modest sun hours. Growth has still been positive, driven by the sales-tax exemption, state climate policy and homeowner interest in energy independence more than payback economics. Seattle metro and Spokane are the main residential markets.",
  netMetering: {
    status: "Full retail net metering",
    explanation:
      "Washington offers full retail net metering for residential solar systems up to 100 kW at the investor-owned utilities (Puget Sound Energy, Avista, Pacific Power) and the major municipal/co-op utilities (Seattle City Light, Snohomish County PUD, Tacoma Power). Credits accrue monthly; annual excess at year-end is usually zeroed out rather than paid out.",
  },
  averageRate: 0.11,
  rateNote:
    "Washington residential rates average around $0.11 per kWh, among the lowest in the US due to abundant hydroelectric generation. Rates have risen modestly in recent years. Low rates make solar payback longer than most states.",
  utilities: ["Puget Sound Energy (PSE)", "Seattle City Light", "Snohomish County PUD", "Tacoma Power", "Avista", "Pacific Power"],
  incentives: [
    {
      name: "Washington sales-tax exemption",
      text: "Residential solar PV equipment and installation labour are exempt from Washington's 6.5 percent state sales tax, under the renewable energy equipment exemption. Local sales tax exemption varies by jurisdiction (most have opted in).",
    },
    {
      name: "No state income tax credit",
      text: "Washington has no state income tax, so a state-level income tax credit for solar is not available. The main state-level benefit is the sales-tax exemption. The 30 percent federal Residential Clean Energy Credit still applies.",
    },
    {
      name: "Property-tax exemption",
      text: "Washington exempts the added value of residential solar systems from property-tax assessment under RCW 84.36.400. Automatic.",
    },
    {
      name: "Solar Production Incentive (closed)",
      text: "Washington's state Solar Production Incentive paid per-kWh for solar generation but closed to new residential enrollees in 2017. Grandfathered customers continue to receive payments through their 8-year contract term.",
    },
  ],
  permits:
    "Permit timelines in Washington vary by jurisdiction. Seattle, King County and Snohomish County commonly take 3 to 6 weeks for residential. Spokane and smaller cities are often faster. SolarAPP+ adoption is growing. Interconnection with PSE and Seattle City Light typically runs 3 to 6 weeks post-install.",
  installerLandscape:
    "Running a solar company in Washington means operating in a market where payback is a secondary driver and homeowner motivation often matters more than pure economics. The customers who sign are often doing so for energy independence, environmental alignment or EV charging support rather than payback. Installers who sell on those motivations alongside the economics do better than those who try to win on payback alone, which the Washington maths does not quite support against Sun Belt states. Seattle has moderate lead costs ($120 to $170 range).",
  faq: [
    {
      q: "Does Washington have net metering?",
      a: "Yes, full retail net metering at all the major utilities for residential solar systems up to 100 kW. Credits accrue monthly; year-end excess is usually zeroed out rather than paid out.",
    },
    {
      q: "How much does solar cost in Washington?",
      a: "Residential solar in Washington averages around $2.90 per watt installed, meaning a typical 7 kW system costs about $20,000 gross. After the 30 percent federal tax credit, net cost is around $14,000. Washington has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Washington?",
      a: "The honest answer is yes for homes with suitable roofs but with longer payback than most US states: typically 12 to 18 years for residential installations with the federal tax credit. The combination of modest sun hours and low electric rates stretches the maths. Homeowners who buy solar in Washington are often motivated by energy independence or EV charging support alongside pure payback.",
    },
    {
      q: "Does Washington have a state solar tax credit?",
      a: "No state income tax credit (Washington has no state income tax). The main state-level benefit is the sales-tax exemption on residential solar equipment and installation labour. The 30 percent federal Residential Clean Energy Credit still applies.",
    },
  ],
};
