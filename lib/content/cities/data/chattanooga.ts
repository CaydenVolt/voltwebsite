import type { City } from "../types";

export const CHATTANOOGA: City = {
  slug: "chattanooga",
  stateSlug: "tennessee",
  name: "Chattanooga",
  title: "Solar in Chattanooga: EPB, TVA Green Flex and Hamilton County permits",
  metaTitle: "Solar Companies in Chattanooga: EPB, TVA Green Flex, Permits",
  metaDescription:
    "Honest guide to solar in Chattanooga: Electric Power Board of Chattanooga (EPB) TVA distributor, Green Flex programme, City of Chattanooga permits, and running a solar company in Hamilton County.",
  answer:
    "Chattanooga is served by Electric Power Board of Chattanooga (EPB), a TVA distributor and one of the most progressive municipal utilities in the US (EPB operates one of the fastest residential fiber networks in the country). Residential solar operates under TVA Green Flex with exports at approximately $0.03 to $0.05 per kWh for 20 years. Permits run through the City of Chattanooga Land Development Office.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.6,
    sunnyDays: 201,
    note: "Chattanooga gets around 4.6 peak sun hours per day with 201 sunny days per year, moderate for solar. Tennessee River valley cloud cover and ridge shadowing from the surrounding mountains limit yield more than most installers model. Honest site audits matter.",
  },
  market: {
    metroPopulationK: 580,
    averageCostPerWatt: 2.8,
    leadCostUsd: { low: 85, high: 160 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Electric Power Board of Chattanooga (EPB), municipal TVA distributor, serves most of Hamilton County including Chattanooga",
    "Various electric cooperatives (Volunteer Electric Cooperative, Sequatchie Valley Electric Cooperative) serve surrounding counties",
  ],
  permits: {
    office: "City of Chattanooga Land Development Office",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Chattanooga Land Development Office typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Hamilton County jurisdictions and nearby cities in Georgia (Fort Oglethorpe, Dalton) run their own permits. EPB interconnection post-install typically runs 4 to 6 weeks (EPB's grid is relatively well-run).",
  },
  installerLandscape:
    "Running a solar company in Chattanooga means working under TVA Green Flex via EPB, which is one of the better-run TVA distributors. The best Chattanooga operators do honest ridge-shadow audits (surrounding mountains cast shadows that affect many sites), understand EPB interconnection paperwork, and size systems to self-consumption. Lead costs run $85 to $160 on Google search.",
  faq: [
    {
      q: "Does EPB have net metering?",
      a: "Not retail-rate 1-for-1. EPB follows the TVA Green Flex programme that replaced Green Power Providers in 2019. Residential solar generation credits at approximately $0.03 to $0.05 per kWh for 20 years, below the retail rate of about $0.11.",
    },
    {
      q: "How long does a solar permit take in Chattanooga?",
      a: "City of Chattanooga Land Development Office typically runs residential solar permits in 3 to 5 weeks. Surrounding Hamilton County jurisdictions run 2 to 4 weeks typically. EPB interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Chattanooga?",
      a: "Chattanooga runs about $2.80 per watt installed for residential, meaning a 7 kW system typically costs around $19,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,700. Tennessee has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Chattanooga?",
      a: "For Chattanooga homes with unshaded roofs and high electricity use sized to self-consumption, yes but with longer payback than retail-NEM states: typically 11 to 15 years with the federal tax credit. Ridge shadowing and valley cloud cover stretch yield modelling; honest site audits matter.",
    },
  ],
};
