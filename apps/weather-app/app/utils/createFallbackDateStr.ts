/** For situations where the API returns no data, we generate fallback dates
 *
 * We take the client date, add appropriate days, and reparse to YYYY-MM-DD by slicing the ISO string
 */
export function createFallbackDateStr(date: Date, daysShift: number) {
  const result = new Date(date);

  result.setDate(result.getDate() + daysShift);

  return result.toISOString().slice(0, 10);
}
