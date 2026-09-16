"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

/**
 * Consent state, stored on the visitor's own device and nowhere else.
 *
 * Opt-in: until someone makes a choice, analytics and advertising are both
 * denied and no script for either is loaded. That is stricter than United
 * States law requires, where an opt-out would do, and it means nothing has to
 * change if the Services are ever offered in the UK or the EU.
 *
 * Global Privacy Control is honoured as a standing refusal of advertising. A
 * browser sending that signal has already said no, so the toggle is shown as
 * off and locked, and a stored yes from before the signal was switched on is
 * overridden rather than obeyed.
 *
 * Read through useSyncExternalStore rather than an effect. localStorage is
 * exactly the external system that hook exists for: the server cannot see it,
 * the first client render must match the server to hydrate cleanly, and
 * another tab changing the choice should be picked up here.
 */
export type ConsentCategory = "analytics" | "advertising";

export interface ConsentState {
  analytics: boolean;
  advertising: boolean;
}

/** Bump when a change means previous choices should be asked again. */
const VERSION = 1;
const KEY = `volt.consent.v${VERSION}`;

interface Stored extends ConsentState {
  v: number;
  at: string;
}

/** Null means not yet known: the server, and the first client render. */
export interface Snapshot {
  consent: ConsentState;
  /** True once the visitor has actually chosen. Drives whether the banner shows. */
  decided: boolean;
  gpc: boolean;
}

const DENIED: ConsentState = { analytics: false, advertising: false };

/* ------------------------------------------------------------- the store */

let cached: Snapshot | null = null;
let started = false;
const listeners = new Set<() => void>();

function gpcSignal(): boolean {
  return (
    typeof navigator !== "undefined" &&
    (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true
  );
}

function read(): Snapshot {
  const gpc = gpcSignal();
  let stored: Stored | null = null;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) stored = JSON.parse(raw) as Stored;
  } catch {
    // Private mode, blocked storage, or corrupt JSON. Treat as no choice made,
    // which denies everything: the safe direction to fail in.
  }
  if (!stored || stored.v !== VERSION) return { consent: DENIED, decided: false, gpc };
  return {
    consent: {
      analytics: Boolean(stored.analytics),
      advertising: gpc ? false : Boolean(stored.advertising),
    },
    decided: true,
    gpc,
  };
}

function refresh() {
  cached = read();
  listeners.forEach((l) => l());
}

function subscribe(onChange: () => void): () => void {
  listeners.add(onChange);
  if (!started) {
    started = true;
    // First read happens here, after hydration, so the first client render
    // still matches the server's null and nothing mismatches.
    refresh();
  }
  // Another tab changing the choice should apply in this one too.
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY || e.key === null) refresh();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onStorage);
  };
}

const getSnapshot = () => cached;
/** Stable across renders, which useSyncExternalStore requires. */
const getServerSnapshot = (): Snapshot | null => null;

function write(next: ConsentState) {
  const resolved: ConsentState = {
    analytics: next.analytics,
    // A browser sending GPC has already refused. Do not record a yes that
    // would then have to be ignored.
    advertising: gpcSignal() ? false : next.advertising,
  };
  try {
    const payload: Stored = { v: VERSION, at: new Date().toISOString(), ...resolved };
    window.localStorage.setItem(KEY, JSON.stringify(payload));
  } catch {
    // Storage refused. The choice still applies for this page view; the banner
    // will simply ask again next time, which is the right failure.
  }
  refresh();
}

/* ----------------------------------------------------------- the context */

interface ConsentValue extends Omit<Snapshot, "consent"> {
  /** Null until storage has been read, so nothing renders on a guess. */
  consent: ConsentState | null;
  save: (next: ConsentState) => void;
  acceptAll: () => void;
  rejectAll: () => void;
  /** Whether the preferences panel is open. The footer controls use this. */
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Ctx = createContext<ConsentValue | null>(null);

export function ConsentProvider({ children }: { children: ReactNode }) {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [open, setOpen] = useState(false);

  const save = useCallback((next: ConsentState) => write(next), []);

  const value = useMemo<ConsentValue>(
    () => ({
      consent: snapshot?.consent ?? null,
      // Before the first read, treat it as decided so the banner cannot flash
      // on a page the visitor has already answered.
      decided: snapshot?.decided ?? true,
      gpc: snapshot?.gpc ?? false,
      save,
      acceptAll: () => save({ analytics: true, advertising: true }),
      rejectAll: () => save(DENIED),
      open,
      setOpen,
    }),
    [snapshot, save, open],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useConsent(): ConsentValue {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useConsent must be used inside ConsentProvider");
  return ctx;
}
