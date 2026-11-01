import type { State } from "../types";

export const IDAHO: State = {
  slug: "idaho",
  name: "Idaho",
  abbr: "ID",
  title: "Solar in Idaho: market, Idaho Power export compensation and permits",
  metaTitle: "Solar Companies in Idaho: Idaho Power, Permits, NEM",
  metaDescription:
    "Honest guide to Idaho solar: market size, Idaho Power's post-NEM Export Credit Rate, Rocky Mountain Power service, and running a solar company in Idaho.",
  answer:
    "Idaho is the twenty-ninth-largest US solar market with over 950 MW installed. Residential has been reshaped by Idaho Power's 2024 shift from retail net metering to the Export Credit Rate (ECR), which credits exports at a hourly rate derived from avoided energy cost (around $0.044 to $0.057 per kWh depending on hour). The economics now favour system sizing to annual self-consumption and storage attachment for homes with meaningful afternoon load gaps.",
  published: "2026-11-01",
  market: {
    installedCapacityMw: 950,
    homesPoweredK: 143,
    percentOfElectricity: 4,
    jobs: 1200,
    averageCostPerWatt: 2.6,
    nationalRank: 29,
  },
  marketNotes:
    "Idaho's solar market grew rapidly in the mid-2010s under retail NEM. Idaho Power's 2024 ECR transition and Rocky Mountain Power's earlier Net Billing Service Schedule change reshaped the residential economics. The federal tax credit remains the dominant incentive. Treasure Valley (Boise, Nampa, Meridian) dominates the residential market.",
  netMetering: {
    status: "Net billing / avoided cost",
    explanation:
      "Idaho Power replaced retail net metering with the Export Credit Rate (ECR) in 2024 for new residential solar customers. Exports credit at an hourly rate derived from avoided energy cost (approximately $0.044 to $0.057 per kWh depending on time of day). Pre-2024 customers are grandfathered on retail NEM. Rocky Mountain Power customers in eastern Idaho operate under PacifiCorp's Net Billing Service Schedule.",
  },
  averageRate: 0.11,
  rateNote:
    "Idaho residential rates average around $0.11 per kWh at Idaho Power, among the lower in the US due to abundant hydroelectric generation. Rocky Mountain Power residential rates run similar. Low rates stretch solar payback compared with Sun Belt peers.",
  utilities: ["Idaho Power, investor-owned, serves most of southern Idaho including Boise metro", "Rocky Mountain Power (PacifiCorp subsidiary), serves most of eastern Idaho", "Avista Utilities serves northern Idaho (Lewiston, Coeur d'Alene)", "Various electric cooperatives (United Electric Cooperative, Idaho County Light & Power) serve rural areas"],
  incentives: [
    {
      name: "Idaho Residential Alternative Energy Tax Deduction",
      text: "Idaho offers a 40 percent state income tax deduction (not credit) on the installed cost of residential solar systems, capped at $5,000 in year one and $20,000 total over 4 years. Deduction value depends on marginal tax rate; for most homeowners this represents 2 to 3 percent of system cost in actual tax savings.",
    },
    {
      name: "Sales-tax exemption",
      text: "Idaho exempts residential solar PV equipment from the state's 6 percent sales tax under the renewable energy equipment exemption.",
    },
    {
      name: "No state property-tax exemption",
      text: "Idaho does not have a statewide property-tax exemption for residential solar. The added value may be included in assessment at the county level; check with the local assessor.",
    },
  ],
  permits:
    "Permit timelines in Idaho vary by jurisdiction. Boise, Meridian, Nampa and Caldwell commonly take 2 to 4 weeks for residential. Ada County, Canyon County and smaller counties can be faster or similar. SolarAPP+ is in pilot in Boise but not broadly deployed. Interconnection with Idaho Power typically runs 3 to 6 weeks post-install.",
  installerLandscape:
    "Running a solar company in Idaho means working in a market where the 2024 ECR transition has shifted economics toward self-consumption sizing. The best Idaho operators run honest annual load-match analyses before quoting, model Idaho Power's time-varying ECR into payback calculations, and understand the three-utility split (Idaho Power, Rocky Mountain Power, Avista) that applies at state boundaries. Low electric rates mean Idaho solar is sold more on energy independence and locking in rates than on fast payback.",
  faq: [
    {
      q: "Does Idaho Power have net metering?",
      a: "Not retail-rate for new customers since 2024. Idaho Power's Export Credit Rate (ECR) credits residential solar exports at an hourly rate derived from avoided energy cost (approximately $0.044 to $0.057 per kWh depending on time of day). Pre-2024 customers are grandfathered on retail NEM.",
    },
    {
      q: "How much does solar cost in Idaho?",
      a: "Residential solar in Idaho averages around $2.60 per watt installed, meaning a typical 7 kW system costs about $18,200 gross. After the 30 percent federal tax credit, net cost is approximately $12,700. The Idaho state tax deduction adds modest additional savings depending on marginal tax rate.",
    },
    {
      q: "Is solar worth it in Idaho?",
      a: "For Idaho homes with high electricity use and south-facing roofs sized to self-consumption, yes: payback typically runs 10 to 14 years with the federal tax credit. Low retail rates (around $0.11 per kWh) and the ECR for exports stretch payback compared with Sun Belt peers. Right-sized systems that match annual load pencil out better than oversized ones under the ECR.",
    },
    {
      q: "What is the Idaho state solar tax deduction?",
      a: "A 40 percent state income tax deduction (not credit) on residential solar system cost, capped at $5,000 in year one and $20,000 total over 4 years. The deduction value depends on marginal state income tax rate; for most Idaho homeowners this represents 2 to 3 percent of system cost in actual tax savings, modest compared with the federal tax credit.",
    },
  ],
};
