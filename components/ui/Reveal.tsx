"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { DURATION, REVEAL, SPRING } from "@/lib/tokens";

type Tag =
  | "div"
  | "li"
  | "ul"
  | "ol"
  | "p"
  | "span"
  | "section"
  | "article"
  | "figure"
  | "h1"
  | "h2"
  | "h3"
  | "blockquote";

const tags = {
  h1: motion.h1,
  div: motion.div,
  li: motion.li,
  ul: motion.ul,
  ol: motion.ol,
  p: motion.p,
  span: motion.span,
  section: motion.section,
  article: motion.article,
  figure: motion.figure,
  h2: motion.h2,
  h3: motion.h3,
  blockquote: motion.blockquote,
} as const;

interface RevealProps {
  children: ReactNode;
  as?: Tag;
  /** Position in a staggered group; delay = index × 70ms. */
  index?: number;
  /** Extra delay in seconds, added to the stagger. */
  delay?: number;
  /** Rise distance in px. */
  y?: number;
  /** Fraction visible before it plays. */
  amount?: number;
  once?: boolean;
  className?: string;
  style?: CSSProperties;
  id?: string;
}

/**
 * Scroll entrance for everything below the hero. Rises ~20px and fades on the
 * critically damped `move` spring, triggered at 20% visible, plays once.
 * Under reduced motion it becomes a 200ms opacity cross-fade with no
 * transform and the stagger halved.
 */
export function Reveal({
  children,
  as = "div",
  index = 0,
  delay = 0,
  y = REVEAL.y,
  amount = REVEAL.amount,
  once = true,
  className,
  style,
  id,
}: RevealProps) {
  const reduced = useReducedMotion();
  const Comp = tags[as];
  const wait = index * REVEAL.stagger + delay;

  return (
    <Comp
      id={id}
      className={className}
      style={style}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={
        reduced ? { duration: DURATION.crossfade, delay: wait * 0.5 } : { ...SPRING.move, delay: wait }
      }
    >
      {children}
    </Comp>
  );
}
