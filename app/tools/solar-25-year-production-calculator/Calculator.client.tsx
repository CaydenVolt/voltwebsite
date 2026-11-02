"use client";

import { useState } from "react";

export function ProductionProjectorCalculator() {
  const [systemKw, setSystemKw] = useState(7);
  const [yieldPerKw, setYieldPerKw] = useState(1400);
  const [degradationPct, setDegradationPct] = useState(0.5);

  const yearOne = systemKw * yieldPerKw;
  const years: { year: number; output: number; cumulative: number }[] = [];
  let cumulative = 0;
  for (let y = 1; y <= 25; y++) {
    const output = yearOne * Math.pow(1 - degradationPct / 100, y - 1);
    cumulative += output;
    years.push({ year: y, output, cumulative });
  }
  const yearTwentyFive = years[24].output;
  const degradedPct = (yearTwentyFive / yearOne) * 100;

  const fmt = (n: number) => new Intl.NumberFormat("en-US").format(Math.round(n));

  const maxCumulative = years[24].cumulative;

  return (
    <div className="flex flex-col gap-10">
      <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-6">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <Field
            label="System size (kW DC)"
            hint="Typical US residential: 5 to 10 kW."
            suffix=" kW"
            value={systemKw}
            min={3}
            max={20}
            step={0.5}
            onChange={setSystemKw}
            format={(v) => v.toFixed(1)}
          />
          <Field
            label="Annual yield per kW"
            hint="Phoenix 1700, Dallas 1500, Boston 1200, Seattle 1000."
            suffix=" kWh/kW"
            value={yieldPerKw}
            min={900}
            max={1800}
            step={50}
            onChange={setYieldPerKw}
          />
          <Field
            label="Annual degradation"
            hint="Tier-1 Si panels: 0.3 to 0.6% per year. Premium: 0.25%."
            suffix="%"
            value={degradationPct}
            min={0.2}
            max={1.0}
            step={0.05}
            onChange={setDegradationPct}
            format={(v) => v.toFixed(2)}
          />
        </div>
        <div className="flex flex-col gap-6 lg:col-span-5 lg:border-l lg:border-line lg:pl-6">
          <Output
            label="Year 1 production"
            value={`${fmt(yearOne)} kWh`}
            tone="muted"
            caption="Peak year, before degradation starts."
          />
          <Output
            label="Year 25 production"
            value={`${fmt(yearTwentyFive)} kWh`}
            tone="accent"
            caption={`${degradedPct.toFixed(1)}% of year-one output.`}
          />
          <Output
            label="25-year total"
            value={`${fmt(cumulative)} kWh`}
            tone="accent"
            caption="Cumulative energy produced over system lifetime."
          />
        </div>
      </div>

      <div className="border-t border-line pt-8">
        <p className="label text-muted">Year-by-year output</p>
        <div className="mt-4 grid grid-cols-5 gap-x-2 gap-y-3 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5">
          {years.filter((_, i) => i % 5 === 0 || i === 24).map((y) => {
            const width = (y.output / yearOne) * 100;
            return (
              <div key={y.year}>
                <p className="label text-muted">Year {y.year}</p>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-surface">
                  <div className="h-full bg-accent" style={{ width: `${width}%` }} />
                </div>
                <p className="mt-2 text-body-sm text-fg tabular-nums">{fmt(y.output)}</p>
              </div>
            );
          })}
        </div>
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
          {suffix.startsWith(" ") ? `${display}${suffix}` : `${display}${suffix}`}
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
