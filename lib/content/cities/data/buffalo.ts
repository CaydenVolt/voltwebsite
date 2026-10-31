import type { City } from "../types";

export const BUFFALO: City = {
  slug: "buffalo",
  stateSlug: "new-york",
  name: "Buffalo",
  title: "Solar in Buffalo: National Grid, NY-Sun and lake-effect snow",
  metaTitle: "Solar Companies in Buffalo: National Grid, NY-Sun, Permits",
  metaDescription:
    "Honest guide to solar in Buffalo: National Grid net metering, NY-Sun installer rebate, Erie County permits, lake-effect snow derating, and running a solar company in Western New York.",
  answer:
    "Buffalo is served by National Grid New York under full retail net metering (continuing to be more favourable than Con Edison's CBC-reduced NEM in NYC). NY-Sun installer rebates apply at the Upstate block rates, which run slightly higher than NYC block rates. Lake-effect snow from Lake Erie is the dominant climate factor; honest winter production modelling is essential.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 3.9,
    sunnyDays: 166,
    note: "Buffalo has lower sun hours and fewer sunny days than most US metros: 3.9 peak sun hours per day, 166 sunny days per year. Lake-effect snow from Lake Erie causes significant panel coverage in December through February; 15 to 25 percent annual production loss attributable to winter snow is typical for Buffalo residential installations. South-facing panels at steeper pitches shed snow faster but still accumulate during heavy lake-effect events.",
  },
  market: {
    metroPopulationK: 1130,
    averageCostPerWatt: 3.1,
    leadCostUsd: { low: 100, high: 190 },
    installerDensity: "Moderate",
  },
  utilities: [
    "National Grid New York (NIMO Niagara Mohawk legal entity), investor-owned, serves most of Western NY including Buffalo",
    "New York State Electric & Gas (NYSEG, Avangrid subsidiary) serves parts of outlying areas",
    "Municipal utilities (Jamestown Board of Public Utilities, others) serve specific pockets",
  ],
  permits: {
    office: "City of Buffalo Department of Permit and Inspection Services, plus Erie County Department of Public Works",
    turnaroundWeeks: "3 to 6 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Buffalo Department of Permit and Inspection Services typically runs residential solar permits in 3 to 6 weeks. SolarAPP+ is not accepted. Surrounding Erie County jurisdictions run 2 to 5 weeks typically. National Grid interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Buffalo means working in a market with real climate challenges (lake-effect snow) but strong economics from stacked NY incentives. The best Buffalo operators are explicit about winter snow derating in sales conversations, size systems to annual load including conservative snow-season production assumptions, and have templated NY-Sun registration workflows for the Upstate region block pricing. Lead costs run $100 to $190 on Google search, among the lowest in NY State because national installer competition is thinner in Western NY.",
  faq: [
    {
      q: "Does National Grid have retail net metering in Buffalo?",
      a: "Yes. National Grid New York offers full retail net metering for residential solar systems up to 25 kW AC in Western NY. Unlike Con Edison in NYC, National Grid's NEM is not currently subject to Customer Benefit Contribution fees (confirm current state before quoting). Credits accrue monthly at retail; annual true-up at avoided cost.",
    },
    {
      q: "What is the NY-Sun block rate for Buffalo?",
      a: "NY-Sun block pricing for Upstate NY (which includes Buffalo and Western NY) runs at the Upstate residential block, which is typically slightly higher per watt than the NYC or Long Island regions. Current block rates for new Upstate residential installations run approximately $0.40 to $0.70 per watt (confirm with NYSERDA before quoting). The rebate is paid to the installer and typically passed through.",
    },
    {
      q: "How much does lake-effect snow affect Buffalo solar?",
      a: "Lake-effect snow from Lake Erie typically reduces Buffalo residential solar annual production by 15 to 25 percent due to panel snow coverage during December through February. South-facing panels at steeper roof pitches (25 degrees or more) shed snow faster but still accumulate during the heaviest lake-effect events. Honest sales conversations model this derating; underselling winter loss leads to disappointed homeowners in year one.",
    },
    {
      q: "How much does solar cost in Buffalo?",
      a: "Buffalo runs about $3.10 per watt installed for residential, meaning a 7 kW system typically costs around $21,700 gross. After the 30 percent federal tax credit, NY-Sun installer rebate pass-through, NY State 25 percent solar credit (capped $5,000), and the 15-year property tax exemption, effective net cost is often $9,000 to $12,000.",
    },
    {
      q: "Is solar worth it in Buffalo?",
      a: "Yes for Buffalo homes with suitable roofs. The combination of retail net metering, NY-Sun installer rebate, NY State solar credit, federal credit and property tax exemption makes residential solar payback typically 7 to 10 years with the federal tax credit, slightly longer than NYC or Long Island because of the lake-effect-snow production loss but still competitive.",
    },
  ],
};
