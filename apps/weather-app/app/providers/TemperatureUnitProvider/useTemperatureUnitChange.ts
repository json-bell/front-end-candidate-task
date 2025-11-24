import { useContext } from "react";
import { TemperatureUnitContext } from "./TemperatureUnitContext";

export function useTemperatureUnitChange() {
  const { onTemperatureUnitChange } = useContext(TemperatureUnitContext);

  return onTemperatureUnitChange;
}
