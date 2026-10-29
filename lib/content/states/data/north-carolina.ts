import type { State } from "../types";

export const NORTH_CAROLINA: State = {
  slug: "north-carolina",
  name: "North Carolina",
  abbr: "NC",
  title: "Solar in North Carolina: market, incentives and interconnection reality",
  metaTitle: "Solar Companies in North Carolina: Market, Incentives, NEM",
  metaDescription:
    "Honest guide to North Carolina solar: market size, net-metering transition, Duke Energy's bridge rate, state incentives, and running a solar company in NC.",
  answer:
    "North Carolina is the fifth-largest US solar market, with over 10,000 MW installed and historically one of the strongest utility-scale solar markets in the country. Residential has been slower to grow, partly because the state transitioned from retail net metering to a bridge rate in 2023, with Duke Energy's new residential solar rate structure making system sizing more complex than it was.",
  published: "2026-10-29",
  market: {
    installedCapacityMw: 10100,
    homesPoweredK: 1200,
    percentOfElectricity: 10,
    jobs: 7000,
    averageCostPerWatt: 2.6,
    nationalRank: 5,
  },
  marketNotes:
    "North Carolina's utility-scale solar market has been a national leader for a decade thanks to historically favourable rate-recovery policies for Duke Energy. The residential market is smaller but growing: around 100,000 residential installations statewide. The 2023 transition from retail net metering to a bridge-rate structure has slowed new residential sales while installers adjust to the new economics.",
  netMetering: {
    status: "Partial net metering",
    explanation:
      "Duke Energy (both Duke Energy Carolinas and Duke Energy Progress, which cover most of the state) transitioned residential solar customers in 2023 from retail net metering to a bridge-rate structure. New solar customers are placed on either a Residential Service Solar Choice tariff or a Residential Service Bridge Rate, both of which include a demand charge, time-of-use energy pricing and a lower export credit than historical retail net metering. The specific credit varies by export time; peak-period exports are credited near retail while off-peak is credited at a lower rate.",
  },
  averageRate: 0.12,
  rateNote:
    "North Carolina residential rates average around $0.12 per kWh, among the lower in the US. Duke's new solar tariff adds a demand charge based on peak 15-minute usage, which changes the shape of the solar value equation: a customer who can shift large loads off-peak captures more value than one who runs air conditioning at 5pm.",
  utilities: ["Duke Energy Carolinas", "Duke Energy Progress", "Dominion Energy North Carolina"],
  incentives: [
    {
      name: "North Carolina Property Tax Exclusion",
      text: "Residential solar PV systems are 100 percent excluded from property-tax reassessment under NC General Statute 105-275. Non-residential systems are 80 percent excluded. Automatic.",
    },
    {
      name: "Duke Energy EnergyWise Home Battery Pilot",
      text: "Duke Energy residential customers in NC can enroll a home battery in the EnergyWise programme for a one-time incentive plus ongoing bill credits in exchange for allowing utility-controlled discharge during peak events. Programme is capacity-limited.",
    },
    {
      name: "Pilot programmes for low-income solar",
      text: "The NC Clean Energy Technology Center and Duke Energy run periodic low-income solar deployment pilots that cover a portion of installation cost for qualifying households. Scope and funding varies year to year.",
    },
  ],
  permits:
    "Permit timelines in North Carolina vary widely by county. Mecklenburg and Wake counties are typically 2 to 4 weeks for residential; some rural counties take longer and require specific inspector trips. SolarAPP+ adoption is minimal in NC. Interconnection with Duke Energy's new solar tariff adds steps compared to the pre-2023 process; expect 4 to 8 weeks post-install for permission to operate.",
  installerLandscape:
    "Running a solar company in North Carolina means operating in a market that was reshaped by the 2023 net-metering transition. The installers who have grown fastest are the ones who built sales materials explaining Duke's new rate structure to customers and who moved early to solar-plus-battery proposals (because the demand charge gives storage a stronger value than it had under retail net metering). Charlotte, Raleigh and the Triangle are the main metros; Google Ads cost per lead is moderate ($90 to $160 range) and the market is less saturated than the Sun Belt leaders.",
  faq: [
    {
      q: "Does North Carolina have net metering?",
      a: "Not in the retail-rate sense since 2023. Duke Energy residential solar customers are placed on a Solar Choice tariff or Bridge Rate that includes a demand charge, time-of-use energy pricing and a lower export credit than historical retail net metering. The specific credit varies by export time period.",
    },
    {
      q: "How much does solar cost in North Carolina?",
      a: "Residential solar in NC averages around $2.60 per watt installed, meaning a typical 7 kW system costs about $18,000 gross. After the 30 percent federal tax credit, net cost is around $12,600. Costs are competitive with other Southern states; higher than Arizona and Texas, lower than New England.",
    },
    {
      q: "Is solar still worth it in North Carolina?",
      a: "Yes, with a system sized and configured for the new Duke tariff structure. Payback for residential solar in NC is now typically 10 to 13 years with the federal tax credit, longer than the 7 to 9 years common under the old retail net-metering regime. Pairing solar with a battery to manage the demand charge shortens payback meaningfully in Duke territory.",
    },
    {
      q: "Does North Carolina have a state solar tax credit?",
      a: "No. North Carolina had a state solar tax credit until 2015, when it was allowed to expire. The main state-level benefit now is the property-tax exclusion. The 30 percent federal Residential Clean Energy Credit still applies in full.",
    },
    {
      q: "How many solar companies are in North Carolina?",
      a: "Roughly 300 to 400 licensed solar contractors operate in North Carolina, concentrated in Charlotte, Raleigh-Durham, Greensboro and the coastal metros. The market is less consolidated than California: the top 10 companies install around 40 to 50 percent of residential volume.",
    },
  ],
};
