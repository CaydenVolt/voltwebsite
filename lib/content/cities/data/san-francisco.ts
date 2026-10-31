import type { City } from "../types";

export const SAN_FRANCISCO: City = {
  slug: "san-francisco",
  stateSlug: "california",
  name: "San Francisco",
  title: "Solar in San Francisco: PG&E, NEM 3.0 and city permit rules",
  metaTitle: "Solar Companies in San Francisco: PG&E, NEM 3.0, Permits",
  metaDescription:
    "Honest guide to solar in San Francisco: PG&E's NEM 3.0 export rates, SF Department of Building Inspection permits, CleanPowerSF, and running a solar company in SF.",
  answer:
    "San Francisco runs under PG&E service and California NEM 3.0, with CleanPowerSF as the default Community Choice Aggregator for the generation portion of the bill. The city's historic Victorian housing stock and strict permit review (SF Department of Building Inspection) make residential solar more complex per project than most CA metros. Marine-layer fog in Sunset and Richmond districts materially reduces annual yield.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 5.0,
    sunnyDays: 259,
    note: "San Francisco gets around 5.0 peak sun hours per day on average, but there is substantial neighbourhood variation. The eastern side (Mission, Noe Valley, Potrero Hill) sees typical California sun hours; the western and coastal neighbourhoods (Sunset, Richmond, Lake Merced) lose 10 to 20 percent of annual yield to the marine-layer fog, which is heaviest in June and July. Honest yield modelling by neighbourhood matters more here than in most California metros.",
  },
  market: {
    metroPopulationK: 4700,
    averageCostPerWatt: 3.1,
    leadCostUsd: { low: 220, high: 380 },
    installerDensity: "Saturated",
  },
  utilities: [
    "Pacific Gas & Electric (PG&E), investor-owned, serves all of San Francisco",
    "CleanPowerSF (Community Choice Aggregator, bundles with PG&E delivery for most SF residences)",
  ],
  permits: {
    office: "San Francisco Department of Building Inspection (SFDBI)",
    turnaroundWeeks: "4 to 8 weeks for standard residential",
    solarApp: "Accepted",
    note: "SFDBI accepts SolarAPP+ for standard residential installations, but SF's building stock (Victorian, multi-unit, roof-shared) often disqualifies homes from the SolarAPP+ pathway because of structural review. Non-SolarAPP+ permits run 4 to 8 weeks, longer than most California metros, because of the review backlog and the frequent historic-district overlay requirements. PG&E interconnection post-install typically runs 4 to 8 weeks.",
  },
  installerLandscape:
    "Running a solar company in San Francisco means operating in the highest-cost, highest-permit-complexity California market. SF housing is dominated by Victorian single-families and small multi-unit buildings where structural analysis, historic-district review, and shared-roof agreements add real engineering burden per project. Lead costs are the highest in the state ($220 to $380 on Google search). The operators who have scaled in SF are the ones with in-house structural engineering, templated SFDBI submissions, and workflows for multi-unit TIC-ownership edge cases. Most national installers avoid SF because the margin per project is thin after the permit and engineering overhead.",
  faq: [
    {
      q: "Does PG&E have net metering in San Francisco?",
      a: "Not retail-rate. PG&E operates under California NEM 3.0: solar exports are credited at the Avoided Cost Calculator rate (typically $0.05 to $0.08 per kWh), substantially below retail rates (which can exceed $0.45 per kWh on-peak). Pre-April 2023 customers are grandfathered on NEM 2.0 for 20 years from original interconnection.",
    },
    {
      q: "What is CleanPowerSF?",
      a: "CleanPowerSF is the Community Choice Aggregator (CCA) that provides the generation portion of electricity for most San Francisco residences and businesses by default. PG&E still delivers the electricity and bills the delivery charges. For solar economics, the net metering treatment is determined by PG&E's NEM 3.0 schedule, not by CleanPowerSF; the CCA affects the generation rate on consumed electricity but not export compensation structure.",
    },
    {
      q: "How long does a solar permit take in San Francisco?",
      a: "With SolarAPP+ at SFDBI: often same-day for the small subset of SF homes that qualify. Most San Francisco residential installations do not qualify for SolarAPP+ because of structural, historic-district or shared-roof factors; non-SolarAPP+ permits run 4 to 8 weeks typically.",
    },
    {
      q: "How much does solar cost in San Francisco?",
      a: "San Francisco runs about $3.10 per watt installed for residential, among the highest in California, meaning a 6 kW system (typical for SF's smaller roof areas) costs around $18,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,000. The premium over LA or San Diego reflects both labour costs and the engineering/permit burden of SF's housing stock.",
    },
    {
      q: "Is solar worth it in San Francisco under NEM 3.0?",
      a: "Yes with storage, no without, for most SF homes. PG&E's high retail rates make storage-attached NEM 3.0 systems pay back in 8 to 12 years for most residential customers. Solar-only without storage pays back over 15 years because the NEM 3.0 export credit is too low to make exporting during midday worthwhile. Marine-layer fog in western SF neighbourhoods extends payback further; honest yield modelling by neighbourhood matters.",
    },
  ],
};
