import { useContext } from "react";
import { TemperatureUnitContext } from "./TemperatureUnitContext";
import { celsiusToUnitStr } from "@/app/utils/celsiusToUnitStr";

export const useFormatTemperature = () => {
  const { temperatureUnit } = useContext(TemperatureUnitContext);

  /** Formats the temperature according to the temperature unit in the TemperatureUnitContext
   *
   * @param celsiusTemp - Temperature in Celsius
   * @returns Rounded temperature in unit decided according to context
   */
  const formatTemperature = (celsiusTemp: number) => {
    return celsiusToUnitStr(celsiusTemp, temperatureUnit);
  };

  return formatTemperature;
};
