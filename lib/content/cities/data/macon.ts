import type { City } from "../types";

export const MACON: City = {
  slug: "macon",
  stateSlug: "georgia",
  name: "Macon",
  title: "Solar in Macon: Georgia Power and Bibb County permits",
  metaTitle: "Solar Companies in Macon GA: Georgia Power, Permits",
  metaDescription:
    "Honest guide to solar in Macon Georgia: Georgia Power non-retail net metering, Macon-Bibb County permits, and running a solar company in central Georgia.",
  answer:
    "Macon is served by Georgia Power under the utility's non-retail export compensation. The economics work only with careful sizing to self-consumption plus the federal tax credit. Central Georgia's climate is favourable for solar. Permits run through Macon-Bibb County Business Development Services.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.9,
    sunnyDays: 219,
    note: "Macon gets around 4.9 peak sun hours per day with 219 sunny days per year, strong for solar. Summer heat is a factor; panel temperature coefficients matter. Pine pollen in spring reduces panel output temporarily.",
  },
  market: {
    metroPopulationK: 230,
    averageCostPerWatt: 2.85,
    leadCostUsd: { low: 80, high: 150 },
    installerDensity: "Low",
  },
  utilities: [
    "Georgia Power (Southern Company subsidiary), investor-owned, serves most of Bibb County including Macon",
    "Various electric cooperatives (Flint Energies, Central Georgia EMC) serve surrounding counties",
  ],
  permits: {
    office: "Macon-Bibb County Business Development Services",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "Macon-Bibb County Business Development Services typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Georgia Power interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Macon means working in a smaller central Georgia market with low installer competition. The best Macon operators size systems to self-consumption under Georgia Power's non-retail NEM, run honest load-match analyses, and often cover Warner Robins and the surrounding Houston County area for regional efficiency. Lead costs run $80 to $150 on Google search, among the lowest in Georgia because installer density is thin.",
  faq: [
    {
      q: "Does Georgia Power have net metering in Macon?",
      a: "Not retail-rate. Georgia Power credits residential solar exports at the utility's avoided cost rate (approximately $0.03 per kWh), substantially below the retail rate of about $0.12. The economics work when systems are sized to self-consumption.",
    },
    {
      q: "How long does a solar permit take in Macon?",
      a: "Macon-Bibb County Business Development Services typically runs residential solar permits in 3 to 5 weeks. Georgia Power interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Macon?",
      a: "Macon runs about $2.85 per watt installed for residential, meaning a 7 kW system typically costs around $20,000 gross. After the 30 percent federal tax credit, net cost is approximately $14,000. Georgia has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Macon?",
      a: "For Macon homes with high electricity use and south-facing roofs sized to self-consumption, yes but with longer payback than retail-NEM Southeast peers: typically 11 to 14 years with the federal tax credit. Right-sized systems match annual load better than oversized ones.",
    },
  ],
};
