/** Copy for the Process, Why Volt and Testimonials sections. Placeholder names and figures. */

export const PROCESS = [
  {
    title: "Demo call",
    time: "20 minutes",
    body: "We look at how leads reach you today and where they stall. If the system will not help your company yet, we say so on this call.",
  },
  {
    title: "We build your system",
    time: "7–10 days",
    body: "Website, follow-up, text-back, review funnel, campaigns and SEO, set up on your numbers, your area and your calendar. You approve the copy. We do the rest.",
  },
  {
    title: "Launch call",
    time: "25 minutes",
    body: "We switch it on together, send a test lead through, and show you the one inbox you will actually use. Then it runs.",
  },
] as const;

export const WHY = [
  {
    title: "Simple to use",
    body: "One inbox, one calendar, one report. If you can text, you can run it.",
  },
  {
    title: "Flat monthly fee",
    body: "One number every month. No setup fee, no per-lead charge, no surprise invoice.",
  },
  {
    title: "No contracts",
    body: "Month to month. If it stops paying for itself, cancel with a month's notice.",
  },
  {
    title: "Built for solar specifically",
    body: "Scripts, pages and campaigns written for panels, batteries and rebates, not generic home services.",
  },
  {
    title: "Proof, not promises",
    body: "Every lead, call, text and review is in the report. If a number is bad, it is in there too.",
  },
  {
    title: "Continuous improvements",
    body: "The system gets an update every month, based on what worked across every solar client on it.",
  },
] as const;

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
  place: string;
  portrait: { src: string; alt: string };
}

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    quote:
      "We were missing maybe a third of our calls during install season. First month on the text-back we booked eleven appointments off calls nobody answered.",
    name: "Marcus Dell",
    company: "Dell Solar",
    place: "Round Rock, TX",
    portrait: {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=70",
      alt: "Marcus Dell",
    },
  },
  {
    quote:
      "I did not want another dashboard. There is one inbox and my office manager runs it from her phone.",
    name: "Priya Natarajan",
    company: "Sunline Energy",
    place: "Fresno, CA",
    portrait: {
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=70",
      alt: "Priya Natarajan",
    },
  },
  {
    quote:
      "The review funnel is the boring part and it is the part that paid off. Forty-one Google reviews in four months. We had nine before.",
    name: "Tom Reyes",
    company: "Reyes Roofing and Solar",
    place: "Tucson, AZ",
    portrait: {
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=70",
      alt: "Tom Reyes",
    },
  },
  {
    quote:
      "Honest take: the first two weeks of follow-up texts felt like a lot. Then a lead from March booked in June and I stopped complaining.",
    name: "Dana Whitfield",
    company: "Whitfield Solar and Storage",
    place: "Raleigh, NC",
    portrait: {
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=70",
      alt: "Dana Whitfield",
    },
  },
  {
    quote:
      "They told us on the demo call that we did not need more leads yet, we needed to answer the ones we had. Nobody else had said that.",
    name: "Luis Ortega",
    company: "Ortega Electric and Solar",
    place: "Albuquerque, NM",
    portrait: {
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=70",
      alt: "Luis Ortega",
    },
  },
];
