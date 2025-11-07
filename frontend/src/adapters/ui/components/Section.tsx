import React from "react";

export default function Section({
  title, children, actions, className = ""
}: React.PropsWithChildren<{ title: string; actions?: React.ReactNode; className?: string }>) {
  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">{title}</h2>
        {actions}
      </div>
      {children}
    </div>
  );
}
