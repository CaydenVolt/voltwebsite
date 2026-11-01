import type { City } from "../types";

export const BATON_ROUGE: City = {
  slug: "baton-rouge",
  stateSlug: "louisiana",
  name: "Baton Rouge",
  title: "Solar in Baton Rouge: Entergy Louisiana and net billing",
  metaTitle: "Solar Companies in Baton Rouge: Entergy LA, Permits",
  metaDescription:
    "Honest guide to solar in Baton Rouge: Entergy Louisiana net billing (replaced retail NEM in 2019), City of Baton Rouge permits, hurricane engineering, and running a solar company in East Baton Rouge Parish.",
  answer:
    "Baton Rouge is served by Entergy Louisiana under Louisiana's net billing (replaced retail NEM in 2019). Residential exports credit at avoided cost (approximately $0.03 to $0.05 per kWh). Hurricane engineering is required but less stringent than Orleans Parish. Permits run through the City of Baton Rouge Permits Division.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.9,
    sunnyDays: 220,
    note: "Baton Rouge gets around 4.9 peak sun hours per day with 220 sunny days per year, strong for solar. Hurricane exposure is real; Louisiana Building Code wind-load design in East Baton Rouge Parish runs 130 to 140 mph (less stringent than Orleans Parish 155 mph). High humidity year-round requires marine-grade stainless hardware for durability.",
  },
  market: {
    metroPopulationK: 870,
    averageCostPerWatt: 2.65,
    leadCostUsd: { low: 95, high: 170 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Entergy Louisiana, investor-owned, serves most of East Baton Rouge Parish including Baton Rouge",
    "Cleco serves parts of surrounding parishes",
    "Various electric cooperatives serve outlying rural areas",
  ],
  permits: {
    office: "City of Baton Rouge Permits Division",
    turnaroundWeeks: "3 to 6 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Baton Rouge Permits Division typically runs residential solar permits in 3 to 6 weeks. SolarAPP+ is not accepted. Entergy Louisiana interconnection post-install typically runs 4 to 8 weeks. Hurricane wind-load design review adds engineering review time; less stringent than Orleans Parish but still real.",
  },
  installerLandscape:
    "Running a solar company in Baton Rouge means working under Louisiana net billing and the stripped-down post-Katrina state tax credit (now closed). The best Baton Rouge operators size systems to self-consumption, handle Entergy Louisiana interconnection fluently, and spec hurricane-rated attachment hardware (less stringent than New Orleans but still essential). Lead costs run $95 to $170 on Google search.",
  faq: [
    {
      q: "Does Entergy Louisiana have net metering in Baton Rouge?",
      a: "Not retail-rate for new customers since 2019. Louisiana's net billing structure credits residential solar exports at the utility's avoided cost rate (approximately $0.03 to $0.05 per kWh), below the retail rate of about $0.11. Pre-2019 customers are grandfathered on retail NEM for 15 years from original interconnection.",
    },
    {
      q: "How long does a solar permit take in Baton Rouge?",
      a: "City of Baton Rouge Permits Division typically runs residential solar permits in 3 to 6 weeks. SolarAPP+ is not accepted. Entergy Louisiana interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Baton Rouge?",
      a: "Baton Rouge runs about $2.65 per watt installed for residential, meaning a 7 kW system typically costs around $18,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,000. Louisiana has no state solar tax credit as of 2026 (the earlier generous state credit was phased out by 2015).",
    },
    {
      q: "Is solar worth it in Baton Rouge?",
      a: "For Baton Rouge homes with high electricity use and south-facing roofs, yes but with longer payback than retail-NEM Southeast peers: typically 11 to 15 years with the federal tax credit. Right-sized systems that match annual load pencil out better than oversized ones under Louisiana net billing.",
    },
  ],
};
