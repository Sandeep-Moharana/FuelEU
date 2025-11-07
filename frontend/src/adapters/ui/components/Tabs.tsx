import React from "react";

export type Tab = { key: string; label: string };

type Props = { tabs: Tab[]; active: string; onChange: (key: string) => void };

export default function Tabs({ tabs, active, onChange }: Props) {
  return (
    <div className="w-full border-b border-gray-200">
      <nav className="-mb-px flex gap-2">
        {tabs.map((t) => {
          const isActive = t.key === active;
          return (
            <button
              key={t.key}
              onClick={() => onChange(t.key)}
              className={`px-4 py-2 text-sm border-b-2 ${
                isActive
                  ? "border-blue-600 text-blue-700 font-medium"
                  : "border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
