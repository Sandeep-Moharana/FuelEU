import React from "react";
export default function Card({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}>{children}</div>;
}
