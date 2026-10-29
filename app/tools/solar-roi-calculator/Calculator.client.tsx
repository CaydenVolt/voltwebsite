"use client";

import { useState } from "react";

/**
 * Solar ROI (payback) calculator. Inputs: net system cost, monthly bill,
 * annual rate increase %, system offset %. Output: payback year, 25-year
 * cumulative savings.
 */
export function SolarRoiCalculator() {
  const [netCost, setNetCost] = useState(18000);
  const [monthlyBill, setMonthlyBill] = useState(180);
  const [rateIncrease, setRateIncrease] = useState(3);
  const [offset, setOffset] = useState(90);

  const annualDegradation = 0.005;
  const annualBillYearOne = monthlyBill * 12;
  const annualSavingsYearOne = annualBillYearOne * (offset / 100);

  let cumulative = 0;
  let paybackYear: number | null = null;
  let totalSavings = 0;

  for (let year = 1; year <= 25; year++) {
    const savings =
      annualSavingsYearOne *
      Math.pow(1 + rateIncrease / 100, year - 1) *
      Math.pow(1 - annualDegradation, year - 1);
    cumulative += savings;
    totalSavings += savings;
    if (paybackYear === null && cumulative >= netCost) {
      paybackYear = year;
    }
  }

  const netSavings25 = totalSavings - netCost;

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-6">
      <div className="flex flex-col gap-6 lg:col-span-7">
        <Field
          label="Net system cost (after federal tax credit)"
          hint="System price minus the 30 percent federal tax credit minus any state rebates."
          suffix="$"
          value={netCost}
          min={5000}
          max={60000}
          step={500}
          onChange={setNetCost}
          format={(v) => new Intl.NumberFormat("en-US").format(v)}
        />
        <Field
          label="Current monthly electric bill"
          hint="Your average over the last 12 months. Use a summer month if you have central air."
          suffix="$"
          value={monthlyBill}
          min={50}
          max={700}
          step={5}
          onChange={setMonthlyBill}
          format={(v) => new Intl.NumberFormat("en-US").format(v)}
        />
        <Field
          label="Expected annual utility rate increase"
          hint="US average is 2 to 4 percent per year over the last decade. Some metros higher."
          suffix="%"
          value={rateIncrease}
          min={0}
          max={10}
          step={0.5}
          onChange={setRateIncrease}
          format={(v) => v.toFixed(1)}
        />
        <Field
          label="System offset (percentage of your bill the system covers)"
          hint="Most residential systems are sized to offset 80 to 100 percent of annual electric use."
          suffix="%"
          value={offset}
          min={30}
          max={120}
          step={5}
          onChange={setOffset}
        />
      </div>

      <div className="flex flex-col gap-6 lg:col-span-5 lg:border-l lg:border-line lg:pl-6">
        <Output
          label="Payback year"
          value={paybackYear !== null ? `Year ${paybackYear}` : "Over 25 years"}
          tone={paybackYear !== null && paybackYear <= 12 ? "accent" : "muted"}
          caption={
            paybackYear !== null
              ? "The year cumulative savings cross your net system cost."
              : "At these inputs, the system does not pay back in its warranted lifespan."
          }
        />
        <Output
          label="25-year net savings"
          value={fmt(netSavings25)}
          tone="accent"
          caption={`Total 25-year savings ${fmt(totalSavings)} minus net system cost ${fmt(netCost)}.`}
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
