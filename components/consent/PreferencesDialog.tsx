"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useConsent, type ConsentState } from "@/components/consent/ConsentProvider";

/**
 * The preferences panel. Opened from the banner, from "Cookie settings" in the
 * footer, and from the "Do Not Sell or Share" link, which is the same control
 * under a name the law uses.
 *
 * A real dialog: focus moves into it, Escape closes it, focus returns to
 * whatever opened it, and the page behind does not scroll. Built by hand
 * rather than with a library because the site has no dialog anywhere else and
 * this is the only one.
 */
export function PreferencesDialog() {
  const { open } = useConsent();
  // Mounted only while open, so the panel below can seed its draft from the
  // saved state on mount rather than syncing it in an effect. Cancelling
  // unmounts it, which is also what makes cancel leave nothing behind.
  if (!open) return null;
  return <Panel />;
}

function Panel() {
  const { consent, gpc, save, setOpen } = useConsent();
  const [draft, setDraft] = useState<ConsentState>(consent ?? { analytics: false, advertising: false });
  const panel = useRef<HTMLDivElement>(null);
  const opener = useRef<Element | null>(null);

  useEffect(() => {
    opener.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !panel.current) return;
      // Keep Tab inside the panel while it is open.
      const focusable = panel.current.querySelectorAll<HTMLElement>(
        'button, [href], input, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    panel.current?.querySelector<HTMLElement>("button")?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      (opener.current as HTMLElement | null)?.focus?.();
    };
  }, [setOpen]);

  return (
    <div className="fixed inset-0 z-consent flex items-end justify-center sm:items-center">
      {/* Clicking away cancels. The page is unreadable behind it anyway. */}
      <button
        type="button"
        aria-hidden
        tabIndex={-1}
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-ink/60"
      />
      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby="consent-h"
        className="relative max-h-[90dvh] w-full max-w-measure overflow-y-auto border border-line bg-bone px-gutter py-8 sm:rounded-control"
      >
        <h2 id="consent-h" className="text-h3">
          Cookie settings
        </h2>
        <p className="mt-3 text-body-sm text-muted">
          Choose what runs on this site. Your choice is stored on this device and applies until you
          change it.{" "}
          <Link
            href="/privacy#cookies-and-tracking"
            className="link-underline decoration-underline-current hover:decoration-fg"
          >
            What each one does
          </Link>
          .
        </p>

        <ul className="mt-8 border-t border-line">
          <Row
            title="Essential"
            body="Keeps the site working: security, and remembering this choice. Cannot be turned off."
            checked
            locked
            lockNote="Always on"
          />
          <Row
            title="Analytics"
            body="Measures which pages are used and where people leave, so we know what to fix."
            checked={draft.analytics}
            onChange={(v) => setDraft((d) => ({ ...d, analytics: v }))}
          />
          <Row
            title="Advertising"
            body="Lets us show our ads to relevant businesses and measure whether they worked. This is the one that counts as sharing under several state privacy laws."
            checked={draft.advertising}
            onChange={(v) => setDraft((d) => ({ ...d, advertising: v }))}
            locked={gpc}
            lockNote={gpc ? "Off: your browser sends Global Privacy Control" : undefined}
          />
        </ul>

        {gpc && (
          <p className="mt-5 text-body-sm text-muted">
            Your browser is sending Global Privacy Control, which we treat as a standing opt-out of
            advertising and of sharing. We honour it whatever this panel says, so that toggle is
            locked off.
          </p>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => {
              save(draft);
              setOpen(false);
            }}
            data-cursor="grow"
            className="h-11 rounded-control bg-accent px-5 text-body-sm font-medium text-ink transition-colors duration-100 active:bg-accent-deep"
          >
            Save choices
          </button>
          <button
            type="button"
            onClick={() => {
              save({ analytics: false, advertising: false });
              setOpen(false);
            }}
            data-cursor="grow"
            className="h-11 rounded-control border border-fg px-5 text-body-sm font-medium text-fg transition-colors duration-100 active:bg-surface-deep"
          >
            Reject all
          </button>
          <button
            type="button"
            onClick={() => setOpen(false)}
            data-cursor="grow"
            className="label -my-2.5 px-1 py-2.5 text-muted underline decoration-underline-current underline-offset-4 hover:text-fg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

function Row({
  title,
  body,
  checked,
  onChange,
  locked = false,
  lockNote,
}: {
  title: string;
  body: string;
  checked: boolean;
  onChange?: (value: boolean) => void;
  locked?: boolean;
  lockNote?: string;
}) {
  const id = `consent-${title.toLowerCase()}`;
  return (
    <li className="flex items-start justify-between gap-5 border-b border-line py-5">
      <div>
        <label htmlFor={id} className="font-display text-item text-fg">
          {title}
        </label>
        <p className="mt-2 text-body-sm text-muted">{body}</p>
        {lockNote && <p className="label mt-2 text-muted">{lockNote}</p>}
      </div>
      {/* A real checkbox, styled. Screen readers and keyboards get the control
          they expect rather than a div pretending to be a switch. */}
      <input
        id={id}
        type="checkbox"
        checked={checked}
        disabled={locked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-1 size-5 shrink-0 accent-accent disabled:opacity-40"
      />
    </li>
  );
}
