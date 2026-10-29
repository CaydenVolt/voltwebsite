"use client";

import { useState } from "react";

/**
 * Battery payback calculator. Inputs: net battery cost, usable kWh, daily
 * cycles, peak rate, off-peak rate, outage days/year, daily usage kWh,
 * annual rate increase. Outputs: payback year, 15-year value.
 */
export function BatteryPaybackCalculator() {
  const [netCost, setNetCost] = useState(10000);
  const [kwh, setKwh] = useState(10);
  const [peakRate, setPeakRate] = useState(0.35);
  const [offPeakRate, setOffPeakRate] = useState(0.15);
  const [outageDays, setOutageDays] = useState(3);
  const [dailyUsage, setDailyUsage] = useState(25);
  const [rateIncrease, setRateIncrease] = useState(3);

  const spread = Math.max(0, peakRate - offPeakRate);
  const arbitrageYearOne = kwh * 365 * spread;
  const backupYearOne = outageDays * dailyUsage * peakRate;
  const annualSavingsYearOne = arbitrageYearOne + backupYearOne;

  const annualDegradation = 0.02;
  let cumulative = 0;
  let paybackYear: number | null = null;
  let total15 = 0;

  for (let year = 1; year <= 15; year++) {
    const savings =
      annualSavingsYearOne *
      Math.pow(1 + rateIncrease / 100, year - 1) *
      Math.pow(1 - annualDegradation, year - 1);
    cumulative += savings;
    total15 += savings;
    if (paybackYear === null && cumulative >= netCost) {
      paybackYear = year;
    }
  }

  const netValue15 = total15 - netCost;

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-6">
      <div className="flex flex-col gap-6 lg:col-span-7">
        <Field
          label="Net battery cost (after federal tax credit)"
          hint="Installed battery price minus the 30 percent federal tax credit minus any state rebate."
          suffix="$"
          value={netCost}
          min={3000}
          max={40000}
          step={500}
          onChange={setNetCost}
          format={(v) => new Intl.NumberFormat("en-US").format(v)}
        />
        <Field
          label="Usable battery capacity"
          hint="Powerwall: ~13.5 kWh. Enphase IQ Battery 10: 10 kWh. LG Chem RESU: 9.6 kWh."
          suffix=" kWh"
          value={kwh}
          min={3}
          max={40}
          step={0.5}
          onChange={setKwh}
          format={(v) => v.toFixed(1)}
        />
        <Field
          label="Peak electric rate (per kWh)"
          hint="Your utility's time-of-use peak rate. California typical: $0.35 to $0.50. US average flat rate: $0.17."
          suffix=""
          value={peakRate * 100}
          min={10}
          max={70}
          step={1}
          onChange={(v) => setPeakRate(v / 100)}
          format={(v) => `$${(v / 100).toFixed(2)}`}
        />
        <Field
          label="Off-peak electric rate (per kWh)"
          hint="The rate you charge the battery at. If your utility has no TOU, use the same as peak."
          suffix=""
          value={offPeakRate * 100}
          min={5}
          max={40}
          step={1}
          onChange={(v) => setOffPeakRate(v / 100)}
          format={(v) => `$${(v / 100).toFixed(2)}`}
        />
        <Field
          label="Grid outage days per year"
          hint="Days per year the grid is down at your address. Most US homes: 1 to 5 days. Fire-prone or storm areas: higher."
          suffix=""
          value={outageDays}
          min={0}
          max={30}
          step={1}
          onChange={setOutageDays}
          format={(v) => `${v} days`}
        />
        <Field
          label="Average daily electric usage"
          hint="Your average daily kWh. US household average: around 29 kWh/day."
          suffix=" kWh"
          value={dailyUsage}
          min={10}
          max={80}
          step={1}
          onChange={setDailyUsage}
        />
        <Field
          label="Expected annual utility rate increase"
          hint="US average is 2 to 4 percent per year over the last decade."
          suffix="%"
          value={rateIncrease}
          min={0}
          max={10}
          step={0.5}
          onChange={setRateIncrease}
          format={(v) => v.toFixed(1)}
        />
      </div>

      <div className="flex flex-col gap-6 lg:col-span-5 lg:border-l lg:border-line lg:pl-6">
        <Output
          label="Year 1 savings"
          value={fmt(annualSavingsYearOne)}
          tone="muted"
          caption={`${fmt(arbitrageYearOne)} time-of-use arbitrage plus ${fmt(backupYearOne)} backup value.`}
        />
        <Output
          label="Payback year"
          value={paybackYear !== null ? `Year ${paybackYear}` : "Over 15 years"}
          tone={paybackYear !== null && paybackYear <= 10 ? "accent" : "muted"}
          caption={
            paybackYear !== null
              ? "Cumulative savings cross your net battery cost."
              : "At these inputs, the battery does not pay back in 15 years on arbitrage and backup alone."
          }
        />
        <Output
          label="15-year net value"
          value={fmt(netValue15)}
          tone="accent"
          caption={`Total 15-year value ${fmt(total15)} minus net cost ${fmt(netCost)}.`}
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
