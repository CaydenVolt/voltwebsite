import type { City } from "../types";

export const SPRINGFIELD_MA: City = {
  slug: "springfield-ma",
  stateSlug: "massachusetts",
  name: "Springfield",
  title: "Solar in Springfield MA: Eversource Western, SMART and permits",
  metaTitle: "Solar Companies in Springfield MA: Eversource, SMART, Permits",
  metaDescription:
    "Honest guide to solar in Springfield Massachusetts: Eversource Western MA net metering, SMART incentive, City of Springfield permits, Pioneer Valley climate, and running a solar company in Hampden County.",
  answer:
    "Springfield MA is served by Eversource Western MA under retail-rate net metering plus the SMART production incentive. SMART block rates for Eversource Western MA territory differ from Eversource Eastern MA (Boston). Permits run through the City of Springfield Office of Planning and Economic Development.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.2,
    sunnyDays: 199,
    note: "Springfield MA gets around 4.2 peak sun hours per day with 199 sunny days per year, moderate for solar. Winter snow derating is substantial (10 to 20 percent annual loss). Pioneer Valley climate has cold winters and warm summers.",
  },
  market: {
    metroPopulationK: 700,
    averageCostPerWatt: 3.1,
    leadCostUsd: { low: 130, high: 220 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Eversource Energy (Western Massachusetts Electric Company legal entity), investor-owned, serves most of the Springfield MA metro",
    "Various municipal utilities (Chicopee Electric Light, Holyoke Gas & Electric, South Hadley Electric Light, others) serve specific cities",
  ],
  permits: {
    office: "City of Springfield Office of Planning and Economic Development",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Springfield Office of Planning and Economic Development typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Hampden County jurisdictions run 2 to 5 weeks typically. Eversource interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Springfield MA means working under Eversource Western MA (different legal entity from Eversource Eastern MA that serves Boston). The best Springfield operators have templated SMART registration workflows for the Eversource Western MA block (which runs at a slightly different rate from Boston), handle Eversource interconnection fluently, and model winter snow derating honestly. Lead costs run $130 to $220 on Google search.",
  faq: [
    {
      q: "Does Eversource Western MA have net metering?",
      a: "Yes, retail-rate net metering for residential solar systems up to 25 kW AC under Massachusetts DPU rules. Credits accrue monthly at retail; annual true-up at year-end.",
    },
    {
      q: "Is Springfield MA SMART block different from Boston?",
      a: "Yes. SMART block rates differ by utility territory. Eversource Western MA (Springfield area) and Eversource Eastern MA (Boston area) are different legal entities with separate SMART block rates. Confirm current block rate with the Massachusetts DOER before quoting.",
    },
    {
      q: "How long does a solar permit take in Springfield MA?",
      a: "City of Springfield Office of Planning and Economic Development typically runs residential solar permits in 3 to 5 weeks. Surrounding Hampden County jurisdictions run 2 to 5 weeks typically. Eversource interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Springfield MA?",
      a: "Springfield MA runs about $3.10 per watt installed for residential, meaning a 7 kW system typically costs around $21,700 gross. After the 30 percent federal tax credit, the 10-year SMART income stream, and the Massachusetts personal income-tax credit (15 percent capped $1,000), effective net cost is often $10,000 to $12,500.",
    },
    {
      q: "Is solar worth it in Springfield MA?",
      a: "Yes for Springfield homes with suitable roofs. The combination of Eversource retail NEM, SMART payments, state tax credit, and federal credit makes residential solar payback typically 7 to 10 years, similar to Boston but with slightly longer payback because of harsher Pioneer Valley winter weather.",
    },
  ],
};
