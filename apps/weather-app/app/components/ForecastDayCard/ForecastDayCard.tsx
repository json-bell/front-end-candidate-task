import { WeatherIconSlug } from "@/app/api/weather/schema";
import styles from "./ForecastDayCard.module.scss";
import WeatherIcon from "../WeatherIcon/WeatherIcon";

export interface ForecastDayCardProps {
  title: string;
  icon: WeatherIconSlug;
  condition: string;
  tempmax: string;
  tempmin: string;
}

/** Server component formatting Weather Data for a future day forecast */
export default function ForecastDayCard({
  title,
  icon,
  condition,
  tempmax,
  tempmin,
}: ForecastDayCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <WeatherIcon icon={icon} size={"144px"} className={styles.icon} />
      <div className={styles.condition}>{condition}</div>
      <div className={styles.temperatures}>
        <span className={styles.tempmax}>{tempmax}</span>
        <span className={styles.tempmin}>{tempmin}</span>
      </div>
    </div>
  );
}
