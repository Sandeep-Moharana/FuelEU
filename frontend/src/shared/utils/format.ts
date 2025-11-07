export const formatNum = (n: number, decimals = 2) =>
  Number.isFinite(n) ? n.toFixed(decimals) : "-";
