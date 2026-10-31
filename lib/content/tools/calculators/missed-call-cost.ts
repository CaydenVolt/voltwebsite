import type { Tool } from "../types";

/**
 * Missed-call cost calculator. Isolates the specific cost of unanswered
 * inbound phone calls (as distinct from the broader speed-to-lead model),
 * because the install base of solar installers who STILL do not have a
 * missed-call text back running is bigger than it should be.
 */
export const MISSED_CALL_COST: Tool = {
  slug: "solar-missed-call-cost-calculator",
  title: "Missed-call cost calculator for solar",
  metaTitle: "Missed-Call Cost Calculator: Deals Lost from Unanswered Calls",
  metaDescription:
    "What unanswered inbound phone calls cost a US solar company every month in lost deals and lost revenue. Honest numbers using your real call volume and close rate.",
  tagline: "What unanswered inbound calls cost your solar business every month",
  audience: "Installer",
  intro:
    "An inbound call to a solar installer that goes unanswered has an 85 percent chance of becoming a call to a competitor within 10 minutes. This calculator takes your monthly inbound call volume, the percentage currently missed, and your close rate on contacted leads, and shows the deals and revenue lost each month because the phone was not answered.",
  how: [
    {
      heading: "Start with monthly inbound calls",
      text: "Count every inbound call to the main business line, not just the ones that got through. Your phone bill or VoIP dashboard shows this. Most residential solar installers see 50 to 400 inbound calls a month across all channels.",
    },
    {
      heading: "Apply the missed-call percentage",
      text: "Missed calls include voicemail-only calls, after-hours calls, and calls that rolled off because the receptionist was on another line. A typical US solar installer misses 30 to 50 percent of inbound calls; some miss over 70 percent.",
    },
    {
      heading: "Apply the recovery rate (how many of those missed calls would have closed)",
      text: "Research shows roughly 10 to 20 percent of missed calls try again or leave a voicemail. The other 80 to 90 percent go to a competitor. The calculator uses 15 percent as the default self-recovery rate; the lost 85 percent is what missed-call text back is designed to recapture.",
    },
    {
      heading: "Apply close rate and margin to the recovered deals",
      text: "Recovered calls x close rate on contacted x margin per signed deal = recovered monthly revenue. This is the revenue a missed-call text back typically recovers; the real recovery rate for a well-configured one is 25 to 40 percent of previously missed calls.",
    },
  ],
  caveat:
    "The 85 percent go-to-competitor rate is a benchmark, not a guarantee. The real rate varies by local competition, call reason (installation inquiry vs service call) and time of day. The calculator is directional: it points at a lever (recover missed calls automatically) rather than quoting an exact dollar figure. Even the conservative end of the range usually makes a missed-call text back pay for itself inside a month.",
  faq: [
    {
      q: "How many calls does a solar company miss?",
      a: "A typical residential solar installer misses 30 to 50 percent of inbound calls across voicemail, after-hours and busy-line rolls. Some miss over 70 percent. The number is almost always higher than owners estimate; checking VoIP or phone-system data for a single week usually surprises people.",
    },
    {
      q: "Does missed-call text back actually work?",
      a: "Yes. For solar operators with any meaningful inbound phone volume, a well-configured missed-call text back typically recovers 25 to 40 percent of previously missed calls into bookings or scheduled callbacks. The payback is often inside the first week of operation.",
    },
    {
      q: "What is a reasonable response time for a missed call?",
      a: "Under 60 seconds, every time, through automation. A text message confirming the missed call and offering to book a time captures the caller before they move on to the next installer. The sales conversation can happen when a human is available; the automation just preserves the lead.",
    },
    {
      q: "Should missed-call text back run after hours?",
      a: "Yes. Residential solar prospects commonly call in the evenings and weekends, when the office is closed. An after-hours missed-call text back that acknowledges the call, offers a time to book, and gets the caller to confirm often outperforms a next-morning return call because the caller has not moved on.",
    },
  ],
  published: "2026-10-31",
  related: ["solar-speed-to-lead-calculator", "solar-lead-cost-calculator"],
};
