import type { State } from "../types";

export const CONNECTICUT: State = {
  slug: "connecticut",
  name: "Connecticut",
  abbr: "CT",
  title: "Solar in Connecticut: market, incentives and net billing reality",
  metaTitle: "Solar Companies in Connecticut: Market, Residential Programs",
  metaDescription:
    "Honest guide to Connecticut solar: market size, Eversource and United Illuminating under the Residential Renewable Energy Solutions programme, state property-tax exemption, and running a solar company in CT.",
  answer:
    "Connecticut is the twenty-sixth-largest US solar market with over 1,000 MW installed. Residential has been reshaped by the 2022 transition from retail net metering to the Residential Renewable Energy Solutions (RRES) programme at Eversource and United Illuminating. RRES offers two tariff options (Buy-All or Netting), with specific incentives for storage-attached installations.",
  published: "2026-11-01",
  market: {
    installedCapacityMw: 1050,
    homesPoweredK: 165,
    percentOfElectricity: 4,
    jobs: 2400,
    averageCostPerWatt: 3.1,
    nationalRank: 26,
  },
  marketNotes:
    "Connecticut's residential solar market grew through the mid-2010s under retail net metering and the state's SHREC programme. The 2022 RRES transition redesigned residential incentives: homeowners pick either Buy-All (sell all generation at a tariff rate) or Netting (consume plus credit at retail) at install. The high retail electric rates in CT (among the highest in the US) keep the Netting economics working.",
  netMetering: {
    status: "Net billing / avoided cost",
    explanation:
      "Connecticut replaced retail NEM with the Residential Renewable Energy Solutions programme in 2022. Residential customers at Eversource and United Illuminating choose between Buy-All (all solar generation sold at a tariff rate around $0.30 per kWh for storage-attached systems, lower for solar-only) and Netting (consume plus credit at retail, with monthly rollover and annual true-up at avoided cost). Pre-2022 customers are grandfathered on prior NEM for 20 years.",
  },
  averageRate: 0.33,
  rateNote:
    "Connecticut residential rates average around $0.33 per kWh at Eversource and United Illuminating, among the highest in the US. Rates have risen approximately 40 percent since 2022 driven by generation supply charges. High retail rates keep the Netting-option solar math working.",
  utilities: ["Eversource Energy", "United Illuminating (UI, Avangrid subsidiary)", "Various municipal utilities (Norwich Public Utilities, Groton Utilities, Jewett City) serve specific cities"],
  incentives: [
    {
      name: "Residential Renewable Energy Solutions (RRES) tariff",
      text: "Eversource and United Illuminating offer residential solar customers a choice of two tariff options under RRES: Buy-All (all generation sold at approximately $0.30 per kWh for storage-attached systems or around $0.20 per kWh for solar-only, 20-year contract) or Netting (consume plus retail credit with monthly rollover and avoided-cost true-up). Choice is made at installation and locked for the contract term.",
    },
    {
      name: "Connecticut property-tax exemption",
      text: "Connecticut exempts the added value of residential solar systems from property-tax assessment under C.G.S. 12-81(57). Automatic.",
    },
    {
      name: "Sales-tax exemption on solar equipment",
      text: "Residential solar PV equipment is exempt from Connecticut's 6.35 percent state sales tax under the renewable energy equipment exemption.",
    },
    {
      name: "No state income tax credit",
      text: "Connecticut does not currently offer a state income tax credit for residential solar. The 30 percent federal Residential Clean Energy Credit remains the primary tax-based incentive.",
    },
  ],
  permits:
    "Permit timelines in Connecticut vary by municipality. Hartford, New Haven, Stamford and Bridgeport commonly take 3 to 6 weeks for residential. Smaller towns can be faster. SolarAPP+ is in pilot but not broadly deployed. Interconnection with Eversource or UI typically runs 3 to 6 weeks post-install.",
  installerLandscape:
    "Running a solar company in Connecticut means helping customers navigate the Buy-All vs Netting choice carefully. Storage-attached Buy-All systems earn the highest tariff rate ($0.30 per kWh for 20 years) and are the right fit for most residential installations under the current programme. Solar-only Netting works for homes with high summer electric use (pool pumps, electric heat pumps) and the Buy-All solar-only tariff tends not to pencil out as well. The best CT operators run both pencil-outs before quoting. Lead costs run $130 to $230 on Google search.",
  faq: [
    {
      q: "Does Connecticut have net metering?",
      a: "Not retail-rate for new customers since 2022. The Residential Renewable Energy Solutions (RRES) programme offers residential solar customers two tariff options: Buy-All (all generation sold at a tariff rate) or Netting (consume plus credit at retail with annual avoided-cost true-up). Pre-2022 customers are grandfathered on prior NEM for 20 years.",
    },
    {
      q: "What is the RRES tariff rate?",
      a: "RRES tariff rates are set by PURA quarterly. Current rates (as of 2025) are approximately $0.30 per kWh for storage-attached Buy-All (20-year contract), around $0.20 per kWh for solar-only Buy-All, and retail-rate credit under Netting with annual avoided-cost true-up. Confirm current rates with PURA before quoting.",
    },
    {
      q: "How much does solar cost in Connecticut?",
      a: "Residential solar in Connecticut averages around $3.10 per watt installed, meaning a typical 7 kW system costs about $21,700 gross. After the 30 percent federal tax credit, net cost is around $15,200.",
    },
    {
      q: "Is solar worth it in Connecticut?",
      a: "Yes for most Connecticut homes with suitable roofs. The combination of high retail electric rates (around $0.33 per kWh), the RRES tariff (especially storage-attached Buy-All at $0.30 per kWh), and the federal tax credit makes residential solar payback typically 7 to 10 years. Among the stronger Northeast solar economies.",
    },
  ],
};
