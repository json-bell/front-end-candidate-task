import styles from "./page.module.css";
import { fetchWeather } from "./api/weather/fetchWeather";

export default async function Index() {
  // Initial server-side call to have first-paint with SSR data
  const weatherData = await fetchWeather("Brighton");

  return (
    <div className={styles.page}>
      <pre>{JSON.stringify(weatherData, null, 2)}</pre>
    </div>
  );
}
