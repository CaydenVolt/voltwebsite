import type { City } from "../types";

export const BOSTON: City = {
  slug: "boston",
  stateSlug: "massachusetts",
  name: "Boston",
  title: "Solar in Boston: Eversource, SMART, ISD permits",
  metaTitle: "Solar Companies in Boston: Eversource, SMART, Permits",
  metaDescription:
    "Honest guide to solar in Boston: Eversource net metering, Massachusetts SMART incentive, Boston Inspectional Services permits, winter snow derating, and running a solar company in Boston.",
  answer:
    "Boston solar economics are driven by three stacked incentives: Eversource retail-rate net metering, the Massachusetts SMART (Solar Massachusetts Renewable Target) incentive paying $0.08 to $0.15 per kWh for 10 years, and the 30 percent federal tax credit. Boston Inspectional Services Department permits run 3 to 6 weeks typically; winter snow derating is a real production factor that most installers under-model.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 4.1,
    sunnyDays: 201,
    note: "Boston gets around 4.1 peak sun hours per day with 201 sunny days per year, moderate for solar. Winter snow is a serious production factor: snow accumulation on panels can shut down a system for days at a time in January and February, with 10 to 20 percent annual production loss attributable to winter snow in most Boston residential installations. South-facing panels at steeper roof pitches (25 degrees or more) shed snow faster than low-angle flat installs.",
  },
  market: {
    metroPopulationK: 4950,
    averageCostPerWatt: 3.25,
    leadCostUsd: { low: 160, high: 290 },
    installerDensity: "High",
  },
  utilities: [
    "Eversource Energy, investor-owned, serves most of Boston proper and surrounding Suffolk, Norfolk, Middlesex counties",
    "National Grid serves parts of surrounding areas including Dorchester and some southern suburbs",
    "Municipal utilities (Belmont, Concord, Reading, Taunton, others) serve specific suburbs with their own solar programmes",
  ],
  permits: {
    office: "Boston Inspectional Services Department (ISD)",
    turnaroundWeeks: "3 to 6 weeks for standard residential",
    solarApp: "Not accepted",
    note: "Boston ISD typically runs residential solar permits in 3 to 6 weeks. SolarAPP+ is not accepted in Boston as of 2026. Multi-unit and triple-decker buildings (common in Boston neighbourhoods like Dorchester, South Boston, East Boston) require condo/co-op approval in addition to ISD permits. Eversource or National Grid interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Boston means operating in a market where the SMART incentive does serious economic work (a 7 kW system earns approximately $400 to $800 annually from SMART for 10 years, in addition to retail net metering savings). The best Boston operators have templated SMART registration workflows (SMART is capped by MW blocks that fill over time; registration timing matters), fluent Eversource and National Grid interconnection, and workflows for Boston's triple-decker and multi-unit housing stock, which brings condo approval processes most suburban installers do not handle. Lead costs run $160 to $290 on Google search. Snow-season production honesty in sales conversations builds trust that cheap installer underselling of winter loss destroys.",
  faq: [
    {
      q: "Does Eversource have net metering in Boston?",
      a: "Yes, retail-rate net metering for residential solar systems up to 25 kW AC. Eversource credits exports at the retail rate monthly; annual true-up is either rolled over or paid at avoided cost. Interconnection application runs through Eversource's online portal with typical approval in 4 to 8 weeks post-install.",
    },
    {
      q: "What is the Massachusetts SMART incentive?",
      a: "The Solar Massachusetts Renewable Target (SMART) programme is Massachusetts's current residential solar incentive, which pays per-kWh of generation for 10 years. Current block rates for residential installations are approximately $0.08 to $0.15 per kWh depending on utility territory and whether storage is attached (confirm current block rate with the Massachusetts DOER before quoting; the rate steps down as program MW caps are hit). A typical 7 kW system earns $400 to $800 annually from SMART for 10 years.",
    },
    {
      q: "How long does a solar permit take in Boston?",
      a: "Boston Inspectional Services Department typically runs residential solar permits in 3 to 6 weeks. SolarAPP+ is not accepted. Multi-unit buildings add condo/co-op approval in parallel. Eversource or National Grid interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Boston?",
      a: "Boston runs about $3.25 per watt installed for residential, higher than most of the US because of the urban permit burden and labour costs, meaning a 7 kW system typically costs around $22,800 gross. After the 30 percent federal tax credit and the 10-year SMART income stream (present value approximately $3,500 to $6,500), effective net cost is often $10,000 to $13,000.",
    },
    {
      q: "How does winter snow affect Boston solar?",
      a: "Snow accumulation on panels during January and February typically reduces annual production by 10 to 20 percent for Boston residential installations. Panels at steeper roof pitches (25 degrees or more) shed snow faster; flat-roof commercial-style installations lose more production per snow event. Honest sales conversations model winter snow derating into annual yield; underselling it is a common installer mistake that leads to disappointed customers in year one.",
    },
  ],
};
