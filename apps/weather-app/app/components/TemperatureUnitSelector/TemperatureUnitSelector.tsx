"use client";
import { useTemperatureUnitChange } from "@/app/providers/TemperatureUnitProvider/useTemperatureUnitChange";
import styles from "./TemperatureUnitSelector.module.scss";
import { useTemperatureFormat } from "@/app/providers/TemperatureUnitProvider/useTemperatureFormat";
import { TemperatureUnit } from "@/app/utils/celsiusToUnitStr";

/** A Component that returns 2 radio buttons, allowing the user to set
 * the temperatureUnit in the TemperatureContext
 */
export default function TemperatureUnitSelector() {
  const onTemperatureUnitChange = useTemperatureUnitChange();
  const { temperatureUnit } = useTemperatureFormat();

  const radioDetails: { value: TemperatureUnit; label: string }[] = [
    { value: "celsius", label: "°C" },
    { value: "fahrenheit", label: "°F" },
  ];

  return (
    <div className={styles.temperatureSelectors}>
      {radioDetails.map(({ value, label }) => {
        return (
          <label key={value}>
            <input
              type="radio"
              value={"celsius"}
              className={"visually-hidden"}
              name="temperature-unit-radios"
              checked={temperatureUnit === value}
              onChange={() => {
                onTemperatureUnitChange(value);
              }}
            />
            {label}
          </label>
        );
      })}
    </div>
  );
}
