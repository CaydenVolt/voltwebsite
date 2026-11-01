import type { City } from "../types";

export const ALBANY: City = {
  slug: "albany",
  stateSlug: "new-york",
  name: "Albany",
  title: "Solar in Albany: National Grid, NY-Sun and capital region permits",
  metaTitle: "Solar Companies in Albany NY: National Grid, NY-Sun, Permits",
  metaDescription:
    "Honest guide to solar in Albany New York: National Grid New York net metering, NY-Sun installer rebate, City of Albany permits, Hudson Valley climate, and running a solar company in the capital region.",
  answer:
    "Albany is served by National Grid New York under retail-rate net metering plus NY-Sun installer rebates. The capital region's Hudson Valley climate is somewhat better for solar than Buffalo or Rochester (less lake-effect weather). Permits run through the City of Albany Department of Buildings and Regulatory Compliance.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.1,
    sunnyDays: 177,
    note: "Albany gets around 4.1 peak sun hours per day with 177 sunny days per year, moderate for the latitude. Winter snow derating is substantial but less severe than Buffalo or Rochester (no lake-effect weather). Summer thunderstorms reduce afternoon production more than most installers model.",
  },
  market: {
    metroPopulationK: 900,
    averageCostPerWatt: 3.05,
    leadCostUsd: { low: 100, high: 180 },
    installerDensity: "Moderate",
  },
  utilities: [
    "National Grid New York, investor-owned, serves most of the Albany metro",
    "New York State Electric & Gas (NYSEG, Avangrid subsidiary) serves parts of surrounding areas",
    "Central Hudson Gas & Electric serves parts of the mid-Hudson Valley",
  ],
  permits: {
    office: "City of Albany Department of Buildings and Regulatory Compliance",
    turnaroundWeeks: "3 to 6 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Albany Department of Buildings and Regulatory Compliance typically runs residential solar permits in 3 to 6 weeks. SolarAPP+ is not accepted. Historic district overlay in parts of downtown Albany adds aesthetic review. Surrounding Albany, Rensselaer, Schenectady and Saratoga county jurisdictions run their own permits with 2 to 5 week typical timelines. National Grid interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Albany means working in the New York capital region with stacked incentives (retail NEM, NY-Sun, state tax credit) and moderate climate challenges. The best Albany operators have templated NY-Sun workflows, understand historic district aesthetic constraints in parts of downtown Albany, and handle both National Grid and NYSEG interconnection fluently. Lead costs run $100 to $180 on Google search.",
  faq: [
    {
      q: "Does National Grid have net metering in Albany?",
      a: "Yes, retail-rate net metering for residential solar systems up to 25 kW AC under New York PSC rules. Credits accrue monthly at retail; annual true-up at avoided cost.",
    },
    {
      q: "What is NY-Sun for Albany?",
      a: "NY-Sun pays installer-side rebates for residential solar at Upstate NY block rates (typically $0.40 to $0.70 per watt as of 2026, confirm current block with NYSERDA). The rebate is paid to the installer and typically passed through to the homeowner.",
    },
    {
      q: "How long does a solar permit take in Albany?",
      a: "City of Albany Department of Buildings and Regulatory Compliance typically runs residential solar permits in 3 to 6 weeks. Surrounding counties (Rensselaer, Schenectady, Saratoga) run 2 to 5 weeks typically. National Grid interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Albany?",
      a: "Albany runs about $3.05 per watt installed for residential, meaning a 7 kW system typically costs around $21,400 gross. After the 30 percent federal tax credit, NY-Sun rebate pass-through, NY State solar credit, and property tax exemption, effective net cost is often $9,000 to $12,000.",
    },
    {
      q: "Is solar worth it in Albany?",
      a: "Yes for Albany homes with suitable roofs. The stacked NY incentives make residential solar payback typically 7 to 10 years. Hudson Valley climate is better for solar than Buffalo or Rochester because of less lake-effect weather.",
    },
  ],
};
