import type { State } from "../types";

export const WEST_VIRGINIA: State = {
  slug: "west-virginia",
  name: "West Virginia",
  abbr: "WV",
  title: "Solar in West Virginia: market, Mon Power and net metering",
  metaTitle: "Solar Companies in West Virginia: Mon Power, AEP, Permits",
  metaDescription:
    "Honest guide to West Virginia solar: market size, Mon Power and Appalachian Power net metering, state market dynamics, and running a solar company in WV.",
  answer:
    "West Virginia is the forty-third-largest US solar market with over 160 MW installed. Residential solar operates under Mon Power (FirstEnergy) and Appalachian Power (AEP) net metering with monthly rollover at retail. The 2020 solar bill expanded commercial and third-party ownership options but did not change the residential NEM structure. The federal tax credit remains the primary driver.",
  published: "2026-11-01",
  market: {
    installedCapacityMw: 160,
    homesPoweredK: 23,
    percentOfElectricity: 1,
    jobs: 440,
    averageCostPerWatt: 2.75,
    nationalRank: 43,
  },
  marketNotes:
    "West Virginia's residential solar market is small but growing from a low base. Charleston and Morgantown metros dominate residential; rural WV is thin. The mountainous terrain and dense tree canopy limit the fraction of homes with suitable solar roofs more than most states.",
  netMetering: {
    status: "Full retail net metering",
    explanation:
      "West Virginia offers retail-rate net metering for residential solar systems up to 25 kW AC at Mon Power and Appalachian Power under Public Service Commission rules. Credits accrue monthly at retail; annual true-up at year-end with excess credits typically rolled forward.",
  },
  averageRate: 0.15,
  rateNote:
    "West Virginia residential rates average around $0.15 per kWh at Mon Power and Appalachian Power. Rates have risen approximately 20 percent since 2022.",
  utilities: ["Mon Power (FirstEnergy subsidiary, formerly Monongahela Power), investor-owned, serves most of northern WV", "Appalachian Power (AEP subsidiary), investor-owned, serves most of southern WV", "Various electric cooperatives (Harrison Rural Electrification Association, Craig-Botetourt Electric Cooperative, others) serve rural areas"],
  incentives: [
    {
      name: "No state solar tax credit",
      text: "West Virginia does not offer a state income tax credit for residential solar. The 30 percent federal Residential Clean Energy Credit remains the primary tax-based incentive.",
    },
    {
      name: "No state property-tax exemption",
      text: "West Virginia does not have a statewide property-tax exemption for residential solar. The added value may be included in assessment at the county level.",
    },
    {
      name: "No state sales-tax exemption",
      text: "West Virginia does not currently offer a sales-tax exemption for residential solar equipment. The standard 6 percent state sales tax applies.",
    },
  ],
  permits:
    "Permit timelines in West Virginia vary by jurisdiction. Charleston, Morgantown and Huntington commonly take 3 to 5 weeks for residential. Rural counties can be faster or similar. SolarAPP+ is not accepted. Interconnection with Mon Power or Appalachian Power typically runs 4 to 8 weeks post-install.",
  installerLandscape:
    "Running a solar company in West Virginia means working in a small market where mountainous terrain and tree canopy limit suitable rooftops more than most states. The best WV operators do honest shade audits as part of the first visit, understand the Mon Power vs Appalachian Power differences in interconnection paperwork, and handle rural logistics (longer drives between projects). Lead costs run $80 to $150 on Google search, among the lowest in the US because installer density is thin.",
  faq: [
    {
      q: "Does West Virginia have net metering?",
      a: "Yes, retail-rate net metering for residential solar systems up to 25 kW AC at Mon Power and Appalachian Power under Public Service Commission rules. Credits accrue monthly at retail; annual true-up at year-end with excess credits rolled forward.",
    },
    {
      q: "How much does solar cost in West Virginia?",
      a: "Residential solar in West Virginia averages around $2.75 per watt installed, meaning a typical 7 kW system costs about $19,300 gross. After the 30 percent federal tax credit, net cost is approximately $13,500. West Virginia has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in West Virginia?",
      a: "Yes for WV homes with suitable roofs. The combination of retail NEM, moderate electric rates, and the 30 percent federal credit makes residential solar payback typically 10 to 13 years. Mountainous terrain and tree canopy limit suitable rooftops; honest shade audits before quoting matter more here than in most states.",
    },
  ],
};
