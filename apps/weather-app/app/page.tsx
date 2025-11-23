import { fetchWeather } from "./api/weather/fetchWeather";
import { DataProvider } from "./providers/WeatherDataContext/DataContext";

export default async function Index() {
  // Initial server-side call to have first paint with SSR fetched data
  const weatherData = await fetchWeather("Brighton");

  return (
    <DataProvider initialData={weatherData}>
      <pre>{JSON.stringify(weatherData, null, 2)}</pre>
    </DataProvider>
  );
}
