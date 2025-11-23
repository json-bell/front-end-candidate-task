import { WeatherResponse } from "@/app/api/weather/schema";

export type LocationChangeHandler = (
  location: string
) => Promise<WeatherResponse | null>;
