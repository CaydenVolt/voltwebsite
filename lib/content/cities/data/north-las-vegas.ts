import type { City } from "../types";

export const NORTH_LAS_VEGAS: City = {
  slug: "north-las-vegas",
  stateSlug: "nevada",
  name: "North Las Vegas",
  title: "Solar in North Las Vegas: NV Energy and Clark County permits",
  metaTitle: "Solar Companies in North Las Vegas: NV Energy, Permits",
  metaDescription:
    "Honest guide to solar in North Las Vegas: NV Energy tiered export credit, City of North Las Vegas permits, Mojave Desert climate, and running a solar company in Clark County.",
  answer:
    "North Las Vegas is served by NV Energy under the same Nevada SB 358 tiered net metering as Las Vegas: current new installations at Tier 5 or beyond with exports credited at approximately 75 percent of retail. Permits run through the City of North Las Vegas Development Services with faster turnaround than Clark County unincorporated or Las Vegas city.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 6.4,
    sunnyDays: 294,
    note: "North Las Vegas has essentially the same climate as Las Vegas: 6.4 peak sun hours per day, 294 sunny days per year, extreme summer heat. Panel temperature coefficients and racking airflow matter. Mojave dust accumulation reduces output 5 to 15 percent between infrequent rain events.",
  },
  market: {
    metroPopulationK: 285,
    averageCostPerWatt: 2.65,
    leadCostUsd: { low: 135, high: 230 },
    installerDensity: "High",
  },
  utilities: ["NV Energy, investor-owned, serves all of North Las Vegas"],
  permits: {
    office: "City of North Las Vegas Development Services",
    turnaroundWeeks: "1 to 3 weeks for standard residential",
    solarApp: "Accepted",
    note: "City of North Las Vegas Development Services accepts SolarAPP+ for standard residential installations, approving most qualifying systems within 1 to 2 days. Non-SolarAPP+ permits run 1 to 3 weeks. NV Energy interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in North Las Vegas means working in the fast-growing north valley with Clark County SolarAPP+ coverage. The best North Las Vegas operators have fluent SolarAPP+ workflows and handle Mojave heat and dust equipment specifications. Lead costs run $135 to $230 on Google search, similar to Las Vegas proper.",
  faq: [
    {
      q: "Does NV Energy serve North Las Vegas?",
      a: "Yes. NV Energy serves all of North Las Vegas under the same Nevada SB 358 tiered net metering as Las Vegas and Henderson. Current new installations are at Tier 5 or beyond with exports credited at approximately 75 percent of retail.",
    },
    {
      q: "Are North Las Vegas permits faster than Las Vegas?",
      a: "Often yes. City of North Las Vegas Development Services accepts SolarAPP+ and typically approves standard residential installations within 1 to 3 weeks (same-day to 2 days with SolarAPP+). Clark County unincorporated and City of Las Vegas have similar SolarAPP+ options; non-SolarAPP+ paths run slower.",
    },
    {
      q: "How much does solar cost in North Las Vegas?",
      a: "North Las Vegas runs about $2.65 per watt installed for residential, meaning a 7 kW system typically costs around $18,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,000.",
    },
    {
      q: "Is solar worth it in North Las Vegas?",
      a: "Yes for most North Las Vegas homes. The combination of excellent sun hours (over 6.4 per day), moderate retail rates and the federal tax credit makes residential solar payback typically 9 to 12 years, same as Las Vegas and Henderson.",
    },
  ],
};
