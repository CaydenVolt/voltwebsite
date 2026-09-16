/**
 * Everything written on /about. Copy lives here so it can be edited without
 * touching the page layout.
 *
 * Photos live in `public/about/`, named team, cayden and jay, in any common
 * image format: the page resolves them by prefix. Unlike the rest of the
 * site's photography they are shown in colour and undithered, because these
 * are the people, not texture. `position` is the focal point that survives
 * the crop, as percentages of the original.
 */

export const MISSION: readonly string[] = [
  "At Volt, our mission is simple: cut the complexity and nonsense (aka the bullsh*t) out of marketing. We've seen too many agencies drown solar companies in buzzwords and technical terms that make the basics sound like rocket science. Marketing doesn't need to be complicated, and it definitely shouldn't come with a hefty price tag just because someone tries to make it sound fancy.",
  "Volt was built to offer affordable, no-nonsense systems for solar companies that want to grow their business and their online presence the right way, not the overpriced, overcomplicated way. Just like every array needs a solid roof under it, your business needs a foundation. Without one, even the best design won't hold up. You just need something that works, a strong base to build your company on. That's why we built Volt. Let us be the foundation you need while you focus on what you do best: building your business.",
];

export const CULTURE = {
  heading: "Our culture? It's no accident. We've crafted it with the same precision as a Tinder bio that actually works.",
  values: [
    {
      name: "Humor",
      body: "We're serious about results, but our team meetings might as well be stand-up gigs.",
    },
    {
      name: "Honesty",
      body: "Real talk and real action. We're genuine because anything else is boring.",
    },
    {
      name: "Humility",
      body: "We're perfect, we've never made a mistake, right? (But if we do, you know we'll fix it right away.)",
    },
    {
      name: "Integrity",
      body: "When we say we'll do something, we do it. It's that simple.",
    },
  ],
} as const;

/** The landscape plate beside the mission. Cropped to landscape in CSS, not in the file. */
export const TEAM_PHOTO = {
  src: "/about/team.jpg",
  alt: "Cayden and Jay, the team behind Volt",
  /** Focal point as object-position percentages: keeps both faces in a wide crop. */
  position: { x: 50, y: 38 },
};

export const TEAM = [
  {
    name: "Cayden",
    role: "CEO / Founder",
    src: "/about/cayden.jpg",
    alt: "Cayden, founder of Volt",
    position: { x: 50, y: 42 },
  },
  {
    name: "Jay",
    role: "COO / Co-Founder",
    src: "/about/jay.jpg",
    alt: "Jay, co-founder of Volt",
    position: { x: 50, y: 57 },
  },
] as const;
