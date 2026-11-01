import type { City } from "../types";

export const KNOXVILLE: City = {
  slug: "knoxville",
  stateSlug: "tennessee",
  name: "Knoxville",
  title: "Solar in Knoxville: KUB, TVA Green Flex and East Tennessee permits",
  metaTitle: "Solar Companies in Knoxville: KUB, TVA Green Flex, Permits",
  metaDescription:
    "Honest guide to solar in Knoxville: Knoxville Utilities Board (KUB) TVA distributor, Green Flex programme, City of Knoxville permits, and running a solar company in Knox County.",
  answer:
    "Knoxville is served by Knoxville Utilities Board (KUB), a TVA distributor. Residential solar operates under TVA Green Flex with exports credited at approximately $0.03 to $0.05 per kWh for 20 years. Permits run through the City of Knoxville Plans Review and Inspections.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.6,
    sunnyDays: 204,
    note: "Knoxville gets around 4.6 peak sun hours per day with 204 sunny days per year, moderate for solar. East Tennessee's Smoky Mountains cloud cover and dense tree canopy limit suitable rooftops and reduce yield more than Nashville or Memphis. Honest shade audits matter.",
  },
  market: {
    metroPopulationK: 920,
    averageCostPerWatt: 2.8,
    leadCostUsd: { low: 85, high: 160 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Knoxville Utilities Board (KUB), municipal TVA distributor, serves most of Knox County including Knoxville",
    "Various electric cooperatives (Powell Valley Electric Cooperative, Appalachian Electric Cooperative) serve surrounding counties",
  ],
  permits: {
    office: "City of Knoxville Plans Review and Inspections",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Knoxville Plans Review and Inspections typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Knox County jurisdictions run 2 to 4 weeks typically. KUB interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Knoxville means working under TVA Green Flex via KUB. The best Knoxville operators do honest shade audits (East Tennessee tree canopy and mountain cloud shadows affect many sites), understand KUB interconnection paperwork, and size systems to self-consumption. Lead costs run $85 to $160 on Google search.",
  faq: [
    {
      q: "Does KUB have net metering?",
      a: "Not retail-rate 1-for-1. KUB follows the TVA Green Flex programme that replaced Green Power Providers in 2019. Residential solar generation credits at approximately $0.03 to $0.05 per kWh for 20 years, below the retail rate of about $0.11.",
    },
    {
      q: "How long does a solar permit take in Knoxville?",
      a: "City of Knoxville Plans Review and Inspections typically runs residential solar permits in 3 to 5 weeks. Surrounding Knox County jurisdictions run 2 to 4 weeks typically. KUB interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Knoxville?",
      a: "Knoxville runs about $2.80 per watt installed for residential, meaning a 7 kW system typically costs around $19,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,700. Tennessee has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Knoxville?",
      a: "For Knoxville homes with unshaded roofs and high electricity use sized to self-consumption, yes but with longer payback than retail-NEM states: typically 11 to 15 years with the federal tax credit. Heavily shaded East Tennessee rooftops often fail to pencil out; honest shade audits matter.",
    },
  ],
};
