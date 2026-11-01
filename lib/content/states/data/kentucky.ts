import type { State } from "../types";

export const KENTUCKY: State = {
  slug: "kentucky",
  name: "Kentucky",
  abbr: "KY",
  title: "Solar in Kentucky: market, LG&E/KU net metering reality",
  metaTitle: "Solar Companies in Kentucky: LG&E, KU, Duke KY, Permits",
  metaDescription:
    "Honest guide to Kentucky solar: market size, LG&E/KU 2021 net metering restructure, Duke Energy Kentucky service, and running a solar company in Kentucky.",
  answer:
    "Kentucky is the forty-first-largest US solar market with over 230 MW installed, dominated by utility-scale. Residential has been reshaped by the 2021 LG&E/KU net metering restructure, which replaced retail NEM with a two-rate structure (consumption at retail, exports at avoided cost around $0.055 per kWh). The economics work only with careful sizing to self-consumption plus the federal tax credit.",
  published: "2026-11-01",
  market: {
    installedCapacityMw: 230,
    homesPoweredK: 32,
    percentOfElectricity: 1,
    jobs: 460,
    averageCostPerWatt: 2.75,
    nationalRank: 41,
  },
  marketNotes:
    "Kentucky's residential solar market has grown slowly compared with neighbouring states because of the 2021 LG&E/KU restructure that ended retail NEM. Louisville and Lexington metros dominate residential. Pre-2021 customers are grandfathered on retail NEM. The federal tax credit remains the dominant incentive.",
  netMetering: {
    status: "Net billing / avoided cost",
    explanation:
      "Kentucky's 2021 Public Service Commission order replaced retail net metering with a two-rate structure for new residential solar customers at LG&E and KU. Consumption continues to credit at retail (around $0.14 per kWh); exports credit at avoided cost (approximately $0.055 per kWh). Pre-2021 customers are grandfathered on retail NEM. Duke Energy Kentucky operates under a similar structure.",
  },
  averageRate: 0.14,
  rateNote:
    "Kentucky residential rates average around $0.14 per kWh at LG&E/KU and Duke KY. Rates have risen approximately 15 percent since 2022.",
  utilities: ["Louisville Gas & Electric (LG&E), investor-owned, serves most of Louisville metro", "Kentucky Utilities (KU, LG&E and KU Energy LLC subsidiary), serves most of central and eastern KY including Lexington", "Duke Energy Kentucky, investor-owned, serves northern Kentucky counties across from Cincinnati", "Various electric cooperatives (Jackson Energy Cooperative, East Kentucky Power Cooperative distributor, others) serve rural areas", "Tennessee Valley Authority wholesale through distributor utilities in western Kentucky"],
  incentives: [
    {
      name: "No state solar tax credit",
      text: "Kentucky does not offer a state income tax credit for residential solar. A prior state tax credit expired. The 30 percent federal Residential Clean Energy Credit remains the primary tax-based incentive.",
    },
    {
      name: "No state property-tax exemption",
      text: "Kentucky does not have a statewide property-tax exemption for residential solar. The added value may be included in assessment at the county level.",
    },
    {
      name: "No state sales-tax exemption",
      text: "Kentucky does not currently offer a sales-tax exemption for residential solar equipment. The standard 6 percent state sales tax applies.",
    },
  ],
  permits:
    "Permit timelines in Kentucky vary by jurisdiction. Louisville and Lexington commonly take 3 to 5 weeks for residential. Smaller cities and counties can be faster. SolarAPP+ is not accepted. Interconnection with LG&E, KU or Duke Kentucky typically runs 4 to 6 weeks post-install.",
  installerLandscape:
    "Running a solar company in Kentucky means working under the 2021 net metering restructure, where oversized systems earn only avoided cost for exports. The best Kentucky operators size systems to self-consumption, run honest annual load-match analyses, and understand the LG&E vs KU vs Duke Kentucky differences in interconnection paperwork. Lead costs run $85 to $160 on Google search.",
  faq: [
    {
      q: "Does Kentucky have net metering?",
      a: "Not retail-rate for new customers since 2021. LG&E and KU operate a two-rate structure: consumption at retail (around $0.14 per kWh), exports at avoided cost (approximately $0.055 per kWh). Duke Energy Kentucky operates similarly. Pre-2021 customers are grandfathered on retail NEM.",
    },
    {
      q: "How much does solar cost in Kentucky?",
      a: "Residential solar in Kentucky averages around $2.75 per watt installed, meaning a typical 7 kW system costs about $19,300 gross. After the 30 percent federal tax credit, net cost is approximately $13,500. Kentucky has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Kentucky?",
      a: "For Kentucky homes with high electricity use and south-facing roofs sized to self-consumption, yes but with longer payback than retail-NEM states: typically 11 to 15 years with the federal tax credit. The 2021 net metering restructure stretched payback meaningfully. Right-sized systems that match annual load pencil out better than oversized ones.",
    },
  ],
};
