"use client";
import styles from "./TemperatureUnitSelector.module.scss";

export default function TemperatureUnitSelector() {
  return (
    <div className={styles.temperatureSelectors}>
      <label>
        <input
          type="radio"
          value={"Celsius"}
          className={"visually-hidden"}
          name="temperature-unit-radios"
          defaultChecked
        />
        C
      </label>
      <label>
        <input
          type="radio"
          value={"Fahrenheit"}
          className={"visually-hidden"}
          name="temperature-unit-radios"
        />
        F
      </label>
    </div>
  );
}
