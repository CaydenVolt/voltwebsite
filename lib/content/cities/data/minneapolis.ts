import type { City } from "../types";

export const MINNEAPOLIS: City = {
  slug: "minneapolis",
  stateSlug: "minnesota",
  name: "Minneapolis",
  title: "Solar in Minneapolis: Xcel Energy, Solar Rewards and winter reality",
  metaTitle: "Solar Companies in Minneapolis: Xcel Energy, Permits, Winter",
  metaDescription:
    "Honest guide to solar in Minneapolis: Xcel Energy Minnesota net metering and Solar Rewards production incentive, City of Minneapolis permits, winter snow derating, and running a solar company in the Twin Cities.",
  answer:
    "Minneapolis is served by Xcel Energy Minnesota under full retail net metering plus the Solar*Rewards production incentive, which pays per-kWh for 10 years. Together with the federal tax credit, the stacked incentives keep Twin Cities solar economics working despite the modest sun hours and significant winter snow derating.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.3,
    sunnyDays: 198,
    note: "Minneapolis gets around 4.3 peak sun hours per day with 198 sunny days per year, moderate for solar given the latitude. Winter snow is the dominant climate factor; snow accumulation on panels during November through March reduces annual production by 15 to 25 percent for most Twin Cities residential installations. Steep south-facing roofs shed snow fastest; low-angle flat-roof installs retain snow longer.",
  },
  market: {
    metroPopulationK: 3690,
    averageCostPerWatt: 3.0,
    leadCostUsd: { low: 110, high: 200 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Xcel Energy Minnesota, investor-owned, serves Minneapolis and most of the western Twin Cities",
    "Minnesota Power serves northeastern Minnesota (not the Twin Cities)",
    "Dakota Electric Association serves parts of Dakota County south of Minneapolis",
    "Various municipal utilities (Minneapolis own smaller district operations, Shakopee Public Utilities, others) serve specific pockets",
  ],
  permits: {
    office: "City of Minneapolis Department of Community Planning and Economic Development",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Minneapolis Department of Community Planning and Economic Development typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Hennepin and Dakota county jurisdictions run their own permits with 2 to 5 week typical timelines. Xcel Energy interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Minneapolis means working in a market where the Solar*Rewards production incentive and retail net metering combine to make the economics viable despite winter snow derating. The best Twin Cities operators are explicit about winter snow production loss in sales conversations, size systems to annual load including conservative snow-season assumptions, and have templated Solar*Rewards registration workflows (10-year contract term, per-kWh payment on a block schedule). Lead costs run $110 to $200 on Google search.",
  faq: [
    {
      q: "Does Xcel Energy have net metering in Minneapolis?",
      a: "Yes. Xcel Energy Minnesota offers retail-rate net metering for residential solar systems up to 40 kW AC under Minnesota Public Utilities Commission rules. Credits accrue monthly at retail; annual true-up at year-end with excess paid at avoided cost (around $0.03 per kWh).",
    },
    {
      q: "What is Solar*Rewards?",
      a: "Solar*Rewards is Xcel Energy's residential solar production incentive programme in Minnesota. It pays per-kWh of solar generation for 10 years at a block-rate (currently approximately $0.07 per kWh for standard residential, confirm current block with Xcel before quoting). A typical 7 kW system producing 8,500 kWh annually earns around $600 per year for 10 years. Combined with the 30 percent federal tax credit, this is the main driver of Minneapolis solar economics.",
    },
    {
      q: "How long does a solar permit take in Minneapolis?",
      a: "City of Minneapolis Department of Community Planning and Economic Development typically runs residential solar permits in 3 to 5 weeks. Surrounding Hennepin and Dakota county jurisdictions run 2 to 5 weeks typically. Xcel Energy interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Minneapolis?",
      a: "Minneapolis runs about $3.00 per watt installed for residential, meaning a 7 kW system typically costs around $21,000 gross. After the 30 percent federal tax credit and the 10-year Solar*Rewards income stream, effective net cost is often $11,000 to $13,000.",
    },
    {
      q: "Is solar worth it in Minneapolis?",
      a: "Yes for Minneapolis homes with suitable roofs. The combination of Xcel retail net metering, Solar*Rewards, and the federal tax credit makes residential solar payback typically 8 to 11 years, competitive despite the winter snow derating and modest sun hours. Honest winter conversations in sales matter; underselling snow loss leads to year-one disappointment.",
    },
  ],
};
