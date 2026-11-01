import type { City } from "../types";

export const AUGUSTA: City = {
  slug: "augusta",
  stateSlug: "georgia",
  name: "Augusta",
  title: "Solar in Augusta: Georgia Power and Richmond County permits",
  metaTitle: "Solar Companies in Augusta GA: Georgia Power, Permits",
  metaDescription:
    "Honest guide to solar in Augusta Georgia: Georgia Power's monthly net billing, Richmond County permits, Central Savannah River Area market, and running a solar company in Augusta.",
  answer:
    "Augusta shares Atlanta's Georgia Power challenges: non-retail export compensation (avoided cost around $0.03 per kWh, versus retail at about $0.12), so system sizing to self-consumption drives the economics. The economics work only with careful sizing and attention to time-of-use rate selection. Permits run through Augusta-Richmond County Planning and Development.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.9,
    sunnyDays: 219,
    note: "Augusta gets around 4.9 peak sun hours per day with 219 sunny days per year, moderate-to-strong for solar. Climate is favourable overall; summer thunderstorms reduce afternoon production but overall conditions are good for solar. Pine pollen in spring reduces panel output temporarily; occasional cleaning may be worth modelling.",
  },
  market: {
    metroPopulationK: 620,
    averageCostPerWatt: 2.85,
    leadCostUsd: { low: 90, high: 170 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Georgia Power (Southern Company subsidiary), investor-owned, serves most of Richmond County including Augusta",
    "Jefferson Energy Cooperative serves parts of outlying rural areas",
  ],
  permits: {
    office: "Augusta-Richmond County Planning and Development",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "Augusta-Richmond County Planning and Development typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Columbia County (west of Augusta) runs its own permits with similar timelines. Georgia Power interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Augusta means working under the same Georgia Power non-retail export compensation that applies in Atlanta. System sizing to self-consumption rather than oversizing for export is essential. The best Augusta operators run honest load-match analyses before quoting and pair installations with electric heat pumps or EV charging to increase daytime load. Lead costs run $90 to $170 on Google search, among the lowest in Georgia because national installer competition is thin.",
  faq: [
    {
      q: "Does Georgia Power have net metering in Augusta?",
      a: "Not retail-rate. Georgia Power credits residential solar exports at the utility's avoided cost rate (currently around $0.03 to $0.04 per kWh), substantially below the retail rate of about $0.12. The economics work when systems are sized to self-consumption rather than oversized for export. Pre-2019 customers on the earlier Monthly Net Metering tariff are grandfathered.",
    },
    {
      q: "How long does a solar permit take in Augusta?",
      a: "Augusta-Richmond County Planning and Development typically runs residential solar permits in 3 to 5 weeks. Columbia County runs similar timelines. Georgia Power interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Augusta?",
      a: "Augusta runs about $2.85 per watt installed for residential, meaning a 7 kW system typically costs around $20,000 gross. After the 30 percent federal tax credit, net cost is approximately $14,000. Georgia has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Augusta?",
      a: "Yes for Augusta homes with unshaded roofs sized to self-consumption. Payback typically runs 11 to 14 years with the federal tax credit; longer than Southeast peers with retail NEM because of Georgia Power's avoided-cost export compensation. Heavy tree shade and oversized systems make the economics much worse. Honest shade audits and self-consumption sizing are the practical differentiators.",
    },
  ],
};
