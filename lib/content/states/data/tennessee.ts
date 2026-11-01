import type { State } from "../types";

export const TENNESSEE: State = {
  slug: "tennessee",
  name: "Tennessee",
  abbr: "TN",
  title: "Solar in Tennessee: market, TVA Green Flex and net billing reality",
  metaTitle: "Solar Companies in Tennessee: TVA, Green Flex, Permits",
  metaDescription:
    "Honest guide to Tennessee solar: market size, TVA Green Flex programme (replaced Green Power Providers), distributor utility net billing, and running a solar company in TN.",
  answer:
    "Tennessee is the forty-sixth-largest US solar market with over 820 MW installed, dominated by utility-scale. Residential has been reshaped by the end of TVA's Green Power Providers programme in 2019 and the shift to Green Flex, which pays residential solar generation at a reduced per-kWh rate. The economics work only with careful sizing to self-consumption plus the federal tax credit.",
  published: "2026-11-01",
  market: {
    installedCapacityMw: 820,
    homesPoweredK: 115,
    percentOfElectricity: 2,
    jobs: 2200,
    averageCostPerWatt: 2.75,
    nationalRank: 46,
  },
  marketNotes:
    "Tennessee's residential solar market has grown more slowly since 2019 when TVA's Green Power Providers programme (which paid retail-plus for residential solar) closed to new enrollments. Current Green Flex programme compensation is substantially lower. Nashville, Memphis, Knoxville and Chattanooga metros dominate residential. TVA distributor utilities each handle local interconnection.",
  netMetering: {
    status: "Net billing / avoided cost",
    explanation:
      "Tennessee is served by TVA through local distributor utilities. TVA's Green Flex programme (which replaced Green Power Providers in 2019) credits residential solar generation at a rate below retail. The specific credit structure varies by local distributor utility (Nashville Electric Service, Memphis Light Gas & Water, Knoxville Utilities Board, Chattanooga EPB, others). Pre-2019 Green Power Providers customers are grandfathered on the earlier higher-rate structure.",
  },
  averageRate: 0.11,
  rateNote:
    "Tennessee residential rates average around $0.11 per kWh across TVA distributor utilities, among the lower in the US due to abundant TVA-generated power.",
  utilities: ["Tennessee Valley Authority (TVA) wholesale, served through 153 local power distributor utilities including:", "Nashville Electric Service (NES), serves Nashville", "Memphis Light Gas & Water (MLGW), serves Memphis", "Knoxville Utilities Board (KUB), serves Knoxville", "Electric Power Board of Chattanooga (EPB), serves Chattanooga", "Various rural electric cooperatives serve outlying areas"],
  incentives: [
    {
      name: "TVA Green Flex programme",
      text: "TVA Green Flex pays residential solar installations a per-kWh credit for 20 years at a rate currently approximately $0.03 to $0.05 per kWh (varies by local distributor). The credit is below retail and substantially lower than the pre-2019 Green Power Providers rate. Confirm current rate with the specific local distributor utility before quoting.",
    },
    {
      name: "No state solar tax credit (no state income tax)",
      text: "Tennessee has no state income tax, so a state income tax credit is not applicable. The 30 percent federal Residential Clean Energy Credit remains the only tax-based incentive.",
    },
    {
      name: "No statewide property-tax exemption",
      text: "Tennessee does not have a statewide property-tax exemption for residential solar. The added value may be included in assessment at the county level.",
    },
    {
      name: "No state sales-tax exemption",
      text: "Tennessee does not currently offer a sales-tax exemption for residential solar equipment. The standard 7 percent state sales tax plus local additions applies (around 9.25 percent total in most Tennessee cities).",
    },
  ],
  permits:
    "Permit timelines in Tennessee vary by jurisdiction. Nashville, Memphis, Knoxville and Chattanooga commonly take 2 to 5 weeks for residential. SolarAPP+ is in pilot in Nashville but not broadly deployed. Local distributor utility interconnection post-install typically runs 4 to 8 weeks.",
  installerLandscape:
    "Running a solar company in Tennessee means working under TVA's Green Flex programme, where exports earn only partial retail. The best Tennessee operators size systems to self-consumption, understand the 153 TVA local distributor utilities' interconnection variations, and sell on long-term rate protection rather than fast payback. Lead costs run $85 to $160 on Google search.",
  faq: [
    {
      q: "Does Tennessee have net metering?",
      a: "Not retail-rate. TVA's Green Flex programme (which replaced Green Power Providers in 2019) credits residential solar generation at approximately $0.03 to $0.05 per kWh for 20 years, below the retail rate of about $0.11. Pre-2019 Green Power Providers customers are grandfathered on the earlier higher-rate structure.",
    },
    {
      q: "What is TVA Green Flex?",
      a: "TVA Green Flex is the current TVA programme for residential solar installations, replacing Green Power Providers in 2019. Green Flex pays a per-kWh credit for 20 years at approximately $0.03 to $0.05 per kWh depending on local distributor utility. The credit is substantially lower than pre-2019 Green Power Providers payments.",
    },
    {
      q: "How much does solar cost in Tennessee?",
      a: "Residential solar in Tennessee averages around $2.75 per watt installed, meaning a typical 7 kW system costs about $19,300 gross. After the 30 percent federal tax credit, net cost is approximately $13,500. Tennessee has no state solar tax credit (no state income tax).",
    },
    {
      q: "Is solar worth it in Tennessee?",
      a: "For Tennessee homes with high electricity use and south-facing roofs sized to self-consumption, yes but with longer payback than retail-NEM states: typically 11 to 15 years with the federal tax credit. The Green Flex compensation is substantially less favourable than pre-2019 Green Power Providers.",
    },
  ],
};
