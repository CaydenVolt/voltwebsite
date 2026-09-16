"use client";

import { useEffect, useRef } from "react";
import { MARQUEE } from "@/lib/tokens";

interface MarqueeProps {
  items: readonly string[];
  /** Pixels per second. Defaults to the house reading pace. */
  speed?: number;
  className?: string;
}

/**
 * CSS-driven marquee. Duration is derived from measured width so the speed
 * is constant regardless of content length or viewport. Stops entirely under
 * prefers-reduced-motion (see globals.css).
 */
export function Marquee({ items, speed = MARQUEE.speed, className = "" }: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const set = () => {
      const half = el.scrollWidth / 2;
      el.style.setProperty("--marquee-duration", `${half / speed}s`);
    };
    set();
    const ro = new ResizeObserver(set);
    ro.observe(el);
    return () => ro.disconnect();
  }, [speed]);

  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex items-center">
      {items.map((item, i) => (
        <li key={i} className="flex items-center">
          <span className="px-6">{item}</span>
          <span aria-hidden className="block size-1.5 rotate-45 bg-current opacity-40" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`marquee ${className}`}>
      <div ref={trackRef} className="marquee__track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
