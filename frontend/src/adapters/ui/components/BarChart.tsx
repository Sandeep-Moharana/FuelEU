import React from "react";

type Datum = { label: string; value: number };
type Props = { data: Datum[]; height?: number; maxValue?: number };

export default function BarChart({ data, height = 220, maxValue }: Props) {
  const max = maxValue ?? Math.max(1, ...data.map((d) => d.value));
  const barW = Math.max(24, Math.min(48, Math.floor(560 / Math.max(1, data.length))));
  const gap = 12;
  const width = data.length * (barW + gap) + gap;

  return (
    <div className="w-full overflow-x-auto">
      <svg width={width} height={height} role="img" aria-label="Bar chart">
        <line x1={0} y1={height - 20} x2={width} y2={height - 20} stroke="#e5e7eb" />
        {data.map((d, i) => {
          const h = Math.round(((d.value < 0 ? 0 : d.value) / max) * (height - 60));
          const x = gap + i * (barW + gap);
          const y = height - 20 - h;
          return (
            <g key={i}>
              <rect x={x} y={y} width={barW} height={h} rx={6} className="fill-blue-600" />
              <text x={x + barW / 2} y={height - 6} textAnchor="middle" fontSize="10" fill="#6b7280">{d.label}</text>
              <text x={x + barW / 2} y={y - 6} textAnchor="middle" fontSize="10" fill="#374151">
                {Number.isFinite(d.value) ? d.value.toFixed(1) : "-"}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
