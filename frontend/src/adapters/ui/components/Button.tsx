import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger";
};

const styles: Record<NonNullable<Props["variant"]>, string> = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400 disabled:opacity-50",
  secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-300 disabled:opacity-50",
  danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-400 disabled:opacity-50",
};

export default function Button({ variant = "primary", className = "", ...rest }: Props) {
  return (
    <button
      className={`px-3 py-2 rounded-lg text-sm font-medium shadow-sm focus:outline-none focus:ring-2 ${styles[variant]} ${className}`}
      {...rest}
    />
  );
}
