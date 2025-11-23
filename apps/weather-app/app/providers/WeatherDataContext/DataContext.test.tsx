import { act, ReactNode } from "react";
import { renderHook } from "@testing-library/react";
import { useWeatherData } from "./useWeatherData";
import { DataProvider } from "./DataContext";
import { useLocationChange } from "./useLocationChange";

describe("useWeatherData", () => {
  it("returns null when no provider is used", () => {
    const { result } = renderHook(() => useWeatherData());

    expect(result.current).toBe(null);
  });

  it("return initialData if provided to provider", () => {
    const mockInitialData = { initiallyMocked: "data" } as any;
    const wrapper = ({ children }: { children: ReactNode }) => {
      return (
        <DataProvider initialData={mockInitialData}>{children}</DataProvider>
      );
    };
    const { result } = renderHook(() => useWeatherData(), { wrapper });

    // same ref
    expect(result.current).toBe(mockInitialData);
  });
});

describe("useLocationChange", () => {
  it("fetches new data when location changes", async () => {
    // fetch is mocked in jest.setup.ts

    const mockInitialData = { location: "default" } as any;
    const wrapper = ({ children }: { children: ReactNode }) => {
      return (
        <DataProvider initialData={mockInitialData}>{children}</DataProvider>
      );
    };

    const useCombinedHooks = () => {
      const weatherData = useWeatherData();
      const onLocationChange = useLocationChange();
      return { weatherData, onLocationChange };
    };
    const { result } = renderHook(() => useCombinedHooks(), { wrapper });

    expect(result.current.weatherData).toEqual(mockInitialData);

    await act(async () => {
      await result.current.onLocationChange("newLocation");
    });

    expect(result.current.weatherData).toMatchObject({
      location: "newLocation",
    });
  });
});
