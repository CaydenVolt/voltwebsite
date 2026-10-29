"use client";

import { useState } from "react";

/**
 * Close rate calculator. Inputs: monthly leads, close rate %, deal margin $,
 * monthly fixed overhead $. Outputs: monthly net profit, break-even close rate.
 */
export function CloseRateCalculator() {
  const [leads, setLeads] = useState(80);
  const [closeRate, setCloseRate] = useState(20);
  const [margin, setMargin] = useState(5000);
  const [overhead, setOverhead] = useState(35000);

  const signed = (leads * closeRate) / 100;
  const grossProfit = signed * margin;
  const netProfit = grossProfit - overhead;
  const breakEvenRate = (overhead / (leads * margin)) * 100;

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
  const fmtPct = (n: number) => `${n.toFixed(1)}%`;

  return (
    <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-6">
      <div className="flex flex-col gap-6 lg:col-span-7">
        <Field
          label="Monthly leads received"
          hint="Across every channel: web, phone, LSAs, referrals, canvassing."
          suffix=""
          value={leads}
          min={5}
          max={500}
          step={5}
          onChange={setLeads}
          format={(v) => String(v)}
        />
        <Field
          label="Close rate on contacted leads"
          hint="Of the leads you actually get on the phone, the percentage that sign."
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
        <Field
          label="Monthly fixed overhead"
          hint="Rent, non-sales salaries, software, insurance, marketing retainer. Everything that bills whether or not you close."
          suffix="$"
          value={overhead}
          min={1000}
          max={200000}
          step={1000}
          onChange={setOverhead}
          format={(v) => new Intl.NumberFormat("en-US").format(v)}
        />
      </div>

      <div className="flex flex-col gap-6 lg:col-span-5 lg:border-l lg:border-line lg:pl-6">
        <Output
          label="Signed deals per month"
          value={signed.toFixed(1)}
          tone="muted"
          caption={`${leads} leads x ${closeRate}% close rate.`}
        />
        <Output
          label="Monthly net profit"
          value={fmt(netProfit)}
          tone={netProfit >= 0 ? "accent" : "warn"}
          caption={
            netProfit >= 0
              ? `Gross profit ${fmt(grossProfit)} minus overhead ${fmt(overhead)}.`
              : `Loss. Gross profit ${fmt(grossProfit)} does not cover overhead ${fmt(overhead)}.`
          }
        />
        <Output
          label="Break-even close rate"
          value={fmtPct(breakEvenRate)}
          tone="muted"
          caption={
            closeRate >= breakEvenRate
              ? `You are ${(closeRate - breakEvenRate).toFixed(1)} points above break-even.`
              : `You are ${(breakEvenRate - closeRate).toFixed(1)} points below break-even.`
          }
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

function Output({
  label, value, tone, caption,
}: {
  label: string; value: string; tone: "muted" | "accent" | "warn"; caption: string;
}) {
  const toneClass = tone === "accent" ? "text-accent" : tone === "warn" ? "text-fg" : "text-muted";
  return (
    <div>
      <p className={`label ${toneClass}`}>{label}</p>
      <p className="mt-2 font-display text-display-md text-fg tabular-nums">{value}</p>
      <p className="mt-2 max-w-measure text-body-sm text-muted">{caption}</p>
    </div>
  );
}
