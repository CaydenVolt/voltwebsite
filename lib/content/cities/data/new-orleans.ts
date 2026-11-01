import type { City } from "../types";

export const NEW_ORLEANS: City = {
  slug: "new-orleans",
  stateSlug: "louisiana",
  name: "New Orleans",
  title: "Solar in New Orleans: Entergy, net billing and hurricane engineering",
  metaTitle: "Solar Companies in New Orleans: Entergy, Permits, Hurricanes",
  metaDescription:
    "Honest guide to solar in New Orleans: Entergy New Orleans net billing (not retail NEM), City of New Orleans Safety and Permits, hurricane-rated attachment, and running a solar company in the Crescent City.",
  answer:
    "New Orleans is served by Entergy New Orleans (regulated by the City Council, not the Louisiana PSC like the rest of the state). Residential solar exports credit at avoided cost under the current Entergy New Orleans tariff, below retail. The dominant challenge is hurricane engineering: Katrina-era building code enforcement requires 155 mph wind-load design in Orleans Parish, among the strictest in the US outside the Miami-Dade HVHZ.",
  published: "2026-11-01",
  climate: {
    peakSunHours: 4.9,
    sunnyDays: 216,
    note: "New Orleans gets around 4.9 peak sun hours per day with 216 sunny days per year, strong for solar. Hurricane exposure is the dominant engineering factor; post-Katrina Orleans Parish building code enforcement requires 155 mph wind-load design on roof-mount systems. Summer thunderstorm cloud cover reduces afternoon production more than most installers model. High humidity year-round requires marine-grade stainless hardware for durability.",
  },
  market: {
    metroPopulationK: 1250,
    averageCostPerWatt: 2.85,
    leadCostUsd: { low: 100, high: 180 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Entergy New Orleans, investor-owned, serves most of Orleans Parish and parts of adjacent Jefferson Parish (regulated by New Orleans City Council, not Louisiana PSC)",
    "Entergy Louisiana serves most of the surrounding parishes (regulated by Louisiana PSC)",
    "Cleco serves parts of outlying parishes north and west of New Orleans",
  ],
  permits: {
    office: "City of New Orleans Department of Safety and Permits",
    turnaroundWeeks: "4 to 8 weeks for standard residential",
    solarApp: "Not accepted",
    note: "City of New Orleans Department of Safety and Permits typically runs residential solar permits in 4 to 8 weeks. SolarAPP+ is not accepted. Post-Katrina 155 mph wind-load design requires stamped structural engineering for most roof-mount systems. Surrounding Jefferson, St. Bernard, St. Tammany parishes run their own permits with 3 to 6 week typical timelines. Entergy interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in New Orleans means handling the strictest wind-load design regime in the US outside Miami-Dade. Katrina-era building code enforcement in Orleans Parish is real and strict; installers without in-house structural engineering or a reliable PE partner struggle to pass permit review on the first submission. The best New Orleans operators have templated 155 mph wind-load submittals, use only hurricane-rated racking, and build hurricane-season scheduling buffers into project plans. Battery storage attachment is a common secondary driver for outage resilience. Lead costs run $100 to $180 on Google search.",
  faq: [
    {
      q: "Does Entergy New Orleans have net metering?",
      a: "Not retail-rate for new customers. Louisiana's 2019 shift from retail net metering to net billing applies in Entergy New Orleans territory as well; residential solar exports credit at the utility's avoided cost rate (currently around $0.03 to $0.05 per kWh), below the retail rate of about $0.11. Pre-2019 customers are grandfathered on retail NEM for 15 years from original interconnection.",
    },
    {
      q: "Why is wind-load design stricter in Orleans Parish?",
      a: "Post-Katrina building code enforcement in Orleans Parish requires 155 mph wind-load design on roof-mount residential systems, among the strictest in the US outside the Miami-Dade HVHZ. Stamped structural engineering is required for most installations; cheap out-of-state installers often fail permit review because of inadequate wind-load calculations. The engineering requirement protects both the building and the system from hurricane damage.",
    },
    {
      q: "How long does a solar permit take in New Orleans?",
      a: "City of New Orleans Department of Safety and Permits typically runs residential solar permits in 4 to 8 weeks. The 155 mph wind-load engineering review adds time compared with suburban parishes. Surrounding Jefferson, St. Bernard, St. Tammany parishes run 3 to 6 weeks typically. Entergy interconnection post-install adds 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in New Orleans?",
      a: "New Orleans runs about $2.85 per watt installed for residential, higher than suburban Louisiana because of the hurricane engineering burden, meaning a 7 kW system typically costs around $20,000 gross. After the 30 percent federal tax credit, net cost is approximately $14,000. Louisiana has no state solar tax credit as of 2026.",
    },
    {
      q: "Is solar worth it in New Orleans?",
      a: "For New Orleans homes with high electricity use and unshaded roofs sized to self-consumption, yes: payback typically runs 11 to 15 years with the federal tax credit. Hurricane resilience is a major secondary driver that many homeowners add battery storage for; the storage attachment stretches payback but reduces the outage risk that New Orleans households face annually during hurricane season.",
    },
  ],
};
