"use client";
import { WeatherResponse } from "@/app/api/weather/schema";
import { createContext, useState } from "react";

const placeholderWeather = {
  data: null,
  onLocationChange: () => {
    throw new Error("DataContext must be used within the WeatherProvider");
  },
};

export const DataContext = createContext<{
  data: WeatherResponse | null;
  onLocationChange: (location: string) => Promise<WeatherResponse | null>;
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

    console.log({ response });

    if (response.ok) {
      const newData: WeatherResponse = await response.json();
      console.log({ newData });
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
