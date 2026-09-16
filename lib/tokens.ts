/**
 * JS-side design tokens.
 *
 * Colour, type, spacing, radius and aspect live in the Tailwind theme
 * (`app/globals.css`, the `@theme` block) so utilities and CSS read one
 * source. This file holds the values that only JavaScript needs: motion,
 * pointer sizes, speeds, breakpoints, plus a helper to read a CSS token at
 * runtime (for canvas work such as dithering) without duplicating hex values.
 */

export {
  spring,
  SPRING,
  EASE_OUT,
  DURATION,
  HERO_TIMING,
  REVEAL,
  DECELERATION,
  project,
  DRAG,
  SCRUB,
} from "@/lib/motion";

/**
 * House image treatment: ordered (Bayer) dither drawn on a canvas in ink on a
 * bone-deep plate. `cell` is the dot size in CSS px; `contrast` and `lift`
 * shape the tone curve before thresholding so photos read light and soft
 * like the hero's halftone rather than harsh black.
 */
export const DITHER = {
  cell: 3,
  contrast: 1.15,
  lift: 0.08,
  maxDpr: 2,
} as const;

/** Mirrors Tailwind v4 default breakpoints (rem × 16). */
export const BREAKPOINT = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

/**
 * Navigation bar heights in px. Mirrors --spacing-nav, --spacing-nav-lg and
 * --spacing-nav-condensed in globals.css; Motion animates the bar between them.
 */
export const NAV = {
  base: 64,
  lg: 72,
  condensed: 56,
} as const;

/**
 * Products mega-menu. Hover intent in, grace period out (a diagonal path into
 * the panel must not dismiss it), and the grid width for arrow-key movement.
 */
export const MEGA_MENU = {
  hoverInMs: 100,
  graceOutMs: 200,
  columns: 3,
} as const;

/** Cursor follower: resting dot and the ring it opens into over interactive elements (px). */
export const CURSOR = {
  dot: 8,
  ring: 44,
} as const;

/** Marquee speed in px/s: a reading pace, fast enough to move, slow enough to read. */
/** Trades carousel: how long a card sits before the track advances. */
export const CAROUSEL = { holdMs: 4000 } as const;

export const MARQUEE = {
  speed: 80,
} as const;

/** Pointer-down feedback. */
export const PRESS = {
  scale: 0.97,
} as const;

/** Media plate cover skew (deg), matched to the plate's 5rem slant over its height. */
export const PLATE = {
  coverSkew: -8,
} as const;

/** Media query strings used by JS. */
export const MQ = {
  finePointer: "(hover: hover) and (pointer: fine)",
  reducedMotion: "(prefers-reduced-motion: reduce)",
  lg: `(min-width: ${BREAKPOINT.lg}px)`,
} as const;

/**
 * Read a CSS token (e.g. "--color-ink") from :root at runtime. Returns the
 * fallback on the server or if the token is missing.
 */
export function readToken(name: string, fallback = ""): string {
  if (typeof window === "undefined") return fallback;
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
}
