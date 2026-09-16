"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { pad } from "@/lib/format";
import { DURATION, SPRING } from "@/lib/tokens";
import { FAQ as ITEMS } from "@/lib/content/faq";

/** A plus that turns into a minus: two hairline bars, the vertical one rotates away. */
function PlusMinus({ open }: { open: boolean }) {
  const reduced = useReducedMotion();
  return (
    <span aria-hidden className="relative mt-2 block size-4 shrink-0">
      <span className="absolute left-0 top-1/2 h-0.5 w-4 -translate-y-1/2 bg-fg" />
      <motion.span
        initial={false}
        animate={{ rotate: open ? 90 : 0, opacity: open ? 0 : 1 }}
        transition={reduced ? { duration: DURATION.crossfade } : SPRING.touch}
        className="absolute left-1/2 top-0 h-4 w-0.5 -translate-x-1/2 bg-fg"
      />
    </span>
  );
}

function Item({ index, q, a }: { index: number; q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const body = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  // Measure the answer so height animates between real pixel values, from
  // wherever it currently is. Re-measure on resize.
  useEffect(() => {
    const el = body.current;
    if (!el) return;
    const measure = () => setHeight(el.scrollHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const qId = `faq-q-${index}`;
  const aId = `faq-a-${index}`;

  return (
    <li className="border-b border-line">
      <h3>
        <button
          type="button"
          id={qId}
          aria-expanded={open}
          aria-controls={aId}
          data-cursor="grow"
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-start gap-4 py-5 text-left"
        >
          <span className="label w-10 shrink-0 pt-2 text-muted">{pad(index + 1)}</span>
          <span className="flex-1 font-display text-h3 text-fg">{q}</span>
          <PlusMinus open={open} />
        </button>
      </h3>
      <motion.div
        id={aId}
        role="region"
        aria-labelledby={qId}
        aria-hidden={!open}
        initial={false}
        animate={{ height: open ? height : 0, opacity: open ? 1 : 0 }}
        transition={
          reduced
            ? { height: { duration: 0 }, opacity: { duration: DURATION.crossfade } }
            : SPRING.move
        }
        className="overflow-hidden"
      >
        <div ref={body} className="max-w-measure pb-6 pl-14 text-body text-muted">
          {a}
        </div>
      </motion.div>
    </li>
  );
}

interface FAQProps {
  id?: string;
  label?: string;
  heading?: string;
  items?: readonly { q: string; a: string }[];
}

/**
 * Accordion. Each answer's height animates on the critically damped move
 * spring from its live value, so rapid open/close never jumps. Multiple
 * answers can be open at once. Plus/minus in ink hairlines, no icon set.
 * Defaults to the homepage questions; /pricing passes its own.
 */
export function FAQ({ id = "faq", label = "Questions", heading = "Straight answers.", items = ITEMS }: FAQProps) {
  return (
    <Section id={id} aria-labelledby={`${id}-h`}>
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-6">
        <div className="lg:col-span-4">
          <SectionLabel rule>{label}</SectionLabel>
          <Reveal as="h2" id={`${id}-h`} className="mt-6 text-display-md">
            {heading}
          </Reveal>
        </div>
        <Reveal as="ul" index={1} className="mt-10 border-t border-line lg:col-span-7 lg:col-start-6 lg:mt-0">
          {items.map((item, i) => (
            <Item key={item.q} index={i} q={item.q} a={item.a} />
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
