import type { City } from "../types";

export const ROCKFORD: City = {
  slug: "rockford",
  stateSlug: "illinois",
  name: "Rockford",
  title: "Solar in Rockford: ComEd, Illinois Shines and winter reality",
  metaTitle: "Solar Companies in Rockford: ComEd, Illinois Shines, Permits",
  metaDescription:
    "Honest guide to solar in Rockford Illinois: ComEd retail net metering, Illinois Shines upfront REC payment, City of Rockford permits, winter weather, and running a solar company in Winnebago County.",
  answer:
    "Rockford is served by ComEd (same as Chicago) under retail-rate net metering plus Illinois Shines upfront REC-equivalent payments. The 15-year Illinois Shines stream does serious economic work. Winter weather is harsh. Permits run through the City of Rockford Building and Zoning Division.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.1,
    sunnyDays: 189,
    note: "Rockford gets around 4.1 peak sun hours per day with 189 sunny days per year, moderate for solar. Winter snow derating is substantial (15 to 25 percent annual loss) with longer snow cover than Chicago. Summer thunderstorms reduce afternoon production. Spring tornado risk requires proper structural attachment.",
  },
  market: {
    metroPopulationK: 340,
    averageCostPerWatt: 2.95,
    leadCostUsd: { low: 100, high: 180 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Commonwealth Edison (ComEd, Exelon subsidiary), investor-owned, serves most of Winnebago County including Rockford",
    "Various electric cooperatives serve outlying rural areas",
  ],
  permits: {
    office: "City of Rockford Building and Zoning Division",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Rockford Building and Zoning Division typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Winnebago and Boone counties run 2 to 4 week typical timelines. ComEd interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Rockford means working under ComEd's retail NEM plus Illinois Shines, in a market where winter weather is harsher than Chicago. The best Rockford operators have templated Illinois Shines registration workflows, model winter snow derating honestly, and handle ComEd interconnection fluently. Lead costs run $100 to $180 on Google search.",
  faq: [
    {
      q: "Does ComEd have net metering in Rockford?",
      a: "Yes, retail-rate net metering for residential solar systems up to 40 kW AC under Illinois Commerce Commission rules. Credits accrue monthly at retail; annual true-up at avoided cost or rolled forward.",
    },
    {
      q: "What is Illinois Shines for Rockford?",
      a: "Illinois Shines pays residential solar installations an upfront equivalent of 15 years of REC payments at approximately $0.08 to $0.11 per kWh projected generation. Payments typically go to the installer, who passes the value through as a lower install cost.",
    },
    {
      q: "How long does a solar permit take in Rockford?",
      a: "City of Rockford Building and Zoning Division typically runs residential solar permits in 3 to 5 weeks. ComEd interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Rockford?",
      a: "Rockford runs about $2.95 per watt installed for residential, meaning a 7 kW system typically costs around $20,700 gross. After the 30 percent federal tax credit and the Illinois Shines upfront REC pass-through, effective net cost is often $7,000 to $10,000.",
    },
    {
      q: "Is solar worth it in Rockford?",
      a: "Yes for Rockford homes with suitable roofs. The combination of ComEd retail NEM, 15-year Illinois Shines payment, and the federal tax credit makes residential solar payback typically 7 to 10 years, similar to Chicago but with slightly longer payback because of harsher winter weather.",
    },
  ],
};
