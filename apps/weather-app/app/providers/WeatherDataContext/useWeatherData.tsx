"use client";
import { useContext } from "react";
import { DataContext } from "./DataContext";
import { WeatherResponse } from "@/app/api/weather/schema";

export const useWeatherData = (): WeatherResponse | null => {
  const { data } = useContext(DataContext);
  return data;
};
