import { parsePrimaryCondition } from "../parsePrimaryCondition.ts";

describe("parsePrimaryCondition", () => {
  it.each([
    ["undefined", undefined],
    ["null", null],
  ] as const)("handles %s inputs", (_label, value) => {
    expect(parsePrimaryCondition(value)).toBe(value);
  });

  it.each(["Rain", "Partially Cloudly", "Snow"])(
    "returns an input string directly if it has no commas",
    (condition) => {
      expect(parsePrimaryCondition(condition)).toBe(condition);
    }
  );

  it.each([
    ["Rain, Overcast", "Rain"],
    ["Tornado, Apocalypse", "Tornado"],
  ])(
    "extract the first condition of a list of conditions",
    (conditions, expectedPrimaryCondition) => {
      expect(parsePrimaryCondition(conditions)).toBe(expectedPrimaryCondition);
    }
  );
});
