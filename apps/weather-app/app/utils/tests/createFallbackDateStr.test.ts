import { createFallbackDateStr } from "../createFallbackDateStr";

describe("createFallbackDateStr", () => {
  it.each([
    [0, "24"],
    [1, "25"],
    [2, "26"],
    [3, "27"],
    [4, "28"],
    [5, "29"],
  ])("Creates appropriate fallback for shift of %s", (shift, resultDay) => {
    const expectedDay = `2025-11-${resultDay}`;

    expect(createFallbackDateStr(new Date("2025-11-24"), shift)).toBe(
      expectedDay
    );
  });

  it("Shifts appropriately across months", () => {
    expect(createFallbackDateStr(new Date("2025-01-31"), 1)).toBe("2025-02-01");
  });
});
