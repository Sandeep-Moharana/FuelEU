import React from "react";

export type Column<T> = {
  key: keyof T | string;
  header: string;
  render?: (row: T) => React.ReactNode;
  className?: string;
};

type Props<T> = { columns: Column<T>[]; data: T[]; emptyText?: string };

export default function Table<T>({ columns, data, emptyText = "No data" }: Props<T>) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((c) => (
              <th key={String(c.key)} className={`text-left px-3 py-2 font-medium text-gray-700 ${c.className || ""}`}>
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-3 py-4 text-center text-gray-500">{emptyText}</td>
            </tr>
          ) : (
            data.map((row, idx) => (
              <tr key={idx} className="border-b last:border-0">
                {columns.map((c) => (
                  <td key={String(c.key)} className={`px-3 py-2 ${c.className || ""}`}>
                    {c.render ? c.render(row) : (row as any)[c.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
