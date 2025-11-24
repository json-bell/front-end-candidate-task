export type TemperatureUnit = "celsius" | "fahrenheit";

/**
 *
 * In this case:
 *
 * - takes in the celsius value from the API
 * - converts it to fahrenheit if necessary
 * - Rounds to one decimal unit
 */

/** Converts a celsius temperature to the appropriate unit as a string, rounded to the nearest whole number
 *
 * @param celsius
 * @param unit
 *
 * @returns A string parsed from the input temperature and the destination unit, rounded to the nearest whole number
 */
export const celsiusToUnitStr = (
  celsius: number,
  unit: TemperatureUnit,
  { includeUnit = true }: { includeUnit?: boolean }
): string => {
  if (unit === "fahrenheit")
    throw new Error("Fahrenheit implementation pending");

  const temp = `${Math.round(celsius)}`;

  if (!includeUnit) return temp;
  return `${temp}°C`;
};
