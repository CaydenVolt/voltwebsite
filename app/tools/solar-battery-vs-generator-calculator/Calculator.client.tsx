"use client";

import { useState } from "react";

/**
 * Battery vs generator 10-year TCO calculator. Inputs: battery net upfront,
 * generator net upfront, outage days/year, daily backup kWh, natural gas
 * rate ($/therm), TOU arbitrage annual ($). Outputs: 10-year TCO for each.
 */
export function BatteryVsGeneratorCalculator() {
  const [batteryCost, setBatteryCost] = useState(10000);
  const [generatorCost, setGeneratorCost] = useState(11000);
  const [outageDays, setOutageDays] = useState(5);
  const [dailyKwh, setDailyKwh] = useState(25);
  const [gasRate, setGasRate] = useState(1.50);
  const [touSavings, setTouSavings] = useState(400);

  const yearsHorizon = 10;
  const annualMaintGenerator = 300;

  const kwhToTherms = 0.034;
  const generatorEfficiency = 0.25;
  const annualFuelThermsPerKwh = kwhToTherms / generatorEfficiency;
  const annualFuelGenerator = outageDays * dailyKwh * annualFuelThermsPerKwh * gasRate;

  const generator10yr = generatorCost + yearsHorizon * (annualFuelGenerator + annualMaintGenerator);
  const battery10yr = batteryCost - yearsHorizon * touSavings;

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-6">
      <div className="flex flex-col gap-6 lg:col-span-7">
        <Field label="Battery net upfront cost (after federal tax credit)" hint="A 10-13 kWh residential battery typically $8K to $14K after the 30% credit." suffix="$" value={batteryCost} min={3000} max={30000} step={500} onChange={setBatteryCost} format={(v) => new Intl.NumberFormat("en-US").format(v)} />
        <Field label="Generator installed cost" hint="A 20-24 kW natural gas standby generator typically $8K to $14K installed." suffix="$" value={generatorCost} min={3000} max={30000} step={500} onChange={setGeneratorCost} format={(v) => new Intl.NumberFormat("en-US").format(v)} />
        <Field label="Grid outage days per year" hint="Days per year the grid is down at your address." suffix="" value={outageDays} min={0} max={30} step={1} onChange={setOutageDays} format={(v) => `${v} days`} />
        <Field label="Daily backup kWh needed" hint="How much electricity you use per day of outage. US average: 29 kWh." suffix=" kWh" value={dailyKwh} min={10} max={80} step={1} onChange={setDailyKwh} />
        <Field label="Natural gas rate" hint="Your utility's residential natural gas rate per therm. US average: $1.50." suffix="" value={gasRate * 100} min={50} max={400} step={5} onChange={(v) => setGasRate(v / 100)} format={(v) => `$${(v / 100).toFixed(2)}/therm`} />
        <Field label="Annual TOU arbitrage (battery only)" hint="California, Hawaii, Massachusetts: $400 to $800. Other states: usually $0 to $200." suffix="$" value={touSavings} min={0} max={1500} step={25} onChange={setTouSavings} format={(v) => new Intl.NumberFormat("en-US").format(v)} />
      </div>

      <div className="flex flex-col gap-6 lg:col-span-5 lg:border-l lg:border-line lg:pl-6">
        <Output label="Battery: 10-year TCO" value={fmt(battery10yr)} tone={battery10yr < generator10yr ? "accent" : "muted"} caption={`Upfront ${fmt(batteryCost)} minus ${yearsHorizon} years of TOU arbitrage (${fmt(touSavings * yearsHorizon)}).`} />
        <Output label="Generator: 10-year TCO" value={fmt(generator10yr)} tone={generator10yr < battery10yr ? "accent" : "muted"} caption={`Upfront ${fmt(generatorCost)} plus ${yearsHorizon} years of fuel (${fmt(annualFuelGenerator * yearsHorizon)}) and maintenance (${fmt(annualMaintGenerator * yearsHorizon)}).`} />
        <Output label="Difference" value={fmt(Math.abs(battery10yr - generator10yr))} tone="muted" caption={battery10yr < generator10yr ? "Battery wins on cost over 10 years." : "Generator wins on cost over 10 years."} />
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
