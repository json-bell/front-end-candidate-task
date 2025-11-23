"use client";
import { WeatherResponse } from "@/app/api/weather/schema";
import { createContext, useState } from "react";
import { LocationChangeHandler } from "./types";

const placeholderWeather = {
  data: null,
  onLocationChange: () => {
    throw new Error("DataContext must be used within the WeatherProvider");
  },
};

export const DataContext = createContext<{
  data: WeatherResponse | null;
  onLocationChange: LocationChangeHandler;
}>(placeholderWeather);

export function DataProvider({
  initialData,
  children,
}: {
  initialData: WeatherResponse;
  children: React.ReactNode;
}) {
  const [data, setData] = useState<WeatherResponse | null>(initialData);

  const onLocationChange = async (
    location: string
  ): Promise<WeatherResponse | null> => {
    const response = await fetch(
      `/api/weather?location=${encodeURI(location)}`
    );

    if (response.ok) {
      const newData: WeatherResponse = await response.json();
      setData(newData);
      return newData;
    } else {
      setData(null);
      return null;
    }
  };

  return (
    <DataContext.Provider value={{ data, onLocationChange }}>
      {children}
    </DataContext.Provider>
  );
}
