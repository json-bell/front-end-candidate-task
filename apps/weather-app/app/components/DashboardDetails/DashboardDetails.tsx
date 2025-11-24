"use client";
import { useWeatherData } from "@/app/providers/WeatherDataContext/useWeatherData";
import styles from "./DashboardDetails.module.scss";
import PercentageCard, { PercentCardProps } from "../PercentCard/PercentCard";
import ValueCard, { ValueCardProps } from "../ValueCard/ValueCard";
import { useTemperatureFormat } from "@/app/providers/TemperatureUnitProvider/useTemperatureFormat";
import { formatDate } from "@/app/utils/formatDate";
import ForecastDayCard, {
  ForecastDayCardProps,
} from "../ForecastDayCard/ForecastDayCard";
import { parsePrimaryCondition } from "@/app/utils/parsePrimaryCondition";
import { parsePercentage } from "@/app/utils/parsePercentage";
import { useMemo } from "react";
import { createFallbackDateStr } from "@/app/utils/createFallbackDateStr";

export default function DashboardDetails() {
  const clientFallbackDate = useMemo(() => new Date(), []);
  const weatherData = useWeatherData();
  const { formatTemperature } = useTemperatureFormat();

  const percentageFields: PercentCardProps[] = [
    {
      titleText: "Humidity",
      color: "green",
      percentage: parsePercentage(weatherData?.currentConditions.humidity),
    },
    {
      titleText: "Cloud Cover",
      color: "yellow",
      percentage: parsePercentage(weatherData?.currentConditions.cloudcover),
    },
  ];

  const singleValueFields: ValueCardProps[] = [
    {
      title: "Max Temp.",
      value: formatTemperature(weatherData?.days[0].tempmax),
    },
    {
      title: "Min Temp.",
      value: formatTemperature(weatherData?.days[0].tempmin),
    },
    {
      title: "Sunrise",
      value: weatherData?.currentConditions.sunrise.slice(0, -3),
    },
    {
      title: "Sunset",
      value: weatherData?.currentConditions.sunset.slice(0, -3),
    },
  ];

  /** We specifically render 5, for when the API doesn't return sufficient data */
  const daySummaries = [1, 2, 3, 4, 5].map((index): ForecastDayCardProps => {
    const day = weatherData?.days[index];

    const dateLabel =
      index === 1
        ? "Tomorrow"
        : formatDate(
            day?.datetime ?? createFallbackDateStr(clientFallbackDate, index)
          );

    return {
      title: dateLabel,
      condition: parsePrimaryCondition(day?.conditions) ?? "-",
      icon: day?.icon ?? "partly-cloudy-day",
      tempmax: formatTemperature(day?.tempmax),
      tempmin: formatTemperature(day?.tempmin),
    };
  });

  return (
    <div className={styles.dashboardDetails}>
      <h2 className={styles.sectionTitle}>Day Overview</h2>

      <div className={styles.twoCards}>
        {percentageFields.map((cardProps) => (
          <PercentageCard key={cardProps.titleText} {...cardProps} />
        ))}
      </div>

      <div className={styles.fourCards}>
        {singleValueFields.map((cardProps) => (
          <ValueCard key={cardProps.title} {...cardProps} />
        ))}
      </div>

      <h2 className={styles.sectionTitle}>5 Day Forecast</h2>

      <div className={styles.fiveForecasts}>
        {daySummaries?.map((cardProps) => (
          <ForecastDayCard key={cardProps.title} {...cardProps} />
        ))}
      </div>
    </div>
  );
}
