import type { City } from "../types";

export const CHEYENNE: City = {
  slug: "cheyenne",
  stateSlug: "wyoming",
  name: "Cheyenne",
  title: "Solar in Cheyenne: Black Hills Energy and high plains climate",
  metaTitle: "Solar Companies in Cheyenne: Black Hills Energy, Permits",
  metaDescription:
    "Honest guide to solar in Cheyenne Wyoming: Black Hills Energy net metering, Cheyenne City permits, high plains winter climate, and running a solar company in Laramie County.",
  answer:
    "Cheyenne is served by Black Hills Energy under retail-rate net metering. High plains altitude (around 6,000 feet) provides modest production boost; harsh winter weather and strong winds affect design. The federal tax credit is the dominant incentive. Permits run through Cheyenne City Building Services.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 5.2,
    sunnyDays: 236,
    note: "Cheyenne gets around 5.2 peak sun hours per day with 236 sunny days per year, strong for solar. High plains altitude (around 6,000 feet) provides modest production boost. Winter snow derating is modest (10 to 15 percent annual loss). Strong winds are a dominant structural factor; proper attachment and wind-rated racking matter.",
  },
  market: {
    metroPopulationK: 100,
    averageCostPerWatt: 2.85,
    leadCostUsd: { low: 75, high: 140 },
    installerDensity: "Low",
  },
  utilities: [
    "Black Hills Energy, investor-owned, serves all of Cheyenne",
    "High West Energy (electric cooperative) serves parts of surrounding Laramie County",
  ],
  permits: {
    office: "Cheyenne City Building Services",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "Cheyenne City Building Services typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted. Laramie County unincorporated areas run through the county with 2 to 4 week typical timelines. Black Hills Energy interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Cheyenne means working in a small market with low installer competition. The best Cheyenne operators handle Black Hills Energy interconnection fluently, spec wind-rated racking (sustained winds exceeding 30 mph are common in Cheyenne), and model winter snow derating honestly. Lead costs run $75 to $140 on Google search, among the lowest in the US because installer density is thin.",
  faq: [
    {
      q: "Does Black Hills Energy have net metering in Cheyenne?",
      a: "Yes, retail-rate net metering for residential solar systems up to 25 kW AC under Wyoming Public Service Commission rules. Credits accrue monthly at retail; annual true-up at year-end with excess paid at avoided cost.",
    },
    {
      q: "How long does a solar permit take in Cheyenne?",
      a: "Cheyenne City Building Services typically runs residential solar permits in 2 to 4 weeks. Laramie County unincorporated runs 2 to 4 weeks typically. Black Hills Energy interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Cheyenne?",
      a: "Cheyenne runs about $2.85 per watt installed for residential, meaning a 7 kW system typically costs around $20,000 gross. After the 30 percent federal tax credit, net cost is approximately $14,000. Wyoming has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Cheyenne?",
      a: "For Cheyenne homes with high electricity use and south-facing roofs, yes but with longer payback than retail-NEM states with higher electric rates: typically 11 to 14 years with the federal tax credit. The combination of strong sun hours and altitude boost helps; low Black Hills Energy retail rates stretch payback.",
    },
  ],
};
