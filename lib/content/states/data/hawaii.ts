import type { State } from "../types";

export const HAWAII: State = {
  slug: "hawaii",
  name: "Hawaii",
  abbr: "HI",
  title: "Solar in Hawaii: Smart Export, CGS Plus and self-supply reality",
  metaTitle: "Solar Companies in Hawaii: Smart Export, CGS Plus, Permits",
  metaDescription:
    "Honest guide to Hawaii solar: Hawaiian Electric (HECO) Smart Export and Customer Grid Supply Plus programmes, self-supply systems, the state tax credit, and running a solar company in HI.",
  answer:
    "Hawaii is the twenty-seventh-largest US solar market with over 1,900 MW installed, but has the highest per-capita residential solar penetration in the US (around 1 in 3 single-family homes). Retail net metering closed to new customers in 2015. Current residential customers pick among Smart Export (storage-attached, battery-first with limited daytime export), Customer Grid Supply Plus (CGS Plus, limited time-of-day export credit), or Self-Supply (no grid export). The combination of the highest electric rates in the US ($0.40+ per kWh) and generous state tax credit keeps the economics working.",
  published: "2026-11-01",
  market: {
    installedCapacityMw: 1900,
    homesPoweredK: 285,
    percentOfElectricity: 20,
    jobs: 2500,
    averageCostPerWatt: 3.6,
    nationalRank: 27,
  },
  marketNotes:
    "Hawaii has the highest per-capita residential solar penetration in the US because of extreme electric rates (over $0.40 per kWh at HECO) and strong sun hours. Market structure has evolved through multiple regime changes since 2015: NEM closed, CGS and CGS Plus added, Smart Export added, Self-Supply as a default. The current economics favour storage-attached Smart Export systems for most residential installations.",
  netMetering: {
    status: "No net metering",
    explanation:
      "Hawaii closed retail net metering to new customers in October 2015. Current residential solar customers at Hawaiian Electric choose among three programmes: Smart Export (storage-attached, exports credit at a time-of-day rate during 4pm to 9am), Customer Grid Supply Plus (CGS Plus, limited export cap based on circuit availability with a tariff rate), or Self-Supply (no grid export, all generation consumed on-site or stored). Pre-2015 NEM customers are grandfathered on retail NEM.",
  },
  averageRate: 0.42,
  rateNote:
    "Hawaii residential rates average around $0.42 per kWh at Hawaiian Electric, by far the highest in the US. Rates on neighbouring islands (Maui, Big Island, Kauai) run even higher. High rates are the primary driver of solar economics; the gap between retail rate and avoided-cost export compensation is partially offset by sheer self-consumption value.",
  utilities: ["Hawaiian Electric Company (HECO), serves Oahu", "Maui Electric Company (MECO, HECO subsidiary), serves Maui County", "Hawaii Electric Light Company (HELCO, HECO subsidiary), serves Big Island", "Kauai Island Utility Cooperative (KIUC), serves Kauai (independent cooperative)"],
  incentives: [
    {
      name: "Hawaii Renewable Energy Technologies Income Tax Credit",
      text: "35 percent state income tax credit on residential solar systems, capped at $5,000 per system. Stacks with the 30 percent federal credit. The combined 65 percent effective tax credit on install cost is among the strongest in the US.",
    },
    {
      name: "Smart Export (storage-attached programme)",
      text: "HECO's current preferred programme for new residential solar: solar + battery storage with grid exports credited at a time-of-day rate during off-peak hours (4pm to 9am Oahu). Peak-hour (9am to 4pm) exports are not compensated. The practical effect: systems designed to self-consume during peak hours and export stored energy at off-peak times.",
    },
    {
      name: "Customer Grid Supply Plus (CGS Plus)",
      text: "An alternative programme that caps grid export availability based on circuit capacity; new enrolment depends on local circuit availability. Credit is at a tariff rate (approximately $0.14 per kWh), substantially below retail.",
    },
    {
      name: "Self-Supply option",
      text: "No grid export permitted; all generation must be consumed on-site or stored in battery. This option works for homes with high daytime load (EV charging, pool pumps) and is simplest for permitting purposes. No programme caps apply.",
    },
  ],
  permits:
    "Permit timelines in Hawaii vary by island and jurisdiction. City and County of Honolulu commonly take 4 to 8 weeks for residential; Maui County 4 to 10 weeks; Big Island (Hawaii County) 3 to 6 weeks. SolarAPP+ is not accepted on any island. Interconnection with HECO/MECO/HELCO typically runs 4 to 12 weeks post-install depending on circuit review requirements.",
  installerLandscape:
    "Running a solar company in Hawaii means operating in the most mature residential solar market in the US with the most complex regulatory structure. The best HI operators are fluent in the Smart Export vs CGS Plus vs Self-Supply trade-offs, have in-house circuit availability research (CGS Plus enrolment depends on local circuit capacity which varies by neighbourhood), and specialise by island because logistics costs differ substantially between Oahu, Maui and Big Island. Shipping panels and racking from mainland to Hawaii adds meaningful cost; local inventory relationships matter.",
  faq: [
    {
      q: "Does Hawaii have net metering?",
      a: "Not for new customers since 2015. Current residential solar customers at Hawaiian Electric choose among Smart Export (storage-attached, time-of-day export credit), Customer Grid Supply Plus (CGS Plus, limited export cap at tariff rate), or Self-Supply (no grid export). Pre-2015 customers are grandfathered on retail NEM.",
    },
    {
      q: "What is the Hawaii state solar tax credit?",
      a: "35 percent of installed system cost, capped at $5,000 per system. Non-refundable but carries forward. Stacks with the 30 percent federal Residential Clean Energy Credit. The combined effective 65 percent tax credit is among the strongest in the US.",
    },
    {
      q: "How much does solar cost in Hawaii?",
      a: "Residential solar in Hawaii averages around $3.60 per watt installed, higher than mainland US because of shipping and labour costs, meaning a typical 7 kW system costs about $25,200 gross. After the 30 percent federal tax credit and the 35 percent HI state credit (capped $5,000), net cost is approximately $12,500 to $14,500.",
    },
    {
      q: "Is solar worth it in Hawaii?",
      a: "Yes substantially. The combination of the highest US electric rates (over $0.40 per kWh), the generous state tax credit, and the federal credit makes residential solar payback typically 5 to 8 years for Hawaii homes with suitable roofs. Among the strongest payback economics in the US despite the high install cost.",
    },
  ],
};
