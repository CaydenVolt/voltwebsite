import type { State } from "../types";

export const PENNSYLVANIA: State = {
  slug: "pennsylvania",
  name: "Pennsylvania",
  abbr: "PA",
  title: "Solar in Pennsylvania: market, SREC programme and incentives",
  metaTitle: "Solar Companies in Pennsylvania: Market, SRECs, Incentives",
  metaDescription:
    "Honest guide to Pennsylvania solar: market size, the PA SREC market, net metering under PECO/PPL/Duquesne, and running a solar company in PA.",
  answer:
    "Pennsylvania is the sixteenth-largest US solar market with over 2,100 MW installed. The state has retail net metering plus an SREC market: residential solar systems earn one Solar Renewable Energy Certificate per MWh produced, which can be sold on the open market. SREC prices in PA are modest compared to NJ or MA but still add meaningful income over 15 years.",
  published: "2026-10-31",
  market: {
    installedCapacityMw: 2100,
    homesPoweredK: 275,
    percentOfElectricity: 2,
    jobs: 5500,
    averageCostPerWatt: 2.9,
    nationalRank: 16,
  },
  marketNotes:
    "Pennsylvania's solar market has grown slowly but steadily. The SREC market has recovered from a 2017 low after legislation closed the border to out-of-state SRECs, which raised in-state prices. Residential has been concentrated in the Philadelphia and Pittsburgh metros plus the Lehigh Valley.",
  netMetering: {
    status: "Full retail net metering",
    explanation:
      "Pennsylvania offers full retail net metering for residential solar systems up to 50 kW at the major investor-owned utilities (PECO, PPL, Duquesne Light, Met-Ed). Credits accrue monthly; excess at year-end is paid out at price-to-compare rate (closer to retail than avoided-cost). Programme caps have been raised multiple times.",
  },
  averageRate: 0.17,
  rateNote:
    "Pennsylvania residential rates average around $0.17 per kWh. The state has deregulated electricity supply, so homeowners can switch between competing suppliers (price-to-compare rate from the default utility). Solar economics are tied to the price-to-compare rate.",
  utilities: ["PECO (Philadelphia)", "PPL Electric Utilities", "Duquesne Light (Pittsburgh)", "Met-Ed", "West Penn Power", "Penn Power", "Penelec"],
  incentives: [
    {
      name: "Pennsylvania SREC programme",
      text: "Residential solar systems earn one Solar Renewable Energy Certificate per MWh produced, which can be sold to utilities meeting the state's RPS requirement. PA SRECs currently trade around $25 to $45 per SREC. A typical 7 kW system in PA earns roughly 8 to 10 SRECs per year, worth $200 to $450 annually.",
    },
    {
      name: "Property-tax exemption (varies by county)",
      text: "Pennsylvania does not have a statewide property-tax exemption for residential solar. Treatment varies by county: some exclude the added value from assessment, others include it. Check with the local tax assessor.",
    },
    {
      name: "No state income tax credit",
      text: "Pennsylvania does not have a state income-tax credit for residential solar. The main tax-based incentive is the 30 percent federal Residential Clean Energy Credit.",
    },
    {
      name: "Sales-tax exemption on commercial solar only",
      text: "Pennsylvania exempts solar equipment from sales tax for commercial installations; residential installations pay the standard 6 percent state sales tax plus any local additions.",
    },
  ],
  permits:
    "Permit timelines in Pennsylvania vary by municipality. Philadelphia and Pittsburgh commonly take 3 to 6 weeks for residential; smaller townships can be faster but require specific inspector trips. SolarAPP+ adoption is minimal. Interconnection with PECO and PPL typically runs 4 to 8 weeks post-install.",
  installerLandscape:
    "Running a solar company in Pennsylvania means operating in a growing market with retail net metering, SREC income, and moderate sun hours (around 4.3 peak sun hours per day). The installers who have grown fastest are the ones who built the SREC projection cleanly into every proposal (making it a 15-year cash flow rather than a complication) and who have local knowledge of the price-to-compare rate variations across PECO, PPL and Duquesne territories. Lead costs on Google Search are moderate ($120 to $180 range).",
  faq: [
    {
      q: "Does Pennsylvania have net metering?",
      a: "Yes, full retail net metering for residential systems up to 50 kW at the major investor-owned utilities. Credits accrue monthly; year-end excess is paid at price-to-compare rate. The regime has been stable with periodic cap increases.",
    },
    {
      q: "What is a PA SREC worth?",
      a: "Pennsylvania SRECs currently trade around $25 to $45 per SREC. A typical 7 kW residential system in PA produces about 8 to 10 SRECs per year (one per MWh), worth $200 to $450 in annual SREC income. Over the 15-year earning window, this adds up to $3,000 to $6,000 of lifetime income.",
    },
    {
      q: "How much does solar cost in Pennsylvania?",
      a: "Residential solar in PA averages around $2.90 per watt installed, meaning a typical 7 kW system costs about $20,000 gross. After the 30 percent federal tax credit, net cost is around $14,000. Factor in 15 years of SREC income and the net system cost drops meaningfully.",
    },
    {
      q: "Is solar worth it in Pennsylvania?",
      a: "Yes for most PA homes with suitable roofs. The combination of retail net metering, SREC income, and the federal tax credit produces 8 to 11 year payback for most residential installations despite PA's modest 4.3 peak sun hours per day.",
    },
  ],
};
