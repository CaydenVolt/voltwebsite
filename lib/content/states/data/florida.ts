import type { State } from "../types";

export const FLORIDA: State = {
  slug: "florida",
  name: "Florida",
  abbr: "FL",
  title: "Solar in Florida: market, incentives and net-metering reality",
  metaTitle: "Solar Companies in Florida: Market, Net Metering, Incentives",
  metaDescription:
    "Honest guide to Florida solar: market size, the net-metering debate, the major utilities, state and local incentives, and what it is like to run a solar company in FL.",
  answer:
    "Florida is the third-largest US solar market, with 20,000+ MW installed and the fastest-growing residential segment outside California. Florida offers full retail net metering (as of 2026, pending ongoing utility pushback), no state income tax, and some of the strongest sun hours in the country, which makes the solar economics competitive even without state-level incentives.",
  published: "2026-10-29",
  market: {
    installedCapacityMw: 20800,
    homesPoweredK: 2500,
    percentOfElectricity: 7,
    jobs: 13500,
    averageCostPerWatt: 2.6,
    nationalRank: 3,
  },
  marketNotes:
    "Florida's solar market has grown faster than California's or Texas's in percentage terms over the last three years, driven by rising utility rates (FPL raised residential rates 7 percent in 2024) and strong consumer awareness. Investor-owned utilities (particularly FPL) have repeatedly lobbied to reduce net-metering credits; a 2022 bill to do so was vetoed and the issue remains active at the Public Service Commission.",
  netMetering: {
    status: "Full retail net metering",
    explanation:
      "Florida has full retail net metering: solar exports are credited at the same rate the customer pays for electricity. The regime has been under legislative pressure (SB 1024 in 2022 would have reduced credits; it was vetoed by the governor) and remains a political target of the major IOUs. Monitor Public Service Commission decisions annually.",
  },
  averageRate: 0.14,
  rateNote:
    "Florida residential rates average around $0.14 per kWh and have risen 20 percent over the past three years. FPL, the largest utility, uses tiered rates that increase with usage, which favours solar more at the high-usage tier.",
  utilities: ["Florida Power & Light (FPL)", "Duke Energy Florida", "Tampa Electric (TECO)", "JEA (Jacksonville)", "Orlando Utilities Commission (OUC)"],
  incentives: [
    {
      name: "Property-tax exemption for renewable energy",
      text: "Florida's Property Tax Abatement for Renewable Energy Property exempts 100 percent of the added value of a residential solar system from property-tax assessment. Automatic; no application required.",
    },
    {
      name: "Sales-tax exemption on solar equipment",
      text: "Florida exempts solar PV equipment from the state's 6 percent sales tax. The exemption applies at the time of purchase and includes panels, inverters, mounting hardware and batteries sold as part of the system.",
    },
    {
      name: "PACE (Property Assessed Clean Energy) financing",
      text: "Florida has an active residential PACE market through providers like Ygrene and Renew Financial. Lets homeowners finance a solar installation through a property-tax assessment paid over 10 to 20 years. Rates are typically higher than conventional solar loans; useful for borrowers who do not qualify for traditional financing.",
    },
    {
      name: "No state income tax",
      text: "Florida has no state income tax, which means the 30 percent federal Residential Clean Energy Credit is the only tax-based incentive on offer; there is no state-level credit layered on top. Economic effect is still favourable because sales tax is also exempted.",
    },
  ],
  permits:
    "Permit timelines vary by county. Miami-Dade and Broward are commonly 3 to 8 weeks for residential; Orange and Hillsborough are faster at 2 to 4 weeks. SolarAPP+ is used by a handful of Florida jurisdictions but not widespread. Interconnection with FPL typically runs 2 to 6 weeks post-install; Duke Energy Florida is similar.",
  installerLandscape:
    "Running a solar company in Florida means operating in a growing market with reasonable lead costs ($100 to $180 per lead on Google Search for most metros), supportive statewide incentives (property tax, sales tax), but with constant political uncertainty around net metering. The installers who have done well have invested in educating customers that the net-metering regime could change and in sizing systems to maximise self-consumption rather than relying on heavy export credits. Hurricane season affects both installation scheduling and customer demand for backup storage.",
  faq: [
    {
      q: "Does Florida have net metering in 2026?",
      a: "Yes, Florida currently has full retail net metering. The regime has been under legislative pressure (SB 1024 in 2022 would have reduced credits; it was vetoed) and remains a target of lobbying by the major investor-owned utilities. Monitor Public Service Commission decisions and legislative sessions each year for proposed changes.",
    },
    {
      q: "How much does solar cost in Florida?",
      a: "Residential solar in Florida averages around $2.60 per watt installed, meaning a typical 8 kW system costs about $21,000 gross. After the 30 percent federal tax credit, net cost is around $14,500. Florida's labour and permit costs are lower than most coastal states.",
    },
    {
      q: "Is solar worth it in Florida?",
      a: "Yes, in most of the state. Florida's combination of high sun hours (around 5.0 to 5.5 peak sun hours per day), rising utility rates and full retail net metering produces payback periods of 7 to 10 years for most residential installations with the federal tax credit. Pure financial return is stronger in high-usage households and in territories where the utility has raised rates most aggressively (FPL territory).",
    },
    {
      q: "Does Florida have a state solar tax credit?",
      a: "No state income tax credit (Florida has no state income tax). The main state-level benefits are the property-tax exemption and the sales-tax exemption on solar equipment, both of which apply automatically. The 30 percent federal Residential Clean Energy Credit still applies in full.",
    },
    {
      q: "How many solar companies are in Florida?",
      a: "The Florida Solar Energy Industries Association tracks around 400 to 500 licensed solar contractors in the state, concentrated in Miami, Tampa, Orlando and Jacksonville. The top 10 companies install roughly half of residential volume; the market is less consolidated than California but more than Texas.",
    },
  ],
};
