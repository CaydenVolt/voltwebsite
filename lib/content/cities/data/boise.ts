import type { City } from "../types";

export const BOISE: City = {
  slug: "boise",
  stateSlug: "idaho",
  name: "Boise",
  title: "Solar in Boise: Idaho Power ECR and Treasure Valley permits",
  metaTitle: "Solar Companies in Boise: Idaho Power, ECR, Permits",
  metaDescription:
    "Honest guide to solar in Boise: Idaho Power's Export Credit Rate (replaced retail NEM in 2024), City of Boise permits with SolarAPP+ pilot, Treasure Valley market, and running a solar company in Idaho.",
  answer:
    "Boise is served by Idaho Power under the Export Credit Rate (ECR) that replaced retail net metering in 2024. Residential exports credit at an hourly rate derived from avoided energy cost (approximately $0.044 to $0.057 per kWh depending on time of day). The economics now favour system sizing to annual self-consumption. Permits run through the City of Boise Planning and Development Services.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 5.1,
    sunnyDays: 206,
    note: "Boise gets around 5.1 peak sun hours per day with 206 sunny days per year, strong for solar. Treasure Valley altitude (around 2,700 feet) provides modest production boost. Winter inversion reduces December and January production. Summer heat is a factor but less extreme than Phoenix or Fresno; panel temperature coefficients still matter.",
  },
  market: {
    metroPopulationK: 820,
    averageCostPerWatt: 2.65,
    leadCostUsd: { low: 100, high: 180 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Idaho Power, investor-owned, serves most of the Treasure Valley including Boise, Meridian, Nampa",
    "Various electric cooperatives serve outlying rural areas",
  ],
  permits: {
    office: "City of Boise Planning and Development Services",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "In pilot",
    note: "City of Boise Planning and Development Services typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is in pilot for select contractors. Surrounding Treasure Valley cities (Meridian, Nampa, Caldwell, Eagle) each have their own permit offices with 2 to 4 week typical timelines. Idaho Power interconnection post-install typically runs 3 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Boise means working under Idaho Power's post-NEM ECR, which has shifted economics toward self-consumption sizing. The best Boise operators run honest annual load-match analyses before quoting, model the time-varying ECR into payback calculations, and have templated SolarAPP+ workflows for the Boise pilot. Lead costs run $100 to $180 on Google search.",
  faq: [
    {
      q: "Does Idaho Power have net metering in Boise?",
      a: "Not retail-rate for new customers since 2024. Idaho Power's Export Credit Rate (ECR) credits residential solar exports at an hourly rate derived from avoided energy cost (approximately $0.044 to $0.057 per kWh depending on time of day). Pre-2024 customers are grandfathered on retail NEM.",
    },
    {
      q: "How long does a solar permit take in Boise?",
      a: "City of Boise Planning and Development Services typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is in pilot. Surrounding Treasure Valley cities run 2 to 4 weeks typically. Idaho Power interconnection post-install adds 3 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Boise?",
      a: "Boise runs about $2.65 per watt installed for residential, meaning a 7 kW system typically costs around $18,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,000. The Idaho state tax deduction (40 percent of system cost deducted from state income tax) adds modest additional savings depending on marginal tax rate.",
    },
    {
      q: "Is solar worth it in Boise?",
      a: "For Boise homes with high electricity use and south-facing roofs sized to self-consumption, yes: payback typically runs 10 to 14 years with the federal tax credit. Low Idaho Power retail rates (around $0.11 per kWh) and the ECR for exports stretch payback compared with Sun Belt peers. Right-sized systems match annual load pencil out better than oversized ones.",
    },
  ],
};
