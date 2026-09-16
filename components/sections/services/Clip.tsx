"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * A product recording: a silent loop that plays like a GIF but at full colour
 * and full resolution, for a fraction of a GIF's weight.
 *
 * Nothing downloads until the block is a screen away (`preload="none"` plus an
 * IntersectionObserver), playback pauses when it scrolls out of view, and
 * under prefers-reduced-motion it never plays: the poster frame stands in.
 */
export function Clip({
  src,
  poster,
  alt,
  width,
  height,
}: {
  src: string;
  poster: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  /** Set once it first comes near, so scrolling back does not refetch. */
  const [loaded, setLoaded] = useState(false);
  const [onScreen, setOnScreen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setLoaded(true);
        setOnScreen(entry.isIntersecting);
      },
      { rootMargin: "50% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced || !loaded) return;
    if (onScreen) void el.play().catch(() => {});
    else el.pause();
  }, [loaded, onScreen, reduced]);

  return (
    <video
      ref={ref}
      src={loaded ? src : undefined}
      poster={poster}
      width={width}
      height={height}
      loop
      muted
      playsInline
      preload="none"
      aria-label={alt}
      className="block h-auto w-full"
    />
  );
}
