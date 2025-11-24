import { useContext } from "react";
import { TemperatureUnitContext } from "./TemperatureUnitContext";
import { celsiusToUnitStr } from "@/app/utils/celsiusToUnitStr";

export function useTemperatureFormat() {
  const { temperatureUnit } = useContext(TemperatureUnitContext);

  /** Formats the temperature according to the temperature unit in the TemperatureUnitContext
   *
   * @param celsiusTemp - Temperature in Celsius
   * @returns Rounded temperature in unit decided according to context
   */
  function formatTemperature(
    celsiusTemp: number | undefined | null,
    options: {
      includeUnit?: boolean;
    } = {}
  ): string {
    return celsiusToUnitStr(celsiusTemp, temperatureUnit, options);
  }

  const temperatureSymbol = temperatureUnit === "celsius" ? "°C" : "°F";

  return { formatTemperature, temperatureSymbol, temperatureUnit };
}
