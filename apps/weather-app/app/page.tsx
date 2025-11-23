// import { fetchWeather } from "./api/weather/fetchWeather";
import { mockWeatherResponse } from "./api/weather/mockWeatherResponse";
import { DataProvider } from "./providers/WeatherDataContext/DataContext";
import { TemperatureUnitProvider } from "./providers/TemperatureUnitProvider/TemperatureUnitContext";
import { AppView } from "./components/AppView/AppView";

export default async function Index() {
  // Initial server-side call to have first paint with SSR data
  // const weatherData = fetchWeather("Brighton");

  // temporary mock while working on Front end - no need to be making calls while editing
  const weatherData = mockWeatherResponse;

  return (
    <DataProvider initialData={weatherData}>
      <TemperatureUnitProvider>
        <AppView />
      </TemperatureUnitProvider>
    </DataProvider>
  );
}
