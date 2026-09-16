"use client";

import { motion } from "motion/react";
import { useBelt } from "@/lib/hooks/useBelt";

export interface PartnerTile {
  name: string;
  /** Brand mark in its own colours, on transparency. */
  mark: string | null;
}

/**
 * An endless belt of marks that walks itself and is pushed by hand. The marks
 * sit on the slab itself with no tile behind them, which is why every one of
 * them was keyed to transparency first and OpenAI's black mark inverted.
 */
export function PartnersCarousel({ partners }: { partners: readonly PartnerTile[] }) {
  const { viewport, firstSet, belt, copies, handlers } = useBelt({ walk: true });
  const sets = Array.from({ length: copies }, (_, i) => i);

  return (
    <div
      ref={viewport}
      role="group"
      aria-label="Tools the system works with. Drag to move, or use the arrow keys."
      tabIndex={0}
      {...handlers}
      className="cursor-grab touch-pan-y select-none overflow-hidden active:cursor-grabbing focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-current"
    >
      <motion.div style={{ x: belt }} className="flex w-max">
        {sets.map((set) => (
          <ul
            key={set}
            ref={set === 0 ? firstSet : undefined}
            aria-hidden={set > 0}
            className="flex shrink-0 gap-6 pr-6"
          >
            {partners.map((partner) => (
              <li key={partner.name} className="w-40 shrink-0 lg:w-48">
                <div className="flex h-20 items-center justify-center">
                  {partner.mark && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={partner.mark}
                      alt=""
                      draggable={false}
                      loading="lazy"
                      className="h-12 w-auto max-w-full object-contain lg:h-14"
                    />
                  )}
                </div>
                <p className="mt-4 text-center text-body-sm text-muted">{partner.name}</p>
              </li>
            ))}
          </ul>
        ))}
      </motion.div>
    </div>
  );
}
