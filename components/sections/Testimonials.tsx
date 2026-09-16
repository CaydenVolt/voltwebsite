"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue, useReducedMotion, type PanInfo } from "motion/react";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Stars } from "@/components/ui/Stars";
import { DitheredImage } from "@/components/ui/DitheredImage";
import { DRAG, PRESS, SPRING, project } from "@/lib/tokens";
import { TESTIMONIALS } from "@/lib/content/sections";

function ArrowButton({
  direction,
  onClick,
  disabled,
  label,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
  label: string;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-disabled={disabled}
      data-cursor="grow"
      whileTap={disabled ? undefined : { scale: PRESS.scale }}
      transition={SPRING.touch}
      className={`flex size-11 items-center justify-center border border-line text-fg transition-colors duration-100 ${
        disabled ? "text-muted" : "hover:border-fg active:bg-surface-deep"
      }`}
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
        className={direction === "prev" ? "rotate-180" : ""}
      >
        <path d="M2 8h11M8.5 3.5 13 8l-4.5 4.5" />
      </svg>
    </motion.button>
  );
}

/**
 * Drag carousel on an ink slab. 1:1 tracking with pointer capture (Motion's
 * drag), rubber-band past the ends, and on release a projection of the flick
 * picks the nearest slide; the flick spring (damping 0.8) then takes over
 * with the release velocity, so there is no seam between finger and motion.
 * Prev/next buttons and arrow keys move one slide on the same spring. Never
 * auto-advances. Under reduced motion, position changes are instant.
 */
export function Testimonials() {
  const trackRef = useRef<HTMLUListElement>(null);
  const x = useMotionValue(0);
  const [index, setIndex] = useState(0);
  const [offsets, setOffsets] = useState<number[]>([]);
  const reduced = useReducedMotion();
  const last = TESTIMONIALS.length - 1;

  // Slide start positions relative to the track, refreshed on resize.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      const base = track.getBoundingClientRect().left - x.get();
      setOffsets(
        [...track.children].map((li) => -((li as HTMLElement).getBoundingClientRect().left - base)),
      );
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    return () => ro.disconnect();
  }, [x]);

  const go = useCallback(
    (to: number, velocity = 0) => {
      const target = Math.max(0, Math.min(last, to));
      setIndex(target);
      const dest = offsets[target] ?? 0;
      if (reduced) {
        x.set(dest);
        return;
      }
      animate(x, dest, { ...SPRING.flick, velocity });
    },
    [last, offsets, reduced, x],
  );

  // Keep the current slide in place when the layout changes width.
  useEffect(() => {
    if (offsets.length) x.set(offsets[index] ?? 0);
  }, [offsets, index, x]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    const projected = x.get() + project(info.velocity.x);
    let nearest = 0;
    let best = Infinity;
    offsets.forEach((o, i) => {
      const d = Math.abs(o - projected);
      if (d < best) {
        best = d;
        nearest = i;
      }
    });
    go(nearest, info.velocity.x);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(index - 1);
    }
  };

  return (
    <Section id="results" variant="ink" aria-labelledby="results-h">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="lg:w-7/12">
          <SectionLabel rule>What clients say</SectionLabel>
          <Reveal as="h2" id="results-h" className="mt-6 text-display-md">
            Said by people who install panels for a living.
          </Reveal>
        </div>
        <Reveal as="div" index={1} className="flex items-center gap-3">
          <ArrowButton
            direction="prev"
            label="Previous testimonial"
            disabled={index === 0}
            onClick={() => go(index - 1)}
          />
          <ArrowButton
            direction="next"
            label="Next testimonial"
            disabled={index === last}
            onClick={() => go(index + 1)}
          />
          <span className="label ml-3 text-muted" aria-live="polite">
            {index + 1} of {TESTIMONIALS.length}
          </span>
        </Reveal>
      </div>

      {/* Track bleeds off the right edge so the next slide always peeks */}
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Client testimonials"
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="-mr-gutter mt-12 overflow-hidden lg:mt-16"
      >
        <motion.ul
          ref={trackRef}
          drag="x"
          dragConstraints={{ left: offsets[last] ?? 0, right: 0 }}
          dragElastic={DRAG.elastic}
          dragMomentum={false}
          onDragEnd={onDragEnd}
          style={{ x }}
          className="flex cursor-grab gap-6 pr-gutter active:cursor-grabbing"
        >
          {TESTIMONIALS.map((t, i) => (
            <li
              key={t.name}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${TESTIMONIALS.length}`}
              aria-current={i === index ? "true" : undefined}
              className="w-10/12 shrink-0 select-none border-t border-line pt-6 sm:w-8/12 lg:w-7/12"
            >
              <figure>
                <div className="flex items-center gap-4">
                  {/* 1px cell: at 64px a coarser dot turns a face into noise */}
                  <DitheredImage
                    src={t.portrait.src}
                    alt={t.portrait.alt}
                    aspect="1 / 1"
                    cell={1}
                    contrast={1.25}
                    position={{ x: 50, y: 30 }}
                    className="w-16 shrink-0"
                  />
                  <Stars className="text-body" />
                </div>
                <blockquote className="mt-8 font-display text-display-md text-fg">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="label mt-8 text-muted">
                  {t.name}, {t.company}, {t.place}
                </figcaption>
              </figure>
            </li>
          ))}
        </motion.ul>
      </div>
    </Section>
  );
}
