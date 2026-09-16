import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { LegalDoc } from "@/components/legal/LegalDoc";
import { LEGAL, dateBlock, formatLegalDate, missingLegalFacts } from "@/lib/content/legal";
import type { LegalDates, LegalSection } from "@/lib/content/legal";
import { routeExists } from "@/lib/routes";

/**
 * The shell both legal documents share: title, the four dates, the opening
 * agreement paragraph, any notice that has to be read before the body, and
 * the numbered sections.
 *
 * One centred column on a wider measure than the rest of the site. No contents
 * rail, no sidebar, nothing decorative. A legal page is read under suspicion,
 * and design on one reads as an attempt to steer the eye past something.
 *
 * The readiness warning is dev-only and never reaches a reader.
 */
export function LegalPage({
  title,
  dates,
  intro,
  notice,
  sections,
  warnings = [],
}: {
  title: string;
  dates: LegalDates;
  /** The opening paragraph, which names the entity and defines the parties. */
  intro: ReactNode;
  /** The bold line above the body, if the document needs one. */
  notice?: ReactNode;
  sections: readonly LegalSection[];
  /** Page-specific reasons this is not ready, added to the shared ones. */
  warnings?: string[];
}) {
  const missing = missingLegalFacts();
  const all = [
    ...(missing.length > 0
      ? [
          `${missing.length} legal ${missing.length === 1 ? "fact is" : "facts are"} still unset in lib/content/legal.ts: ${missing.join(", ")}.`,
        ]
      : []),
    ...(LEGAL.incorporated
      ? []
      : [
          `${LEGAL.entity} is not registered yet. Until it is there is no company to contract with: the counterparty is the owner personally.`,
        ]),
    ...warnings,
  ];

  return (
    <main className="flex-1">
      <div aria-hidden className="h-nav-condensed" />
      <Section rhythm="sm">
        <div className="mx-auto max-w-measure-legal">
          <h1 className="text-display-md">{title}</h1>

          <dl className="mt-8 text-body-sm text-muted">
            {dateBlock(dates).map((d) => (
              <div key={d.label} className="flex flex-wrap gap-x-2">
                <dt>{d.label}:</dt>
                <dd>
                  <time dateTime={d.iso}>{formatLegalDate(d.iso)}</time>
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 text-body">{intro}</div>

          {notice && <p className="mt-4 text-body font-semibold text-fg">{notice}</p>}

          {process.env.NODE_ENV !== "production" && all.length > 0 && (
            <div className="mt-10 border-l-2 border-accent bg-surface-deep px-5 py-4">
              <p className="label text-accent">Not ready to publish</p>
              {all.map((w) => (
                <p key={w} className="mt-3 text-body">
                  {w}
                </p>
              ))}
              <p className="mt-3 text-body">
                Have an attorney in {LEGAL.state} read this page before launch.
              </p>
            </div>
          )}

          <div className="mt-4">
            <LegalDoc sections={sections} />
          </div>
        </div>
      </Section>
    </main>
  );
}

/** Whether a route exists yet, re-exported so pages do not import two modules. */
export { routeExists };
