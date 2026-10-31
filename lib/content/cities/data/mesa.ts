import type { City } from "../types";

export const MESA: City = {
  slug: "mesa",
  stateSlug: "arizona",
  name: "Mesa",
  title: "Solar in Mesa: SRP service, demand charges and East Valley permits",
  metaTitle: "Solar Companies in Mesa: SRP, Demand Charges, Permits",
  metaDescription:
    "Honest guide to solar in Mesa: SRP residential solar on the Customer Generation plan, SRP demand charges, Mesa Development Services permits, and running a solar company in East Valley Phoenix.",
  answer:
    "Mesa is served primarily by Salt River Project (SRP), which is unusual in that it does not operate conventional net metering. SRP places new residential solar customers on the Customer Generation plan, which includes a demand charge that applies to the single highest hour of monthly consumption. Battery storage that reduces peak demand is essentially required for favourable solar economics here, more so than for APS customers in Phoenix proper.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 6.5,
    sunnyDays: 299,
    note: "Mesa has essentially the same climate as Phoenix: 6.5 peak sun hours per day, 299 sunny days per year, extreme summer heat (June through September rooftop temperatures regularly exceed 170F). Panel temperature coefficients and racking airflow matter. The one practical difference is that Mesa has slightly higher humidity than central Phoenix due to proximity to the Salt River and surrounding irrigated agriculture.",
  },
  market: {
    metroPopulationK: 510,
    averageCostPerWatt: 2.6,
    leadCostUsd: { low: 140, high: 250 },
    installerDensity: "Saturated",
  },
  utilities: [
    "Salt River Project (SRP), public utility, serves most of Mesa",
    "Arizona Public Service (APS) serves small pockets of west Mesa",
  ],
  permits: {
    office: "City of Mesa Development Services Department",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Mesa Development Services typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted in Mesa as of 2026 (unlike Phoenix). SRP interconnection post-install typically runs 4 to 6 weeks. The specific SRP paperwork requirement is more detailed than APS's; installers submitting their first SRP project should expect a review cycle to catch commissioning details.",
  },
  installerLandscape:
    "Running a solar company in Mesa means operating under SRP's non-standard net metering regime, which penalises peak demand through a demand charge. The practical sales conversation is: 'solar-only won't give you the payback you expect on SRP; battery storage that reduces your peak demand will.' Operators who understand how to size and schedule storage for SRP demand-charge offset win significantly more projects than those who try to sell solar-only. Mesa shares the saturated East Valley installer market with Scottsdale, Chandler and Tempe; lead costs run $140 to $250 on Google search. Dedicated SRP-expertise is a real competitive differentiator here.",
  faq: [
    {
      q: "Does SRP have net metering?",
      a: "SRP does not operate conventional net metering. New residential solar customers are placed on the Customer Generation (CGEN) rate plan, which includes a demand charge based on the single highest hour of monthly on-peak consumption. Solar reduces energy consumption but may not reduce the peak-demand hour unless storage is attached; battery storage sized to shave the peak demand hour is what makes SRP solar economics work.",
    },
    {
      q: "What is the SRP demand charge?",
      a: "SRP's Customer Generation plan includes a demand charge of approximately $9 to $12 per kW of highest on-peak demand per month, in addition to a lower kWh rate than APS's standard residential plan. The practical result: a Mesa home with 10 kW of peak demand pays $90 to $120 per month just for the demand charge, before any kWh costs. Battery storage that reduces peak demand to 5 kW cuts that demand charge roughly in half.",
    },
    {
      q: "How long does a solar permit take in Mesa?",
      a: "City of Mesa Development Services typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted in Mesa (unlike Phoenix). SRP interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Mesa?",
      a: "Mesa runs about $2.60 per watt installed for residential, essentially identical to Phoenix. A 7 kW system costs around $18,200 gross; after the 30 percent federal tax credit, net cost is approximately $12,700. SRP residential installations are usually sold with 10 kWh+ of battery storage because of the demand-charge economics; a typical solar + storage install runs $30,000 to $40,000 gross before incentives.",
    },
    {
      q: "Is solar worth it in Mesa on SRP?",
      a: "Yes with properly-sized storage, often not without. SRP's demand charge makes solar-only economics meaningfully worse than APS's: a solar-only install on SRP typically pays back in 12 to 15 years, while a storage-attached install that reduces the peak demand hour pays back in 7 to 10 years. Honest installer pencil-outs should model both scenarios.",
    },
  ],
};
