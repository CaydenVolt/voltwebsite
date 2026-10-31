import type { City } from "../types";

export const ORLANDO: City = {
  slug: "orlando",
  stateSlug: "florida",
  name: "Orlando",
  title: "Solar in Orlando: OUC, Duke Energy and non-HVHZ permits",
  metaTitle: "Solar Companies in Orlando: OUC, Duke Energy, Permits",
  metaDescription:
    "Honest guide to solar in Orlando: OUC net metering, Duke Energy service in the suburbs, City of Orlando permits (non-HVHZ), and running a solar company in Orlando.",
  answer:
    "Orlando runs cheaper and faster than Miami for solar install because Central Florida is not a High Velocity Hurricane Zone (HVHZ). Permits require Florida Building Code wind-load design (typically 139 to 150 mph depending on county) but not the stricter HVHZ 175 mph standard or Miami-Dade NOA racking. Orlando Utilities Commission (OUC) and Duke Energy both offer retail-rate net metering under Florida PSC rules.",
  published: "2026-10-31",
  climate: {
    peakSunHours: 5.3,
    sunnyDays: 233,
    note: "Orlando gets around 5.3 peak sun hours per day with 233 sunny days per year, strong for solar. Central Florida's thunderstorm pattern produces afternoon cloud cover during summer that reduces peak-hour production more than the sunny-days count suggests. Hurricane season (June through November) is a real risk; Florida Building Code wind-load design applies at the county level (typically 139 to 150 mph in Orange, Osceola, Seminole, Lake counties).",
  },
  market: {
    metroPopulationK: 2750,
    averageCostPerWatt: 2.55,
    leadCostUsd: { low: 125, high: 220 },
    installerDensity: "Moderate",
  },
  utilities: [
    "Orlando Utilities Commission (OUC), municipal utility, serves city of Orlando",
    "Duke Energy Florida, investor-owned, serves most of Orange, Seminole and Lake counties outside the city",
    "Kissimmee Utility Authority (KUA), serves Kissimmee",
    "Reedy Creek Improvement District (serves Walt Disney World and surrounding properties)",
  ],
  permits: {
    office: "City of Orlando Permitting Services, plus Orange County, Osceola, Seminole and Lake county permit offices",
    turnaroundWeeks: "3 to 5 weeks for standard residential",
    solarApp: "In pilot",
    note: "City of Orlando Permitting Services typically runs residential solar permits in 3 to 5 weeks. SolarAPP+ is in pilot for select contractors as of 2026 but not broadly deployed. Suburban counties (Orange outside city, Osceola, Seminole, Lake) run their own permits with 2 to 4 week typical timelines. Florida Building Code wind-load design applies (139 to 150 mph depending on county) but Orlando is NOT in the Miami-Dade HVHZ, so NOA racking is not required. OUC and Duke Energy interconnection post-install typically runs 2 to 4 weeks.",
  },
  installerLandscape:
    "Running a solar company in Orlando means working in a growing market with moderate installer density and lower friction than Miami-Dade. The absence of HVHZ engineering requirements lets local operators move faster per project than their South Florida peers, which is a real labour-cost advantage. The best Orlando operators handle both OUC and Duke Energy interconnection fluently, understand the Reedy Creek edge cases for homes near Disney, and have strong referral loops because Orlando's homeowner population has higher-than-average mobility (relocation market). Lead costs run $125 to $220, moderate for Florida.",
  faq: [
    {
      q: "Does OUC have net metering?",
      a: "Yes. Orlando Utilities Commission offers retail-rate net metering for residential solar systems up to 10 kW AC under Florida PSC rules. Credits accrue monthly at retail; annual excess at year-end is paid out at OUC's avoided cost rate (roughly $0.03 per kWh), substantially lower than retail. For systems sized to annual load this true-up is a small portion of total value.",
    },
    {
      q: "Does Duke Energy Florida have net metering?",
      a: "Yes. Duke Energy Florida offers retail-rate net metering for residential solar systems up to 10 kW AC under Florida PSC rules. Credits accrue monthly at retail; annual excess at year-end is paid out at Duke's avoided cost rate (around $0.03 per kWh), lower than retail. Interconnection application and approval runs through Duke's online solar portal.",
    },
    {
      q: "Is Orlando in the HVHZ?",
      a: "No. The High Velocity Hurricane Zone (HVHZ) under the Florida Building Code covers Miami-Dade and Broward counties only. Orlando is in Orange County, which uses the standard Florida Building Code wind-load design (typically 139 to 150 mph depending on specific location) and does not require Miami-Dade Notice of Acceptance (NOA) racking. This is why solar costs run slightly lower in Orlando than Miami.",
    },
    {
      q: "How long does a solar permit take in Orlando?",
      a: "City of Orlando Permitting Services typically runs residential solar permits in 3 to 5 weeks. Suburban counties (Orange, Osceola, Seminole, Lake) run 2 to 4 weeks typically. OUC and Duke Energy interconnection post-install adds 2 to 4 weeks.",
    },
    {
      q: "How much does solar cost in Orlando?",
      a: "Orlando runs about $2.55 per watt installed for residential, meaning a 7 kW system typically costs around $17,900 gross. After the 30 percent federal tax credit, net cost is approximately $12,500. Orlando runs 5 to 10 percent cheaper than Miami because HVHZ-rated racking and engineering are not required.",
    },
  ],
};
