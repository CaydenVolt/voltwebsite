"use client";

import { MotionConfig } from "motion/react";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { ConsentProvider } from "@/components/consent/ConsentProvider";
import { CookieBanner } from "@/components/consent/CookieBanner";
import { PreferencesDialog } from "@/components/consent/PreferencesDialog";
import { TrackingScripts } from "@/components/consent/TrackingScripts";

/**
 * Client-side providers. `reducedMotion="user"` makes Motion drop transform
 * animations and keep opacity when the OS asks for reduced motion.
 *
 * ConsentProvider wraps everything because the footer links open the
 * preferences panel and the tracking scripts read the same state. The banner,
 * the panel and the scripts all render here rather than in the layout, so
 * there is one place where consent and what it controls sit together.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <ConsentProvider>
        <SmoothScroll>{children}</SmoothScroll>
        <CookieBanner />
        <PreferencesDialog />
        <TrackingScripts />
      </ConsentProvider>
    </MotionConfig>
  );
}
