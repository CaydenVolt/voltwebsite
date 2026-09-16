"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ProductIcon } from "@/components/ui/ProductIcon";
import { SPRING } from "@/lib/tokens";

const MotionLink = motion.create(Link);

/**
 * One product as a cell in a hairline grid: mark, name, one line, arrow. Hard
 * edges, no radius, no shadow, no fill of its own beyond the page's paper, so
 * a row of them reads as a ruled table rather than a row of cards. The mark
 * takes the accent on hover and the name shifts on the touch spring, the same
 * gesture as every other product row.
 */
export function ProductCard({
  slug,
  name,
  description,
  href,
}: {
  slug: string;
  name: string;
  description: string;
  href: string;
}) {
  return (
    <li className="bg-bone">
      <MotionLink
        href={href}
        data-cursor="grow"
        initial="rest"
        whileHover="hover"
        whileFocus="hover"
        className="group flex h-full flex-col p-6 lg:p-8"
      >
        <ProductIcon
          slug={slug}
          className="size-6 text-muted transition-colors duration-100 group-hover:text-accent group-focus-visible:text-accent"
        />
        <motion.span
          variants={{ rest: { x: 0 }, hover: { x: 4 } }}
          transition={SPRING.touch}
          className="mt-6 block font-display text-item text-fg"
        >
          {name}
        </motion.span>
        <span className="mt-3 block flex-1 text-body-sm text-muted">{description}</span>
        <svg
          aria-hidden
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="square"
          className="mt-6 text-fg"
        >
          <path d="M2 8h11M8.5 3.5 13 8l-4.5 4.5" />
        </svg>
      </MotionLink>
    </li>
  );
}
