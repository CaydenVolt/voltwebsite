"use client";

import { Fragment } from "react";
import { motion, useReducedMotion, type Transition } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Marquee } from "@/components/ui/Marquee";
import { AsciiArt } from "@/components/ui/adan-y-dios";
import { DURATION, EASE_OUT, HERO_TIMING as T, PLATE } from "@/lib/tokens";
import { SITE, bookingHref } from "@/lib/site";
import { getPublicProducts } from "@/lib/content/products";

/* Copy ------------------------------------------------------------------ */

const HEADLINE: readonly (readonly string[])[] = [
  ["Marketing", "systems,"],
  ["and", "website", "design"],
  ["for", "solar", "businesses"],
];

/** The ink block opens with the hook, then the promise underneath it. */
const LEAD_HOOK = "Drop the act. Marketing isn't rocket science.";
const LEAD =
  "No agency (including ours) has the miracle solution to all your problems. We'll give you the tools to win, but you need to commit to using them!";

// PLACEHOLDER: the speed-to-lead figure is still a claim with nothing behind
// it. The client count was removed on 2026-09-15 for exactly that reason.
const STATS = [{ value: "48 sec", label: "average speed-to-lead" }] as const;

/** The six public products, in funnel order. Same source as the rail, the nav and /products. */
const PRODUCTS = getPublicProducts();
const TICKER = PRODUCTS.map((p) => p.name);

const pad = (n: number) => String(n).padStart(2, "0");

/* Entrance ---------------------------------------------------------------
   One orchestrated sequence. Under reduced motion every stage becomes a
   short opacity cross-fade with the delays halved.                        */

function useEntrance() {
  const reduced = useReducedMotion();

  const t = (delay: number, duration: number): Transition => ({
    duration: reduced ? DURATION.fade : duration,
    delay: reduced ? delay * 0.5 : delay,
    ease: EASE_OUT,
  });

  const fadeOnly = (delay: number, duration: number) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: t(delay, duration),
  });

  return {
    fade: (delay: number) => fadeOnly(delay, DURATION.rise),
    rise: (delay: number) =>
      reduced
        ? fadeOnly(delay, DURATION.rise)
        : {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: t(delay, DURATION.rise),
          },
    word: (delay: number) =>
      reduced
        ? fadeOnly(delay, DURATION.reveal)
        : {
            initial: { y: "125%" },
            animate: { y: "0%" },
            transition: t(delay, DURATION.reveal),
          },
    /** Ink block: wipes in from its left edge. */
    wipe: (delay: number) =>
      reduced
        ? fadeOnly(delay, DURATION.wipe)
        : {
            initial: { clipPath: "inset(0% 100% 0% 0%)" },
            animate: { clipPath: "inset(0% 0% 0% 0%)" },
            transition: t(delay, DURATION.wipe),
          },
    /** Blank bone cover over the media slides off to the left, exposing it right to left. */
    uncover: (delay: number) =>
      reduced
        ? {
            initial: { opacity: 1 },
            animate: { opacity: 0 },
            transition: t(delay, DURATION.wipe),
          }
        : {
            initial: { x: "0%", skewX: PLATE.coverSkew },
            animate: { x: "-100%", skewX: PLATE.coverSkew },
            transition: t(delay, DURATION.uncover),
          },
  };
}

/* Component ------------------------------------------------------------- */

