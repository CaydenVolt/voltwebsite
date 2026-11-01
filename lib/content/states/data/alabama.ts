import type { State } from "../types";

export const ALABAMA: State = {
  slug: "alabama",
  name: "Alabama",
  abbr: "AL",
  title: "Solar in Alabama: market, Alabama Power net billing and permits",
  metaTitle: "Solar Companies in Alabama: Alabama Power, Permits, NEM",
  metaDescription:
    "Honest guide to Alabama solar: market size, Alabama Power's monthly net billing (no retail NEM), state market dynamics, and running a solar company in Alabama.",
  answer:
    "Alabama is the thirty-third-largest US solar market with over 820 MW installed, dominated by utility-scale. Residential has been constrained by Alabama Power's lack of retail net metering: residential solar exports credit at the utility's avoided cost rate (approximately $0.03 per kWh), far below the retail rate of about $0.14. The economics work only with careful sizing to self-consumption and the federal tax credit.",
  published: "2026-11-01",
  market: {
    installedCapacityMw: 820,
    homesPoweredK: 115,
    percentOfElectricity: 1,
    jobs: 580,
    averageCostPerWatt: 2.75,
    nationalRank: 33,
  },
  marketNotes:
    "Alabama's residential solar market has grown slowly compared with neighbouring states (Georgia, Florida, South Carolina) because of Alabama Power's non-retail export compensation and a $5.42 monthly 'backup' fee on net-metered residential solar accounts (around $65 per year). The federal tax credit remains the primary economic driver. TVA territory in northern Alabama operates under separate rules.",
  netMetering: {
    status: "Net billing / avoided cost",
    explanation:
      "Alabama Power credits residential solar exports at the utility's avoided cost rate (approximately $0.03 per kWh), substantially below the retail rate of about $0.14. The utility also charges a monthly 'backup charge' of $5.42 per kW of installed solar DC capacity (around $35 per month for a 7 kW system), which stacks against solar savings. TVA territory customers in northern Alabama (Decatur, Huntsville, Scottsboro, Florence) operate under separate net metering through TVA's distributor utilities.",
  },
  averageRate: 0.14,
  rateNote:
    "Alabama residential rates average around $0.14 per kWh at Alabama Power. Rates have risen approximately 15 percent since 2022.",
  utilities: ["Alabama Power (Southern Company subsidiary), investor-owned, serves most of central and southern Alabama", "Tennessee Valley Authority (TVA) wholesale, served through distributor utilities (Huntsville Utilities, Decatur Utilities, Sheffield Utilities) in northern Alabama", "Various electric cooperatives (Baldwin EMC, Dixie Electric Cooperative, others) serve rural areas"],
  incentives: [
    {
      name: "No state solar tax credit",
      text: "Alabama does not offer a state income tax credit for residential solar. The 30 percent federal Residential Clean Energy Credit remains the primary tax-based incentive.",
    },
    {
      name: "No state property-tax exemption",
      text: "Alabama does not have a statewide property-tax exemption for residential solar. The added value may be included in assessment at the county level; check with the local assessor.",
    },
    {
      name: "AlabamaSAVES loan programme",
      text: "The AlabamaSAVES programme provides low-interest financing for residential energy improvements including solar for qualifying borrowers. Terms vary; confirm current programme structure with the Alabama Department of Economic and Community Affairs.",
    },
  ],
  permits:
    "Permit timelines in Alabama vary by jurisdiction. Birmingham, Montgomery, Mobile and Huntsville commonly take 3 to 5 weeks for residential. Smaller cities and county offices can be faster. SolarAPP+ is in pilot in Huntsville but not broadly deployed. Interconnection with Alabama Power typically runs 4 to 8 weeks post-install; TVA distributor utility interconnection runs separately.",
  installerLandscape:
    "Running a solar company in Alabama means working in a market constrained by Alabama Power's regulatory environment. The best Alabama operators size systems to self-consumption rather than oversized for export, factor the backup charge into payback calculations, and understand the TVA-vs-Alabama Power split in northern Alabama (TVA customers in Huntsville and Decatur have different and generally more favourable economics). Lead costs run $90 to $170 on Google search, low because national competition is thin.",
  faq: [
    {
      q: "Does Alabama Power have net metering?",
      a: "Not retail-rate. Alabama Power credits residential solar exports at the utility's avoided cost rate (approximately $0.03 per kWh), substantially below the retail rate of about $0.14. The utility also charges a monthly 'backup charge' of $5.42 per kW of installed solar DC capacity, which stacks against solar savings.",
    },
    {
      q: "Is Alabama solar economics different in northern Alabama?",
      a: "Yes. Northern Alabama cities (Huntsville, Decatur, Scottsboro, Florence) are served by TVA through distributor utilities, not by Alabama Power. TVA has its own net metering structure with different rules. Confirming which utility serves the specific property matters for an accurate quote.",
    },
    {
      q: "How much does solar cost in Alabama?",
      a: "Residential solar in Alabama averages around $2.75 per watt installed, meaning a typical 7 kW system costs about $19,300 gross. After the 30 percent federal tax credit, net cost is approximately $13,500. Alabama has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Alabama?",
      a: "For Alabama Power customers with high electricity use and south-facing roofs sized to self-consumption, yes but slowly: payback typically runs 12 to 16 years with the federal tax credit. The combination of non-retail export compensation and the monthly backup charge stretches payback compared with retail-NEM Southeast peers. TVA customers in northern Alabama see shorter payback.",
    },
  ],
};
