export function parsePercentage(
  percent: number | null | undefined
): number | null {
  if (percent === null || percent === undefined) return null;

  return Math.round(percent);
}
