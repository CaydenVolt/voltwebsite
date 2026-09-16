"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ProductIcon } from "@/components/ui/ProductIcon";
import { pad } from "@/lib/format";
import { SPRING } from "@/lib/tokens";

interface ProductRowProps {
  /** Omitted for products sold outside the plan: the numerals belong to the six. */
  index?: number;
  /** Picks the product mark shown beside the name. */
  slug: string;
  name: string;
  description: string;
  href: string;
  /** Numeral in accent at rest (the "included" signature). Otherwise muted, accent on hover. */
  accent?: boolean;
  /** Keep name and description stacked at every width, for narrow columns. */
  compact?: boolean;
}

const MotionLink = motion.create(Link);

/**
 * One row of a product list: numeral, name, description, arrow, hairline
 * beneath. Hover turns the numeral accent and shifts the name on the touch
 * spring. Used by /products, the related-products block and /pricing.
 */
export function ProductRow({ index, slug, name, description, href, accent = false, compact = false }: ProductRowProps) {
  const numbered = index !== undefined;
  return (
    <li className="border-b border-line">
      <MotionLink
        href={href}
        data-cursor="grow"
        initial="rest"
        whileHover="hover"
        whileFocus="hover"
        className={`group grid items-baseline gap-x-3 py-5 ${
          numbered ? "grid-cols-[2.5rem_1fr_auto]" : "grid-cols-[1fr_auto]"
        } ${compact ? "" : "lg:grid-cols-12 lg:gap-x-6"}`}
      >
        {numbered && (
          <span
            className={`label pt-2 transition-colors duration-100 group-hover:text-accent group-focus-visible:text-accent ${
              accent ? "text-accent" : "text-muted"
            } ${compact ? "" : "lg:col-span-1"}`}
          >
            {pad(index)}
          </span>
        )}
        <motion.span
          variants={{ rest: { x: 0 }, hover: { x: 4 } }}
          transition={SPRING.touch}
          className={`block ${compact ? "" : numbered ? "lg:col-span-5" : "lg:col-span-6"}`}
        >
          <span className="flex items-center gap-3 font-display text-h3 text-fg">
            <ProductIcon slug={slug} className="size-5 text-muted" />
            {name}
          </span>
          <span className={`mt-2 block text-body text-muted ${compact ? "" : "lg:hidden"}`}>{description}</span>
        </motion.span>
        {!compact && (
          <span className="hidden text-body text-muted lg:col-span-5 lg:block lg:pt-1">{description}</span>
        )}
        <svg
          aria-hidden
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="square"
          className={`mt-2 text-fg ${compact ? "" : "lg:col-span-1 lg:justify-self-end"}`}
        >
          <path d="M2 8h11M8.5 3.5 13 8l-4.5 4.5" />
        </svg>
      </MotionLink>
    </li>
  );
}
