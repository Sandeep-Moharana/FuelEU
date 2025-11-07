import React from "react";

type Props = { label: string; value: React.ReactNode; hint?: string; tone?: "default" | "good" | "bad" };

const toneClass: Record<NonNullable<Props["tone"]>, string> = {
  default: "border-gray-200",
  good: "border-green-300",
  bad: "border-red-300",
};

export default function Kpi({ label, value, hint, tone = "default" }: Props) {
  return (
    <div className={`rounded-xl border ${toneClass[tone]} bg-white p-4 shadow-sm`}>
      <div className="text-xs uppercase tracking-wide text-gray-500">{label}</div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
      {hint && <div className="text-xs text-gray-500 mt-1">{hint}</div>}
    </div>
  );
}
