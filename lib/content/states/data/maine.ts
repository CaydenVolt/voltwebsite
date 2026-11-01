import type { State } from "../types";

export const MAINE: State = {
  slug: "maine",
  name: "Maine",
  abbr: "ME",
  title: "Solar in Maine: market, Net Energy Billing and winter reality",
  metaTitle: "Solar Companies in Maine: CMP, Versant, NEB, Permits",
  metaDescription:
    "Honest guide to Maine solar: market size, Central Maine Power (CMP) and Versant Power Net Energy Billing programme, winter snow derating, and running a solar company in Maine.",
  answer:
    "Maine is the thirty-second-largest US solar market with over 850 MW installed. Residential solar operates under the Net Energy Billing (NEB) programme at Central Maine Power and Versant Power, which replaced traditional retail NEM in 2019 and underwent significant restructuring in 2024. The current structure credits exports at a kWh value tied to the standard offer rate; the programme has been through meaningful rate-design changes that affect payback.",
  published: "2026-11-01",
  market: {
    installedCapacityMw: 850,
    homesPoweredK: 125,
    percentOfElectricity: 9,
    jobs: 1100,
    averageCostPerWatt: 3.0,
    nationalRank: 32,
  },
  marketNotes:
    "Maine's solar market grew rapidly after the 2019 Net Energy Billing programme opened. The 2024 NEB restructuring reduced the compensation rate for new residential installations, slowing the pace of new installations but keeping payback workable with the federal tax credit. Portland metro dominates residential; Bangor and smaller cities are smaller markets.",
  netMetering: {
    status: "Partial net metering",
    explanation:
      "Maine's Net Energy Billing (NEB) programme replaced traditional retail net metering in 2019 at Central Maine Power and Versant Power. The 2024 restructuring reduced the per-kWh value of credits for new installations: residential customers now receive credits valued at a rate tied to the standard offer plus an administrative adjustment, typically around 70 to 85 percent of retail. Pre-2024 customers are grandfathered on the earlier NEB rate for 20 years. Group Billing option permits sharing across multiple accounts.",
  },
  averageRate: 0.26,
  rateNote:
    "Maine residential rates average around $0.26 per kWh at Central Maine Power and Versant Power, among the higher in the US. Standard offer rates have fluctuated substantially since 2022; current rates include significant generation supply charges.",
  utilities: ["Central Maine Power (CMP, Avangrid subsidiary), investor-owned, serves most of southern and central Maine including Portland", "Versant Power (ENMAX subsidiary), investor-owned, serves most of eastern and northern Maine including Bangor", "Various municipal and consumer-owned utilities (Kennebunk Light & Power District, Houlton Water Company) serve specific areas"],
  incentives: [
    {
      name: "Efficiency Maine Solar + Storage incentive",
      text: "Efficiency Maine offers residential solar + storage incentives funded through the Regional Greenhouse Gas Initiative (RGGI) and other sources. Current programme structure varies; confirm with Efficiency Maine before quoting.",
    },
    {
      name: "Sales-tax exemption",
      text: "Maine exempts residential solar PV equipment from the state's 5.5 percent sales tax under the renewable energy equipment exemption.",
    },
    {
      name: "No state income tax credit",
      text: "Maine does not currently offer a state income tax credit for residential solar. The 30 percent federal Residential Clean Energy Credit remains the primary tax-based incentive.",
    },
    {
      name: "Group Billing (community solar)",
      text: "Maine permits Group Billing arrangements that let a single solar installation credit multiple customer accounts. This supports community solar farms and multi-household shared arrays.",
    },
  ],
  permits:
    "Permit timelines in Maine are generally moderate. Portland, Lewiston, Bangor and other mid-sized cities commonly take 3 to 6 weeks for residential. Smaller towns handle permits locally with 2 to 4 week typical timelines. SolarAPP+ is not accepted. Interconnection with CMP or Versant typically runs 4 to 8 weeks post-install.",
  installerLandscape:
    "Running a solar company in Maine means working in a market reshaped by the 2024 NEB restructuring, where the economics are workable but tighter than they were pre-2024. The best Maine operators are explicit about the current NEB credit rate (around 70 to 85 percent of retail) in sales conversations, model winter snow derating honestly, and understand the differences between CMP's and Versant's specific NEB application processes. Lead costs run $100 to $180 on Google search.",
  faq: [
    {
      q: "Does Maine have net metering?",
      a: "Not retail-rate 1-for-1. Maine's Net Energy Billing (NEB) programme credits residential solar exports at a rate tied to the standard offer plus an administrative adjustment, typically around 70 to 85 percent of retail for new installations. Pre-2024 customers are grandfathered on the earlier NEB rate for 20 years.",
    },
    {
      q: "What changed with Maine NEB in 2024?",
      a: "The 2024 restructuring reduced the per-kWh value of NEB credits for new installations by adjusting the compensation rate downward. The practical result: payback for new installations stretched by 1 to 2 years compared with pre-2024. Group Billing option continues to permit sharing across multiple accounts for community-solar arrangements.",
    },
    {
      q: "How much does solar cost in Maine?",
      a: "Residential solar in Maine averages around $3.00 per watt installed, meaning a typical 7 kW system costs about $21,000 gross. After the 30 percent federal tax credit, net cost is approximately $14,700.",
    },
    {
      q: "Is solar worth it in Maine?",
      a: "Yes for most Maine homes with suitable roofs. The combination of relatively high retail rates (around $0.26 per kWh), NEB credits at 70 to 85 percent of retail, and the 30 percent federal credit makes residential solar payback typically 9 to 13 years. Winter snow derating stretches payback; honest annual yield modelling matters.",
    },
  ],
};
