import type { City } from "../types";

export const HENDERSON: City = {
  slug: "henderson",
  stateSlug: "nevada",
  name: "Henderson",
  title: "Solar in Henderson: NV Energy tariff and faster permits than Las Vegas",
  metaTitle: "Solar Companies in Henderson: NV Energy, Permits, Export Credits",
  metaDescription:
    "Honest guide to solar in Henderson: NV Energy tiered export credit, City of Henderson Development Services permits, Mojave climate considerations, and running a solar company in Henderson.",
  answer:
    "Henderson has the same climate and utility (NV Energy) as Las Vegas but faster permits through City of Henderson Development Services, typically 1 to 3 weeks. The export credit tier structure applies the same way (new installs at Tier 5 or beyond). Henderson's higher-income suburbs make storage-attached systems and premium equipment packages a larger share of the market than in Las Vegas proper.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 6.4,
    sunnyDays: 294,
    note: "Henderson has essentially the same climate as Las Vegas: 6.4 peak sun hours per day, 294 sunny days per year, extreme summer heat. The practical differences are minimal; residents at the higher elevation of Green Valley and Anthem see 2 to 4 degree cooler summer rooftop temperatures than central Henderson, which marginally improves panel output.",
  },
  market: {
    metroPopulationK: 335,
    averageCostPerWatt: 2.7,
    leadCostUsd: { low: 140, high: 240 },
    installerDensity: "High",
  },
  utilities: ["NV Energy, investor-owned, serves all of Henderson"],
  permits: {
    office: "City of Henderson Development Services",
    turnaroundWeeks: "1 to 3 weeks for standard residential",
    solarApp: "Accepted",
    note: "City of Henderson Development Services accepts SolarAPP+ for standard residential installations, approving most qualifying systems in a day or two. Non-SolarAPP+ permits run 1 to 3 weeks, faster than City of Las Vegas and Clark County typical timelines. NV Energy interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Henderson means working in the highest-income suburb of the Las Vegas valley, where premium equipment packages (black-on-black panels, concealed conduit, premium inverters) close at higher rates than the valley average. HOA aesthetic review is common in master-planned communities (Anthem, Green Valley, Lake Las Vegas) and adds 2 to 6 weeks to timelines. The best Henderson operators integrate HOA submittal as a known project step rather than a surprise, and often focus on storage-attached quotes for the premium customer segment. Lead costs run $140 to $240, similar to Las Vegas.",
  faq: [
    {
      q: "Does Henderson have the same net metering as Las Vegas?",
      a: "Yes. Henderson is served by NV Energy, the same utility that serves Las Vegas. The Nevada SB 358 tiered net metering programme applies identically: new installations are currently at Tier 5 or beyond, with exports credited at approximately 75 percent of retail. Pre-2015 customers are grandfathered on retail NEM for 20 years.",
    },
    {
      q: "Are Henderson permits faster than Las Vegas?",
      a: "Yes. City of Henderson Development Services typically runs residential solar permits in 1 to 3 weeks, faster than City of Las Vegas or Clark County typical timelines. Henderson also accepts SolarAPP+, so standard residential installations often receive same-day or next-day approval.",
    },
    {
      q: "How much does solar cost in Henderson?",
      a: "Henderson runs about $2.70 per watt installed for residential, slightly higher than Las Vegas because of the premium customer segment and HOA finish requirements, meaning a 7 kW system typically costs around $18,900 gross. After the 30 percent federal tax credit, net cost is approximately $13,200.",
    },
    {
      q: "Do Henderson HOAs allow solar?",
      a: "Yes. Nevada state law prohibits HOAs from unreasonably restricting solar installations, but HOAs can impose reasonable aesthetic conditions. Most Henderson master-planned communities (Anthem, Green Valley, Lake Las Vegas) require architectural review approval before install begins, adding 2 to 6 weeks to project timelines. Common requirements include all-black panels, concealed conduit and specific location restrictions.",
    },
    {
      q: "Is solar worth it in Henderson?",
      a: "Yes for most Henderson homes with suitable roofs. Payback typically runs 9 to 12 years with the federal tax credit, similar to Las Vegas. Storage-attached installs for backup during NV Energy outages (which are rare but do occur during summer peak demand) are a common premium add-on but do not meaningfully shorten payback at current NV Energy rates.",
    },
  ],
};
