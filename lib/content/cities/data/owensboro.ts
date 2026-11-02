import type { City } from "../types";

export const OWENSBORO: City = {
  slug: "owensboro",
  stateSlug: "kentucky",
  name: "Owensboro",
  title: "Solar in Owensboro: OMU municipal and Daviess County permits",
  metaTitle: "Solar Companies in Owensboro: OMU, Permits",
  metaDescription:
    "Honest guide to solar in Owensboro Kentucky: Owensboro Municipal Utilities (OMU) NOT LG&E/KU, City of Owensboro permits, and running a solar company in western Kentucky.",
  answer:
    "Owensboro is served by Owensboro Municipal Utilities (OMU), a municipal utility NOT LG&E or Kentucky Utilities. OMU operates its own net metering programme, meaningfully different from the LG&E/KU two-rate structure that applies to most of Kentucky. Permits run through the City of Owensboro Code Enforcement.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.6,
    sunnyDays: 193,
    note: "Owensboro gets around 4.6 peak sun hours per day with 193 sunny days per year, moderate for solar. Winter snow derating is modest. Summer thunderstorms reduce afternoon production. Ohio River valley cloud cover.",
  },
  market: {
    metroPopulationK: 115,
    averageCostPerWatt: 2.75,
    leadCostUsd: { low: 80, high: 150 },
    installerDensity: "Low",
  },
  utilities: [
    "Owensboro Municipal Utilities (OMU), municipal utility, serves all of Owensboro",
    "Kenergy (electric cooperative) serves parts of surrounding Daviess County outside Owensboro",
  ],
  permits: {
    office: "City of Owensboro Code Enforcement",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Owensboro Code Enforcement typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted. OMU interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Owensboro means working under OMU municipal net metering (meaningfully different from the LG&E/KU two-rate structure that applies to most of Kentucky). The best Owensboro operators are explicit about the OMU vs LG&E/KU difference in sales conversations. Lead costs run $80 to $150 on Google search, among the lowest in Kentucky because installer density is thin.",
  faq: [
    {
      q: "Is Owensboro on LG&E or Kentucky Utilities?",
      a: "No. Owensboro is served by Owensboro Municipal Utilities (OMU), a municipal utility. LG&E and KU serve most of the rest of Kentucky but not Owensboro.",
    },
    {
      q: "Does OMU have net metering?",
      a: "Yes. OMU operates its own net metering programme for residential solar customers. The specific structure typically beats the LG&E/KU two-rate structure that applies to most of Kentucky.",
    },
    {
      q: "How long does a solar permit take in Owensboro?",
      a: "City of Owensboro Code Enforcement typically runs residential solar permits in 2 to 4 weeks. OMU interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Owensboro?",
      a: "Owensboro runs about $2.75 per watt installed for residential, meaning a 7 kW system typically costs around $19,300 gross. After the 30 percent federal tax credit, net cost is approximately $13,500. Kentucky has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Owensboro?",
      a: "Yes for most Owensboro homes with suitable roofs. OMU municipal net metering plus the federal tax credit makes residential solar payback typically 10 to 13 years, faster than LG&E/KU-territory Kentucky cities (11 to 15 years) because OMU's structure is more favourable.",
    },
  ],
};
