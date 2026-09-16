import type { Transition } from "motion/react";

/**
 * Springs described the way Apple describes them: response (seconds to reach
 * the target) and damping ratio (1.0 = no overshoot). Converted to
 * stiffness/damping so Motion can run them. Anything the user touches uses one
 * of these.
 */
export function spring(response = 0.35, dampingRatio = 1, mass = 1): Transition {
  const omega = (2 * Math.PI) / response;
  const stiffness = omega * omega * mass;
  const damping = 2 * dampingRatio * Math.sqrt(stiffness * mass);
  return { type: "spring", stiffness, damping, mass };
}

export const SPRING = {
  /** Press, hover, toggles: instant, no bounce. */
  touch: spring(0.3),
  /** Repositioning something on screen. */
  move: spring(0.4),
  /** Only after a flick or drag release: the gesture carried momentum. */
  flick: spring(0.35, 0.8),
  /** Cursor follower: shorter than the UI default because it trails a moving input. */
  cursor: spring(0.22),
} as const;

/** Decelerating ease for entrances the user did not trigger. */
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const DURATION = {
  /** Reduced-motion cross-fade in the hero. */
  fade: 0.3,
  /** Reduced-motion cross-fade for scroll entrances. */
  crossfade: 0.2,
  /** Word reveal. */
  reveal: 0.9,
  /** Ink panel wipe. */
  wipe: 1.0,
  /** Media cover sliding off. Deliberately slow: the hands keep revealing after everything else has landed. */
  uncover: 6,
  /** Small rise + fade for secondary elements. */
  rise: 0.6,
} as const;

/**
 * Momentum projection (Apple's, from Designing Fluid Interfaces): where a
 * flick would come to rest under exponential deceleration. Velocity in px/s.
 * Snap to the target nearest this point, then hand the spring the velocity.
 */
export const DECELERATION = 0.998;
export function project(velocity: number, decelerationRate = DECELERATION): number {
  return ((velocity / 1000) * decelerationRate) / (1 - decelerationRate);
}

/** Drag carousels: rubber-band factor past the ends. */
export const DRAG = {
  elastic: 0.15,
} as const;

/** Scroll-scrubbed draws (GSAP ScrollTrigger): where in the viewport they start and finish. */
export const SCRUB = {
  start: "top 85%",
  end: "top 35%",
} as const;

/**
 * Scroll entrance for everything below the hero: rise and fade on the `move`
 * spring, staggered 70ms, triggered at 20% visibility, played once.
 */
export const REVEAL = {
  y: 20,
  stagger: 0.07,
  amount: 0.2,
} as const;

/**
 * Hero entrance timeline (seconds). Stages overlap ~40% so it reads as one
 * gesture rather than a queue. Everything settles under 1.8s.
 */
export const HERO_TIMING = {
  nav: 0,
  eyebrow: 0.1,
  words: 0.2,
  wordStagger: 0.05,
  /** Media panel wipe, right to left, starts as the headline is landing. */
  media: 0.35,
  meta: 0.9,
  metaStagger: 0.05,
  panel: 0.65,
  panelContent: 0.95,
  panelStagger: 0.08,
  band: 1.15,
} as const;
