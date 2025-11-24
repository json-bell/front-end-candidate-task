import { parsePercentage } from "../parsePercentage";

describe("createFallbackDateStr", () => {
  it.each([
    [24.6, 25],
    [100, 100],
    [12.3, 12],
    [0.2, 0],
  ])("Rounds defined percentages appropriately", (input, expected) => {
    expect(parsePercentage(input)).toBe(expected);
  });

  it("handles 0", () => {
    expect(parsePercentage(0)).toBe(0);
  });

  it.each([[undefined], [null]])(
    "converts undefined and null inputs to null",
    (falsy) => {
      expect(parsePercentage(falsy)).toBe(null);
    }
  );
});
