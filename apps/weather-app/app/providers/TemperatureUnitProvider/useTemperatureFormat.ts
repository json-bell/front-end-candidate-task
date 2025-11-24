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
  const formatTemperature = (
    celsiusTemp: number | undefined | null,
    options: {
      includeUnit?: boolean;
    } = {}
  ): string => {
    if (celsiusTemp === undefined || celsiusTemp === null) return "-";
    return celsiusToUnitStr(celsiusTemp, temperatureUnit, options);
  };

  const temperatureSymbol = temperatureUnit === "celsius" ? "°C" : "°F";

  return { formatTemperature, temperatureSymbol, temperatureUnit };
}
