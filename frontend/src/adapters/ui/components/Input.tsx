import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & { label?: string };

export default function Input({ label, className = "", ...rest }: Props) {
  return (
    <label className="flex flex-col gap-1">
      {label && <span className="text-sm text-gray-700">{label}</span>}
      <input
        className={`border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 ${className}`}
        {...rest}
      />
    </label>
  );
}
