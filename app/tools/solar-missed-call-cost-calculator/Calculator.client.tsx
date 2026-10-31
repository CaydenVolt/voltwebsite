"use client";

import { useState } from "react";

/**
 * Missed-call cost calculator. Inputs: monthly inbound calls, missed call
 * percentage, close rate on contacted, deal margin. Output: lost deals and
 * revenue, plus the recoverable portion with missed-call text back (default
 * 30% recovery rate).
 */
export function MissedCallCostCalculator() {
  const [calls, setCalls] = useState(200);
  const [missedPct, setMissedPct] = useState(40);
  const [closeRate, setCloseRate] = useState(20);
  const [margin, setMargin] = useState(5000);

  const selfRecoveryRate = 0.15;
  const textBackRecoveryRate = 0.30;

  const missedCalls = (calls * missedPct) / 100;
  const permanentlyLost = missedCalls * (1 - selfRecoveryRate);
  const lostDealsNow = (permanentlyLost * closeRate) / 100;
  const lostRevenueNow = lostDealsNow * margin;

  const recoverableCalls = missedCalls * textBackRecoveryRate;
  const recoverableDeals = (recoverableCalls * closeRate) / 100;
  const recoverableRevenue = recoverableDeals * margin;

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-6">
      <div className="flex flex-col gap-6 lg:col-span-7">
        <Field
          label="Monthly inbound calls"
          hint="Total calls to the main business line (your VoIP or phone-system dashboard shows this)."
          suffix=""
          value={calls}
          min={10}
          max={1000}
          step={10}
          onChange={setCalls}
          format={(v) => new Intl.NumberFormat("en-US").format(v)}
        />
        <Field
          label="Percentage of calls missed"
          hint="Includes voicemail-only, after-hours and busy-line rolls. Most installers miss 30 to 50 percent."
          suffix="%"
          value={missedPct}
          min={5}
          max={80}
          step={1}
          onChange={setMissedPct}
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
          label="Monthly missed calls"
          value={Math.round(missedCalls).toString()}
          tone="muted"
          caption={`${calls} total calls x ${missedPct}% missed.`}
        />
        <Output
          label="Lost revenue per month (today)"
          value={fmt(lostRevenueNow)}
          tone="muted"
          caption={`${lostDealsNow.toFixed(1)} deals, assuming 15% self-recovery (callers who try again). Annualised: ${fmt(lostRevenueNow * 12)}.`}
        />
        <Output
          label="Recoverable with missed-call text back"
          value={fmt(recoverableRevenue)}
          tone="accent"
          caption={`${recoverableDeals.toFixed(1)} deals recovered at a 30% text-back recovery rate. Annualised: ${fmt(recoverableRevenue * 12)}.`}
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
