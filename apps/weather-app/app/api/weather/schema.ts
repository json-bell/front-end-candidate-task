/** Possible icons returned by the VisualCrossing API
 *
 * From https://www.visualcrossing.com/resources/documentation/weather-api/defining-icon-set-in-the-weather-api/
 * (icons1)
 *
 * Ideally we ask for extra designs for the other icons to ensure we have all the needed symbols - we use placeholders of similar-ish icons
 */
export type WeatherIconSlug =
  | "snow"
  | "rain"
  | "fog"
  | "wind"
  | "cloudy"
  | "partly-cloudy-day"
  | "partly-cloudy-night"
  | "clear-day"
  | "clear-night";

export interface WeatherDay {
  /** Date with format `YYYY-MM-DD` */
  datetime: string;
  /** Max temperature in Celsius */
  tempmax: number;
  /** Min temperature in Celsius */
  tempmin: number;
  /** Temperature in Celsius */
  temp: number;
  /** Humidity percentage between 0-100 */
  humidity: number;
  /** Cloud cover percentage between 0-100 */
  cloudcover: number;
  /** Sunrise time with format `HH:mm:SS` */
  sunrise: string;
  /** Sunset time with format `HH:mm:SS` */
  sunset: string;
  /** Combination of descriptors of the conditions, separated by commas */
  conditions: string;
  /** Weather Icon Slug */
  icon: WeatherIconSlug;
}

export interface CurrentConditions
  extends Omit<WeatherDay, "tempmin" | "tempmax"> {
  /** Time with format `HH:mm:SS` */
  datetime: string; // we retype this for new JSDoc with different type description
}

/** Built from the mockResponse.json fetched with the query */
export interface WeatherResponse {
  queryCost: number;
  latitude: number;
  longitude: number;
  resolvedAddress: string;
  address: string;
  timezone: string;
  tzoffset: number;
  days: WeatherDay[];
  currentConditions: CurrentConditions;
}
