import type { City } from "../types";

export const PEORIA: City = {
  slug: "peoria",
  stateSlug: "illinois",
  name: "Peoria",
  title: "Solar in Peoria: Ameren Illinois, Illinois Shines and permits",
  metaTitle: "Solar Companies in Peoria IL: Ameren Illinois, Permits",
  metaDescription:
    "Honest guide to solar in Peoria Illinois: Ameren Illinois (not ComEd) net metering, Illinois Shines REC payment, City of Peoria permits, and running a solar company in central Illinois.",
  answer:
    "Peoria is served by Ameren Illinois (not ComEd, which serves Chicago). Both utilities fall under Illinois Shines, which pays upfront REC-equivalent payments for 15 years. Permits run through the City of Peoria Inspections Division.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.3,
    sunnyDays: 192,
    note: "Peoria gets around 4.3 peak sun hours per day with 192 sunny days per year, moderate for solar. Winter snow derating is modest to substantial (10 to 20 percent annual loss). Spring tornado risk requires proper structural attachment.",
  },
  market: {
    metroPopulationK: 390,
    averageCostPerWatt: 2.9,
    leadCostUsd: { low: 90, high: 170 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Ameren Illinois, investor-owned, serves most of central and southern Illinois including Peoria",
    "Various electric cooperatives serve rural outlying areas",
    "Peoria Public Works serves water/sewer only, not electricity",
  ],
  permits: {
    office: "City of Peoria Inspections Division",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Peoria Inspections Division typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Peoria County jurisdictions run 2 to 4 weeks typically. Ameren Illinois interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Peoria means working under Ameren Illinois (different utility and interconnection paperwork from ComEd in Chicago). The best Peoria operators have templated Illinois Shines registration workflows for Ameren territory, handle Ameren Illinois interconnection fluently, and model winter snow derating honestly. Lead costs run $90 to $170 on Google search.",
  faq: [
    {
      q: "Does Ameren Illinois have net metering?",
      a: "Yes, retail-rate net metering for residential solar systems up to 40 kW AC under Illinois Commerce Commission rules. Credits accrue monthly at retail; annual true-up at avoided cost or rolled forward.",
    },
    {
      q: "Does Illinois Shines apply to Peoria?",
      a: "Yes. Illinois Shines applies to residential solar at both Ameren Illinois and ComEd territories. The programme pays an upfront equivalent of 15 years of REC payments at approximately $0.08 to $0.11 per kWh projected generation.",
    },
    {
      q: "How long does a solar permit take in Peoria?",
      a: "City of Peoria Inspections Division typically runs residential solar permits in 3 to 5 weeks. Surrounding Peoria County jurisdictions run 2 to 4 weeks typically. Ameren Illinois interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Peoria?",
      a: "Peoria runs about $2.90 per watt installed for residential, meaning a 7 kW system typically costs around $20,300 gross. After the 30 percent federal tax credit and the Illinois Shines upfront REC pass-through, effective net cost is often $7,000 to $10,000.",
    },
    {
      q: "Is solar worth it in Peoria?",
      a: "Yes for Peoria homes with suitable roofs. The combination of Ameren Illinois retail NEM, 15-year Illinois Shines payment, and the federal tax credit makes residential solar payback typically 8 to 11 years with the federal tax credit, similar to Chicago.",
    },
  ],
};
