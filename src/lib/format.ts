export function formatCount(value: number): string {
  if (!Number.isFinite(value)) {
    return "0";
  }

  const absolute = Math.abs(value);

  if (absolute >= 10000) {
    const scaled = absolute / 1000;
    const compact = Number.isInteger(scaled)
      ? String(scaled)
      : scaled.toFixed(1).replace(/\.0$/, "");

    return value < 0 ? `-${compact}k` : `${compact}k`;
  }

  return String(value);
}

export function formatTotal(value: number): string {
  return value.toLocaleString("en-US");
}
