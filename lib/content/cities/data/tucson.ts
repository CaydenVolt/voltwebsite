import type { City } from "../types";

export const TUCSON: City = {
  slug: "tucson",
  stateSlug: "arizona",
  name: "Tucson",
  title: "Solar in Tucson: TEP export credit and Sonoran Desert climate",
  metaTitle: "Solar Companies in Tucson: TEP, Export Credits, Permits",
  metaDescription:
    "Honest guide to solar in Tucson: Tucson Electric Power's export credit rate, City of Tucson and Pima County permits, Sonoran Desert heat and dust considerations, and running a solar company in Tucson.",
  answer:
    "Tucson is served primarily by Tucson Electric Power (TEP), which credits residential solar exports at an export credit rate below retail (currently around $0.078 per kWh). The Sonoran Desert climate gives Tucson strong peak sun hours (over 6.3 per day on average) but extreme summer heat and dust affect long-term panel output. City of Tucson permits run 2 to 4 weeks typically.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 6.3,
    sunnyDays: 286,
    note: "Tucson gets around 6.3 peak sun hours per day with 286 sunny days per year, among the strongest in the US. Summer heat is extreme (June through September rooftop temperatures regularly exceed 170F); panel temperature coefficients and racking that promotes airflow matter critically. Dust accumulation in the dry season reduces output 5 to 15 percent between rain events; monsoon-season rain (July to September) cleans panels naturally.",
  },
  market: {
    metroPopulationK: 1050,
    averageCostPerWatt: 2.65,
    leadCostUsd: { low: 130, high: 230 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Tucson Electric Power (TEP), investor-owned, serves most of the Tucson metro",
    "Trico Electric Cooperative serves Marana and parts of northwest Tucson",
    "Sulphur Springs Valley Electric Cooperative serves parts of eastern Pima County",
  ],
  permits: {
    office: "City of Tucson Planning & Development Services (PDSD), plus Pima County Development Services",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "In pilot",
    note: "City of Tucson PDSD typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is in pilot for select contractors as of 2026. Pima County unincorporated areas run through Pima County Development Services with similar timelines. Marana, Oro Valley, Sahuarita each have their own permit offices with 2 to 4 week typical timelines. TEP interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Tucson means working in a market with excellent sun hours but tight export credit economics under TEP. The sales conversation hinges on self-consumption rather than exporting; systems sized closer to annual consumption pencil out better than oversized systems that export heavily during midday. The best Tucson operators spec equipment that handles the extreme heat and dust (panels with -0.26 percent per C or better coefficients, racking that promotes airflow, O&M contracts that include monsoon-season cleaning). Lead costs run $130 to $230, lower than Phoenix because installer density is lower.",
  faq: [
    {
      q: "Does TEP have net metering?",
      a: "Not retail-rate. Tucson Electric Power credits residential solar exports at the Resource Comparison Proxy (RCP) rate, calculated annually by the Arizona Corporation Commission. The current RCP for TEP sits around $0.078 per kWh (confirm current rate before quoting), substantially below the retail rate of about $0.13 per kWh. Pre-2017 customers are grandfathered on retail NEM for 20 years from original interconnection.",
    },
    {
      q: "How long does a solar permit take in Tucson?",
      a: "City of Tucson Planning & Development Services typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is in pilot for select contractors. Pima County unincorporated and surrounding cities (Marana, Oro Valley, Sahuarita) run 2 to 4 weeks typically. TEP interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Tucson?",
      a: "Tucson runs about $2.65 per watt installed for residential, slightly higher than Phoenix because of less-saturated installer competition, meaning a 7 kW system typically costs around $18,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,000.",
    },
    {
      q: "Is solar worth it in Tucson?",
      a: "Yes for most Tucson homes with suitable roofs. The strong sun hours offset the below-retail export credit; residential solar payback typically runs 9 to 12 years with the federal tax credit for solar-only, and 7 to 10 years for storage-attached systems that reduce peak-rate consumption. Right-sizing matters more here than in retail-NEM markets.",
    },
    {
      q: "How does dust affect solar in Tucson?",
      a: "Dust accumulation during the dry season (April to June, and November to December) reduces panel output 5 to 15 percent between significant rain events. Monsoon season (July to September) cleans panels naturally. Homeowners with critical production targets sometimes add quarterly or semi-annual cleaning contracts; most residential installations tolerate the dust impact as part of expected first-year production.",
    },
  ],
};