export function Hero() {
  const { fade, rise, word, wipe, uncover } = useEntrance();

  let wordIndex = 0;

  return (
    <section id="hero" aria-labelledby="hero-heading" className="relative flex min-h-svh flex-col">
      {/* The fixed nav (app/layout.tsx) sits over this spacer, which keeps the
          hero's layout and its hairline exactly where the static bar was. */}
      <div aria-hidden className="border-b border-rule">
        <div className="h-nav lg:h-nav-lg" />
      </div>

      <div className="flex flex-1 flex-col px-gutter pt-stack pb-section-sm">
        {/* Eyebrow row: tagline left, two hard numbers right */}
        <div className="flex items-start justify-between gap-6">
          <motion.p {...rise(T.eyebrow)} className="label flex items-center gap-3 text-ink-muted">
            <span aria-hidden className="h-px w-6 shrink-0 bg-ink sm:w-8" />
            <span className="sm:hidden">{SITE.taglineShort}</span>
            <span className="hidden sm:inline">{SITE.tagline}</span>
          </motion.p>
          <motion.div
            {...rise(T.eyebrow + T.metaStagger)}
            className="label hidden text-right text-ink-muted md:block"
          >
            {STATS.map((s) => (
              <p key={s.label} className="mt-1.5 first:mt-0">
                <span className="text-ink">{s.value}</span> {s.label}
              </p>
            ))}
          </motion.div>
        </div>

        {/* Frame. Desktop: text column left (headline, ink CTA block, service
            rail), slanted media plate right spanning the headline and CTA rows
            only, so its top meets the headline, its bottom meets the CTA block,
            and the bone below it stays open. Phones stack: headline, media
            strip flush on top of the CTA block, rail. */}
        <div className="mt-3 flex flex-1 flex-col lg:mt-4 lg:grid lg:grid-cols-12 lg:grid-rows-[auto_auto_1fr] lg:gap-x-6">
          {/* Headline: word masks so it can wrap naturally on small screens */}
          <h1
            id="hero-heading"
            className="order-1 text-display-xl headline-space text-ink lg:col-span-7 lg:col-start-1 lg:row-start-1"
          >
            {HEADLINE.map((line, li) => (
              <Fragment key={li}>
                {line.map((w, wi) => {
                  const delay = T.words + wordIndex++ * T.wordStagger;
                  const last = li === HEADLINE.length - 1 && wi === line.length - 1;
                  return (
                    <Fragment key={`${li}-${wi}`}>
                      <span className="word-mask">
                        <motion.span {...word(delay)} className="inline-block will-change-transform">
                          {w}
                          {last && <span className="text-accent">.</span>}
                        </motion.span>
                      </span>
                      {!last && " "}
                    </Fragment>
                  );
                })}
                {li < HEADLINE.length - 1 && <br className="hidden lg:block" />}
              </Fragment>
            ))}
          </h1>

          {/* Media plate: the 21st.dev ASCII loop on deeper paper, blended
              multiply so it prints onto the page. Slanted on desktop only.
              The loop is scaled up so its own dotted frame region stays
              outside the crop and only the hands show. A bone cover slides
              off right to left on load. */}
          <div className="relative order-2 -mx-gutter mt-5 aspect-strip overflow-hidden bg-bone-deep lg:order-none lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:mt-0 lg:-mr-gutter lg:aspect-auto lg:plate-slant">
            <AsciiArt className="absolute inset-0 plate-zoom-strip mix-blend-multiply lg:plate-zoom" />
            <motion.div
              aria-hidden
              {...uncover(T.media)}
              className="plate-cover absolute inset-y-0 bg-bone will-change-transform"
            />
          </div>

          {/* Ink CTA block: directly under the headline, bleeds off the left
              edge. On phones it sits flush under the media strip. */}
          <motion.div
            {...wipe(T.panel)}
            data-surface="ink"
            className="order-3 -mx-gutter bg-ink px-gutter py-8 text-bone lg:order-none lg:col-span-6 lg:col-start-1 lg:row-start-2 lg:mr-0 lg:pr-10"
          >
            <motion.div {...rise(T.panelContent)} className="max-w-measure">
              <p className="font-display text-lead font-semibold">{LEAD_HOOK}</p>
              <p className="mt-3 text-body sm:text-lead">{LEAD}</p>
            </motion.div>
            <motion.div
              {...rise(T.panelContent + T.panelStagger)}
              className="mt-6 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8"
            >
              <Button href={bookingHref("hero_primary")} source="hero_primary" external>
                Book a 20-minute call
              </Button>
              <Button href="#services" source="hero_secondary" variant="link-inverse">
                See everything included
              </Button>
            </motion.div>
            <motion.p
              {...rise(T.panelContent + 2 * T.panelStagger)}
              className="label mt-6 text-bone-muted"
            >
              No contracts. Cancel anytime.
            </motion.p>
          </motion.div>

          {/* Service rail: everything in the plan, under the CTA block. The
              media plate ends with the CTA block above, so the space to the
              right of the rail stays open. */}
          <div className="order-4 mt-8 lg:col-span-6 lg:col-start-1 lg:row-start-3 lg:self-end">
            <motion.p {...rise(T.meta)} className="label mb-3 text-ink-muted">
              Everything included
            </motion.p>
            <ul className="grid grid-flow-col grid-cols-2 grid-rows-3 gap-x-6 border-t border-rule">
              {PRODUCTS.map((s, i) => (
                <motion.li
                  key={s.slug}
                  {...rise(T.meta + (i + 1) * T.metaStagger)}
                  className="flex items-baseline gap-3 border-b border-rule py-2.5"
                >
                  <span className="label text-ink-muted">{pad(i + 1)}</span>
                  <span className="font-display text-item">{s.name}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Ticker band: hard cut, full bleed */}
      <motion.div
        {...fade(T.band)}
        data-surface="ink"
        className="border-t border-rule-inverse bg-ink text-bone"
      >
        <Marquee items={TICKER} className="py-4 font-display text-ticker uppercase" />
      </motion.div>
    </section>
  );
}
