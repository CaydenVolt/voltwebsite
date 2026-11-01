import type { City } from "../types";

export const MILWAUKEE: City = {
  slug: "milwaukee",
  stateSlug: "wisconsin",
  name: "Milwaukee",
  title: "Solar in Milwaukee: We Energies, Focus on Energy and Lake Michigan weather",
  metaTitle: "Solar Companies in Milwaukee: We Energies, Focus on Energy",
  metaDescription:
    "Honest guide to solar in Milwaukee: We Energies net metering, Focus on Energy residential rebate, City of Milwaukee permits, winter snow derating, and running a solar company in southeastern Wisconsin.",
  answer:
    "Milwaukee is served by We Energies under retail-rate net metering, with Focus on Energy's $500 one-time residential solar rebate and the federal tax credit providing the primary incentive stack. Lake Michigan weather (lake-effect snow in winter, lake breeze in summer) is a real production factor. Permits run through the Milwaukee Department of Neighborhood Services.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.1,
    sunnyDays: 189,
    note: "Milwaukee gets around 4.1 peak sun hours per day with 189 sunny days per year, moderate for solar. Lake Michigan weather is the dominant climate factor: winter lake-effect snow and cloud cover reduce production by 15 to 25 percent annually. Summer lake breeze cools rooftops, which marginally improves panel output compared with inland Wisconsin.",
  },
  market: {
    metroPopulationK: 1570,
    averageCostPerWatt: 2.95,
    leadCostUsd: { low: 100, high: 180 },
    installerDensity: "Moderate",
  },
  utilities: [
    "We Energies (WEC Energy Group subsidiary), investor-owned, serves most of southeastern Wisconsin including Milwaukee",
    "Various municipal utilities (Wauwatosa, Oak Creek, Hartland) serve specific suburbs",
  ],
  permits: {
    office: "Milwaukee Department of Neighborhood Services",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "Milwaukee Department of Neighborhood Services typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Milwaukee, Waukesha, Washington and Ozaukee county jurisdictions run their own permits with 2 to 5 week typical timelines. We Energies interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Milwaukee means working in a growing southeastern Wisconsin market where the Focus on Energy rebate and federal tax credit do the economic work. The best Milwaukee operators are explicit about lake-effect snow derating in sales conversations (annual production loss 15 to 25 percent), have templated Focus on Energy registration workflows, and handle We Energies interconnection fluently. Lead costs run $100 to $180 on Google search.",
  faq: [
    {
      q: "Does We Energies have net metering?",
      a: "Yes, retail-rate net metering for residential solar systems up to 20 kW AC under Wisconsin PSC rules. Credits accrue monthly at retail; annual true-up at year-end with excess paid at avoided cost or rolled forward (varies by programme).",
    },
    {
      q: "What is Focus on Energy's rebate for Milwaukee?",
      a: "Focus on Energy (Wisconsin's statewide energy-efficiency programme) pays residential solar installations a $500 one-time rebate for standard installations, plus performance-based rebates for larger or storage-attached systems. Confirm current programme structure before quoting.",
    },
    {
      q: "How long does a solar permit take in Milwaukee?",
      a: "Milwaukee Department of Neighborhood Services typically runs residential solar permits in 3 to 5 weeks. Surrounding counties run 2 to 5 weeks typically. We Energies interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Milwaukee?",
      a: "Milwaukee runs about $2.95 per watt installed for residential, meaning a 7 kW system typically costs around $20,700 gross. After the 30 percent federal tax credit and the Focus on Energy rebate, net cost is approximately $14,000.",
    },
    {
      q: "Is solar worth it in Milwaukee?",
      a: "Yes for most Milwaukee homes with suitable roofs. The combination of We Energies retail NEM, Focus on Energy rebate, and the 30 percent federal credit makes residential solar payback typically 10 to 13 years. Lake-effect snow derating stretches payback compared with Sun Belt peers; honest annual yield modelling matters.",
    },
  ],
};
