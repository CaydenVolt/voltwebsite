import type { ReactNode } from "react";

type Tag = "p" | "h2" | "h3" | "span" | "div";

interface SectionLabelProps {
  children: ReactNode;
  /** Leading hairline rule, as on the hero eyebrow. */
  rule?: boolean;
  align?: "left" | "right";
  as?: Tag;
  id?: string;
  className?: string;
}

/**
 * The small-caps, letterspaced, muted label that marks every section.
 * Tone-aware: muted ink on bone, muted bone on ink.
 */
export function SectionLabel({
  children,
  rule = false,
  align = "left",
  as: Tag = "p",
  id,
  className = "",
}: SectionLabelProps) {
  return (
    <Tag
      id={id}
      className={`label flex items-center gap-3 text-muted ${
        align === "right" ? "justify-end text-right" : ""
      } ${className}`}
    >
      {rule && <span aria-hidden className="h-px w-6 shrink-0 bg-fg sm:w-8" />}
      <span>{children}</span>
    </Tag>
  );
}
