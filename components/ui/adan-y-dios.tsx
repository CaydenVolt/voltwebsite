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
      src={
        "https://assets.21st.dev/ascii-recipes/videos/user_3ExVfhyU8AKI7RnhKaZ3aw3zJW6/d000d0e8-b80a-4b95-85b5-50d230742f64.mp4"
      }
      poster={
        "https://assets.21st.dev/ascii-recipes/thumbnails/user_3ExVfhyU8AKI7RnhKaZ3aw3zJW6/e397eeb7-cb85-4e83-8fe8-944e1bd6be89.webp"
      }
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
