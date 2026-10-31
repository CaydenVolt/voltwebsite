import type { City } from "../types";

export const HOUSTON: City = {
  slug: "houston",
  stateSlug: "texas",
  name: "Houston",
  title: "Solar in Houston: CenterPoint, deregulated retail and permits",
  metaTitle: "Solar Companies in Houston: CenterPoint, REP Buyback, Permits",
  metaDescription:
    "Honest guide to solar in Houston: CenterPoint delivery, which deregulated REPs offer solar buyback plans, Houston Public Works permits, hurricane considerations, and running a solar company in Houston.",
  answer:
    "Houston sits in the ERCOT deregulated market: CenterPoint Energy owns the wires and delivers electricity, but residential customers pick their own Retail Electric Provider (REP) for the commodity. Solar economics in Houston depend heavily on which REP you choose: a handful offer true 1-for-1 buyback plans (Rhythm, Octopus, MP2, Chariot) while most retail plans offer no export credit at all. Houston Public Works handles permits with 2 to 4 week turnaround typically.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 4.9,
    sunnyDays: 204,
    note: "Houston gets around 4.9 peak sun hours per day with 204 sunny days per year, moderate for Texas. Summer heat is a real factor (June through September rooftop temperatures regularly exceed 160F) so panel temperature coefficients and ventilation matter. Hurricane and tropical storm season (June to November) is the dominant risk; roof-mount systems in Houston need Dade-County-equivalent wind ratings and proper structural attachment.",
  },
  market: {
    metroPopulationK: 7340,
    averageCostPerWatt: 2.6,
    leadCostUsd: { low: 130, high: 220 },
    installerDensity: "High",
  },
  utilities: [
    "CenterPoint Energy (owns the wires, delivers electricity to all Houston metro)",
    "Residential customers choose their own Retail Electric Provider (REP) in ERCOT deregulated market",
    "Common REPs with solar buyback plans: Rhythm Energy, Octopus Energy, MP2 Energy, Chariot Energy, Reliant",
  ],
  permits: {
    office: "Houston Public Works Permitting Center",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "Not accepted",
    note: "Houston Public Works does not accept SolarAPP+ as of 2026. Standard residential permits run 2 to 4 weeks. Harris County (outside Houston city limits) runs similar timelines. Suburbs like Katy, The Woodlands, Pearland and Sugar Land each have their own permit offices with timelines of 2 to 6 weeks. CenterPoint interconnection post-install typically runs 4 to 8 weeks, which is slower than most US metros.",
  },
  installerLandscape:
    "Running a solar company in Houston means two things: educating customers about the deregulated REP choice (which plan they pick determines whether their solar exports earn credit at all), and designing systems for hurricane survival. The second is more technical than most sales reps appreciate; a poorly-attached array in Houston becomes a liability when the next tropical storm hits. Lead costs are moderate ($130 to $220 on Google search) relative to coastal California but higher than Dallas or Austin. The operators winning in Houston are those with in-house structural engineering, strong REP partnerships for solar buyback referrals, and a clear pitch on hurricane-rated mounting.",
  faq: [
    {
      q: "Does Houston have net metering?",
      a: "Texas has no statewide net metering mandate. In Houston (deregulated ERCOT market), solar exports are credited only if your Retail Electric Provider (REP) offers a solar buyback plan. A handful do (Rhythm Energy, Octopus Energy, MP2 Energy, Chariot Energy, Reliant with its specific solar plan). Most REP plans credit exports at $0 or at a wholesale rate well below retail. Switching to a solar buyback REP after install is essential for Houston solar economics.",
    },
    {
      q: "How long does a solar permit take in Houston?",
      a: "Houston Public Works typically approves residential solar permits in 2 to 4 weeks. The city does not accept SolarAPP+ as of 2026. Suburbs (Katy, The Woodlands, Pearland, Sugar Land) run their own permitting, generally 2 to 6 weeks. CenterPoint interconnection post-install typically runs 4 to 8 weeks.",
    },
    {
      q: "How much does solar cost in Houston?",
      a: "Houston runs about $2.60 per watt installed for residential, meaning a 7 kW system typically costs around $18,200 gross. After the 30 percent federal tax credit, net cost is approximately $12,700. Battery storage, which many Houston homeowners add for hurricane resilience, adds $12,000 to $18,000 for a Powerwall-class system.",
    },
    {
      q: "Which electric providers in Houston offer solar buyback?",
      a: "As of 2026, the common Houston-metro REPs with true 1-for-1 solar buyback plans include Rhythm Energy, Octopus Energy, MP2 Energy, Chariot Energy, and Reliant Energy's specific solar plan. Switching REPs is straightforward in deregulated Texas but requires enrolling in the solar buyback plan at the right time (usually right before or shortly after Permission to Operate from CenterPoint).",
    },
    {
      q: "Is solar worth it in Houston?",
      a: "For Houston homes with high electricity use (large square footage, pool pumps, electric heating), yes: payback typically runs 8 to 12 years with the federal tax credit and a solar buyback REP. Hurricane resilience is a secondary driver that many Houston homeowners add battery storage for, which stretches the payback math but reduces the hurricane-outage risk that Houston households regularly face.",
    },
  ],
};
