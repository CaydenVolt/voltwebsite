"use client";

import { useState } from "react";

/**
 * Review impact calculator. Inputs: current rating, target rating, monthly
 * impressions, close rate, deal margin. Output: additional deals and revenue
 * from CTR lift.
 *
 * CTR curve by rating (research-backed averages):
 *   3.5 -> 3%, 4.0 -> 5%, 4.5 -> 7%, 4.8 -> 8.5%, 4.9+ -> 9%
 */
function ctrAt(rating: number): number {
  const points: [number, number][] = [
    [3.0, 1.5],
    [3.5, 3],
    [4.0, 5],
    [4.5, 7],
    [4.8, 8.5],
    [4.9, 9],
    [5.0, 9.5],
  ];
  if (rating <= points[0][0]) return points[0][1];
  if (rating >= points[points.length - 1][0]) return points[points.length - 1][1];
  for (let i = 1; i < points.length; i++) {
    const [x1, y1] = points[i - 1];
    const [x2, y2] = points[i];
    if (rating <= x2) {
      const t = (rating - x1) / (x2 - x1);
      return y1 + (y2 - y1) * t;
    }
  }
  return 0;
}

export function ReviewImpactCalculator() {
  const [currentRating, setCurrentRating] = useState(4.2);
  const [targetRating, setTargetRating] = useState(4.8);
  const [impressions, setImpressions] = useState(3000);
  const [closeRate, setCloseRate] = useState(20);
  const [margin, setMargin] = useState(5000);

  const leadConversionOfClick = 0.10;
  const contactRate = 0.70;

  const currentCtr = ctrAt(currentRating);
  const targetCtr = ctrAt(targetRating);
  const extraCtrPoints = Math.max(0, targetCtr - currentCtr);
  const extraClicks = (impressions * extraCtrPoints) / 100;
  const extraLeads = extraClicks * leadConversionOfClick;
  const extraContacted = extraLeads * contactRate;
  const extraDeals = (extraContacted * closeRate) / 100;
  const extraRevenue = extraDeals * margin;

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-6">
      <div className="flex flex-col gap-6 lg:col-span-7">
        <Field
          label="Current Google rating"
          hint="Your current star rating on your Business Profile."
          suffix=""
          value={currentRating}
          min={3.0}
          max={5.0}
          step={0.1}
          onChange={setCurrentRating}
          format={(v) => `${v.toFixed(1)} stars`}
        />
        <Field
          label="Target Google rating"
          hint="Where you want to be. 4.6+ is the useful target band."
          suffix=""
          value={targetRating}
          min={3.0}
          max={5.0}
          step={0.1}
          onChange={setTargetRating}
          format={(v) => `${v.toFixed(1)} stars`}
        />
        <Field
          label="Monthly Business Profile impressions"
          hint="From Google Business Profile Insights. The number of times your profile shows up in search and Maps."
          suffix=""
          value={impressions}
          min={100}
          max={50000}
          step={100}
          onChange={setImpressions}
          format={(v) => new Intl.NumberFormat("en-US").format(v)}
        />
        <Field
          label="Close rate on contacted leads"
          hint="Of leads you successfully get on the phone, the percentage that sign."
          suffix="%"
          value={closeRate}
          min={5}
          max={50}
          step={1}
          onChange={setCloseRate}
        />
        <Field
          label="Average gross margin per signed deal"
          hint="Contract value minus hardware, labour, permits, financing fees, sales commission."
          suffix="$"
          value={margin}
          min={500}
          max={30000}
          step={100}
          onChange={setMargin}
          format={(v) => new Intl.NumberFormat("en-US").format(v)}
        />
      </div>

      <div className="flex flex-col gap-6 lg:col-span-5 lg:border-l lg:border-line lg:pl-6">
        <Output
          label="Click-through lift"
          value={`+${extraCtrPoints.toFixed(1)} pts`}
          tone="muted"
          caption={`From ${currentCtr.toFixed(1)}% to ${targetCtr.toFixed(1)}% CTR.`}
        />
        <Output
          label="Extra signed deals per month"
          value={extraDeals.toFixed(1)}
          tone="muted"
          caption={`${Math.round(extraClicks)} extra clicks, ${Math.round(extraLeads)} extra leads at a 10% click-to-lead rate.`}
        />
        <Output
          label="Extra revenue per month"
          value={fmt(extraRevenue)}
          tone="accent"
          caption={`Annualised: ${fmt(extraRevenue * 12)} a year from the rating lift alone.`}
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
        <span className="text-h3 text-fg tabular-nums">
          {suffix === "$" ? `${suffix}${display}` : suffix ? `${display}${suffix}` : display}
        </span>
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
