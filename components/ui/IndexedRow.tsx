"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { SPRING } from "@/lib/tokens";
import { pad } from "@/lib/format";

type Tag = "li" | "div";
type Size = "md" | "lg";

interface IndexedRowProps {
  /** 1-based index; rendered zero-padded ("01"). Strings pass through. */
  index: number | string;
  children: ReactNode;
  /** Optional right-aligned detail (a time, a short line). */
  detail?: ReactNode;
  /** Numeral in accent at rest. Rationed: block headers only. */
  accent?: boolean;
  /** Hover reveals accent on the numeral and shifts the label a few px. */
  interactive?: boolean;
  /** Hairline below the row (lists add their own top rule). */
  rule?: boolean;
  size?: Size;
  as?: Tag;
  className?: string;
}

const labelSize: Record<Size, string> = {
  md: "text-item",
  lg: "text-h3",
};

/**
 * The `01 —— Label` hairline row from the hero's "Everything included" rail.
 * Numeral in the label style, name in the display face, optional detail on
 * the right, hairline underneath. Tone-aware.
 */
export function IndexedRow({
  index,
  children,
  detail,
  accent = false,
  interactive = false,
  rule = true,
  size = "md",
  as = "li",
  className = "",
}: IndexedRowProps) {
  const Row = as === "li" ? motion.li : motion.div;
  return (
    <Row
      initial="rest"
      whileHover={interactive ? "hover" : undefined}
      whileFocus={interactive ? "hover" : undefined}
      className={`group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-3 py-2.5 ${
        rule ? "border-b border-line" : ""
      } ${className}`}
    >
      <span
        className={`label transition-colors duration-100 ${
          accent ? "text-accent" : "text-muted"
        } ${interactive ? "group-hover:text-accent" : ""}`}
      >
        {pad(index)}
      </span>
      <motion.span
        variants={{ rest: { x: 0 }, hover: { x: 4 } }}
        transition={SPRING.touch}
        className={`font-display text-fg ${labelSize[size]}`}
      >
        {children}
      </motion.span>
      {detail !== undefined && (
        <span className="text-right text-body-sm text-muted">{detail}</span>
      )}
    </Row>
  );
}
