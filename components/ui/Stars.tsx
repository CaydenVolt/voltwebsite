interface StarsProps {
  /** Filled marks out of five. */
  count?: number;
  className?: string;
}

/**
 * Five rating marks as plain SVG in the current text colour. No icon set,
 * no colour of its own: it inherits ink or bone from the surface.
 */
export function Stars({ count = 5, className = "" }: StarsProps) {
  return (
    <span
      role="img"
      aria-label={`${count} out of 5 stars`}
      className={`inline-flex items-center gap-0.5 text-fg ${className}`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          aria-hidden
          width="0.75em"
          height="0.75em"
          viewBox="0 0 20 20"
          fill={i < count ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="miter"
        >
          <path d="M10 1.8l2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L10 15.2 4.7 18l1.1-5.9L1.5 8l5.9-.8z" />
        </svg>
      ))}
    </span>
  );
}
