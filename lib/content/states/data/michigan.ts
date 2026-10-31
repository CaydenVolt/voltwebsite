import type { State } from "../types";

export const MICHIGAN: State = {
  slug: "michigan",
  name: "Michigan",
  abbr: "MI",
  title: "Solar in Michigan: market, incentives and distributed generation reality",
  metaTitle: "Solar Companies in Michigan: Market, Net Metering, Incentives",
  metaDescription:
    "Honest guide to Michigan solar: market size, the Distributed Generation tariff that replaced net metering, major utilities, and running a solar company in MI.",
  answer:
    "Michigan is the twelfth-largest US solar market with over 4,500 MW installed. The state replaced retail net metering with the Distributed Generation (DG) tariff in 2018: solar exports are credited at the utility's power-supply rate rather than retail, which has made system sizing precision important and shifted the economics compared to retail-NEM states.",
  published: "2026-10-31",
  market: {
    installedCapacityMw: 4500,
    homesPoweredK: 550,
    percentOfElectricity: 4,
    jobs: 4800,
    averageCostPerWatt: 2.8,
    nationalRank: 12,
  },
  marketNotes:
    "Michigan's solar market is dominated by utility-scale and community solar; residential growth has been slower than peer states partly because the Distributed Generation tariff makes retail-rate export math worse than in full-NEM states. Growth has still been positive, concentrated in the Detroit, Grand Rapids and Ann Arbor metros.",
  netMetering: {
    status: "Partial net metering",
    explanation:
      "Michigan's Distributed Generation (DG) tariff, in effect since 2018, replaced retail net metering. Residential solar exports are credited at the utility's power-supply rate (typically $0.03 to $0.05 per kWh), which is lower than the retail rate for consumption. Grandfathered customers on the pre-2018 net-metering programme kept their original rates.",
  },
  averageRate: 0.17,
  rateNote:
    "Michigan residential rates average around $0.17 per kWh. DTE Energy and Consumers Energy both use tiered rates that increase with usage. Time-of-use rates are optional. Michigan rates have risen roughly 25 percent since 2020.",
  utilities: ["DTE Energy", "Consumers Energy", "Various municipal utilities and co-ops"],
  incentives: [
    {
      name: "Property-tax exemption",
      text: "Michigan exempts the added value of a residential solar system from property-tax assessment under MCL 211.9. Automatic; no application required.",
    },
    {
      name: "No state income tax credit",
      text: "Michigan does not currently have a state income-tax credit for residential solar. The main tax-based incentive is the 30 percent federal Residential Clean Energy Credit.",
    },
    {
      name: "DTE Energy MIGreenPower",
      text: "DTE Energy's green-power programme lets residential customers subscribe to renewable energy for a monthly premium, not a solar installation but often cited as an alternative for customers whose homes do not suit rooftop solar.",
    },
    {
      name: "Low-income solar programmes",
      text: "Michigan Saves and several utility partnerships offer financing and installation support for low-income households, with eligibility set annually. Scope varies year to year.",
    },
  ],
  permits:
    "Permit timelines in Michigan vary by municipality. Detroit and Oakland County typically 3 to 5 weeks for residential; smaller jurisdictions can be faster or slower depending on inspector availability. SolarAPP+ adoption is limited. Interconnection with DTE Energy and Consumers Energy typically runs 4 to 8 weeks post-install, longer than most states.",
  installerLandscape:
    "Running a solar company in Michigan means operating in a market where the Distributed Generation tariff makes system sizing precision important: a system sized too large exports excess at the low power-supply rate rather than retail, which hurts payback. Installers who have grown in Michigan tend to size systems closer to self-consumption rather than targeting 100-plus percent offset, and to pair solar with battery storage more often than peer states. Lead costs on Google Search are moderate ($110 to $170 range for residential).",
  faq: [
    {
      q: "Does Michigan have net metering?",
      a: "Not in the retail-rate sense since 2018. Michigan's Distributed Generation (DG) tariff credits solar exports at the utility's power-supply rate (typically $0.03 to $0.05 per kWh) rather than the retail rate. This makes self-consumption more valuable than export and shifts the system-sizing calculus compared to full-NEM states.",
    },
    {
      q: "How much does solar cost in Michigan?",
      a: "Residential solar in Michigan averages around $2.80 per watt installed, meaning a typical 7 kW system costs about $19,500 gross. After the 30 percent federal tax credit, net cost is around $13,700. Costs are competitive with other Midwest states; higher than Sun Belt leaders due to winter installation challenges and permit variability.",
    },
    {
      q: "Is solar worth it in Michigan?",
      a: "Yes for most Michigan homes with suitable roofs, but with longer payback than full-NEM states: 10 to 14 years for most residential installations with the federal tax credit. Pairing solar with battery storage, sized to maximise self-consumption, shortens payback meaningfully under the DG tariff.",
    },
    {
      q: "Does Michigan have a state solar tax credit?",
      a: "No. Michigan does not currently have a state income-tax credit for residential solar. The main state-level benefit is the property-tax exemption. The 30 percent federal Residential Clean Energy Credit still applies.",
    },
  ],
};
