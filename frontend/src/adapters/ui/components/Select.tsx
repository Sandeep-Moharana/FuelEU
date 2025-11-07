import React from "react";

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  options: { label: string; value: string | number }[];
};

export default function Select({ label, options, className = "", ...rest }: Props) {
  return (
    <label className="flex flex-col gap-1">
      {label && <span className="text-sm text-gray-700">{label}</span>}
      <select
        className={`border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 ${className}`}
        {...rest}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
