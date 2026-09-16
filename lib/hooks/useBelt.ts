"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { CAROUSEL, MARQUEE, SPRING, project } from "@/lib/tokens";

/**
 * An endless belt, shared by the trades cards and the partner marks.
 *
 * The caller renders its set once per `copies` and hands back a ref to the
 * first one. The raw offset is folded into one set's width before it is
 * painted, so the seam always lands on identical content: the belt has no end
 * in either direction, and one that has been walking for an hour paints where
 * a fresh one does.
 *
 * `walk` chooses the manner: true walks continuously at the marquee speed,
 * false steps one item along every few seconds, which is what you want when
 * each item carries text to read. Either way it stops while a hand is on it or
 * focus is inside, idles off screen, and holds still under reduced motion,
 * where the arrow keys still move it.
 *
 * Drag is handled with raw pointer events rather than Motion's `drag`, because
 * that writes to the same value the wrap has to own. Release runs the site's
 * own momentum projection.
 */
export function useBelt({ walk = false }: { walk?: boolean } = {}) {
  const viewport = useRef<HTMLDivElement>(null);
  const firstSet = useRef<HTMLUListElement>(null);
  const x = useMotionValue(0);
  const [setWidth, setSetWidth] = useState(0);
  const [item, setItem] = useState(0);
  const [copies, setCopies] = useState(2);
  const [held, setHeld] = useState(false);
  const [onScreen, setOnScreen] = useState(false);
  const drag = useRef<{
    id: number;
    from: number;
    value: number;
    lastX: number;
    lastAt: number;
    v: number;
    moved: boolean;
  } | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const view = viewport.current;
    const set = firstSet.current;
    if (!view || !set) return;
    const measure = () => {
      const width = set.offsetWidth;
      if (!width) return;
      setSetWidth(width);
      setItem((set.firstElementChild as HTMLElement | null)?.offsetWidth ?? 0);
      // One set beyond the viewport, so the wrap always has content to show.
      setCopies(Math.max(2, Math.ceil(view.clientWidth / width) + 1));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(view);
    ro.observe(set);
    return () => ro.disconnect();
  }, []);

  // A belt moving off screen is a style write every frame for nothing.
  useEffect(() => {
    const view = viewport.current;
    if (!view) return;
    const io = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting));
    io.observe(view);
    return () => io.disconnect();
  }, []);

  /** The painted offset: the raw value folded into (-setWidth, 0]. */
  const belt = useTransform(x, (v) => (setWidth ? -(((-v % setWidth) + setWidth) % setWidth) : 0));

  const idle = () => reduced || held || !onScreen || !setWidth || drag.current !== null;

  useAnimationFrame((_, delta) => {
    if (!walk || idle()) return;
    x.set(x.get() - (MARQUEE.speed * delta) / 1000);
  });

  useEffect(() => {
    if (walk || reduced || held || !onScreen || !item) return;
    const id = setInterval(() => {
      if (drag.current) return;
      animate(x, x.get() - item, SPRING.move);
    }, CAROUSEL.holdMs);
    return () => clearInterval(id);
  }, [walk, reduced, held, onScreen, item, x]);

  const nudge = (delta: number) => animate(x, x.get() + delta, SPRING.move);

  const handlers = {
    onPointerEnter: () => setHeld(true),
    onPointerLeave: () => setHeld(false),
    onFocusCapture: () => setHeld(true),
    onBlurCapture: () => setHeld(false),
    onPointerDown: (e: React.PointerEvent<HTMLDivElement>) => {
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {
        /* some pointers cannot be captured; the drag still tracks */
      }
      drag.current = {
        id: e.pointerId,
        from: e.clientX,
        value: x.get(),
        lastX: e.clientX,
        lastAt: performance.now(),
        v: 0,
        moved: false,
      };
      setHeld(true);
    },
    onPointerMove: (e: React.PointerEvent<HTMLDivElement>) => {
      const d = drag.current;
      if (!d || d.id !== e.pointerId) return;
      const now = performance.now();
      const elapsed = Math.max(1, now - d.lastAt);
      d.v = ((e.clientX - d.lastX) / elapsed) * 1000;
      d.lastX = e.clientX;
      d.lastAt = now;
      if (Math.abs(e.clientX - d.from) > 4) d.moved = true;
      x.set(d.value + (e.clientX - d.from));
    },
    onPointerUp: (e: React.PointerEvent<HTMLDivElement>) => {
      const d = drag.current;
      if (!d || d.id !== e.pointerId) return;
      drag.current = null;
      setHeld(false);
      if (Math.abs(d.v) > 50) animate(x, x.get() + project(d.v), SPRING.flick);
    },
    onPointerCancel: (e: React.PointerEvent<HTMLDivElement>) => {
      if (drag.current?.id !== e.pointerId) return;
      drag.current = null;
      setHeld(false);
    },
    onKeyDown: (e: React.KeyboardEvent) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      e.preventDefault();
      nudge(e.key === "ArrowLeft" ? item : -item);
    },
  };

  /** True while a drag actually moved, so a card's click can be suppressed. */
  const dragged = () => drag.current?.moved ?? false;

  return { viewport, firstSet, belt, copies, item, nudge, handlers, dragged };
}
