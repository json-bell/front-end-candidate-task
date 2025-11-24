export type TemperatureUnit = "celsius" | "fahrenheit";

/** Simple number conversion from celsius to fahrenheit */
function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

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
export function celsiusToUnitStr(
  celsius: number | undefined | null,
  unit: TemperatureUnit,
  options?: { includeUnit?: boolean }
): string {
  const temperatureSymbol = unit === "celsius" ? "°C" : "°F";
  const { includeUnit = true } = options || {};

  if (celsius === undefined || celsius === null)
    return includeUnit ? `-${temperatureSymbol}` : "-";

  const tempNumber = Math.round(
    unit === "celsius" ? celsius : celsiusToFahrenheit(celsius)
  );

  if (!includeUnit) return tempNumber.toString();

  return `${tempNumber}${temperatureSymbol}`;
}
