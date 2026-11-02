"use client";

import { useState } from "react";

export function LeadToInstallCalculator() {
  const [monthlyLeads, setMonthlyLeads] = useState(500);
  const [monthlyContracts, setMonthlyContracts] = useState(25);
  const [monthlyInstalls, setMonthlyInstalls] = useState(20);
  const [installGoal, setInstallGoal] = useState(50);

  const leadToContract = monthlyLeads > 0 ? (monthlyContracts / monthlyLeads) * 100 : 0;
  const contractToInstall = monthlyContracts > 0 ? (monthlyInstalls / monthlyContracts) * 100 : 0;
  const overall = monthlyLeads > 0 ? (monthlyInstalls / monthlyLeads) * 100 : 0;
  const leadsNeededForGoal = overall > 0 ? Math.ceil(installGoal / (overall / 100)) : 0;

  const industryAverage = 3.5;
  const vsIndustry = overall - industryAverage;

  const fmt = (n: number) => new Intl.NumberFormat("en-US").format(Math.round(n));

  return (
    <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-6">
      <div className="flex flex-col gap-6 lg:col-span-7">
        <Field
          label="Qualified leads per month"
          hint="Only count qualified leads (homeowner, suitable roof)."
          suffix=""
          value={monthlyLeads}
          min={10}
          max={5000}
          step={10}
          onChange={setMonthlyLeads}
          format={(v) => new Intl.NumberFormat("en-US").format(v)}
        />
        <Field
          label="Signed contracts per month"
          hint="Customer has signed, not just quoted or interested."
          suffix=""
          value={monthlyContracts}
          min={0}
          max={500}
          step={1}
          onChange={setMonthlyContracts}
        />
        <Field
          label="Installs per month (PTO complete)"
          hint="Permission-to-operate complete, system producing."
          suffix=""
          value={monthlyInstalls}
          min={0}
          max={400}
          step={1}
          onChange={setMonthlyInstalls}
        />
        <Field
          label="Monthly install goal"
          hint="How many installs per month do you want to hit?"
          suffix=""
          value={installGoal}
          min={1}
          max={500}
          step={1}
          onChange={setInstallGoal}
        />
      </div>

      <div className="flex flex-col gap-6 lg:col-span-5 lg:border-l lg:border-line lg:pl-6">
        <Output
          label="Lead to contract rate"
          value={`${leadToContract.toFixed(1)}%`}
          tone="muted"
          caption={`${fmt(monthlyContracts)} contracts from ${fmt(monthlyLeads)} leads.`}
        />
        <Output
          label="Contract to install rate"
          value={`${contractToInstall.toFixed(1)}%`}
          tone="muted"
          caption={`${fmt(monthlyInstalls)} installs from ${fmt(monthlyContracts)} contracts. US avg: 70-85%.`}
        />
        <Output
          label="Overall conversion"
          value={`${overall.toFixed(2)}%`}
          tone={overall > industryAverage ? "accent" : "muted"}
          caption={`${vsIndustry >= 0 ? "+" : ""}${vsIndustry.toFixed(2)}% vs US industry avg (${industryAverage}%).`}
        />
        <Output
          label="Leads needed for goal"
          value={leadsNeededForGoal > 0 ? fmt(leadsNeededForGoal) : "N/A"}
          tone="accent"
          caption={`At ${overall.toFixed(2)}% conversion, you need ${fmt(leadsNeededForGoal)} leads/month to hit ${installGoal} installs.`}
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
