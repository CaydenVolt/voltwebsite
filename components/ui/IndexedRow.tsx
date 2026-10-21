import type { ReactNode } from "react";
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
  /** Hover reveals accent on the numeral (colour only, no motion). */
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
 * Numeral, label, optional right-aligned detail, hairline underneath. Used by
 * the hero rail and the "What this replaces" block. Interactive variant tints
 * the numeral in accent on hover; no transforms, no motion.
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
  const Row = as;
  return (
    <Row
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
      <span className={`font-display text-fg ${labelSize[size]}`}>{children}</span>
      {detail !== undefined && (
        <span className="text-right text-body-sm text-muted">{detail}</span>
      )}
    </Row>
  );
}
