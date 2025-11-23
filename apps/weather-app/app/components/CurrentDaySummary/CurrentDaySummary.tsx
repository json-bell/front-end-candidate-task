"use client";
import { useWeatherData } from "@/app/providers/WeatherDataContext/useWeatherData";
import styles from "./CurrentDaySummary.module.scss";
import { formatDate } from "@/app/utils/formatDate";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import { useFormatTemperature } from "@/app/providers/TemperatureUnitProvider/useFormatTemperature";
import { parsePrimaryCondition } from "@/app/utils/parsePrimaryCondition";

export default function CurrentDaySummary() {
  const weatherData = useWeatherData();
  const formatTemp = useFormatTemperature();

  return (
    <div className={styles.daySummary}>
      <h1 className={styles.locationName}>{weatherData?.address}</h1>
      <h2 className={styles.date}>
        {formatDate(weatherData?.days[0].datetime)}
      </h2>
      <WeatherIcon icon={weatherData?.currentConditions.icon ?? "clear-day"} />
      <span className={styles.temperature}>
        {formatTemp(weatherData?.currentConditions.temp ?? 0)}{" "}
        <span className={styles.degrees}>deg C</span>
      </span>
      <span className={styles.condition}>
        {parsePrimaryCondition(weatherData?.currentConditions.conditions)}
      </span>
    </div>
  );
}
