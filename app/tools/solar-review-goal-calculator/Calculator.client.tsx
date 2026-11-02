"use client";

import { useState } from "react";

export function ReviewGoalCalculator() {
  const [currentReviews, setCurrentReviews] = useState(50);
  const [targetReviews, setTargetReviews] = useState(150);
  const [monthlyInstalls, setMonthlyInstalls] = useState(20);
  const [captureRatePct, setCaptureRatePct] = useState(25);
  const [competitorReviews, setCompetitorReviews] = useState(150);
  const [competitorMonthly, setCompetitorMonthly] = useState(4);

  const monthlyReviews = monthlyInstalls * (captureRatePct / 100);
  const monthsToTarget = monthlyReviews > 0 ? Math.ceil((targetReviews - currentReviews) / monthlyReviews) : 0;

  const monthsToOvertake = (() => {
    const gap = competitorReviews - currentReviews;
    const netPace = monthlyReviews - competitorMonthly;
    if (netPace <= 0) return null;
    return Math.ceil(gap / netPace);
  })();

  const fmt = (n: number) => new Intl.NumberFormat("en-US").format(Math.round(n));

  return (
    <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-6">
      <div className="flex flex-col gap-6 lg:col-span-7">
        <Field
          label="Your current Google review count"
          hint="Google Business Profile review total today."
          suffix=""
          value={currentReviews}
          min={0}
          max={1500}
          step={10}
          onChange={setCurrentReviews}
          format={(v) => new Intl.NumberFormat("en-US").format(v)}
        />
        <Field
          label="Target review count"
          hint="Absolute total you want to reach."
          suffix=""
          value={targetReviews}
          min={10}
          max={2000}
          step={10}
          onChange={setTargetReviews}
          format={(v) => new Intl.NumberFormat("en-US").format(v)}
        />
        <Field
          label="Monthly installs"
          hint="Completed installs eligible for a review ask."
          suffix=""
          value={monthlyInstalls}
          min={1}
          max={300}
          step={1}
          onChange={setMonthlyInstalls}
        />
        <Field
          label="Review request capture rate"
          hint="Percentage of install customers who leave a review when asked. US avg 15 to 25%."
          suffix="%"
          value={captureRatePct}
          min={5}
          max={70}
          step={1}
          onChange={setCaptureRatePct}
        />
        <Field
          label="Competitor review count"
          hint="A specific competitor you want to overtake."
          suffix=""
          value={competitorReviews}
          min={0}
          max={2000}
          step={10}
          onChange={setCompetitorReviews}
          format={(v) => new Intl.NumberFormat("en-US").format(v)}
        />
        <Field
          label="Competitor new reviews per month"
          hint="How many reviews the competitor adds each month (estimate)."
          suffix=""
          value={competitorMonthly}
          min={0}
          max={50}
          step={1}
          onChange={setCompetitorMonthly}
        />
      </div>

      <div className="flex flex-col gap-6 lg:col-span-5 lg:border-l lg:border-line lg:pl-6">
        <Output
          label="Your reviews per month"
          value={fmt(monthlyReviews)}
          tone="muted"
          caption={`${monthlyInstalls} installs x ${captureRatePct}% capture.`}
        />
        <Output
          label="Months to target"
          value={monthsToTarget > 0 ? `${monthsToTarget} months` : "Already there"}
          tone="accent"
          caption={monthsToTarget > 0 ? `About ${(monthsToTarget / 12).toFixed(1)} years at this pace.` : "You have passed the target."}
        />
        <Output
          label="Months to overtake competitor"
          value={monthsToOvertake === null ? "Never (at this pace)" : monthsToOvertake <= 0 ? "Already ahead" : `${monthsToOvertake} months`}
          tone="accent"
          caption={monthsToOvertake === null ? "Competitor is adding reviews as fast or faster than you." : "Based on your net monthly pace advantage."}
        />
      </div>
    </div>
  );
}

function Field({
  label, hint, suffix, value, min, max, step, onChange, format,
}: {
  label: string; hint: string; suffix: string; value: number; min: number; max: number; step: number;
  onChange: (v: number) => void; format?: (v: number) => string;
}) {
  const display = format ? format(value) : String(value);
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label className="label text-fg">{label}</label>
        <span className="text-h3 text-fg tabular-nums">{display}{suffix}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-accent" aria-label={label}
      />
      <p className="mt-2 text-body-sm text-muted">{hint}</p>
    </div>
  );
}

function Output({ label, value, tone, caption }: { label: string; value: string; tone: "muted" | "accent"; caption: string }) {
  return (
    <div>
      <p className={`label ${tone === "accent" ? "text-accent" : "text-muted"}`}>{label}</p>
      <p className="mt-2 font-display text-display-md text-fg tabular-nums">{value}</p>
      <p className="mt-2 max-w-measure text-body-sm text-muted">{caption}</p>
    </div>
  );
}
