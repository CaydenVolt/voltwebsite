import type { City } from "../types";

export const PHOENIX: City = {
  slug: "phoenix",
  stateSlug: "arizona",
  name: "Phoenix",
  title: "Solar in Phoenix: APS, SRP and the valley's permit reality",
  metaTitle: "Solar Companies in Phoenix: APS, SRP, Permits, Export Credits",
  metaDescription:
    "Honest guide to solar in Phoenix: APS vs SRP service areas, export credit rates under each, City of Phoenix permits, heat derating considerations, and running a solar company in the Valley.",
  answer:
    "Phoenix has the highest peak sun hours of any major US city (around 6.5 per day) but also the most aggressive utility-level resistance to residential solar in the US. APS and SRP both operate under non-retail export compensation (APS at the Avoided Cost Calculator rate, SRP under its Customer Generation plan with high demand charges), so system sizing and demand management matter more here than in most other markets. Permits run through City of Phoenix Planning & Development with 2 to 4 week typical turnaround.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 6.5,
    sunnyDays: 299,
    note: "Phoenix has the highest peak sun hours of any major US metro (around 6.5 per day) and 299 sunny days per year. The compounding issue is extreme heat: summer rooftop temperatures regularly exceed 170F, which can derate panel output by 15 to 20 percent at peak-production hours if the equipment is wrong. Panels with low temperature coefficients (-0.26 percent per C or better) and racking that promotes airflow underneath are the practical spec. Dust accumulation is a secondary production loss factor.",
  },
  market: {
    metroPopulationK: 5100,
    averageCostPerWatt: 2.6,
    leadCostUsd: { low: 150, high: 260 },
    installerDensity: "Saturated",
  },
  utilities: [
    "Arizona Public Service (APS), investor-owned, serves most of Phoenix metro",
    "Salt River Project (SRP), public utility, serves parts of Phoenix, Scottsdale, Tempe, Mesa, Chandler",
    "Tucson Electric Power and others serve nearby but not Phoenix proper",
  ],
  permits: {
    office: "City of Phoenix Planning & Development Department",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Accepted",
    note: "City of Phoenix accepts SolarAPP+ for standard residential installations, which drops permit turnaround to a day or two for qualifying systems. Non-SolarAPP+ permits run 2 to 4 weeks typically. Scottsdale, Tempe, Mesa, Chandler, Glendale, Peoria and other Valley cities each have their own permit offices with timelines of 2 to 5 weeks (most do not accept SolarAPP+ as of 2026). APS and SRP interconnection post-install typically runs 3 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Phoenix means winning in a market with high lead costs and multiple national competitors. The valley has saturated installer density; local-only companies compete against SunPower, Sunrun, Freedom Forever and others for the same leads. The specific technical differentiator in Phoenix is heat management and SRP demand-charge pencil-outs: SRP's rate design penalises peak demand, so a battery that reduces peak demand often matters more than one that offsets exports. The operators who do best in Phoenix sell storage as the default (for both APS and SRP), have in-house NEC compliance expertise for the valley's hot-attic situations, and move fast on leads. Lead costs run $150 to $260 on Google search.",
  faq: [
    {
      q: "Does APS have net metering?",
      a: "Not retail-rate net metering. APS credits residential solar exports at the Resource Comparison Proxy (RCP) rate, which is calculated annually and currently sits around $0.085 per kWh (confirm current rate before quoting). The RCP rate is well below the retail rate of about $0.14 per kWh. Pre-2017 customers are grandfathered on retail NEM for 20 years from original interconnection.",
    },
    {
      q: "Does SRP have net metering?",
      a: "SRP does not have net metering in a conventional sense. SRP residential solar customers are placed on the Customer Generation plan, which has a demand charge that applies to the single highest hour of monthly consumption. The economics work best with battery storage that reduces peak demand, not just a solar array; SRP solar-only without storage often fails to pencil out because of the demand charge.",
    },
    {
      q: "How long does a solar permit take in Phoenix?",
      a: "With SolarAPP+ at the city of Phoenix: often approved within a day or two for standard residential installations. Non-SolarAPP+ permits run 2 to 4 weeks. Valley suburbs (Scottsdale, Tempe, Mesa, Chandler) typically run 2 to 5 weeks and most do not accept SolarAPP+ yet.",
    },
    {
      q: "How much does solar cost in Phoenix?",
      a: "Phoenix runs about $2.60 per watt installed for residential, meaning a 7 kW system typically costs around $18,200 gross. After the 30 percent federal tax credit, net cost is approximately $12,700. Battery storage (which many Phoenix homeowners add for SRP demand-charge offset or APS backup) adds $12,000 to $18,000 for a Powerwall-class system.",
    },
    {
      q: "Is solar still worth it in Phoenix?",
      a: "Yes, especially with storage. The combination of excellent sun hours, high summer electric bills (Phoenix households often see $400+ bills in July and August) and the 30 percent federal tax credit keeps the math working. Payback typically runs 8 to 12 years for residential solar-only on APS, and 7 to 10 years for storage-attached systems on either APS or SRP that offset peak-demand charges.",
    },
  ],
};
