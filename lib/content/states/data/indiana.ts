import type { State } from "../types";

export const INDIANA: State = {
  slug: "indiana",
  name: "Indiana",
  abbr: "IN",
  title: "Solar in Indiana: market, incentives and the post-net-metering landscape",
  metaTitle: "Solar Companies in Indiana: Market, Net Metering, Incentives",
  metaDescription:
    "Honest guide to Indiana solar: market size, the 2017 net-metering phase-out, the Excess Distributed Generation tariff and running a solar company in IN.",
  answer:
    "Indiana is the fifteenth-largest US solar market with over 2,300 MW installed, dominated by utility-scale solar. Residential has been reshaped by the 2017 phase-out of retail net metering: new residential solar customers receive the Excess Distributed Generation (EDG) credit at roughly 1.25x avoided cost rather than retail rate, which has shortened system sizing and favoured solar-plus-battery.",
  published: "2026-10-31",
  market: {
    installedCapacityMw: 2300,
    homesPoweredK: 290,
    percentOfElectricity: 3,
    jobs: 3700,
    averageCostPerWatt: 2.6,
    nationalRank: 15,
  },
  marketNotes:
    "Indiana's solar market has grown steadily on the utility-scale side; residential growth slowed after the 2017 net-metering phase-out (fully transitioned by 2022) but has stabilised as the EDG tariff proved workable with careful system sizing. Growth is concentrated in the Indianapolis, Fort Wayne and northern Indiana metros.",
  netMetering: {
    status: "Net billing / avoided cost",
    explanation:
      "Indiana phased out retail net metering starting 2017; new residential solar customers are placed on the Excess Distributed Generation (EDG) tariff. Exports are credited at approximately 1.25x the utility's avoided-cost rate, typically $0.04 to $0.06 per kWh at Duke Indiana and Indiana Michigan Power. Grandfathered customers on the pre-2017 programme keep retail-rate net metering through 2032 (reduced to 2047 for pre-2018 enrollees).",
  },
  averageRate: 0.14,
  rateNote:
    "Indiana residential rates average around $0.14 per kWh. Most Indiana utilities use flat residential rates with modest tiering; time-of-use is available on an opt-in basis.",
  utilities: ["Duke Energy Indiana", "Indiana Michigan Power (I&M)", "AES Indiana (Indianapolis Power & Light)", "NIPSCO (Northern Indiana Public Service)", "CenterPoint Energy Indiana South"],
  incentives: [
    {
      name: "Property-tax exemption for renewable energy",
      text: "Indiana exempts the added value of residential solar systems from property-tax assessment under IC 6-1.1-12-26.1. Automatic.",
    },
    {
      name: "Sales-tax exemption on solar equipment",
      text: "Indiana exempts solar PV equipment from the state's 7 percent sales tax under the renewable energy equipment exemption.",
    },
    {
      name: "Net metering grandfathering",
      text: "Residential customers who installed solar before the 2017 phase-out began are grandfathered on retail-rate net metering through 2032 (or 2047 for pre-2018 enrollees). New systems do not qualify.",
    },
    {
      name: "Municipal and co-op variations",
      text: "A handful of municipal utilities and electric membership co-ops in Indiana still offer retail-rate or near-retail-rate net metering to their members, as they are not bound by the state investor-owned-utility rules. Check with the local utility before assuming EDG applies.",
    },
  ],
  permits:
    "Permit timelines in Indiana vary by county. Marion County (Indianapolis), Hamilton and Allen County commonly take 3 to 5 weeks for residential. Rural counties can be faster or require specific inspector trips. SolarAPP+ adoption is minimal. Interconnection typically runs 4 to 8 weeks post-install.",
  installerLandscape:
    "Running a solar company in Indiana means operating in a market reshaped by the net-metering phase-out. The installers who have grown fastest are the ones who built sales materials explaining the EDG tariff clearly and who moved early to solar-plus-battery proposals that maximise self-consumption. Indianapolis has moderate lead costs ($90 to $140 range) and the rest of the state is cheaper. Growth drivers are the federal tax credit certainty and (where available) municipal utility net metering that still offers retail-rate credit.",
  faq: [
    {
      q: "Does Indiana have net metering?",
      a: "Not for new residential customers of investor-owned utilities. The 2017 phase-out replaced retail net metering with the Excess Distributed Generation (EDG) tariff, which credits exports at approximately 1.25x the utility's avoided-cost rate (typically $0.04 to $0.06 per kWh). Pre-2017 customers are grandfathered on retail rate through 2032. Some municipal and co-op utilities still offer retail-rate NEM.",
    },
    {
      q: "How much does solar cost in Indiana?",
      a: "Residential solar in Indiana averages around $2.60 per watt installed, meaning a typical 7 kW system costs about $18,000 gross. After the 30 percent federal tax credit, net cost is around $12,600. Indiana does not have a state income-tax credit on solar.",
    },
    {
      q: "Is solar worth it in Indiana?",
      a: "Yes for most Indiana homes but with longer payback than full-NEM states: typically 11 to 14 years for residential installations with the federal tax credit. Pairing solar with battery storage, sized for self-consumption, shortens payback meaningfully under the EDG tariff.",
    },
    {
      q: "Does Indiana have a state solar tax credit?",
      a: "No. Indiana does not currently have a state income-tax credit for residential solar. The main state-level benefits are the property-tax and sales-tax exemptions. The 30 percent federal Residential Clean Energy Credit still applies.",
    },
  ],
};
