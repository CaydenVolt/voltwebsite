"use client";

import { motion } from "motion/react";
import { CarouselArrows } from "@/components/ui/CarouselArrows";
import { useBelt } from "@/lib/hooks/useBelt";
import type { Trade } from "@/lib/content/trades";

export interface TradeCard extends Trade {
  /** Resolved public path, or null while the photo has not been saved yet. */
  src: string | null;
}

/**
 * Landscape cards on an endless belt: three at a time on desktop, stepping one
 * along every few seconds rather than walking, because each card carries a
 * name to read. It never runs out: drag past the last trade and the first
 * comes round again, so there is no end to hit and no counter to read.
 *
 * The name sits in a solid bar under the photo, never over it, so it is
 * readable whatever the photo behind it does.
 */
export function TradesCarousel({ trades }: { trades: readonly TradeCard[] }) {
  const { viewport, firstSet, belt, copies, item, nudge, handlers } = useBelt();
  const sets = Array.from({ length: copies }, (_, i) => i);

  return (
    <div>
      <div className="flex items-center justify-end border-b border-line pb-4">
        <CarouselArrows onBack={() => nudge(item)} onNext={() => nudge(-item)} label="trades" />
      </div>

      <div
        ref={viewport}
        role="group"
        aria-label="Trades we serve. Drag to move, or use the arrow keys."
        tabIndex={0}
        {...handlers}
        className="mt-8 cursor-grab touch-pan-y select-none overflow-hidden active:cursor-grabbing focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-current"
      >
        <motion.div style={{ x: belt }} className="flex w-max">
          {sets.map((set) => (
            <ul
              key={set}
              ref={set === 0 ? firstSet : undefined}
              aria-hidden={set > 0}
              className="flex shrink-0 gap-6 pr-6"
            >
              {trades.map((trade) => (
                <li key={trade.id} className="w-72 shrink-0 sm:w-88 lg:w-104">
                  {/* Paper card on the deeper ground: on this surface
                      `surface-deep` is the section's own colour, so a card
                      painted with it would vanish and take the name with it. */}
                  <figure className="border border-rule bg-bone text-ink">
                    <div className="aspect-[3/2] overflow-hidden bg-bone-deep">
                      {trade.src && (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={trade.src}
                          alt={trade.alt}
                          draggable={false}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover"
                        />
                      )}
                    </div>
                    {/* The name on its own bar, full contrast, never over the photo */}
                    <figcaption className="flex min-h-20 items-center border-t border-rule px-5 py-4">
                      <span className="font-display text-item text-ink">{trade.name}</span>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
