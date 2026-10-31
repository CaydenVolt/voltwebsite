import type { City } from "../types";

export const NEWARK: City = {
  slug: "newark",
  stateSlug: "new-jersey",
  name: "Newark",
  title: "Solar in Newark: PSE&G, SuSI SREC-II and Essex County permits",
  metaTitle: "Solar Companies in Newark: PSE&G, SuSI SREC-II, Permits",
  metaDescription:
    "Honest guide to solar in Newark: PSE&G net metering, New Jersey Successor Solar Incentive (SuSI) SREC-II payments, City of Newark permits, and running a solar company in Essex County.",
  answer:
    "Newark is served by PSE&G, which offers retail-rate net metering under New Jersey rules. The dominant incentive is the Successor Solar Incentive (SuSI), which pays residential installations approximately $85 per SREC-II for 15 years (a 7 kW system produces around 9 SREC-IIs per year, worth $750 to $800 annually). This stacks with the federal tax credit to make NJ one of the strongest residential solar economics in the US.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 4.3,
    sunnyDays: 207,
    note: "Newark gets around 4.3 peak sun hours per day with 207 sunny days per year, moderate for solar. Winter snow accumulation reduces January and February production more than most installers model. Dense urban housing stock (rowhouses, multi-family) limits roof areas; many Newark homes support only 5 to 7 kW arrays, which is why the SREC-II payment per installed kW matters more than raw system size.",
  },
  market: {
    metroPopulationK: 310,
    averageCostPerWatt: 3.1,
    leadCostUsd: { low: 140, high: 240 },
    installerDensity: "High",
  },
  utilities: [
    "Public Service Electric & Gas (PSE&G), investor-owned, serves most of Essex County including Newark",
    "JCP&L (First Energy subsidiary) serves parts of surrounding counties",
    "Orange & Rockland (Con Edison subsidiary) serves parts of northeast NJ",
  ],
  permits: {
    office: "City of Newark Department of Engineering, plus Essex County for some projects",
    turnaroundWeeks: "4 to 8 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Newark Department of Engineering typically runs residential solar permits in 4 to 8 weeks, slower than suburban NJ because of the city's building inspection queue. SolarAPP+ is not accepted. Multi-unit buildings require additional engineering review. PSE&G interconnection post-install typically runs 4 to 6 weeks.",
  },
  installerLandscape:
    "Running a solar company in Newark means working in a market where the SuSI SREC-II payments do most of the economic work for the sale. The headline sales conversation is '15 years of SREC-II income plus the 30 percent federal credit plus retail net metering' rather than 'cheap electricity savings', because NJ's retail electric rates are modest. The best Newark operators have templated SuSI registration workflows (the SREC-II registration must happen within 180 days of permission to operate or the installation forfeits the incentive), fluent PSE&G interconnection and strong relationships with the limited pool of residential finance companies that work in NJ. Multi-family and small apartment installations are a growing niche. Lead costs run $140 to $240 on Google search.",
  faq: [
    {
      q: "Does PSE&G have net metering?",
      a: "Yes, retail-rate net metering for residential solar systems. PSE&G credits exports at the retail rate monthly; annual true-up at year-end is either rolled over or paid at avoided cost. Interconnection application runs through PSE&G's online solar portal with typical approval in 4 to 6 weeks post-install.",
    },
    {
      q: "What is SuSI (Successor Solar Incentive)?",
      a: "The Successor Solar Incentive, or SuSI, is New Jersey's current residential solar incentive programme, which replaced the TREC programme in 2021. SuSI pays residential installations approximately $85 per SREC-II (a certificate representing one megawatt-hour of generation) for a 15-year contract term. A typical 7 kW system produces around 9 SREC-IIs per year, worth $750 to $800 annually. The incentive stacks with the 30 percent federal tax credit.",
    },
    {
      q: "How long does a solar permit take in Newark?",
      a: "City of Newark Department of Engineering typically runs residential solar permits in 4 to 8 weeks. Suburban Essex County jurisdictions (East Orange, Montclair, West Orange) run 3 to 6 weeks typically. PSE&G interconnection post-install adds 4 to 6 weeks.",
    },
    {
      q: "How much does solar cost in Newark?",
      a: "Newark runs about $3.10 per watt installed for residential, higher than most of NJ because of the urban permit and engineering burden, meaning a 7 kW system typically costs around $21,700 gross. After the 30 percent federal tax credit and the 15-year SuSI SREC-II income stream (which has a present value of roughly $7,500 to $9,000 for a 7 kW system), effective net cost is often $7,000 to $9,000.",
    },
    {
      q: "Is solar worth it in Newark?",
      a: "Yes, substantially so. The combination of PSE&G retail net metering, 15 years of SuSI SREC-II payments, and the 30 percent federal tax credit makes residential solar payback typically 5 to 7 years for Newark homes with suitable roofs. The economics are among the strongest in the US; registering for SuSI within 180 days of permission to operate is essential.",
    },
  ],
};
