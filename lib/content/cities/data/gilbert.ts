import type { City } from "../types";

export const GILBERT: City = {
  slug: "gilbert",
  stateSlug: "arizona",
  name: "Gilbert",
  title: "Solar in Gilbert: SRP demand charges and East Valley permits",
  metaTitle: "Solar Companies in Gilbert: SRP, Demand Charges, Permits",
  metaDescription:
    "Honest guide to solar in Gilbert: Salt River Project Customer Generation plan with demand charges, Town of Gilbert permits, East Valley Phoenix dynamics, and running a solar company in Gilbert.",
  answer:
    "Gilbert is served almost entirely by SRP under the Customer Generation plan with its demand-charge structure. Battery storage that reduces peak demand is essentially required for favourable solar payback here, same as Mesa, Chandler and Scottsdale. Town of Gilbert Development Services runs residential solar permits in 2 to 4 weeks.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 6.5,
    sunnyDays: 299,
    note: "Gilbert has essentially the same climate as the rest of the East Valley: 6.5 peak sun hours per day, 299 sunny days per year, extreme summer heat. Panel temperature coefficients and racking airflow matter critically.",
  },
  market: {
    metroPopulationK: 275,
    averageCostPerWatt: 2.65,
    leadCostUsd: { low: 140, high: 250 },
    installerDensity: "Saturated",
  },
  utilities: [
    "Salt River Project (SRP), public utility, serves most of Gilbert",
    "Arizona Public Service (APS) serves small pockets of west Gilbert",
  ],
  permits: {
    office: "Town of Gilbert Development Services",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "Town of Gilbert Development Services typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is not accepted. Master-planned community HOAs across Gilbert (Val Vista Lakes, Agritopia, Seville, others) require aesthetic review that adds 2 to 6 weeks. SRP interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Gilbert means working under SRP's demand-charge-dominated economics (same as Mesa, Chandler, Tempe) plus Gilbert's HOA-dense master-planned housing. The best Gilbert operators size storage to shave peak demand, carry fluency in common Gilbert HOA guidelines, and spec equipment that handles extreme heat. Lead costs run $140 to $250 on Google search.",
  faq: [
    {
      q: "Is Gilbert on SRP or APS?",
      a: "Most of Gilbert is on SRP (Salt River Project public utility). Small pockets of west Gilbert are on APS. SRP uses the Customer Generation plan with demand charges; APS uses the Resource Comparison Proxy export rate. Confirming utility by address matters.",
    },
    {
      q: "Do Gilbert HOAs allow solar?",
      a: "Yes. Arizona state law prohibits HOAs from unreasonably restricting solar, but they can impose aesthetic conditions. Most Gilbert master-planned communities require architectural review, adding 2 to 6 weeks to project timelines.",
    },
    {
      q: "How much does solar cost in Gilbert?",
      a: "Gilbert runs about $2.65 per watt installed for residential, meaning a 7 kW system typically costs around $18,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,000. SRP installations are usually sold with 10 kWh+ storage.",
    },
    {
      q: "Is solar worth it in Gilbert on SRP?",
      a: "Yes with properly-sized storage, often not without. SRP's demand charge makes solar-only payback stretch to 12 to 15 years; storage-attached systems that reduce the peak demand hour pay back in 7 to 10 years.",
    },
  ],
};
