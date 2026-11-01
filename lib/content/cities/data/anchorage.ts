import type { City } from "../types";

export const ANCHORAGE: City = {
  slug: "anchorage",
  stateSlug: "alaska",
  name: "Anchorage",
  title: "Solar in Anchorage: Chugach Electric and extreme-latitude seasonality",
  metaTitle: "Solar Companies in Anchorage: Chugach Electric, Permits",
  metaDescription:
    "Honest guide to solar in Anchorage Alaska: Chugach Electric Association net metering, Municipality of Anchorage permits, extreme-latitude seasonality, and running a solar company in Alaska's largest city.",
  answer:
    "Anchorage is served by Chugach Electric Association (a member-owned cooperative) under retail-rate net metering. Extreme-latitude seasonality is the dominant factor: June days have 19+ hours of daylight, while December days have around 5 hours of weak low-angle sun. Annual yield runs 60 to 70 percent of equivalent Sun Belt systems. Permits run through the Municipality of Anchorage.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 3.1,
    sunnyDays: 141,
    note: "Anchorage gets around 3.1 peak sun hours per day averaged over the year, among the lowest in the US. Seasonality is extreme: June and July deliver nearly 6 peak sun hours per day; December and January essentially zero (3 to 5 hours of weak low-angle sun that barely clears the mountains). Steep roof pitches help with snow shedding and winter-sun capture.",
  },
  market: {
    metroPopulationK: 400,
    averageCostPerWatt: 3.5,
    leadCostUsd: { low: 100, high: 180 },
    installerDensity: "Low",
  },
  utilities: [
    "Chugach Electric Association, member-owned cooperative, serves most of the Anchorage area",
    "Matanuska Electric Association serves parts of the Mat-Su Valley north of Anchorage",
  ],
  permits: {
    office: "Municipality of Anchorage Development Services Department",
    turnaroundWeeks: "3 to 6 weeks for standard residential",
    solarApp: "Not accepted",
    note: "Municipality of Anchorage Development Services Department typically runs residential solar permits in 3 to 6 weeks. SolarAPP+ is not accepted. Chugach Electric interconnection post-install typically runs 4 to 10 weeks.",
  },
  installerLandscape:
    "Running a solar company in Anchorage means working in a unique US market where extreme-latitude seasonality defines every project. The best Anchorage operators are explicit about winter production reality (minimal production November through February), spec steep-pitch mounting for snow shedding and summer-sun capture, and sell on high retail rates and energy independence alongside pure payback. Lead costs run $100 to $180 on Google search.",
  faq: [
    {
      q: "Can solar work in Anchorage?",
      a: "Yes, but with extreme seasonality. June and July days have 19+ hours of daylight and strong production; December and January days have around 5 hours of weak low-angle sun. Annual yield for a south-facing Anchorage installation is around 60 to 70 percent of an equivalent Sun Belt installation. Honest sales conversations model this seasonality.",
    },
    {
      q: "Does Chugach Electric have net metering?",
      a: "Yes, retail-rate net metering for residential solar systems under Regulatory Commission of Alaska rules. Credits accrue monthly at retail; annual true-up at year-end varies.",
    },
    {
      q: "How much does solar cost in Anchorage?",
      a: "Anchorage runs about $3.50 per watt installed for residential, higher than mainland US because of shipping and labour costs, meaning a 7 kW system typically costs around $24,500 gross. After the 30 percent federal tax credit, net cost is approximately $17,200. Alaska has no state solar tax credit (no state income tax).",
    },
    {
      q: "Is solar worth it in Anchorage?",
      a: "For Anchorage homes with high electricity use (around $0.23 per kWh at Chugach Electric), payback typically runs 11 to 15 years with the federal tax credit, longer than Sun Belt peers because of the latitude. Many Anchorage homeowners install solar for energy independence and net-zero goals alongside payback.",
    },
  ],
};
