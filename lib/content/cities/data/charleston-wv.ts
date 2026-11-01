import type { City } from "../types";

export const CHARLESTON_WV: City = {
  slug: "charleston-wv",
  stateSlug: "west-virginia",
  name: "Charleston",
  title: "Solar in Charleston WV: Appalachian Power and Kanawha County permits",
  metaTitle: "Solar Companies in Charleston WV: Appalachian Power, Permits",
  metaDescription:
    "Honest guide to solar in Charleston West Virginia: Appalachian Power retail net metering, City of Charleston permits, mountainous terrain, and running a solar company in Kanawha County.",
  answer:
    "Charleston West Virginia is served by Appalachian Power under retail-rate net metering. Mountainous terrain and dense tree canopy limit the fraction of homes with suitable solar roofs more than most US metros. The federal tax credit remains the primary economic driver. Permits run through the Charleston Building Department.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.3,
    sunnyDays: 164,
    note: "Charleston WV gets around 4.3 peak sun hours per day with 164 sunny days per year, among the lower in the US. Mountainous terrain, Ohio River valley cloud cover and dense tree canopy limit suitable rooftops and reduce annual yield more than most installers model. Winter snow derating is modest.",
  },
  market: {
    metroPopulationK: 250,
    averageCostPerWatt: 2.8,
    leadCostUsd: { low: 85, high: 160 },
    installerDensity: "Low",
  },
  utilities: [
    "Appalachian Power (AEP subsidiary), investor-owned, serves most of southern West Virginia including Charleston",
    "Various electric cooperatives serve rural outlying areas",
    "Mon Power (FirstEnergy) serves northern West Virginia (not Charleston proper)",
  ],
  permits: {
    office: "Charleston Building Department",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "Charleston Building Department typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Kanawha County jurisdictions run their own permits with 2 to 4 week typical timelines. Appalachian Power interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Charleston WV means working in a small market where mountainous terrain and tree canopy limit suitable rooftops more than most states. The best Charleston operators do honest shade audits as part of the first visit, understand the longer-distance rural logistics of West Virginia, and handle Appalachian Power interconnection fluently. Lead costs run $85 to $160 on Google search, low because installer density is thin.",
  faq: [
    {
      q: "Does Appalachian Power have net metering in Charleston WV?",
      a: "Yes, retail-rate net metering for residential solar systems up to 25 kW AC at Appalachian Power under West Virginia PSC rules. Credits accrue monthly at retail; annual true-up at year-end with excess credits rolled forward.",
    },
    {
      q: "How long does a solar permit take in Charleston WV?",
      a: "Charleston Building Department typically runs residential solar permits in 3 to 5 weeks. Surrounding Kanawha County jurisdictions run 2 to 4 weeks typically. Appalachian Power interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Charleston WV?",
      a: "Charleston WV runs about $2.80 per watt installed for residential, meaning a 7 kW system typically costs around $19,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,700. West Virginia has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Charleston WV?",
      a: "Yes for Charleston homes with suitable roofs. The combination of Appalachian Power retail NEM, moderate electric rates, and the 30 percent federal credit makes residential solar payback typically 11 to 14 years. Mountainous terrain and tree canopy limit suitable rooftops more than most states; honest shade audits before quoting save both parties time.",
    },
  ],
};
