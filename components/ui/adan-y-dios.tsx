"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

// AsciiArt: "adan y dios", made with the 21st ASCII editor and baked to its
// exact rendered output (looping video + poster). Zero dependencies: one
// <video> that fills its parent. Drop it behind or inside your content:
// <div className="relative h-96"><AsciiArt className="absolute inset-0" /></div>
// Remix the source recipe (styles, animation, palette) in the editor:
// https://21st.dev/community/ascii/editor?from=b9131b92-b492-41c4-8670-f8404b61fdfc
//
// Self-hosted from public/hero since 2026-09-23. It used to stream from the
// editor's own CDN, which put the site's largest above-the-fold element behind
// a third party's uptime, and meant the production CSP had to open media-src
// and img-src to an outside origin to show it at all. Re-bake from the editor
// if the art changes, then drop the files in public/hero.
//
// Adapted for Volt: under prefers-reduced-motion the loop does not autoplay
// and the poster frame is shown instead. When motion is allowed, playback is
// nudged on mount and whenever the tab becomes visible again, since browsers
// hold autoplay while a document is hidden.
export function AsciiArt({ className }: { className?: string }) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (reduced) {
      video.pause();
      return;
    }
    const play = () => {
      if (document.visibilityState === "visible") void video.play().catch(() => {});
    };
    play();
    document.addEventListener("visibilitychange", play);
    return () => document.removeEventListener("visibilitychange", play);
  }, [reduced]);

  return (
    <video
      ref={ref}
      className={className}
      src="/hero/ascii.mp4"
      poster="/hero/ascii-poster.webp"
      autoPlay={!reduced}
      loop
      muted
      playsInline
      preload="auto"
      aria-label={"Two hands reaching toward each other, animated ASCII art"}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  );
}
