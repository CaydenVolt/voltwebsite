import type { City } from "../types";

export const GRAND_RAPIDS: City = {
  slug: "grand-rapids",
  stateSlug: "michigan",
  name: "Grand Rapids",
  title: "Solar in Grand Rapids: Consumers Energy and the DG tariff",
  metaTitle: "Solar Companies in Grand Rapids: Consumers Energy, Permits",
  metaDescription:
    "Honest guide to solar in Grand Rapids Michigan: Consumers Energy Distributed Generation tariff, City of Grand Rapids permits, winter weather, and running a solar company in Kent County.",
  answer:
    "Grand Rapids is served by Consumers Energy (not DTE Energy, which serves Detroit). Michigan's DG tariff applies: inflow (consumption) at retail, outflow (export) at a lower per-kWh rate. The economics work only with sizing to self-consumption. Permits run through the City of Grand Rapids Development Center.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.0,
    sunnyDays: 177,
    note: "Grand Rapids gets around 4.0 peak sun hours per day with 177 sunny days per year, moderate for solar. Lake Michigan-effect snow in winter reduces annual production by 15 to 25 percent. Summer thunderstorms reduce afternoon production.",
  },
  market: {
    metroPopulationK: 1090,
    averageCostPerWatt: 2.9,
    leadCostUsd: { low: 95, high: 170 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Consumers Energy, investor-owned, serves most of west Michigan including Grand Rapids",
    "Various municipal utilities (Grand Haven Board of Light & Power, Zeeland BPW, others) serve specific cities",
    "Rural electric cooperatives serve outlying areas",
  ],
  permits: {
    office: "City of Grand Rapids Development Center",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of Grand Rapids Development Center typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is not accepted. Surrounding Kent and Ottawa county jurisdictions run 2 to 4 week typical timelines. Consumers Energy interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in Grand Rapids means working under Consumers Energy's DG tariff (different from DTE in Detroit, but same Michigan structure). The best Grand Rapids operators size systems to self-consumption, model lake-effect winter weather honestly, and handle Consumers Energy interconnection paperwork (different from DTE's processes). Lead costs run $95 to $170 on Google search.",
  faq: [
    {
      q: "Does Consumers Energy have net metering?",
      a: "Not retail-rate 1-for-1 for new customers. Michigan's Distributed Generation (DG) tariff credits consumption at retail (~$0.18 per kWh) and exports at a lower rate (~$0.08 per kWh). Pre-2018 customers are grandfathered on retail NEM.",
    },
    {
      q: "How long does a solar permit take in Grand Rapids?",
      a: "City of Grand Rapids Development Center typically runs residential solar permits in 3 to 5 weeks. Surrounding Kent and Ottawa counties run 2 to 4 weeks typically. Consumers Energy interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Grand Rapids?",
      a: "Grand Rapids runs about $2.90 per watt installed for residential, meaning a 7 kW system typically costs around $20,300 gross. After the 30 percent federal tax credit, net cost is approximately $14,200. Michigan has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Grand Rapids?",
      a: "For Grand Rapids homes with high electricity use and south-facing roofs sized to self-consumption, yes but with longer payback than Sun Belt peers: typically 11 to 14 years with the federal tax credit. Lake-effect winter weather and the DG inflow/outflow rate gap stretch payback.",
    },
  ],
};
