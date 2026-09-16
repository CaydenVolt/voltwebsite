"use client";

import { motion } from "motion/react";
import { PRESS, SPRING } from "@/lib/tokens";

/**
 * Back and forward for a belt: 44px targets, hairline, tone-aware. Neither is
 * ever disabled, because an endless belt has no first item and no last.
 */
export function CarouselArrows({
  onBack,
  onNext,
  label,
}: {
  onBack: () => void;
  onNext: () => void;
  /** Named in the button labels: "Previous {label}". */
  label: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <Arrow label={`Previous ${label}`} onClick={onBack} back />
      <Arrow label={`Next ${label}`} onClick={onNext} />
    </div>
  );
}

function Arrow({
  label,
  onClick,
  back = false,
}: {
  label: string;
  onClick: () => void;
  back?: boolean;
}) {
  return (
    <motion.button
      type="button"
      aria-label={label}
      onClick={onClick}
      whileTap={{ scale: PRESS.scale }}
      transition={SPRING.touch}
      data-cursor="grow"
      className="flex size-11 items-center justify-center border border-line text-fg transition-colors duration-100 hover:bg-surface-deep"
    >
      <svg
        aria-hidden
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        className={back ? "rotate-180" : ""}
      >
        <path d="M2 8h11M8.5 3.5 13 8l-4.5 4.5" />
      </svg>
    </motion.button>
  );
}
