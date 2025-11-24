"use client";
import { useWeatherData } from "@/app/providers/WeatherDataContext/useWeatherData";
import styles from "./CurrentDaySummary.module.scss";
import { formatDate } from "@/app/utils/formatDate";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import { useTemperatureFormat } from "@/app/providers/TemperatureUnitProvider/useTemperatureFormat";
import { parsePrimaryCondition } from "@/app/utils/parsePrimaryCondition";
import { createFallbackDateStr } from "@/app/utils/createFallbackDateStr";
import { useMemo } from "react";

export default function CurrentDaySummary() {
  const weatherData = useWeatherData();
  const { formatTemperature, temperatureSymbol } = useTemperatureFormat();
  const clientDate = useMemo(() => new Date(), []);

  return (
    <div className={styles.daySummary}>
      <h1 className={styles.locationName}>
        {weatherData?.address ?? "Unknown Location"}
      </h1>
      <h2 className={styles.date}>
        {formatDate(
          weatherData?.days[0].datetime ?? createFallbackDateStr(clientDate, 0)
        )}
      </h2>
      <div className={styles.icon}>
        <WeatherIcon
          icon={weatherData?.currentConditions.icon ?? "partly-cloudy-day"}
        />
      </div>
      <span className={styles.temperature}>
        {formatTemperature(weatherData?.currentConditions.temp, {
          includeUnit: false,
        })}
        <span className={styles.degrees}>{temperatureSymbol}</span>
      </span>
      <span className={styles.condition}>
        {parsePrimaryCondition(weatherData?.currentConditions.conditions) ??
          "Please try again"}
      </span>
    </div>
  );
}
