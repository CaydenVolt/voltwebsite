/**
 * The facts a legal document cannot be written without.
 *
 * Everything here is a real-world fact about the company, not copy. It lives
 * in one file so the terms, the privacy policy when it exists, and anything
 * else that has to name the company all read the same values.
 *
 * ──────────────────────────────────────────────────────────────────────────
 *  NOT YET SET. Every value marked TO SET must be filled before this page is
 *  published. They are written as obvious blanks on purpose: a terms page
 *  that says [TO SET: registered company name] is visibly unfinished, whereas
 *  one naming a plausible but wrong entity is a document that does not bind
 *  anyone and may not be enforceable.
 * ──────────────────────────────────────────────────────────────────────────
 *
 * This document is not legal advice and was not written by a lawyer. It
 * follows the structure of a published terms page in the same industry and
 * the positions the owner chose. Have a qualified attorney in the governing
 * jurisdiction read it before it goes live.
 */

/** Marks a fact that must be filled before publication. Unused right now:
 *  every blocking value is set. Kept for the next one. */
export const TO_SET = (what: string) => `[TO SET: ${what}]`;

export const LEGAL = {
  /**
   * The entity that contracts with clients.
   *
   * No suffix on purpose. "Volt Agency LLC" would assert a registration that
   * does not exist yet, and asserting one you do not hold is worse than having
   * none. Add the suffix on the day the filing is accepted, and set
   * `incorporated` below at the same time.
   */
  entity: "Volt Agency",
  /** Any trading name, if the entity contracts under a different one. */
  tradingAs: "Volt",

  /**
   * Whether `entity` is actually a registered company yet.
   *
   * While this is false the business is unincorporated, which means there is
   * no company to contract with: the counterparty is the owner personally, and
   * the limitation of liability in section 21 protects a person rather than a
   * company. In a business that sends bulk SMS on clients' behalf, with the
   * TCPA exposure that carries, that is the difference between a capped
   * business risk and an uncapped personal one. Do not publish this page until
   * it is true.
   */
  incorporated: false,
  /**
   * Optional. The reference document in this industry publishes no postal
   * address at all and takes notices by email only, so this does not block
   * publication. Set it and the postal route appears in Notices and Contact;
   * leave it empty and both omit it. Check with the attorney whether your
   * state requires one on commercial communications.
   */
  address: "",
  /** The address legal notices and arbitration opt-outs are sent to. */
  email: "support@mail.voltagencyio.com",
  /** Optional. Leave empty and the contact section omits the line. */
  phone: "",

  /**
   * Governing law, venue and the seat of arbitration. The owner has chosen
   * the United States; the state decides the rest of this document, including
   * whether the arbitration and class-action waiver are enforceable as written
   * and which consumer statutes override the disclaimers.
   */
  country: "United States",
  state: "Delaware",
  county: "New Castle County",
  /** Where an arbitration hearing would be seated. */
  arbitrationCity: "Wilmington",

  /**
   * The four dates shown at the head of the document. Set `effective` to the
   * day it is actually published, not the day it was drafted. `nextReview` is
   * derived from `lastReviewed` plus `reviewMonths`, so it cannot go stale
   * independently of the review that produced it.
   */
  effective: "2026-09-17",
  lastUpdated: "2026-09-17",
  lastReviewed: "2026-09-17",
  reviewMonths: 6,

  /** Named because which processor holds the card is material to the client. */
  paymentProcessor: "Stripe",
} as const;

/** True once every blank above has been filled. Guards the page in dev. */
export const legalFactsComplete = (): boolean =>
  !Object.values(LEGAL).some((v) => typeof v === "string" && v.startsWith("[TO SET:"));

/** The list of what is still missing, for the dev-only banner. */
export const missingLegalFacts = (): string[] =>
  Object.entries(LEGAL)
    .filter(([, v]) => typeof v === "string" && v.startsWith("[TO SET:"))
    .map(([k]) => k);

const DATE_FMT = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export const formatLegalDate = (iso: string): string => DATE_FMT.format(new Date(`${iso}T00:00:00Z`));

/** Last reviewed plus the review cadence, as an ISO date. */
export function nextReviewDue(): string {
  const d = new Date(`${LEGAL.lastReviewed}T00:00:00Z`);
  d.setUTCMonth(d.getUTCMonth() + LEGAL.reviewMonths);
  return d.toISOString().slice(0, 10);
}
