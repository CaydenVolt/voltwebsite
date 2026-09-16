"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { pad } from "@/lib/format";
import { SCRUB } from "@/lib/tokens";
import { PROCESS } from "@/lib/content/sections";

gsap.registerPlugin(ScrollTrigger);

/**
 * Three steps. Desktop: a row with a connecting hairline across the top that
 * draws in, scrubbed to scroll position. Phones: stacked, with the rule
 * running down the left. Under reduced motion the rule is simply there.
 */
export function Process() {
  const wrap = useRef<HTMLDivElement>(null);
  const across = useRef<HTMLSpanElement>(null);
  const down = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const h = across.current;
    const v = down.current;
    if (!wrap.current || !h || !v) return;
    if (reduced) {
      gsap.set([h, v], { scaleX: 1, scaleY: 1 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        h,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { trigger: wrap.current, start: SCRUB.start, end: SCRUB.end, scrub: true },
        },
      );
      gsap.fromTo(
        v,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: wrap.current, start: SCRUB.start, end: "bottom 60%", scrub: true },
        },
      );
    }, wrap);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <Section id="process" variant="ink" aria-labelledby="process-h">
      <SectionLabel rule>How it starts</SectionLabel>
      <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-x-6">
        <Reveal as="h2" id="process-h" className="text-display-md lg:col-span-7">
          What working with us looks like.
        </Reveal>
        <Reveal as="div" index={1} className="mt-6 lg:col-span-4 lg:col-start-9 lg:self-end lg:mt-0">
          <Button href="/our-process" source="home_process_page" variant="link-inverse">
            See the process in full
          </Button>
        </Reveal>
      </div>

      <div ref={wrap} className="relative mt-12 pl-8 lg:mt-16 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:pl-0">
        {/* Connecting rule: across the top on desktop, down the left on phones */}
        <span
          ref={across}
          aria-hidden
          className="absolute inset-x-0 top-0 hidden h-px origin-left bg-fg lg:block"
        />
        <span ref={down} aria-hidden className="absolute inset-y-0 left-0 w-px origin-top bg-fg lg:hidden" />

        {PROCESS.map((step, i) => (
          <Reveal
            key={step.title}
            as="div"
            index={i}
            className="relative pb-10 pt-8 last:pb-0 lg:pb-0 lg:pt-10"
          >
            {/* Tick mark where the step meets the rule */}
            <span aria-hidden className="absolute left-0 top-0 hidden h-3 w-px bg-fg lg:block" />
            <span aria-hidden className="absolute -left-8 top-0 h-px w-3 bg-fg lg:hidden" />
            <span className="font-display text-display-md text-accent">{pad(i + 1)}</span>
            <h3 className="mt-4 text-h3">{step.title}</h3>
            <p className="label mt-2 text-muted">{step.time}</p>
            <p className="mt-4 max-w-measure text-body">{step.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
