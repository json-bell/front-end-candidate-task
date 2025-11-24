import { celsiusToUnitStr } from "../celsiusToUnitStr";

// Tests written with gen AI then checked

describe("celsiusToUnitStr", () => {
  it("returns rounded Celsius with unit", () => {
    expect(celsiusToUnitStr(10.4, "celsius")).toBe("10°C");
    expect(celsiusToUnitStr(10.5, "celsius")).toBe("11°C");
  });

  it("returns rounded Fahrenheit with unit", () => {
    // 25°C → 77°F
    expect(celsiusToUnitStr(25, "fahrenheit")).toBe("77°F");

    // 0.4°C → 32.72°F → rounds to 33°F
    expect(celsiusToUnitStr(0.4, "fahrenheit")).toBe("33°F");
  });

  it("omits unit when includeUnit: false", () => {
    expect(celsiusToUnitStr(10, "celsius", { includeUnit: false })).toBe("10");
    expect(celsiusToUnitStr(25, "fahrenheit", { includeUnit: false })).toBe(
      "77"
    );
  });

  it("handles negative temperatures", () => {
    // -10°C → 14°F
    expect(celsiusToUnitStr(-10, "fahrenheit")).toBe("14°F");
    expect(celsiusToUnitStr(-10, "celsius")).toBe("-10°C");
  });

  it("defaults includeUnit to true", () => {
    expect(celsiusToUnitStr(0, "celsius")).toBe("0°C");
  });

  // Extra handwritten test to ensure rounding is working as expected
  it("rounds after conversion only", () => {
    expect(celsiusToUnitStr(0.4, "fahrenheit")).toBe("33°F");
    expect(celsiusToUnitStr(0, "fahrenheit")).toBe("32°F");
  });
});
