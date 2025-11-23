"use client";
import { useWeatherData } from "@/app/providers/WeatherDataContext/useWeatherData";
import styles from "./AppView.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import PercentageCard from "../PercentCard/PercentCard";

interface AppViewProps {
  _?: never;
}

export const AppView = ({ _ }: AppViewProps) => {
  const weatherData = useWeatherData();
  return (
    <main className={styles.layout}>
      <div className={styles.sidebar}>
        <SearchBar />
        <h3>{weatherData?.address}</h3>
        <pre>{JSON.stringify(weatherData?.currentConditions, null, 2)}</pre>
      </div>

      <div className={styles.dashboard}>
        <h2 className={styles.dashboardTitle}>Day Overview</h2>
        <div className={styles.temperatureSelectors}>
          <label>
            <input
              type="radio"
              value={"Celsius"}
              className={"visually-hidden"}
              name="temperature-unit-radios"
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
        <div className={styles.dashboardData}>
          <div
            style={{
              display: "flex",
              gap: "40px",
              width: "100%",
              alignItems: "stretch",
            }}
          >
            <PercentageCard
              titleText="Humidity"
              color="green"
              percentage={weatherData?.currentConditions.humidity ?? 0}
            />
            <PercentageCard
              titleText="Cloud Cover"
              color="yellow"
              percentage={weatherData?.currentConditions.cloudcover ?? 0}
            />
          </div>
          <pre>{JSON.stringify(weatherData?.days, null, 2)}</pre>
        </div>
      </div>
    </main>
  );
};
