"use client";
import { useWeatherData } from "@/app/providers/WeatherDataContext/useWeatherData";
import styles from "./DashboardDetails.module.scss";
import PercentageCard from "../PercentCard/PercentCard";

export default function DashboardDetails() {
  const weatherData = useWeatherData();
  return (
    <div className={styles.dashboardDetails}>
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
  );
}
