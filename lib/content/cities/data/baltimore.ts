import type { City } from "../types";

export const BALTIMORE: City = {
  slug: "baltimore",
  stateSlug: "maryland",
  name: "Baltimore",
  title: "Solar in Baltimore: BGE, SRECs and the MD battery credit",
  metaTitle: "Solar Companies in Baltimore: BGE, SRECs, Battery Credit, Permits",
  metaDescription:
    "Honest guide to solar in Baltimore: BGE net metering, Maryland's strong SREC market, state battery storage tax credit, City of Baltimore permits, and running a solar company in central Maryland.",
  answer:
    "Baltimore has one of the strongest residential solar economies in the US: BGE retail net metering, a robust Maryland SREC market (currently $50 to $70 per SREC), the Maryland Residential Clean Energy Grant Program ($1,000 per installation), and the state Energy Storage Tax Credit (30 percent of battery cost up to $5,000). Permits run through Baltimore Department of Housing and Community Development.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.5,
    sunnyDays: 210,
    note: "Baltimore gets around 4.5 peak sun hours per day with 210 sunny days per year, moderate for solar. Winter snow is a modest factor; typical annual snow production loss is 5 to 10 percent. Hurricane remnants occasionally bring heavy rain and wind; standard Maryland Building Code wind-load design is sufficient for most installations.",
  },
  market: {
    metroPopulationK: 2820,
    averageCostPerWatt: 2.95,
    leadCostUsd: { low: 110, high: 200 },
    installerDensity: "High",
  },
  utilities: [
    "Baltimore Gas and Electric (BGE), investor-owned (Exelon subsidiary), serves most of the Baltimore metro",
    "Potomac Electric Power (Pepco) serves parts of Montgomery and Prince George's counties",
    "Delmarva Power serves Eastern Shore communities",
    "SMECO (Southern Maryland Electric Cooperative) serves parts of southern Maryland",
  ],
  permits: {
    office: "Baltimore Department of Housing and Community Development, plus Baltimore County Permit Services",
    turnaroundWeeks: "3 to 6 weeks for standard residential",
    solarApp: "Not accepted",
    note: "Baltimore Department of Housing and Community Development typically runs residential solar permits in 3 to 6 weeks. SolarAPP+ is not accepted. Baltimore County, Anne Arundel County, Howard County and Harford County each have their own permit offices with 2 to 5 week typical timelines. BGE interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Baltimore means working in a market with one of the strongest stacked-incentive stacks in the US. The best Baltimore operators have templated workflows for the Maryland Residential Clean Energy Grant application, Maryland SREC registration (sold through aggregators), and the Energy Storage Tax Credit (which is a real sales driver for battery-attached quotes). Lead costs run $110 to $200 on Google search. Suburban Baltimore County and Anne Arundel County are substantially faster for permitting than city of Baltimore proper.",
  faq: [
    {
      q: "Does BGE have net metering?",
      a: "Yes, retail-rate net metering for residential solar systems up to 2 MW AC under Maryland PSC rules. Credits accrue monthly at retail; annual true-up at year-end with excess credited at the generation rate (not full retail).",
    },
    {
      q: "What are Maryland SRECs?",
      a: "Maryland Renewable Portfolio Standards creates a market for Solar Renewable Energy Credits: one SREC per megawatt-hour of residential generation. Current MD SRECs trade at approximately $50 to $70 per SREC (confirm current market with aggregators before quoting). A typical 7 kW system producing 8,500 kWh annually earns 8 to 9 SRECs per year worth $400 to $600.",
    },
    {
      q: "What is the Maryland battery storage tax credit?",
      a: "Maryland's Energy Storage Tax Credit provides a 30 percent credit on battery storage system cost, capped at $5,000 per system. The credit is applied to Maryland state income tax and stacks with the 30 percent federal tax credit (which can apply to batteries charged solely by solar). The combined federal + state credit on a $15,000 battery can exceed 55 percent.",
    },
    {
      q: "How long does a solar permit take in Baltimore?",
      a: "Baltimore Department of Housing and Community Development typically runs residential solar permits in 3 to 6 weeks. Baltimore County, Anne Arundel, Howard and Harford counties run 2 to 5 weeks typically. BGE interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Baltimore?",
      a: "Baltimore runs about $2.95 per watt installed for residential, meaning a 7 kW system typically costs around $20,700 gross. After the 30 percent federal tax credit, Maryland Residential Clean Energy Grant ($1,000), and SREC income (worth around $5,000 to $7,000 over 10 years), effective net cost is often $9,000 to $12,000.",
    },
    {
      q: "Is solar worth it in Baltimore?",
      a: "Yes substantially. The combination of BGE retail NEM, strong MD SREC income, the state clean energy grant, federal tax credit, and the state battery tax credit (for storage attachment) makes residential solar payback typically 6 to 9 years for Baltimore homes with suitable roofs. Among the strongest payback economics in the US.",
    },
  ],
};
