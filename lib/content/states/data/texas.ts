import type { State } from "../types";

export const TEXAS: State = {
  slug: "texas",
  name: "Texas",
  abbr: "TX",
  title: "Solar in Texas: market, incentives and the net-metering reality",
  metaTitle: "Solar Companies in Texas: Market, Incentives, Net Metering",
  metaDescription:
    "Honest guide to Texas solar: market size, net-metering regime (there isn't one, state-level), major utilities, local rebates and what it is like to run a solar company in TX.",
  answer:
    "Texas is the second-largest US solar market after California, with over 30,000 MW installed and the fastest growth rate in the country. The state has no statewide net-metering mandate: solar economics depend heavily on which retail electric provider the customer uses and whether that provider offers a solar-friendly plan or buy-back rate.",
  published: "2026-10-29",
  market: {
    installedCapacityMw: 33500,
    homesPoweredK: 3800,
    percentOfElectricity: 10,
    jobs: 15000,
    averageCostPerWatt: 2.6,
    nationalRank: 2,
  },
  marketNotes:
    "Texas's growth has been dominated by utility-scale solar (over 85 percent of installed MW is utility-scale) with residential and commercial lagging compared to the state's size. That gap is also an opportunity: residential solar penetration in Texas is below 2 percent of households, versus 10 percent in California, in a market with excellent sun hours and some of the lowest hardware and labour costs in the country.",
  netMetering: {
    status: "No net metering",
    explanation:
      "Texas has no statewide net-metering law. Within the deregulated ERCOT market (most of the state), solar economics depend on the retail electric provider: some REPs offer solar buy-back plans that credit exports at retail or near-retail rates (Rhythm, Reliant, Chariot), others credit at wholesale or avoided-cost rates, and some do not credit exports at all. The homeowner's REP choice at the time of installation is almost as important as system size.",
  },
  averageRate: 0.15,
  rateNote:
    "Texas residential rates average around $0.15 per kWh across the state, lower than most coastal states but with wide variation: some ERCOT REPs offer rates as low as $0.11, while post-storm periods have seen rates spike dramatically. Most REP plans are flat; time-of-use plans are optional and increasingly common.",
  utilities: ["Oncor (delivery)", "CenterPoint Energy (delivery)", "AEP Texas (delivery)", "Austin Energy (vertical utility)", "CPS Energy (San Antonio, vertical utility)"],
  incentives: [
    {
      name: "Austin Energy Residential Solar Rebate",
      text: "Austin Energy customers can receive a rebate per watt installed, plus a value-of-solar tariff rate for exports that is often higher than retail. Austin's programme has been one of the strongest municipal solar incentives in the US.",
    },
    {
      name: "CPS Energy Solar Rebate (San Antonio)",
      text: "CPS Energy offers a per-watt rebate for residential solar installations in its San Antonio service area, with bonus amounts for using locally-manufactured modules. Programme funding is capped annually.",
    },
    {
      name: "Property-tax exemption for solar",
      text: "Texas excludes 100 percent of the added value of a solar system from property-tax assessment under the Solar and Wind-Powered Energy Device Exemption. No application required beyond a one-time filing.",
    },
    {
      name: "Local municipal rebates (varies)",
      text: "A handful of Texas municipalities and co-ops offer additional rebates (Guadalupe Valley Electric Co-op, Pedernales Electric Co-op, El Paso Electric). The list changes often; check with the local utility before quoting.",
    },
  ],
  permits:
    "Permit timelines vary dramatically by jurisdiction. Houston and Dallas commonly take 2 to 6 weeks for residential permits; Austin and San Antonio are faster. SolarAPP+ adoption is spotty in Texas (unlike California's near-mandate), so a single installer often works across jurisdictions with very different speed and documentation requirements. Interconnection with Oncor and CenterPoint usually runs 2 to 4 weeks post-install.",
  installerLandscape:
    "Running a solar company in Texas means operating in a deregulated electricity market where the customer's choice of retail electric provider affects the solar sale as much as system size. The deals that work best are typically on an REP with a solar buy-back plan; the installer who adds REP shopping advice to the proposal closes more than the installer who sells panels in isolation. Cost per lead on Google Search is substantially cheaper than California (typically $75 to $150 for residential) and the market is less saturated, which is why many national installers have expanded into Texas aggressively in the last three years.",
  faq: [
    {
      q: "Does Texas have net metering?",
      a: "No, not statewide. Within the deregulated ERCOT market, solar export compensation depends on the customer's retail electric provider. Several REPs (Rhythm, Reliant, Chariot, Octopus) offer solar buy-back plans that credit exports at retail or near-retail rates; others credit at wholesale. Municipal utilities (Austin Energy, CPS Energy) have their own value-of-solar tariffs.",
    },
    {
      q: "What is the best REP for solar in Texas?",
      a: "The right REP depends on system size, consumption pattern and location, but Rhythm, Chariot and Reliant are commonly cited for their solar buy-back plans. The best approach is to run the customer's annual usage against several solar plans before installation and pick the REP that gives the highest effective credit for their expected export pattern.",
    },
    {
      q: "How much does solar cost in Texas?",
      a: "Residential solar in Texas averages around $2.60 per watt installed, meaning a typical 8 kW system costs about $21,000 gross. After the 30 percent federal tax credit, net cost is around $14,500. Texas has some of the lowest residential solar prices in the US because labour and permit costs are lower than coastal states.",
    },
    {
      q: "Does Texas have a state solar tax credit?",
      a: "No. Texas has no state income tax, so a state-level tax credit for solar is not available. The main state-level benefit is the property-tax exemption, which excludes the solar system's added value from assessment. The 30 percent federal Residential Clean Energy Credit still applies.",
    },
    {
      q: "How many solar companies are in Texas?",
      a: "Roughly 500 to 700 licensed solar installers operate in Texas, concentrated in the Dallas-Fort Worth, Houston, Austin and San Antonio metros. The market is less consolidated than California: the top 10 companies install around 40 percent of residential volume, with the rest spread across smaller regional and local installers.",
    },
  ],
};
