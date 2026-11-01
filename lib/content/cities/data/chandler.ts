import type { City } from "../types";

export const CHANDLER: City = {
  slug: "chandler",
  stateSlug: "arizona",
  name: "Chandler",
  title: "Solar in Chandler: SRP demand charges and East Valley permits",
  metaTitle: "Solar Companies in Chandler: SRP, Demand Charges, Permits",
  metaDescription:
    "Honest guide to solar in Chandler: Salt River Project Customer Generation plan with demand charges, City of Chandler permits, East Valley Phoenix dynamics, and running a solar company in Chandler.",
  answer:
    "Chandler is served primarily by Salt River Project (SRP) under the Customer Generation plan with its demand-charge structure. The same demand-charge economics apply as in Mesa and Tempe: battery storage that reduces peak demand is essentially required for favourable solar payback. City of Chandler Development Services runs residential solar permits in 2 to 4 weeks.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 6.5,
    sunnyDays: 299,
    note: "Chandler has essentially the same climate as Phoenix and Mesa: 6.5 peak sun hours per day, 299 sunny days per year, extreme summer heat. Panel temperature coefficients and racking airflow matter critically.",
  },
  market: {
    metroPopulationK: 290,
    averageCostPerWatt: 2.6,
    leadCostUsd: { low: 140, high: 250 },
    installerDensity: "Saturated",
  },
  utilities: [
    "Salt River Project (SRP), public utility, serves most of Chandler",
    "Arizona Public Service (APS) serves small pockets of west Chandler",
  ],
  permits: {
    office: "City of Chandler Development Services",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Chandler Development Services typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted. SRP interconnection post-install typically runs 4 to 6 weeks. Many Chandler neighbourhoods have active HOAs that require aesthetic review for solar, adding 2 to 6 weeks on top.",
  },
  installerLandscape:
    "Running a solar company in Chandler means working under SRP's demand-charge-dominated economics (same as Mesa, Tempe). The practical sales conversation is: solar-only will not give the payback you expect on SRP; battery storage that reduces your peak demand will. Operators who understand how to size and schedule storage for SRP demand-charge offset win significantly more projects. Chandler shares the saturated East Valley installer market with Mesa, Scottsdale and Tempe; lead costs run $140 to $250 on Google search. HOA fluency matters because many Chandler neighbourhoods are master-planned communities.",
  faq: [
    {
      q: "Is Chandler on SRP or APS?",
      a: "Most of Chandler is on SRP (the Salt River Project public utility). Small pockets of west Chandler are on APS. The two utilities have materially different solar programmes: SRP uses the Customer Generation plan with demand charges (storage attachment is usually necessary for favourable economics); APS uses the Resource Comparison Proxy export rate. Confirming the utility by address matters for an accurate quote.",
    },
    {
      q: "What is the SRP demand charge?",
      a: "SRP's Customer Generation plan includes a demand charge of approximately $9 to $12 per kW of highest on-peak demand per month, in addition to a lower kWh rate. The practical result: a Chandler home with 10 kW of peak demand pays $90 to $120 per month just for the demand charge. Battery storage that reduces peak demand to 5 kW cuts that in half.",
    },
    {
      q: "How long does a solar permit take in Chandler?",
      a: "City of Chandler Development Services typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted. SRP interconnection post-install adds 4 to 6 weeks. HOA aesthetic review adds 2 to 6 weeks in master-planned communities.",
    },
    {
      q: "How much does solar cost in Chandler?",
      a: "Chandler runs about $2.60 per watt installed for residential, essentially identical to Phoenix and Mesa. A 7 kW system costs around $18,200 gross; after the 30 percent federal tax credit, net cost is approximately $12,700. SRP residential installations are usually sold with 10 kWh+ of battery storage; a typical solar + storage install runs $30,000 to $40,000 gross before incentives.",
    },
    {
      q: "Is solar worth it in Chandler on SRP?",
      a: "Yes with properly-sized storage, often not without. SRP's demand charge makes solar-only economics meaningfully worse than APS's: solar-only pays back in 12 to 15 years, while storage-attached systems that reduce the peak demand hour pay back in 7 to 10 years.",
    },
  ],
};
