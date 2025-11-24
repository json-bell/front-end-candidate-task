import { TemperatureUnitContext } from "@/app/providers/TemperatureUnitProvider/TemperatureUnitContext";
import { fireEvent, render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import TemperatureUnitSelector from "./TemperatureUnitSelector";

beforeEach(() => {
  jest.resetAllMocks();
});

const mockOnTempChange = jest.fn();

describe("TemperatureSelector", () => {
  it.each([
    ["celsius", "°C", "°F"],
    ["fahrenheit", "°F", "°C"],
  ] as const)(
    "has a selected value according to temperature unit context state",
    (value, selectedLabel, unselectedLabel) => {
      render(
        <TemperatureUnitContext.Provider
          value={{
            onTemperatureUnitChange: mockOnTempChange,
            temperatureUnit: value,
          }}
        >
          <TemperatureUnitSelector />
        </TemperatureUnitContext.Provider>
      );

      expect(
        screen.getByLabelText(selectedLabel) as HTMLInputElement
      ).toMatchObject({ checked: true });
      expect(
        screen.getByLabelText(unselectedLabel) as HTMLInputElement
      ).toMatchObject({ checked: false });
    }
  );
  it.each([
    // we need beforeEach because onChange doesn't fire when clicking the active radio button
    ["celsius", "°F", "fahrenheit"],
    ["fahrenheit", "°C", "celsius"],
  ] as const)(
    "Selecting a temperature sends an update to the TemperatureUnit context",
    (currentValue, label, expectedValue) => {
      render(
        <TemperatureUnitContext.Provider
          value={{
            onTemperatureUnitChange: mockOnTempChange,
            temperatureUnit: currentValue,
          }}
        >
          <TemperatureUnitSelector />
        </TemperatureUnitContext.Provider>
      );

      expect(mockOnTempChange).not.toHaveBeenCalled();
      fireEvent.click(screen.getByLabelText(label));
      expect(mockOnTempChange).toHaveBeenLastCalledWith(expectedValue);
    }
  );
});
