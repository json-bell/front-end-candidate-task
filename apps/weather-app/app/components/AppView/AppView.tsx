"use client";
// ^ Temporary - ideally all the client pieces are extracted out
import { useWeatherData } from "@/app/providers/WeatherDataContext/useWeatherData";
import styles from "./AppView.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import PercentageCard from "../PercentCard/PercentCard";
import CurrentDaySummary from "../CurrentDaySummary/CurrentDaySummary";
import TemperatureUnitSelector from "../TemperatureUnitSelector/TemperatureUnitSelector";

export const AppView = () => {
  const weatherData = useWeatherData();
  return (
    <main className={styles.layout}>
      <div className={styles.sidebar}>
        <SearchBar />
        <CurrentDaySummary />
      </div>
      <div className={styles.dashboardWrapper}>
        <div className={styles.dashboard}>
          <h2 className={styles.dashboardTitle}>Day Overview</h2>
          <TemperatureUnitSelector />
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
      </div>
    </main>
  );
};
