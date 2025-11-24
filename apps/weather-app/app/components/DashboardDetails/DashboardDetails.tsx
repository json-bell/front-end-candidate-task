"use client";
import { useWeatherData } from "@/app/providers/WeatherDataContext/useWeatherData";
import styles from "./DashboardDetails.module.scss";
import PercentageCard, { PercentCardProps } from "../PercentCard/PercentCard";
import ValueCard, { ValueCardProps } from "../ValueCard/ValueCard";
import { useFormatTemperature } from "@/app/providers/TemperatureUnitProvider/useFormatTemperature";
import { formatDate } from "@/app/utils/formatDate";
import ForecastDayCard, {
  ForecastDayCardProps,
} from "../ForecastDayCard/ForecastDayCard";
import { parsePrimaryCondition } from "@/app/utils/parsePrimaryCondition";

export default function DashboardDetails() {
  const weatherData = useWeatherData();
  const formatTemperature = useFormatTemperature();

  const percentageFields: PercentCardProps[] = [
    {
      titleText: "Humidity",
      color: "green",
      percentage: Math.round(weatherData?.currentConditions.humidity ?? 0),
    },
    {
      titleText: "Cloud Cover",
      color: "yellow",
      percentage: Math.round(weatherData?.currentConditions.cloudcover ?? 0),
    },
  ];

  const singleValueFields: ValueCardProps[] = [
    {
      title: "Max Temp.",
      value: formatTemperature(weatherData?.days[0].tempmax ?? 0),
    },
    {
      title: "Min Temp.",
      value: formatTemperature(weatherData?.days[0].tempmin ?? 0),
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

  const daySummaries = weatherData?.days
    .slice(1, 6)
    .map((day, index): ForecastDayCardProps => {
      const dateLabel = index === 0 ? "Tomorrow" : formatDate(day.datetime);

      return {
        title: dateLabel,
        condition: parsePrimaryCondition(day.conditions),
        icon: day.icon,
        tempmax: formatTemperature(day.tempmax),
        tempmin: formatTemperature(day.tempmin),
      };
    });

  return (
    <div className={styles.dashboardDetails}>
      <h2 className={styles.sectionTitle}>Day Overview</h2>

      <div className={styles.cardsContainer}>
        {percentageFields.map((cardProps) => (
          <PercentageCard key={cardProps.titleText} {...cardProps} />
        ))}
      </div>

      <div className={styles.cardsContainer}>
        {singleValueFields.map((cardProps) => (
          <ValueCard key={cardProps.title} {...cardProps} />
        ))}
      </div>

      <h2 className={styles.sectionTitle}>5 Day Forecast</h2>

      <div className={styles.cardsContainer}>
        {daySummaries?.map((cardProps) => (
          <ForecastDayCard key={cardProps.title} {...cardProps} />
        ))}
      </div>
    </div>
  );
}
