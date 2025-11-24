"use client";
import { useWeatherData } from "@/app/providers/WeatherDataContext/useWeatherData";
import styles from "./CurrentDaySummary.module.scss";
import { formatDate } from "@/app/utils/formatDate";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import { useTemperatureFormat } from "@/app/providers/TemperatureUnitProvider/useTemperatureFormat";
import { parsePrimaryCondition } from "@/app/utils/parsePrimaryCondition";

export default function CurrentDaySummary() {
  const weatherData = useWeatherData();
  const { formatTemperature, temperatureSymbol } = useTemperatureFormat();

  return (
    <div className={styles.daySummary}>
      <h1 className={styles.locationName}>{weatherData?.address}</h1>
      <h2 className={styles.date}>
        {formatDate(weatherData?.days[0].datetime)}
      </h2>
      <div className={styles.icon}>
        <WeatherIcon
          icon={weatherData?.currentConditions.icon ?? "partly-cloudy-day"}
        />
      </div>
      <span className={styles.temperature}>
        {formatTemperature(weatherData?.currentConditions.temp ?? 0, {
          includeUnit: false,
        })}
        <span className={styles.degrees}>{temperatureSymbol}</span>
      </span>
      <span className={styles.condition}>
        {parsePrimaryCondition(weatherData?.currentConditions.conditions)}
      </span>
    </div>
  );
}
