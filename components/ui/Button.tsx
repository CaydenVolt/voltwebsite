type Variant = "primary" | "outline" | "outline-inverse" | "link" | "link-inverse";
type Size = "sm" | "md";

interface ButtonProps {
  href: string;
  /**
   * Where on the site this CTA sits, e.g. "hero_primary". Booking CTAs carry
   * it to the landing page as utm_content via bookingHref(), and it is written
   * to the element as data-cta so click tracking can be added later without
   * touching forty-five call sites.
   */
  source: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
}

const base =
  "group inline-flex items-center gap-3 font-medium whitespace-nowrap select-none rounded-control " +
  "transition-colors duration-100";

/* `outline` and `link` are tone-aware: correct on bone and inside an ink slab.
   The `-inverse` variants remain for places that set colour explicitly. */
const variants: Record<Variant, string> = {
  primary: "bg-accent text-ink hover:bg-accent-deep active:bg-accent-deep",
  outline: "border border-fg text-fg hover:bg-surface-deep active:bg-surface-deep",
  "outline-inverse": "border border-bone text-bone hover:bg-ink-soft active:bg-ink-soft",
  link: "text-fg link-underline decoration-underline-current hover:decoration-fg",
  "link-inverse": "text-bone link-underline decoration-underline-inverse hover:decoration-bone",
};

/* Small buttons keep the 44px tap target on touch screens and drop to 40px
   only at lg, where a pointer is fine and the nav is tighter. */
const sizes: Record<Size, string> = {
  sm: "h-11 px-4 text-body-sm lg:h-10",
  md: "h-12 px-6 text-body",
};

const isLink = (v: Variant) => v === "link" || v === "link-inverse";

/**
 * Every CTA on the site. Plain anchor. Attribution rides the URL as
 * utm_content, which the landing page reads, so there is nothing for this
 * site to record. Colour change on hover is standard web affordance; no
 * transforms, no spring press feedback, no arrow nudge.
 */
export function Button({
  href,
  source,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
}: ButtonProps) {
  const linkStyle = isLink(variant);
  return (
    <a
      href={href}
      data-cursor="grow"
      data-cta={source}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${variants[variant]} ${
        // Text links: pad the hit area to 44px and give the space back with a
        // matching negative margin so the layout does not move.
        linkStyle ? "h-auto px-0 py-2.5 -my-2.5" : sizes[size]
      } ${className}`}
    >
      <span>{children}</span>
      <svg
        aria-hidden
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        className="shrink-0"
      >
        <path d="M2 8h11M8.5 3.5 13 8l-4.5 4.5" />
      </svg>
    </a>
  );
}
