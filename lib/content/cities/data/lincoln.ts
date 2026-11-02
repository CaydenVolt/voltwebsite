import type { City } from "../types";

export const LINCOLN: City = {
  slug: "lincoln",
  stateSlug: "nebraska",
  name: "Lincoln",
  title: "Solar in Lincoln: LES municipal public power and state capital",
  metaTitle: "Solar Companies in Lincoln: LES, Permits",
  metaDescription:
    "Honest guide to solar in Lincoln Nebraska: Lincoln Electric System (LES) municipal public power, City of Lincoln permits, state capital, and running a solar company in Lancaster County.",
  answer:
    "Lincoln is served by LES (Lincoln Electric System), a municipal public power district (not an IOU, since Nebraska is 100 percent public power). LES operates its own net metering programme and runs an occasional residential solar rebate when funding is available. Permits run through the City of Lincoln Building & Safety.",
  published: "2026-11-02",
  climate: {
    peakSunHours: 4.6,
    sunnyDays: 213,
    note: "Lincoln gets around 4.6 peak sun hours per day with 213 sunny days per year, moderate-to-strong for solar. Great Plains climate; hail and tornado risk in spring and summer require proper equipment specification. Winter snow derating is modest.",
  },
  market: {
    metroPopulationK: 340,
    averageCostPerWatt: 2.8,
    leadCostUsd: { low: 85, high: 155 },
    installerDensity: "Low",
  },
  utilities: ["LES (Lincoln Electric System), municipal public power, serves all of Lincoln"],
  permits: {
    office: "City of Lincoln Building & Safety",
    turnaroundWeeks: "2 to 4 weeks for standard residential",
    solarApp: "In pilot",
    note: "City of Lincoln Building & Safety typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is in pilot for select contractors. LES interconnection post-install typically runs 3 to 5 weeks.",
  },
  installerLandscape:
    "Running a solar company in Lincoln means working under LES public power and benefitting from one of the simpler US residential solar permit/interconnection paths. The best Lincoln operators handle LES-specific interconnection paperwork and spec Class 4 panels for Great Plains hail. Lead costs run $85 to $155 on Google search, among the lowest in Nebraska.",
  faq: [
    {
      q: "Does LES have net metering?",
      a: "Yes. Lincoln Electric System operates net metering for residential solar systems with monthly credit rollover at retail. LES is a municipal public power district (not an IOU) and sets its own rules.",
    },
    {
      q: "Does Lincoln have residential solar rebates?",
      a: "LES has run residential solar rebate programmes periodically when funding is available. Confirm current programme status directly with LES before quoting; rebates come and go.",
    },
    {
      q: "How long does a solar permit take in Lincoln?",
      a: "City of Lincoln Building & Safety typically runs residential solar permits in 2 to 4 weeks. SolarAPP+ is in pilot. LES interconnection post-install adds 3 to 5 weeks.",
    },
    {
      q: "How much does solar cost in Lincoln?",
      a: "Lincoln runs about $2.80 per watt installed for residential, meaning a 7 kW system typically costs around $19,600 gross. After the 30 percent federal tax credit, net cost is approximately $13,700. Nebraska has no state solar tax credit.",
    },
    {
      q: "Is solar worth it in Lincoln?",
      a: "For Lincoln homes with high electricity use and south-facing roofs, yes but with longer payback than Sun Belt peers: typically 11 to 14 years with the federal tax credit. Low LES retail rates (around $0.11 per kWh) and winter weather stretch payback.",
    },
  ],
};
