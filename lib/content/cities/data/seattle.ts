import type { City } from "../types";

export const SEATTLE: City = {
  slug: "seattle",
  stateSlug: "washington",
  name: "Seattle",
  title: "Solar in Seattle: Seattle City Light, retail NEM and heavy winter cloud",
  metaTitle: "Solar Companies in Seattle: Seattle City Light, Permits, NEM",
  metaDescription:
    "Honest guide to solar in Seattle: Seattle City Light retail net metering, Washington sales-tax exemption, City of Seattle permits, Pacific Northwest cloud cover, and running a solar company in Seattle.",
  answer:
    "Seattle is served by Seattle City Light (SCL), a public utility that offers retail-rate net metering for residential solar. The economics are harder than most US metros because Pacific Northwest cloud cover reduces annual production meaningfully and SCL's retail rates are among the lowest in the US (around $0.11 per kWh). The federal tax credit and the WA sales-tax exemption are the primary incentive drivers.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 3.6,
    sunnyDays: 152,
    note: "Seattle gets around 3.6 peak sun hours per day with 152 sunny days per year, among the lowest in the US. Pacific Northwest cloud cover from October through April reduces annual production meaningfully; November through February production is typically 70 percent lower than June through August. Honest annual yield modelling is essential; the strong summer production partially compensates for the heavy winter deficit, but overall payback is longer than Sun Belt peers.",
  },
  market: {
    metroPopulationK: 4020,
    averageCostPerWatt: 3.1,
    leadCostUsd: { low: 130, high: 230 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Seattle City Light (SCL), municipal utility, serves the city of Seattle",
    "Puget Sound Energy serves most of King County outside Seattle and surrounding Snohomish, Pierce counties",
    "Snohomish County PUD serves Everett and surrounding areas",
    "Tacoma Power serves Tacoma and parts of Pierce County",
  ],
  permits: {
    office: "City of Seattle Department of Construction and Inspections (SDCI)",
    turnaroundWeeks: "3 to 6 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Seattle Department of Construction and Inspections typically runs residential solar permits in 3 to 6 weeks. SolarAPP+ is not accepted. Surrounding King County, Snohomish County and Pierce County jurisdictions run their own permits with 3 to 5 week typical timelines. SCL interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Seattle means working in a market where payback is a secondary driver and homeowner motivation often matters more than pure economics. The customers who sign are often doing so for energy independence, environmental alignment or EV charging support rather than payback (which stretches 12 to 18 years here). The best Seattle operators sell on those motivations alongside economics rather than overselling the payback math. SCL's grid is reliable so backup storage attachment is less common than in markets with regular outages. Lead costs run $130 to $230 on Google search.",
  faq: [
    {
      q: "Does Seattle City Light have net metering?",
      a: "Yes, retail-rate net metering for residential solar systems up to 100 kW AC. SCL credits exports monthly at retail; annual true-up at year-end with excess typically zeroed out (not paid out at avoided cost). For systems sized to annual load this true-up is a minor factor.",
    },
    {
      q: "How much does Pacific Northwest cloud cover affect Seattle solar?",
      a: "Pacific Northwest cloud cover from October through April reduces annual solar production meaningfully in Seattle. November through February production is typically 70 percent lower than June through August. Annual yield for a Seattle 7 kW system runs around 6,500 to 7,500 kWh, compared with 10,500 to 12,000 kWh for an equivalent Phoenix system. Honest annual yield modelling is essential; summer production is strong but overall payback is longer.",
    },
    {
      q: "How long does a solar permit take in Seattle?",
      a: "City of Seattle Department of Construction and Inspections typically runs residential solar permits in 3 to 6 weeks. Surrounding King, Snohomish and Pierce county jurisdictions run 3 to 5 weeks typically. Seattle City Light interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Seattle?",
      a: "Seattle runs about $3.10 per watt installed for residential, meaning a 7 kW system typically costs around $21,700 gross. After the 30 percent federal tax credit and the Washington state sales-tax exemption, effective net cost is approximately $15,200. Washington has no state income tax credit for solar.",
    },
    {
      q: "Is solar worth it in Seattle?",
      a: "The honest answer is yes for homes with suitable roofs but with longer payback than most US states: typically 12 to 18 years for residential installations with the federal tax credit. The combination of modest sun hours and low electric rates stretches the math. Homeowners who buy solar in Seattle are often motivated by energy independence, environmental alignment or EV charging support alongside pure payback.",
    },
  ],
};
