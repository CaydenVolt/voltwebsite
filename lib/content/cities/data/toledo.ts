import type { City } from "../types";

export const TOLEDO: City = {
  slug: "toledo",
  stateSlug: "ohio",
  name: "Toledo",
  title: "Solar in Toledo: Toledo Edison and Lake Erie climate",
  metaTitle: "Solar Companies in Toledo: Toledo Edison, Permits",
  metaDescription:
    "Honest guide to solar in Toledo Ohio: Toledo Edison (FirstEnergy subsidiary) retail net metering, City of Toledo permits, Lake Erie weather, and running a solar company in Lucas County.",
  answer:
    "Toledo is served by Toledo Edison, a FirstEnergy subsidiary (different from AEP Ohio in Columbus, Duke Ohio in Cincinnati, or AES Ohio in Dayton). Retail-rate NEM applies under Ohio PUC rules. Lake Erie-effect snow and cloud cover reduce annual production. Permits run through the City of Toledo Division of Building Inspection.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.1,
    sunnyDays: 180,
    note: "Toledo gets around 4.1 peak sun hours per day with 180 sunny days per year, moderate for solar. Lake Erie-effect weather in winter reduces annual production by 15 to 20 percent for most residential installations. Summer humidity year-round requires marine-grade stainless hardware for durability.",
  },
  market: {
    metroPopulationK: 610,
    averageCostPerWatt: 2.85,
    leadCostUsd: { low: 90, high: 170 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Toledo Edison (FirstEnergy subsidiary), investor-owned, serves most of Lucas County including Toledo",
    "Ohio Edison (FirstEnergy subsidiary) serves parts of eastern outlying areas",
    "Various electric cooperatives serve rural areas",
  ],
  permits: {
    office: "City of Toledo Division of Building Inspection",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Toledo Division of Building Inspection typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Lucas, Wood and Ottawa county jurisdictions run 2 to 4 week typical timelines. Toledo Edison interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Toledo means working under Toledo Edison, a FirstEnergy subsidiary that handles interconnection differently from AEP Ohio or AES Ohio. The best Toledo operators understand FirstEnergy's specific interconnection paperwork, model lake-effect snow derating honestly, and handle the Michigan border logistics (Toledo neighbours Monroe County MI where DTE serves). Lead costs run $90 to $170 on Google search.",
  faq: [
    {
      q: "Does Toledo Edison have net metering?",
      a: "Yes, retail-rate net metering for residential solar systems up to 25 kW AC under Public Utilities Commission of Ohio rules. Credits accrue monthly at retail; annual true-up at avoided cost. Toledo Edison is a FirstEnergy subsidiary.",
    },
    {
      q: "How long does a solar permit take in Toledo?",
      a: "City of Toledo Division of Building Inspection typically runs residential solar permits in 3 to 5 weeks. Surrounding Lucas, Wood and Ottawa counties run 2 to 4 weeks typically. Toledo Edison interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Toledo?",
      a: "Toledo runs about $2.85 per watt installed for residential, meaning a 7 kW system typically costs around $20,000 gross. After the 30 percent federal tax credit, net cost is approximately $14,000. Ohio has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Toledo?",
      a: "Yes for Toledo homes with suitable roofs. The combination of Toledo Edison retail NEM and the federal tax credit makes residential solar payback typically 11 to 14 years. Lake Erie-effect weather stretches payback compared with Sun Belt peers; honest annual yield modelling matters.",
    },
  ],
};
