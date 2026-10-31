import type { City } from "../types";

export const DALLAS: City = {
  slug: "dallas",
  stateSlug: "texas",
  name: "Dallas",
  title: "Solar in Dallas: Oncor, deregulated retail and hail reality",
  metaTitle: "Solar Companies in Dallas-Fort Worth: Oncor, REP Buyback, Permits",
  metaDescription:
    "Honest guide to solar in Dallas-Fort Worth: Oncor delivery, which deregulated REPs offer solar buyback plans, City of Dallas permits, hail considerations, and running a solar company in DFW.",
  answer:
    "Dallas-Fort Worth sits in the ERCOT deregulated market with Oncor owning the wires. Residential customers pick their own Retail Electric Provider (REP), and only a handful offer true 1-for-1 solar buyback plans. The practical complication for Dallas solar is hail: North Texas has one of the highest hail-damage rates in the US, which drives insurance premium changes after solar install and makes hail-rated panels a sales conversation that doesn't come up in most other markets.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 5.2,
    sunnyDays: 232,
    note: "Dallas gets around 5.2 peak sun hours per day with 232 sunny days per year, excellent for solar. The dominant climate risk is hail: North Texas sees several significant hail events per year, with the March to May storm season being the peak. Panels rated to UL 61730 Class 4 impact (survives 2-inch hail at terminal velocity) are the practical standard; cheap no-name panels regularly fail in Dallas hail events and void insurance claims.",
  },
  market: {
    metroPopulationK: 8100,
    averageCostPerWatt: 2.55,
    leadCostUsd: { low: 120, high: 220 },
    installerDensity: "High",
  },
  utilities: [
    "Oncor Electric Delivery (owns the wires, delivers electricity to most of DFW)",
    "Residential customers choose their own Retail Electric Provider (REP) in ERCOT deregulated market",
    "Common REPs with solar buyback plans: Rhythm Energy, Octopus Energy, MP2 Energy, Chariot Energy, TXU with its specific solar plan",
    "Municipal utilities serve smaller cities (Garland Power & Light, Denton Municipal Electric, Bryan Texas Utilities)",
  ],
  permits: {
    office: "City of Dallas Development Services Department",
    turnaroundWeeks: "3 to 6 weeks for standard residential",
    solarApp: "In pilot",
    note: "City of Dallas Development Services runs residential solar permits in 3 to 6 weeks typically, longer than many Texas peers because of a backlog that has not fully cleared. SolarAPP+ is in pilot for select contractors as of 2026 but not broadly deployed. Fort Worth, Plano, Frisco, Arlington, Irving and other DFW suburbs each run their own permit offices with timelines of 2 to 5 weeks (most are faster than Dallas city itself). Oncor interconnection post-install typically runs 2 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Dallas-Fort Worth means operating in a competitive market with real differentiation around hail resilience and REP education. The best DFW operators have the hail-rating conversation up front (which specific panel they use, what the Class 4 rating means, how the system is attached), help the customer switch to a solar buyback REP as part of install, and quote accurately for the DFW labour market, which is more expensive than Houston or Austin. Lead costs run $120 to $220 on Google search, moderate for Texas. The metro is spread across 13 counties and multiple permit jurisdictions, so logistics for installers is real; a company that just works Collin County or just works Tarrant County often beats a metrowide generalist on project margin.",
  faq: [
    {
      q: "Does Dallas have net metering?",
      a: "Texas has no statewide net metering mandate. In Dallas-Fort Worth (deregulated ERCOT market), solar exports are credited only if your Retail Electric Provider (REP) offers a solar buyback plan. A handful do (Rhythm Energy, Octopus Energy, MP2 Energy, Chariot Energy, TXU with its specific solar plan). Most REP plans credit exports at $0 or at a wholesale rate well below retail. Switching to a solar buyback REP is essential for DFW solar economics.",
    },
    {
      q: "How long does a solar permit take in Dallas?",
      a: "City of Dallas Development Services typically runs residential solar permits in 3 to 6 weeks, longer than most Texas peers. Fort Worth, Plano, Frisco and other DFW suburbs run their own permitting, generally 2 to 5 weeks. Oncor interconnection post-install typically runs 2 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Dallas?",
      a: "Dallas-Fort Worth runs about $2.55 per watt installed for residential, meaning a 7 kW system typically costs around $17,900 gross. After the 30 percent federal tax credit, net cost is approximately $12,500. Hail-rated panels (UL 61730 Class 4) are standard spec for DFW and included in that price range at reputable installers.",
    },
    {
      q: "What hail rating should solar panels have in Dallas?",
      a: "UL 61730 Class 4 impact rating is the practical standard for Dallas-Fort Worth. Class 4 panels have been tested to survive 2-inch hail at terminal velocity, which covers nearly all North Texas hail events. Cheap no-name panels at lower impact ratings regularly fail in DFW hail events and lead to voided insurance claims. Insurance carriers in North Texas increasingly require Class 4 panels for solar policy coverage.",
    },
    {
      q: "Which Dallas electric providers offer solar buyback?",
      a: "As of 2026, the common DFW REPs with true 1-for-1 solar buyback plans include Rhythm Energy, Octopus Energy, MP2 Energy, Chariot Energy, and TXU Energy's specific solar plan. Switching REPs in deregulated Texas is a web form; the right time to enrol is usually right before or shortly after Permission to Operate from Oncor.",
    },
  ],
};
