import type { City } from "../types";

export const SYRACUSE: City = {
  slug: "syracuse",
  stateSlug: "new-york",
  name: "Syracuse",
  title: "Solar in Syracuse: National Grid, NY-Sun and lake-effect snow",
  metaTitle: "Solar Companies in Syracuse: National Grid, NY-Sun, Permits",
  metaDescription:
    "Honest guide to solar in Syracuse New York: National Grid New York retail net metering, NY-Sun installer rebate, City of Syracuse permits, lake-effect weather, and running a solar company in central NY.",
  answer:
    "Syracuse is served by National Grid New York under retail-rate net metering plus NY-Sun installer rebates at the Upstate block rates. Lake Ontario-effect snow is a dominant climate factor; Syracuse is one of the snowiest major US cities. Permits run through the City of Syracuse Department of Code Enforcement.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 3.9,
    sunnyDays: 157,
    note: "Syracuse gets around 3.9 peak sun hours per day with 157 sunny days per year, among the lower in the US. Lake-effect snow from Lake Ontario (Syracuse averages 123 inches of snow annually, one of the snowiest major US cities) reduces annual production by 20 to 30 percent. Honest annual yield modelling matters critically.",
  },
  market: {
    metroPopulationK: 660,
    averageCostPerWatt: 3.05,
    leadCostUsd: { low: 100, high: 180 },
    installerDensity: "Moderate",
  },
  utilities: [
    "National Grid New York (NIMO Niagara Mohawk legal entity), investor-owned, serves most of Onondaga County including Syracuse",
    "New York State Electric & Gas (NYSEG, Avangrid subsidiary) serves parts of outlying areas",
  ],
  permits: {
    office: "City of Syracuse Department of Code Enforcement",
    turnaroundWeeks: "3 to 6 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Syracuse Department of Code Enforcement typically runs residential solar permits in 3 to 6 weeks. SolarAPP+ is not accepted. Surrounding Onondaga County towns run their own permits with 2 to 5 week typical timelines. National Grid interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Syracuse means working under NY stacked incentives in one of the snowiest major US cities. The best Syracuse operators are explicit about lake-effect snow derating (annual production loss can reach 30 percent), spec steep-pitch mounting for snow shedding, and have templated NY-Sun registration workflows. Lead costs run $100 to $180 on Google search.",
  faq: [
    {
      q: "Does National Grid have retail net metering in Syracuse?",
      a: "Yes. National Grid New York offers full retail net metering for residential solar systems up to 25 kW AC. Credits accrue monthly at retail; annual true-up at avoided cost.",
    },
    {
      q: "How much does lake-effect snow affect Syracuse solar?",
      a: "Syracuse averages 123 inches of snowfall annually, one of the snowiest major US cities. Lake-effect snow from Lake Ontario typically reduces annual solar production by 20 to 30 percent. Steep-pitch south-facing panels shed snow faster. Honest annual yield modelling is essential.",
    },
    {
      q: "How much does solar cost in Syracuse?",
      a: "Syracuse runs about $3.05 per watt installed for residential, meaning a 7 kW system typically costs around $21,400 gross. After the 30 percent federal tax credit, NY-Sun rebate pass-through, NY State 25 percent solar credit (capped $5,000), and property tax exemption, effective net cost is often $9,000 to $12,000.",
    },
    {
      q: "Is solar worth it in Syracuse?",
      a: "Yes for Syracuse homes with suitable roofs. The stacked NY incentives make residential solar payback typically 8 to 11 years with the federal tax credit, slightly longer than NYC or Long Island because of lake-effect snow derating but still competitive.",
    },
  ],
};
