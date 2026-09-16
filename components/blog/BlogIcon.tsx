import type { IconKey } from "@/lib/content/blog";

/**
 * The article marks: twenty-four monoline glyphs on a 24 grid, in the same
 * hand as ProductIcon and MenuIcon.
 *
 * Every glyph is ink hairlines plus exactly one element in vermilion. That is
 * the site's whole colour rule applied at icon scale: a single mark of the
 * second ink, never a palette. Strokes are 1.5 at 24, which holds up scaled to
 * 96 on the article header.
 */
const A = "var(--color-accent)";

const GLYPHS: Record<IconKey, React.ReactNode> = {
  // Attraction: leads pulled in
  magnet: (
    <>
      <path d="M5 4v8a7 7 0 0 0 14 0V4" />
      <path d="M5 4h4v8a3 3 0 0 0 6 0V4h4" />
      <rect x="5" y="13.5" width="4" height="5" fill={A} stroke="none" />
      <rect x="15" y="13.5" width="4" height="5" fill={A} stroke="none" />
    </>
  ),
  // Filtering: many in, few out
  funnel: (
    <>
      <path d="M3 4h18l-7 8v8l-4-2v-6Z" />
      <path d="M10 20v-6L3 6" fill="none" />
      <circle cx="17.5" cy="17.5" r="3" fill={A} stroke="none" />
    </>
  ),
  tag: (
    <>
      <path d="M11 3H4v7l10 10 7-7L11 3Z" />
      <circle cx="7.5" cy="6.5" r="1.75" fill={A} stroke="none" />
    </>
  ),
  scales: (
    <>
      <path d="M12 4v16M6 20h12M4 8h16M12 6.5 4 8l-2 5h8l-2-5M12 6.5 20 8l2 5h-8l2-5" />
      <circle cx="12" cy="5" r="2" fill={A} stroke="none" />
    </>
  ),
  // Partnership: two rings through each other, not a drawn handshake, which
  // turns to mud below 32px.
  handshake: (
    <>
      <circle cx="8.5" cy="12" r="6" />
      <circle cx="15.5" cy="12" r="6" />
      <path d="M12 7.2a6 6 0 0 0 0 9.6 6 6 0 0 0 0-9.6Z" fill={A} stroke="none" />
    </>
  ),
  bulb: (
    <>
      <path d="M12 3a6 6 0 0 0-3.5 10.9V16h7v-2.1A6 6 0 0 0 12 3Z" />
      <path d="M9.5 19h5M10.5 21.5h3" />
      <circle cx="12" cy="9" r="2" fill={A} stroke="none" />
    </>
  ),
  building: (
    <>
      <path d="M3 21V7l9-4 9 4v14" />
      <path d="M3 21h18" />
      <path d="M7 11h2M7 15h2M15 11h2M15 15h2" />
      <rect x="10" y="14" width="4" height="7" fill={A} stroke="none" />
    </>
  ),
  star: (
    <>
      <path
        d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2-5.5-2.9-5.5 2.9 1-6.2L3 9.6l6.2-.9L12 3Z"
        fill={A}
        stroke="none"
      />
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2-5.5-2.9-5.5 2.9 1-6.2L3 9.6l6.2-.9L12 3Z" />
    </>
  ),
  chat: (
    <>
      <path d="M3 5h18v12H8l-5 4V5Z" />
      <circle cx="9" cy="11" r="1.25" fill={A} stroke="none" />
      <circle cx="13" cy="11" r="1.25" fill={A} stroke="none" />
      <circle cx="17" cy="11" r="1.25" fill={A} stroke="none" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.5 4 5.5v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10v-6l-8-3Z" />
      <path d="m8.5 11.5 2.5 2.5 4.5-4.5" stroke={A} strokeWidth={2.5} />
    </>
  ),
  pin: (
    <>
      <path d="M12 2.5c-3.6 0-6.5 2.9-6.5 6.5 0 5 6.5 12.5 6.5 12.5S18.5 14 18.5 9c0-3.6-2.9-6.5-6.5-6.5Z" />
      <circle cx="12" cy="9" r="2.75" fill={A} stroke="none" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" stroke={A} strokeWidth={2.5} />
    </>
  ),
  chart: (
    <>
      <path d="M3 21h18M3 21V3" />
      <rect x="6" y="13" width="3.5" height="8" />
      <rect x="11.5" y="9" width="3.5" height="12" />
      <rect x="17" y="5" width="3.5" height="16" fill={A} stroke="none" />
    </>
  ),
  stopwatch: (
    <>
      <circle cx="12" cy="13.5" r="7.5" />
      <path d="M9.5 2.5h5M12 2.5v3M19 7l1.5-1.5" />
      <path d="M12 13.5V9" stroke={A} strokeWidth={2.5} />
    </>
  ),
  phone: (
    <>
      <path d="M7 3.5 9.5 9l-2.5 2a11 11 0 0 0 6 6l2-2.5 5.5 2.5v3a1.5 1.5 0 0 1-1.6 1.5C10.6 21 3 13.4 2.5 5.1A1.5 1.5 0 0 1 4 3.5h3Z" />
      <path d="M16 4.5h6M19 1.5v6" stroke={A} strokeWidth={2.5} />
    </>
  ),
  envelope: (
    <>
      <rect x="2.5" y="5" width="19" height="14" />
      <path d="m2.5 6 9.5 7 9.5-7" />
      <circle cx="19" cy="17" r="3" fill={A} stroke="none" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5.5" rx="8" ry="3" fill={A} stroke="none" />
      <ellipse cx="12" cy="5.5" rx="8" ry="3" />
      <path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7.5" height="7.5" />
      <rect x="13.5" y="3" width="7.5" height="7.5" />
      <rect x="3" y="13.5" width="7.5" height="7.5" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" fill={A} stroke="none" />
    </>
  ),
  browser: (
    <>
      <rect x="2.5" y="4" width="19" height="16" />
      <path d="M2.5 8.5h19" />
      <circle cx="5.75" cy="6.25" r="0.9" fill={A} stroke="none" />
      <path d="M6 12h8M6 15.5h6" />
    </>
  ),
  cursor: (
    <>
      <path d="M6 3 19 11l-5.5 1.5L11 18 6 3Z" />
      <path d="m13.5 12.5 5 6.5" stroke={A} strokeWidth={2.5} />
    </>
  ),
  megaphone: (
    <>
      <path d="M4 9v6h4l8 4V5L8 9H4Z" />
      <path d="M7.5 15v4.5h3.5" />
      <path d="M19 9.5a4 4 0 0 1 0 5" stroke={A} strokeWidth={2.5} />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" />
      <path d="M3 10h18M8 2.5v5M16 2.5v5" />
      <rect x="6.5" y="13" width="4" height="4" fill={A} stroke="none" />
    </>
  ),
  checklist: (
    <>
      <rect x="4" y="3" width="16" height="18" />
      <path d="M8.5 8.5h7M8.5 12.5h7M8.5 16.5h4" />
      <circle cx="16.5" cy="16.5" r="3" fill={A} stroke="none" />
    </>
  ),
  gauge: (
    <>
      <path d="M3 17a9 9 0 1 1 18 0" />
      <path d="M3 17h3M18 17h3M5.5 10.5 7.6 12M12 6v2.5M18.5 10.5 16.4 12" />
      <path d="M12 17 16.5 11.5" stroke={A} strokeWidth={2.5} />
    </>
  ),
};

/**
 * `size` is set by the caller in Tailwind classes (size-14, size-24). The SVG
 * inherits the current text colour for its hairlines.
 */
export function BlogIcon({ icon, className = "" }: { icon: IconKey; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {GLYPHS[icon]}
    </svg>
  );
}
