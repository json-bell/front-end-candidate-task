"use client";
import { TemperatureUnit } from "@/app/utils/celsiusToUnitStr";
import { createContext, useState } from "react";

export const TemperatureUnitContext = createContext<{
  temperatureUnit: TemperatureUnit;
  onTemperatureUnitChange: (newUnit: TemperatureUnit) => void;
}>({
  temperatureUnit: "celsius",
  onTemperatureUnitChange: () => {
    throw new Error("Error: tried to change temperature unit without ");
  },
});

export function TemperatureUnitProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [temperatureUnit, setTemperatureUnit] =
    useState<TemperatureUnit>("celsius");

  const onTemperatureUnitChange = (newUnit: TemperatureUnit): void => {
    setTemperatureUnit(newUnit);
  };

  return (
    <TemperatureUnitContext.Provider
      value={{ temperatureUnit, onTemperatureUnitChange }}
    >
      {children}
    </TemperatureUnitContext.Provider>
  );
}
