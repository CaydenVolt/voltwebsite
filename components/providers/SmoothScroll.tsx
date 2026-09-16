"use client";

import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NAV } from "@/lib/tokens";

gsap.registerPlugin(ScrollTrigger);

/**
 * Drives Lenis from the GSAP ticker so Lenis and ScrollTrigger share one
 * clock, and forwards Lenis scroll events to ScrollTrigger. Lives inside the
 * provider so `useLenis` hands us the instance once it exists; capturing the
 * ref during the provider's own effect ran before the instance was created,
 * which left wheel input captured but never applied.
 */
function LenisTicker() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    const update = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    lenis.on("scroll", ScrollTrigger.update);
    return () => {
      gsap.ticker.remove(update);
      lenis.off("scroll", ScrollTrigger.update);
    };
  }, [lenis]);

  return null;
}

/**
 * Lenis smooth scroll. Honours prefers-reduced-motion itself (lerp forced to
 * 1 = native scroll) and leaves touch scrolling native.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        lerp: 0.1,
        smoothWheel: true,
        // Anchor links stop below the condensed sticky bar
        anchors: { offset: -NAV.condensed },
        respectReducedMotion: true,
      }}
    >
      <LenisTicker />
      {children}
    </ReactLenis>
  );
}
