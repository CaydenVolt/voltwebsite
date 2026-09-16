import type { ReactNode } from "react";

type Variant = "bone" | "deep" | "ink" | "bleed" | "bleed-deep";
type Rhythm = "default" | "sm" | "none";
type Rule = "none" | "top" | "bottom" | "both";
type Tilt = "none" | "left" | "right";
type Tag = "section" | "article" | "div" | "footer" | "header" | "aside";

interface SectionProps {
  id?: string;
  /**
   * bone: paper, gutters applied.
   * deep: a darker sheet of the same paper, for contrast between bone sections.
   * ink: full-bleed ink slab, gutters applied, tone tokens flipped.
   * bleed / bleed-deep: no gutters; children run edge to edge and add their own.
   */
  variant?: Variant;
  /** Vertical rhythm: standard section, short strip, or none. */
  rhythm?: Rhythm;
  /** Hairline rules on the section's edges, tone-aware. */
  rule?: Rule;
  /**
   * Cuts this section's top edge on the diagonal and slides it up over the
   * section above, so the two interlock instead of meeting on a straight line.
   * Homepage only, and only where the two surfaces differ: on matching colours
   * there is nothing to see.
   */
  tilt?: Tilt;
  as?: Tag;
  className?: string;
  children: ReactNode;
  "aria-labelledby"?: string;
  "aria-label"?: string;
}

const surface: Record<Variant, string> = {
  bone: "bg-bone text-ink px-gutter",
  deep: "bg-bone-deep text-ink px-gutter",
  ink: "bg-ink text-bone px-gutter",
  bleed: "bg-bone text-ink",
  "bleed-deep": "bg-bone-deep text-ink",
};

const rhythm: Record<Rhythm, string> = {
  default: "py-section",
  sm: "py-section-sm",
  none: "",
};

const tiltShape: Record<Tilt, string> = {
  none: "",
  left: "tilt-left",
  right: "tilt-right",
};

/**
 * Pull up by the cut and give the height straight back, so the page keeps its
 * length. The padding has to be the rhythm plus the cut, written as one value:
 * a bare `pt` would replace the rhythm's top padding rather than add to it,
 * and the section's first line would sit in the cut.
 */
const tiltPad: Record<Rhythm, string> = {
  default: "-mt-tilt pt-[calc(var(--spacing-section)+var(--spacing-tilt))]",
  sm: "-mt-tilt pt-[calc(var(--spacing-section-sm)+var(--spacing-tilt))]",
  none: "-mt-tilt pt-tilt",
};

const rules: Record<Rule, string> = {
  none: "",
  top: "border-t border-line",
  bottom: "border-b border-line",
  both: "border-y border-line",
};

/**
 * Page section. Full-width like the hero (no max-width; text is constrained
 * by measure, not by a container), with the site's vertical rhythm and an
 * optional ink slab treatment.
 */
export function Section({
  id,
  variant = "bone",
  rhythm: rhythmKey = "default",
  rule = "none",
  tilt = "none",
  as: Tag = "section",
  className = "",
  children,
  ...aria
}: SectionProps) {
  return (
    <Tag
      id={id}
      data-surface={variant === "ink" ? "ink" : undefined}
      className={`relative ${surface[variant]} ${rhythm[rhythmKey]} ${rules[rule]} ${tilt === "none" ? "" : `${tiltShape[tilt]} ${tiltPad[rhythmKey]}`} ${className}`}
      {...aria}
    >
      {children}
    </Tag>
  );
}
