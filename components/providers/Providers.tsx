"use client";

import { MotionConfig } from "motion/react";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

/**
 * Client-side providers. `reducedMotion="user"` makes Motion drop transform
 * animations and keep opacity when the OS asks for reduced motion.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll>{children}</SmoothScroll>
    </MotionConfig>
  );
}
