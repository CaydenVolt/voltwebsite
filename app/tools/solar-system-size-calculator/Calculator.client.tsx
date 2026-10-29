"use client";

import { useState } from "react";

/**
 * System size calculator. Inputs: monthly kWh usage, peak sun hours,
 * target offset %, panel wattage. Outputs: system kW, panel count, roof
 * area required (sq ft).
 */
export function SystemSizeCalculator() {
  const [monthlyKwh, setMonthlyKwh] = useState(1000);
  const [peakSunHours, setPeakSunHours] = useState(5.0);
  const [offsetTarget, setOffsetTarget] = useState(100);
  const [panelWatts, setPanelWatts] = useState(410);

  const systemEfficiency = 0.80;
  const annualKwhNeeded = monthlyKwh * 12 * (offsetTarget / 100);
  const annualProductionPerKw = peakSunHours * 365 * systemEfficiency;
  const systemKw = annualKwhNeeded / annualProductionPerKw;
  const panelCount = Math.ceil((systemKw * 1000) / panelWatts);
  const sqFtPerPanel = 20;
  const sqFtNeeded = panelCount * sqFtPerPanel;
  const sqFtWithSetbacks = Math.ceil(sqFtNeeded * 1.2);

  return (
    <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-6">
      <div className="flex flex-col gap-6 lg:col-span-7">
        <Field
          label="Average monthly electric usage"
          hint="Check your utility bill. US average is around 900 to 1,100 kWh per month."
          suffix=" kWh"
          value={monthlyKwh}
          min={200}
          max={3000}
          step={50}
          onChange={setMonthlyKwh}
          format={(v) => new Intl.NumberFormat("en-US").format(v)}
        />
        <Field
          label="Peak sun hours per day"
          hint="Arizona/Nevada: 6.0 to 6.5. California/Texas: 5.0 to 5.8. New England/Pacific NW: 3.5 to 4.3."
          suffix=""
          value={peakSunHours}
          min={3.0}
          max={7.0}
          step={0.1}
          onChange={setPeakSunHours}
          format={(v) => `${v.toFixed(1)} hrs`}
        />
        <Field
          label="Target offset (percentage of your usage)"
          hint="Most homes are sized to offset 90 to 100 percent of annual usage."
          suffix="%"
          value={offsetTarget}
          min={30}
          max={120}
          step={5}
          onChange={setOffsetTarget}
        />
        <Field
          label="Panel wattage"
          hint="Modern residential panels: 400 to 450 watts. Older panels: 300 to 370 watts."
          suffix=" W"
          value={panelWatts}
          min={300}
          max={500}
          step={10}
          onChange={setPanelWatts}
        />
      </div>

      <div className="flex flex-col gap-6 lg:col-span-5 lg:border-l lg:border-line lg:pl-6">
        <Output
          label="System size"
          value={`${systemKw.toFixed(1)} kW`}
          tone="accent"
          caption={`At ${peakSunHours.toFixed(1)} peak sun hours and 80% system efficiency.`}
        />
        <Output
          label="Panel count"
          value={`${panelCount} panels`}
          tone="muted"
          caption={`At ${panelWatts}W per panel.`}
        />
        <Output
          label="Roof area required"
          value={`${sqFtWithSetbacks} sq ft`}
          tone="muted"
          caption={`${sqFtNeeded} sq ft of panels plus 20% for setbacks, obstructions and spacing.`}
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
