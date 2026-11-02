import type { City } from "../types";

export const ALLENTOWN: City = {
  slug: "allentown",
  stateSlug: "pennsylvania",
  name: "Allentown",
  title: "Solar in Allentown: PPL Electric Utilities and Lehigh Valley",
  metaTitle: "Solar Companies in Allentown: PPL Electric, SRECs, Permits",
  metaDescription:
    "Honest guide to solar in Allentown Pennsylvania: PPL Electric Utilities net metering, PA SREC market, City of Allentown permits, and running a solar company in the Lehigh Valley.",
  answer:
    "Allentown is served by PPL Electric Utilities (different from PECO, Duquesne or Penelec), under Pennsylvania retail net metering plus AEPS SREC income. Permits run through the City of Allentown Bureau of Building Standards and Safety.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.3,
    sunnyDays: 203,
    note: "Allentown gets around 4.3 peak sun hours per day with 203 sunny days per year, moderate for solar. Winter snow derating is modest to substantial (10 to 18 percent annual loss). Lehigh Valley climate is similar to Philadelphia and NJ.",
  },
  market: {
    metroPopulationK: 870,
    averageCostPerWatt: 2.95,
    leadCostUsd: { low: 110, high: 190 },
    installerDensity: "Moderate",
  },
  utilities: [
    "PPL Electric Utilities (PPL Corporation subsidiary), investor-owned, serves most of the Lehigh Valley including Allentown",
    "Met-Ed (FirstEnergy subsidiary) serves parts of outlying Berks County",
  ],
  permits: {
    office: "City of Allentown Bureau of Building Standards and Safety",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Allentown Bureau of Building Standards and Safety typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Lehigh and Northampton county jurisdictions run 2 to 5 weeks typically. PPL Electric interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Allentown means working under PPL Electric Utilities (different utility from the three other major PA utilities we cover: PECO in Philly, Duquesne in Pittsburgh, Penelec in Erie). The best Allentown operators have templated PPL interconnection workflows, handle PA SREC registration fluently, and model winter weather honestly. Lead costs run $110 to $190 on Google search.",
  faq: [
    {
      q: "Does PPL Electric have net metering?",
      a: "Yes, retail-rate net metering for residential solar systems up to 50 kW AC under Pennsylvania PUC rules. Credits accrue monthly at retail; annual true-up at year-end with excess rolled forward.",
    },
    {
      q: "How long does a solar permit take in Allentown?",
      a: "City of Allentown Bureau of Building Standards and Safety typically runs residential solar permits in 3 to 5 weeks. Surrounding Lehigh and Northampton counties run 2 to 5 weeks typically. PPL Electric interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Allentown?",
      a: "Allentown runs about $2.95 per watt installed for residential, meaning a 7 kW system typically costs around $20,700 gross. After the 30 percent federal tax credit, net cost is approximately $14,500. SREC income adds roughly $200 to $280 per year on top.",
    },
    {
      q: "Is solar worth it in Allentown?",
      a: "Yes for Allentown homes with suitable roofs. The combination of PPL Electric retail NEM, PA SREC income, and the 30 percent federal tax credit makes residential solar payback typically 9 to 12 years.",
    },
  ],
};
