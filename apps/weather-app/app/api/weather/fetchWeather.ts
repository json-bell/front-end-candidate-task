import { WeatherResponse } from "./schema";

/** Using https://www.visualcrossing.com/weather-query-builder/ to build a specific query to get:
 * - Current information
 * - 5 day forecast
 */
export async function fetchWeather(location: string): Promise<WeatherResponse> {
  const apiKey = process.env.API_KEY;

  if (!apiKey) throw new Error("Missing API_KEY env variable");

  /** Build with https://www.visualcrossing.com/weather-query-builder/ to retrieve specific information */
  const url =
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURI(
      location
    )}/next7days/next6days?` +
    `unitGroup=uk` +
    `&elements=cloudcover,conditions,datetime,humidity,icon,sunrise,sunset,temp,tempmax,tempmin` +
    `&include=days,current` +
    `&key=${apiKey}` +
    `&contentType=json`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Weather API failed: ${res.status}`);
  }

  return res.json() as Promise<WeatherResponse>;
}
