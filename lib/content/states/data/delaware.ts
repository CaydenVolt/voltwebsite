import type { State } from "../types";

export const DELAWARE: State = {
  slug: "delaware",
  name: "Delaware",
  abbr: "DE",
  title: "Solar in Delaware: market, incentives and net metering reality",
  metaTitle: "Solar Companies in Delaware: Delmarva Power, SREC, Permits",
  metaDescription:
    "Honest guide to Delaware solar: market size, Delmarva Power retail net metering, Delaware SREC market, Green Energy Program grants, and running a solar company in DE.",
  answer:
    "Delaware is the twenty-eighth-largest US solar market with over 460 MW installed, which is substantial given the small population. Residential solar operates under retail net metering at Delmarva Power plus the Delaware SREC market (one of the stronger regional markets at $25 to $40 per SREC) and the DE Green Energy Program grants ($0.70 per watt up to $5,000). Together with the federal tax credit, the stacked incentives make Delaware economics competitive.",
  published: "2026-11-01",
  market: {
    installedCapacityMw: 460,
    homesPoweredK: 70,
    percentOfElectricity: 7,
    jobs: 790,
    averageCostPerWatt: 2.9,
    nationalRank: 28,
  },
  marketNotes:
    "Delaware's residential solar market has grown steadily under its stable regulatory regime: Delmarva Power retail NEM, DE SRECs, and the Green Energy Program grant. The small state means a saturated feel at the installer level despite only a few hundred MW total installed. New Castle County dominates the market; Kent and Sussex are smaller markets.",
  netMetering: {
    status: "Full retail net metering",
    explanation:
      "Delaware offers full retail net metering for residential solar systems up to 25 kW AC at Delmarva Power. Credits accrue monthly at retail; annual true-up at year-end with excess credits usually rolled forward (not paid out). Pre-RPS-cap-era customers are grandfathered.",
  },
  averageRate: 0.14,
  rateNote:
    "Delaware residential rates average around $0.14 per kWh at Delmarva Power. Rates have risen approximately 25 percent since 2022 driven by capacity market changes in PJM.",
  utilities: ["Delmarva Power (Exelon subsidiary), investor-owned, serves most of Delaware", "Delaware Electric Cooperative serves parts of Kent and Sussex counties", "Various municipal utilities (New Castle Municipal, Dover Light & Power, Milford Electric) serve specific cities"],
  incentives: [
    {
      name: "Delaware Green Energy Program grant",
      text: "The Green Energy Program pays residential solar installations $0.70 per watt DC capped at $5,000 (as of 2025, confirm current rate before quoting). Administered by the Delaware Division of Energy & Climate. Stacks with the 30 percent federal credit and SRECs.",
    },
    {
      name: "Delaware SREC market",
      text: "Delaware's Renewable Portfolio Standard creates a market for Solar Renewable Energy Credits (SRECs): one SREC per megawatt-hour of generation. Current DE SRECs trade at approximately $25 to $40 per SREC. A typical 7 kW system producing 8,500 kWh annually earns 8 to 9 SRECs per year worth $200 to $360.",
    },
    {
      name: "Property-tax exemption",
      text: "Delaware exempts the added value of residential solar systems from property-tax assessment under 9 Del.C. 8117. Automatic.",
    },
    {
      name: "No state income tax credit",
      text: "Delaware does not currently offer a state income tax credit for residential solar. The 30 percent federal Residential Clean Energy Credit remains the primary tax-based incentive.",
    },
  ],
  permits:
    "Permit timelines in Delaware are generally fast. City of Wilmington, New Castle County, Kent County and Sussex County commonly take 2 to 4 weeks for residential. SolarAPP+ is in pilot but not broadly deployed. Interconnection with Delmarva Power typically runs 3 to 5 weeks post-install.",
  installerLandscape:
    "Running a solar company in Delaware means working in a small, mature market where retail NEM and stacked incentives (SRECs + Green Energy Program grant + federal credit) make the sales math straightforward. The best Delaware operators have templated workflows for all three incentive programmes and relationships with the few residential finance companies that work in DE. Lead costs run $90 to $170 on Google search, low because installer density is modest. The three-county split (New Castle urban, Kent and Sussex more rural) matters for logistics.",
  faq: [
    {
      q: "Does Delaware have net metering?",
      a: "Yes, retail-rate net metering for residential solar systems up to 25 kW AC at Delmarva Power. Credits accrue monthly at retail; annual true-up at year-end with excess rolled forward.",
    },
    {
      q: "What is the Delaware Green Energy Program?",
      a: "The Green Energy Program pays residential solar installations $0.70 per watt DC capped at $5,000 (confirm current rate before quoting). Administered by the Delaware Division of Energy & Climate. The grant is paid directly to the homeowner after installation and stacks with the federal tax credit and SREC income.",
    },
    {
      q: "How much does solar cost in Delaware?",
      a: "Residential solar in Delaware averages around $2.90 per watt installed, meaning a typical 7 kW system costs about $20,300 gross. After the 30 percent federal tax credit, the Green Energy Program grant ($0.70 per watt capped $5,000), and ten years of SREC income (worth approximately $2,000 to $3,000 present value), effective net cost is often $8,500 to $10,500.",
    },
    {
      q: "Is solar worth it in Delaware?",
      a: "Yes substantially. The combination of Delmarva Power retail NEM, the Green Energy Program grant, DE SREC income, and the 30 percent federal credit makes residential solar payback typically 6 to 9 years for Delaware homes with suitable roofs. Among the stronger Mid-Atlantic solar economies.",
    },
  ],
};
