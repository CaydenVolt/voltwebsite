import type { City } from "../types";

export const FLAGSTAFF: City = {
  slug: "flagstaff",
  stateSlug: "arizona",
  name: "Flagstaff",
  title: "Solar in Flagstaff: APS, high elevation and mountain winter",
  metaTitle: "Solar Companies in Flagstaff: APS, Permits, Winter",
  metaDescription:
    "Honest guide to solar in Flagstaff Arizona: APS retail (not SRP) export credit rate, City of Flagstaff permits, high-elevation mountain climate, winter snow, and running a solar company in Coconino County.",
  answer:
    "Flagstaff is unusual in Arizona: at 7,000 feet elevation with real winter snow (not the Phoenix desert climate). APS is the utility (not SRP). The combination of altitude boost, cold air improving panel efficiency, and real winter snow derating produces unique solar economics. Permits run through the City of Flagstaff Community Development.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 5.9,
    sunnyDays: 266,
    note: "Flagstaff gets around 5.9 peak sun hours per day with 266 sunny days per year. The combination of 7,000-foot altitude (reduced atmospheric attenuation) and cold winter air (improves panel efficiency) means Flagstaff per-panel output is among the highest in the US. Winter snow is a real factor: annual production loss 10 to 20 percent, mitigated by steep south-facing panels.",
  },
  market: {
    metroPopulationK: 80,
    averageCostPerWatt: 2.75,
    leadCostUsd: { low: 110, high: 190 },
    installerDensity: "Low",
  },
  utilities: ["Arizona Public Service (APS), investor-owned, serves all of Flagstaff"],
  permits: {
    office: "City of Flagstaff Community Development",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Flagstaff Community Development typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted. APS interconnection post-install typically runs 3 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Flagstaff means working an uncommon Arizona market: APS (not SRP), real winter snow, and 7,000-foot altitude. The best Flagstaff operators are explicit about winter snow derating in sales conversations (unlike Phoenix pitches that never mention snow), spec steep roof pitches for snow shedding, and handle APS interconnection fluently. Lead costs run $110 to $190 on Google search.",
  faq: [
    {
      q: "Is Flagstaff on SRP or APS?",
      a: "APS. Flagstaff is served by Arizona Public Service, not SRP (which serves Phoenix East Valley). This matters because APS and SRP have very different solar programmes; Flagstaff operators cannot use SRP-territory pitches.",
    },
    {
      q: "Does Flagstaff get snow?",
      a: "Yes, substantial snow. Flagstaff averages 100+ inches of snow annually, among the snowier US cities. Winter snow derating typically reduces annual solar production by 10 to 20 percent. Steep south-facing panels shed snow faster.",
    },
    {
      q: "How long does a solar permit take in Flagstaff?",
      a: "City of Flagstaff Community Development typically runs residential solar permits in 2 to 4 weeks. APS interconnection post-install adds 3 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Flagstaff?",
      a: "Flagstaff runs about $2.75 per watt installed for residential, meaning a 7 kW system typically costs around $19,300 gross. After the 30 percent federal tax credit, net cost is approximately $13,500.",
    },
    {
      q: "Is solar worth it in Flagstaff?",
      a: "Yes for most Flagstaff homes with suitable roofs. The combination of high altitude production boost, APS retail-adjacent net metering, and the federal tax credit makes residential solar payback typically 9 to 12 years. Winter snow derating is a real factor; honest annual yield modelling matters.",
    },
  ],
};
