import type { City } from "../types";

export const SALT_LAKE_CITY: City = {
  slug: "salt-lake-city",
  stateSlug: "utah",
  name: "Salt Lake City",
  title: "Solar in Salt Lake City: Rocky Mountain Power and the Net Billing Service Schedule",
  metaTitle: "Solar Companies in Salt Lake City: Rocky Mountain Power, Permits",
  metaDescription:
    "Honest guide to solar in Salt Lake City: Rocky Mountain Power's Net Billing Service Schedule (replaced retail NEM in 2017), City of Salt Lake Building Services permits with SolarAPP+, and running a solar company in Utah.",
  answer:
    "Salt Lake City is served by Rocky Mountain Power under Utah's Net Billing Service Schedule, which replaced retail net metering in 2017. Residential exports credit at $0.045 to $0.060 per kWh, below the retail rate of about $0.11. The shrinking Utah state solar tax credit (capped at $400 as of 2025, phasing out) is a declining incentive. Permits run through Salt Lake Building Services with SolarAPP+ accepted.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 5.3,
    sunnyDays: 222,
    note: "Salt Lake City gets around 5.3 peak sun hours per day with 222 sunny days per year, strong for solar. The valley elevation (around 4,300 feet) delivers 10 to 15 percent higher per-panel output than sea-level sites. Winter inversion and smog reduce December through February production more than most installers model. Summer heat is less extreme than Phoenix but still a factor; panel temperature coefficients matter.",
  },
  market: {
    metroPopulationK: 1270,
    averageCostPerWatt: 2.6,
    leadCostUsd: { low: 100, high: 180 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Rocky Mountain Power (PacifiCorp subsidiary), investor-owned, serves most of the Salt Lake metro",
    "Various municipal utilities (Logan Light & Power, Murray City Power, Bountiful City Light & Power) serve specific cities",
  ],
  permits: {
    office: "Salt Lake City Building Services, plus Salt Lake County and surrounding municipalities",
    turnaroundWeeks: "1 to 3 weeks for standard residential",
    solarApp: "Accepted",
    note: "Salt Lake City Building Services accepts SolarAPP+ for standard residential installations, approving most qualifying systems in a day or two. Non-SolarAPP+ permits run 1 to 3 weeks. Salt Lake County unincorporated areas and surrounding cities (Murray, Sandy, West Valley City, West Jordan) run their own permits with 2 to 4 week typical timelines. Rocky Mountain Power interconnection post-install typically runs 3 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Salt Lake City means working under the Net Billing Service Schedule where system sizing to self-consumption matters more than it did under retail NEM. The best SLC operators size systems close to annual self-consumption rather than oversizing for export (which earns only $0.045 to $0.060 per kWh), pair installations with battery storage more often than peer states to offset self-consumption gaps, and have templated SolarAPP+ workflows. The state tax credit cap step-down (currently $400, phasing out) is a declining selling point. Lead costs run $100 to $180 on Google search.",
  faq: [
    {
      q: "Does Rocky Mountain Power have net metering?",
      a: "Not retail-rate for new customers. Utah's 2017 shift from retail NEM to the Net Billing Service Schedule (schedule 136) credits residential solar exports at $0.045 to $0.060 per kWh, below the retail rate of about $0.11. Pre-2017 customers are grandfathered on retail NEM through 2035.",
    },
    {
      q: "What is the Utah state solar tax credit in 2026?",
      a: "Utah's Renewable Energy Systems Tax Credit is 25 percent of system cost capped at $400 as of 2025. The cap steps down $400 each year and phases out entirely by 2027. Confirm the current cap on the Utah Office of Energy Development website before quoting, as the number moves annually.",
    },
    {
      q: "How long does a solar permit take in Salt Lake City?",
      a: "With SolarAPP+ at Salt Lake City Building Services: often same-day or next-day for standard residential installations. Non-SolarAPP+ permits run 1 to 3 weeks. Surrounding cities (Murray, Sandy, West Valley City, West Jordan) and Salt Lake County unincorporated run 2 to 4 weeks typically. Rocky Mountain Power interconnection post-install adds 3 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Salt Lake City?",
      a: "Salt Lake City runs about $2.60 per watt installed for residential, meaning a 7 kW system typically costs around $18,200 gross. After the 30 percent federal tax credit and the (shrinking) Utah state tax credit, net cost is approximately $12,300 to $12,700.",
    },
    {
      q: "Is solar worth it in Salt Lake City?",
      a: "Yes for most SLC homes with suitable roofs, but with longer payback than full-NEM Sun Belt peers like Arizona or Nevada due to the Net Billing export credit: typically 9 to 13 years for residential installations sized to self-consumption with the federal tax credit. Pairing solar with battery storage, sized for self-consumption, shortens payback meaningfully under net billing.",
    },
  ],
};
