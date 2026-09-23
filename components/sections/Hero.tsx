"use client";

import Image from "next/image";
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
        {/* Eyebrow row. The right of this row carried an average speed-to-lead
            figure until 2026-09-19, when it went the way of the client count
            before it: a number with nothing behind it is not a number. The
            tagline holds the row on its own until there is something true to
            put opposite it. */}
        <motion.p {...rise(T.eyebrow)} className="label flex items-center gap-3 text-ink-muted">
          <span aria-hidden className="h-px w-6 shrink-0 bg-ink sm:w-8" />
          <span className="sm:hidden">{SITE.taglineShort}</span>
          <span className="hidden sm:inline">{SITE.tagline}</span>
        </motion.p>

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
            {/* One action. The secondary link was removed on 2026-09-17: the
                rail it pointed at sits directly underneath, so the link asked
                the reader to choose between a CTA and a scroll they were about
                to do anyway. */}
            <motion.div {...rise(T.panelContent + T.panelStagger)} className="mt-6">
              <Button href={bookingHref("hero_primary")} source="hero_primary" external>
                Book a 20-minute call
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
              right of the rail stays open.

              SLATED FOR REPLACEMENT: this rail is to become customer reviews
              once there are real ones to show. Whatever replaces it must be
              genuine; the site has had invented proof removed from it once
              already and nothing here is to be filled with placeholders. */}
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

          {/* Certification badge, in the space to the right of the rail that
              the plate above leaves open. It is the one piece of real proof
              the hero carries, which is why it sits here rather than being
              dropped into a logo strip further down.

              Desktop: bottom-right of the grid, baseline-aligned with the
              rail via self-end so the two read as one row. Phones: the grid
              collapses, so it follows the rail at a smaller size and stays
              left-aligned with everything else rather than floating centred.

              The source PNG had no alpha, so it was circle-masked on the way
              into public/badges. A grey square on bone would have looked like
              a loading error. */}
          <motion.div
            {...rise(T.meta + 7 * T.metaStagger)}
            className="order-5 mt-8 lg:col-span-3 lg:col-start-10 lg:row-start-3 lg:mt-0 lg:self-end lg:justify-self-end"
          >
            <Image
              src="/badges/google-ads-search-certified.webp"
              alt="Google Ads Search Certified"
              width={300}
              height={300}
              sizes="(min-width: 1024px) 128px, 76px"
              className="size-19 lg:size-32"
            />
          </motion.div>
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
