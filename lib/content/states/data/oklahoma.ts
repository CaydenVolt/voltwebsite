import type { State } from "../types";

export const OKLAHOMA: State = {
  slug: "oklahoma",
  name: "Oklahoma",
  abbr: "OK",
  title: "Solar in Oklahoma: market, OG&E and net billing reality",
  metaTitle: "Solar Companies in Oklahoma: OG&E, PSO, Permits",
  metaDescription:
    "Honest guide to Oklahoma solar: market size, OG&E and PSO non-retail export compensation, hail risk, and running a solar company in Oklahoma.",
  answer:
    "Oklahoma is the thirty-ninth-largest US solar market with over 320 MW installed, dominated by utility-scale. Residential has been constrained by Oklahoma's non-retail net metering: exports credit at avoided cost (approximately $0.03 per kWh) at both OG&E and PSO, far below the retail rate of about $0.12. Severe weather risk (hail, tornadoes) adds structural engineering requirements that cheap out-of-state installers often underestimate.",
  published: "2026-11-01",
  market: {
    installedCapacityMw: 320,
    homesPoweredK: 48,
    percentOfElectricity: 1,
    jobs: 440,
    averageCostPerWatt: 2.7,
    nationalRank: 39,
  },
  marketNotes:
    "Oklahoma's residential solar market has grown slowly because of non-retail net metering. Oklahoma City and Tulsa metros dominate residential. The 2014 Oklahoma Corporation Commission order allowed utilities to charge fixed grid-connection fees to solar customers, which further stretched payback. Hail is a dominant climate factor; UL 61730 Class 4 impact-rated panels are the practical standard.",
  netMetering: {
    status: "Net billing / avoided cost",
    explanation:
      "Oklahoma credits residential solar exports at the utility's avoided cost rate (approximately $0.03 per kWh), substantially below the retail rate of about $0.12. OG&E and PSO both operate under this structure. The 2014 Oklahoma Corporation Commission order permits utilities to charge solar customers fixed grid-connection fees in addition to standard rates.",
  },
  averageRate: 0.12,
  rateNote:
    "Oklahoma residential rates average around $0.12 per kWh at OG&E and PSO. Rates have risen approximately 20 percent since 2022.",
  utilities: ["Oklahoma Gas & Electric (OG&E), investor-owned, serves most of central Oklahoma including OKC", "Public Service Company of Oklahoma (PSO, AEP subsidiary), serves most of eastern Oklahoma including Tulsa", "Various electric cooperatives (CKenergy, Red River Valley REA, others) serve rural areas", "Oklahoma Municipal Power Authority wholesale through member cities"],
  incentives: [
    {
      name: "No state solar tax credit",
      text: "Oklahoma does not offer a state income tax credit for residential solar. The 30 percent federal Residential Clean Energy Credit remains the primary tax-based incentive.",
    },
    {
      name: "No state property-tax exemption",
      text: "Oklahoma does not have a statewide property-tax exemption for residential solar. The added value may be included in assessment at the county level.",
    },
    {
      name: "No state sales-tax exemption",
      text: "Oklahoma does not currently offer a sales-tax exemption for residential solar equipment.",
    },
  ],
  permits:
    "Permit timelines in Oklahoma vary by jurisdiction. Oklahoma City, Tulsa, Norman and Edmond commonly take 2 to 5 weeks for residential. Smaller cities and counties can be faster. SolarAPP+ is not accepted. Interconnection with OG&E or PSO typically runs 4 to 6 weeks post-install.",
  installerLandscape:
    "Running a solar company in Oklahoma means working in a market constrained by non-retail export compensation and dominated by severe weather risk. The best Oklahoma operators size systems to self-consumption rather than oversize for export, spec UL 61730 Class 4 impact-rated panels as standard for the hail-prone climate, and sell on long-term rate protection rather than fast payback. Tornado-prone weather requires proper structural attachment. Lead costs run $80 to $150 on Google search.",
  faq: [
    {
      q: "Does Oklahoma have net metering?",
      a: "Not retail-rate. Oklahoma credits residential solar exports at the utility's avoided cost rate (approximately $0.03 per kWh), substantially below the retail rate of about $0.12. OG&E and PSO both operate under this structure, which stretches solar payback compared with retail-NEM states.",
    },
    {
      q: "How much does solar cost in Oklahoma?",
      a: "Residential solar in Oklahoma averages around $2.70 per watt installed, meaning a typical 7 kW system costs about $18,900 gross. After the 30 percent federal tax credit, net cost is approximately $13,200. Hail-rated Class 4 panels are standard spec and included in that range at reputable installers.",
    },
    {
      q: "Is solar worth it in Oklahoma?",
      a: "For Oklahoma homes with high electricity use and south-facing roofs sized to self-consumption, yes but slowly: payback typically runs 11 to 15 years with the federal tax credit. The combination of non-retail export compensation and no state incentives stretches payback. Right-sized systems that match annual load pencil out better than oversized ones.",
    },
    {
      q: "What hail rating should solar panels have in Oklahoma?",
      a: "UL 61730 Class 4 impact rating is the practical standard. Class 4 panels have been tested to survive 2-inch hail at terminal velocity, which covers nearly all Oklahoma hail events. Cheap no-name panels at lower impact ratings regularly fail in Oklahoma hail events and lead to voided insurance claims.",
    },
  ],
};
