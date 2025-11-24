import { act, renderHook } from "@testing-library/react";
import { useTemperatureFormat } from "../useTemperatureFormat";
import { useTemperatureUnitChange } from "../useTemperatureUnitChange";
import { TemperatureUnitProvider } from "../TemperatureUnitContext";

const useCombinedHook = () => {
  const { formatTemperature, temperatureSymbol, temperatureUnit } =
    useTemperatureFormat();
  const onTemperatureUnitChange = useTemperatureUnitChange();

  return {
    formatTemperature,
    temperatureSymbol,
    temperatureUnit,
    onTemperatureUnitChange,
  };
};

const wrapper = ({ children }: { children: React.ReactNode }) => {
  return <TemperatureUnitProvider>{children}</TemperatureUnitProvider>;
};

describe("useTemperatureFormat", () => {
  it("Initialises with to celsius", () => {
    const { result } = renderHook(useTemperatureFormat, { wrapper });

    expect(result.current.temperatureSymbol).toBe("°C");
    expect(result.current.temperatureUnit).toBe("celsius");
    expect(result.current.formatTemperature(25)).toBe("25°C");
  });

  it("Can handle conversion without unit", () => {
    const { result } = renderHook(useTemperatureFormat, { wrapper });

    expect(result.current.formatTemperature(25, { includeUnit: false })).toBe(
      "25"
    );
  });

  it("Handles the temperature following celsiusToUnitStr standards", () => {
    const { result } = renderHook(useCombinedHook, { wrapper });

    act(() => {
      result.current.onTemperatureUnitChange("fahrenheit");
    });

    expect(result.current.temperatureSymbol).toBe("°F");
    expect(result.current.temperatureUnit).toBe("fahrenheit");
    expect(result.current.formatTemperature(25)).toBe("77°F");
  });
});
