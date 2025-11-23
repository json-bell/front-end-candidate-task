import { fetchWeather } from "./api/weather/fetchWeather";
import RefetchButton from "./components/RefetchButtonTEMP";
import { DataProvider } from "./providers/WeatherDataContext/DataContext";

export default async function Index() {
  // Initial server-side call to have first-paint with SSR data
  const weatherData = await fetchWeather("Brighton");

  return (
    <DataProvider initialData={weatherData}>
      <RefetchButton />
    </DataProvider>
  );
}
