"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { CURSOR, MQ, SPRING } from "@/lib/tokens";

const DOT = CURSOR.dot;
const RING = CURSOR.ring;
const FINE_POINTER = MQ.finePointer;

/** True only on devices with a hovering, precise pointer. False on the server. */
function useFinePointer(): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(FINE_POINTER);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(FINE_POINTER).matches,
    () => false,
  );
}

/**
 * The one cursor-follow effect. Desktop only (hover + fine pointer).
 * A small ink dot trails the pointer on a critically-damped spring and opens
 * into a hairline ring over anything marked data-cursor="grow". On ink
 * surfaces (data-surface="ink") it flips to bone.
 */
export function Cursor() {
  const enabled = useFinePointer();
  const [mode, setMode] = useState<"dot" | "ring">("dot");
  const [tone, setTone] = useState<"ink" | "bone">("ink");
  const reduced = useReducedMotion();

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const opacity = useMotionValue(0);
  const sx = useSpring(x, SPRING.cursor);
  const sy = useSpring(y, SPRING.cursor);
  const sOpacity = useSpring(opacity, SPRING.touch);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      opacity.set(1);
    };
    const onOver = (e: PointerEvent) => {
      const el = e.target as Element | null;
      if (!el?.closest) return;
      setMode(el.closest('[data-cursor="grow"]') ? "ring" : "dot");
      setTone(el.closest('[data-surface="ink"]') ? "bone" : "ink");
    };
    const onOut = (e: PointerEvent) => {
      if (!e.relatedTarget) opacity.set(0);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    document.addEventListener("pointerout", onOut, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
    };
  }, [enabled, x, y, opacity]);

  if (!enabled) return null;

  const size = mode === "ring" ? RING : DOT;
  const fill = tone === "ink" ? "bg-ink border-ink" : "bg-bone border-bone";

  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none fixed left-0 top-0 z-cursor rounded-full border ${fill}`}
      style={{
        x: reduced ? x : sx,
        y: reduced ? y : sy,
        opacity: sOpacity,
        translate: "-50% -50%",
      }}
      animate={{
        width: size,
        height: size,
        backgroundColor: mode === "ring" ? "rgba(0,0,0,0)" : undefined,
      }}
      transition={reduced ? { duration: 0 } : SPRING.touch}
    />
  );
}
