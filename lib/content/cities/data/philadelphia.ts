import type { City } from "../types";

export const PHILADELPHIA: City = {
  slug: "philadelphia",
  stateSlug: "pennsylvania",
  name: "Philadelphia",
  title: "Solar in Philadelphia: PECO, AEPS SRECs and city permits",
  metaTitle: "Solar Companies in Philadelphia: PECO, SRECs, Permits",
  metaDescription:
    "Honest guide to solar in Philadelphia: PECO retail net metering, Pennsylvania AEPS SREC market, City of Philadelphia Licenses and Inspections permits, and running a solar company in SE Pennsylvania.",
  answer:
    "Philadelphia is served by PECO under Pennsylvania's retail net metering. Pennsylvania also has an active SREC market under the Alternative Energy Portfolio Standards (AEPS), currently paying residential installations around $30 to $40 per SREC. The stacked federal credit, retail NEM and SRECs make Philly economics reasonable despite the modest sun hours. Permits run through City of Philadelphia L&I.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.3,
    sunnyDays: 207,
    note: "Philadelphia gets around 4.3 peak sun hours per day with 207 sunny days per year, moderate for solar. Winter snow reduces annual production by 5 to 15 percent for most residential installations. Urban rowhouse housing stock in Philly limits roof areas; many Philadelphia homes support only 5 to 7 kW arrays rather than the 10+ kW suburban average.",
  },
  market: {
    metroPopulationK: 6190,
    averageCostPerWatt: 3.05,
    leadCostUsd: { low: 130, high: 230 },
    installerDensity: "High",
  },
  utilities: [
    "PECO Energy, investor-owned (Exelon subsidiary), serves Philadelphia and most of Delaware, Montgomery, Chester, Bucks counties",
    "PPL Electric Utilities serves parts of eastern Pennsylvania outside the Philadelphia metro",
    "Various municipal utilities (Butler, Chambersburg, others) serve specific pockets",
  ],
  permits: {
    office: "City of Philadelphia Department of Licenses and Inspections (L&I)",
    turnaroundWeeks: "4 to 8 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Philadelphia Department of Licenses and Inspections typically runs residential solar permits in 4 to 8 weeks. SolarAPP+ is not accepted. Rowhouse installations commonly require structural engineering review for party-wall load distribution. Suburban Montgomery, Delaware, Chester and Bucks county jurisdictions run 2 to 5 weeks typically. PECO interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Philadelphia means working in a dense urban market with rowhouse-dominated housing stock where party-wall structural review and smaller roof areas are the norm. The best Philly operators handle both PECO retail NEM and the PA SREC market registration (SRECs are tradeable certificates sold through aggregators). Rowhouse specialists outperform suburban generalists in Philadelphia proper; suburban installers focused on Main Line and Bucks County single-family homes have different economics. Lead costs run $130 to $230 on Google search.",
  faq: [
    {
      q: "Does PECO have net metering?",
      a: "Yes. PECO offers retail-rate net metering for residential solar systems up to 50 kW AC under Pennsylvania PUC rules. Credits accrue monthly at retail; annual true-up at year-end with excess typically rolled forward rather than paid out.",
    },
    {
      q: "What are Pennsylvania SRECs?",
      a: "Pennsylvania's Alternative Energy Portfolio Standards (AEPS) programme creates Solar Renewable Energy Credits (SRECs) for residential solar generation: one SREC per megawatt-hour. Current PA SRECs trade at approximately $30 to $40 per SREC (the market fluctuates). A typical 7 kW system producing 8,000 kWh annually earns 8 SRECs per year, worth $240 to $320. SRECs are sold through aggregators who handle the registration and sale.",
    },
    {
      q: "How long does a solar permit take in Philadelphia?",
      a: "City of Philadelphia Department of Licenses and Inspections typically runs residential solar permits in 4 to 8 weeks. Rowhouse installations commonly require additional structural review. Suburban Montgomery, Delaware, Chester and Bucks counties run 2 to 5 weeks typically. PECO interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Philadelphia?",
      a: "Philadelphia runs about $3.05 per watt installed for residential, higher than suburban PA because of urban permit burden, meaning a 5 kW system (typical for Philly rowhouses) costs around $15,300 gross. After the 30 percent federal tax credit, net cost is approximately $10,700. SREC income adds roughly $200 to $250 per year on top.",
    },
    {
      q: "Is solar worth it in Philadelphia?",
      a: "Yes for Philadelphia homes with suitable roofs. The combination of PECO retail NEM, PA SREC income and the federal tax credit makes residential solar payback typically 9 to 12 years. Rowhouse installations with smaller systems pay back similarly because the fixed costs are proportionally larger.",
    },
  ],
};
