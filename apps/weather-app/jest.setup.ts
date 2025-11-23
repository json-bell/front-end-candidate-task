import { jest } from "@jest/globals";
import { mockWeatherResponse } from "./app/api/weather/mockWeatherResponse.ts";

jest.mock("./app/api/weather/fetchWeather", () => ({
  fetchWeather: jest.fn(async (location: string) => {
    return mockWeatherResponse;
  }),
}));

(global as any).fetch = jest.fn((url: string) => {
  const location = url.split("location=")[1];
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ url, location }),
  } as Response);
});
