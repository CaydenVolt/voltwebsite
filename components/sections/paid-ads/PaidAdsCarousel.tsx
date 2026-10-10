"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { PRESS, SPRING } from "@/lib/tokens";
import { bookingHref } from "@/lib/site";
import type { PaidAdChannel } from "@/lib/content/paid-ads";

/**
 * Snap-scrolling carousel: one card at a time on every width, native touch
 * swipe on phones, arrow buttons and dots on larger screens, and keyboard
 * arrows when any card has focus.
 *
 * The active card is tracked with an IntersectionObserver on the slides,
 * which is more robust than reading scrollLeft while the snap settles. The
 * initial scroll pre-selects the one marked with a `tag` (LSA): useLayoutEffect
 * runs before paint, so the picker lands centred rather than jumping after.
 */
export function PaidAdsCarousel({ channels }: { channels: readonly PaidAdChannel[] }) {
  const scroller = useRef<HTMLUListElement | null>(null);
  const slides = useRef<Array<HTMLLIElement | null>>([]);
  const initial = Math.max(
    0,
    channels.findIndex((c) => c.tag !== undefined),
  );
  const [active, setActive] = useState(initial === -1 ? 0 : initial);

  // Set scrollLeft directly on the scroller rather than scrollIntoView.
  // scrollIntoView with block: "nearest" still scrolls the ancestor chain
  // when the target is below the viewport on first paint, which was dragging
  // the whole pricing page down to the paid-ads section on load. Horizontal
  // scrollLeft only moves this scroller, which is what we want.
  const scrollTo = useCallback((i: number, smooth = true) => {
    const target = slides.current[i];
    const sc = scroller.current;
    if (!target || !sc) return;
    const left = target.offsetLeft - (sc.clientWidth - target.clientWidth) / 2;
    sc.scrollTo({ left, behavior: smooth ? "smooth" : "auto" });
  }, []);

  // Pre-select the recommended channel before paint so the first frame is
  // already on the right card. "auto" (not "smooth") so there is no visible
  // animation on arrival.
  useEffect(() => {
    scrollTo(initial, false);
    // Only on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Track which card is centre by observing intersection with the scroller.
  useEffect(() => {
    const root = scroller.current;
    if (!root) return;
    const io = new IntersectionObserver(
      (entries) => {
        const centre = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!centre) return;
        const idx = slides.current.indexOf(centre.target as HTMLLIElement);
        if (idx >= 0) setActive(idx);
      },
      { root, threshold: [0.6, 0.75, 0.9, 1] },
    );
    slides.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const next = () => scrollTo(Math.min(channels.length - 1, active + 1));
  const back = () => scrollTo(Math.max(0, active - 1));

  // Arrow-key support when the carousel has focus.
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      back();
    }
  };

  return (
    <div>
      {/* Dot nav sits above the carousel. Pure selector; arrows are the big
          chevrons flanking the card, not up here. */}
      <ol className="flex items-center justify-center gap-5" aria-label="Channel selector">
        {channels.map((c, i) => (
          <li key={c.id}>
            <button
              type="button"
              aria-label={`Show ${c.short}`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => scrollTo(i)}
              className={`flex items-center gap-2 label transition-colors duration-100 ${
                i === active ? "text-fg" : "text-muted hover:text-fg"
              }`}
            >
              <span
                aria-hidden
                className={`block size-1.5 rounded-full transition-colors duration-100 ${
                  i === active ? "bg-accent" : "bg-muted/60"
                }`}
              />
              <span>{c.short}</span>
            </button>
          </li>
        ))}
      </ol>

      {/* Scroller + flanking arrows share a relative wrapper so the arrows
          sit at the vertical centre of the visible card. Mobile hides them;
          swipe is the right interaction there. */}
      <div className="relative mt-8 lg:mt-10">
        <SideArrow direction="back"  onClick={back} disabled={active === 0} />
        <SideArrow direction="next"  onClick={next} disabled={active === channels.length - 1} />

        {/* The scroller itself. Negative gutter so cards can touch the viewport
            edge on phones; the inner padding is restored by the card's own box. */}
        <ul
          ref={scroller}
          role="group"
          aria-label="Paid ads channels. Swipe, use the arrow keys, or press the chevrons to move between cards."
          tabIndex={0}
          onKeyDown={onKeyDown}
          className="-mx-gutter flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-gutter pb-2 pt-1 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-current [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {channels.map((c, i) => (
            <li
              key={c.id}
              ref={(el) => {
                slides.current[i] = el;
              }}
              aria-labelledby={`paid-ads-${c.id}-h`}
              className="w-full shrink-0 snap-center"
            >
              <Card channel={c} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/**
 * Big chevron flanking the carousel: 56px square, hairline bone box, chevron
 * glyph, drops its opacity when there is nothing to click to (first or last
 * card). Hidden under sm because the carousel takes the swipe gesture.
 *
 * Positioned absolutely against the carousel wrapper. On lg the arrow sits
 * outside the max-w-2xl card by a comfortable gutter; between sm and lg it
 * overlays the card edge with a solid bone background so it stays legible.
 */
/* Shared base, written as one literal string so Tailwind's source scan picks
   up every utility. The earlier version split responsive classes across an
   array; those tokens never made it to the generated CSS and the arrows
   never rendered. */
const ARROW_BASE =
  "absolute top-1/2 z-10 -translate-y-1/2 flex max-sm:hidden size-14 items-center justify-center border border-line bg-bone text-fg transition-opacity duration-150";

function SideArrow({
  direction,
  onClick,
  disabled,
}: {
  direction: "back" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  const back = direction === "back";
  const side = back ? "left-2 lg:left-6" : "right-2 lg:right-6";
  const state = disabled
    ? "pointer-events-none opacity-30"
    : "hover:bg-surface-deep";
  return (
    <motion.button
      type="button"
      aria-label={back ? "Previous channel" : "Next channel"}
      onClick={onClick}
      disabled={disabled}
      whileTap={disabled ? undefined : { scale: PRESS.scale }}
      transition={SPRING.touch}
      data-cursor="grow"
      className={`${ARROW_BASE} ${side} ${state}`}
    >
      <svg
        aria-hidden
        width="26"
        height="26"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="square"
        className={back ? "rotate-180" : ""}
      >
        <path d="M2 8h11M8.5 3.5 13 8l-4.5 4.5" />
      </svg>
    </motion.button>
  );
}

function Card({ channel }: { channel: PaidAdChannel }) {
  return (
    <article className="mx-auto flex h-full w-full max-w-2xl flex-col border border-line bg-bone px-6 py-8 sm:px-10 sm:py-10">
      {channel.tag && (
        <div className="flex flex-col gap-1">
          <span className="label inline-flex self-start items-center rounded-full border border-accent px-3 py-1 text-accent">
            {channel.tag}
          </span>
          {channel.tagNote && (
            <p className="label mt-2 text-muted">{channel.tagNote}</p>
          )}
        </div>
      )}

      <h3
        id={`paid-ads-${channel.id}-h`}
        className={`${channel.tag ? "mt-4" : ""} text-h2`}
      >
        {channel.name}
      </h3>

      <p className="mt-6 flex items-baseline gap-2 font-display text-fg">
        <span className="text-h3">$</span>
        <span className="text-display-md">1,500</span>
        <span className="label pl-1 text-muted">/month + ad spend</span>
      </p>

      <p className="mt-6 max-w-measure text-lead">{channel.headline}</p>
      <p className="mt-3 max-w-measure text-body text-muted">{channel.description}</p>

      <div className="mt-8">
        <p className="label text-muted">Includes</p>
        <ul className="mt-3 border-t border-line">
          {channel.includes.map((item) => (
            <li key={item} className="border-b border-line py-3 text-body">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <dl className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <dt className="label text-muted">Pros</dt>
          <dd className="mt-2 text-body">{channel.pros}</dd>
        </div>
        <div>
          <dt className="label text-muted">Cons</dt>
          <dd className="mt-2 text-body">{channel.cons}</dd>
        </div>
      </dl>

      {channel.note && (
        <p className="mt-6 border-t border-line pt-4 text-body-sm text-muted">
          {channel.note}
        </p>
      )}

      <div className="mt-8">
        <Button
          href={bookingHref(`pricing_paid_ads_${channel.id}`)}
          source={`pricing_paid_ads_${channel.id}`}
          external
          className="w-full justify-center"
        >
          {channel.cta}
        </Button>
      </div>
    </article>
  );
}
