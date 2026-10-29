"use client";

import { useState } from "react";

/**
 * Speed-to-lead calculator. Inputs: monthly leads, current response time
 * (minutes), close rate on contacted, deal margin. Output: lost deals and
 * lost revenue per month vs. a <5min baseline.
 *
 * Decay curve points (minutes -> contact rate %):
 *   5 -> 90, 15 -> 70, 30 -> 50, 60 -> 30, 240 -> 15, 1440 -> 5
 * Linearly interpolated between points, flat outside the range.
 */
function contactRateAt(minutes: number): number {
  const points: [number, number][] = [
    [5, 90],
    [15, 70],
    [30, 50],
    [60, 30],
    [240, 15],
    [1440, 5],
  ];
  if (minutes <= points[0][0]) return points[0][1];
  if (minutes >= points[points.length - 1][0]) return points[points.length - 1][1];
  for (let i = 1; i < points.length; i++) {
    const [x1, y1] = points[i - 1];
    const [x2, y2] = points[i];
    if (minutes <= x2) {
      const t = (minutes - x1) / (x2 - x1);
      return y1 + (y2 - y1) * t;
    }
  }
  return 0;
}

export function SpeedToLeadCalculator() {
  const [leads, setLeads] = useState(80);
  const [minutes, setMinutes] = useState(60);
  const [closeRate, setCloseRate] = useState(20);
  const [margin, setMargin] = useState(5000);

  const baselineRate = 90;
  const currentRate = contactRateAt(minutes);
  const lostContactRate = Math.max(0, baselineRate - currentRate);
  const lostContacts = (leads * lostContactRate) / 100;
  const lostDeals = (lostContacts * closeRate) / 100;
  const lostRevenue = lostDeals * margin;

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  const fmtTime = (m: number) => {
    if (m < 60) return `${m} min`;
    if (m < 1440) return `${(m / 60).toFixed(m % 60 === 0 ? 0 : 1)} hr`;
    return `${(m / 1440).toFixed(0)} day`;
  };

  return (
    <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-6">
      <div className="flex flex-col gap-6 lg:col-span-7">
        <Field
          label="Monthly leads received"
          hint="Across every inbound channel."
          suffix=""
          value={leads}
          min={5}
          max={500}
          step={5}
          onChange={setLeads}
          format={(v) => String(v)}
        />
        <Field
          label="Current average response time"
          hint="From the moment a lead comes in to the first human contact attempt."
          suffix=""
          value={minutes}
          min={1}
          max={1440}
          step={1}
          onChange={setMinutes}
          format={fmtTime}
        />
        <Field
          label="Close rate on contacted leads"
          hint="Of leads you successfully get on the phone, the percentage that sign."
          suffix="%"
          value={closeRate}
          min={1}
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
          label="Contact rate at your response time"
          value={`${currentRate.toFixed(0)}%`}
          tone="muted"
          caption={`Baseline (under 5 min): ${baselineRate}%. You are losing ${lostContactRate.toFixed(0)} contact points.`}
        />
        <Output
          label="Lost deals per month"
          value={lostDeals.toFixed(1)}
          tone="muted"
          caption={`${lostContacts.toFixed(0)} lost contacts x ${closeRate}% close rate.`}
        />
        <Output
          label="Lost revenue per month"
          value={fmt(lostRevenue)}
          tone="accent"
          caption={`Annualised: ${fmt(lostRevenue * 12)} a year, holding every other input constant.`}
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
