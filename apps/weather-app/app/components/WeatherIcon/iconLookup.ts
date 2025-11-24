import { WeatherIconSlug } from "@/app/api/weather/schema";

/** Converts from the API WeatherIconSlug to the Figma Icon - we use the pictured ones from the design and explain reasonings for the others */
const iconFileNameLookup: Record<WeatherIconSlug, string> = {
  snow: "snowy-6", // we match the 3 drips of rainy-7
  "snow-showers-day": "snowy-2", // matching 1 drop of showers-day
  "snow-showers-night": "snowy-4", // -> ideally Moon + Rain with 1 snow flake, we go for 1 flake
  "thunder-rain": "thunder", // Single Thunder Icon
  "thunder-showers-day": "thunder", // Single Thunder Icon
  "thunder-showers-night": "thunder", // Single Thunder Icon
  rain: "rainy-7",
  "showers-day": "rainy-1",
  "showers-night": "rainy-4", // -> Need Moon + Rain with 1 drop, we go for rain with 1 drop
  fog: "cloudy", // needs more specific icon
  wind: "cloudy", // needs more specific icon
  cloudy: "cloudy",
  "partly-cloudy-day": "cloudy-day-2",
  "partly-cloudy-night": "cloudy-night-2", // we match cloudy-day-2
  "clear-day": "day",
  "clear-night": "night",
};

export function iconFileFromSlug(icon: WeatherIconSlug): string {
  return `/icons/${iconFileNameLookup[icon]}.svg`;
}
