import { formatDate } from "../formatDate";

describe("formatDate", () => {
  it("formats a valid date string correctly", () => {
    const input = "2025-11-24";
    const result = formatDate(input);
    expect(result).toBe("Mon, 24 Nov"); // 24th Nov 2025 is a Monday
  });

  it("returns '-' for undefined input", () => {
    expect(formatDate(undefined)).toBe("-");
  });

  it("returns '-' for null input", () => {
    expect(formatDate(null)).toBe("-");
  });

  it("formats a single-digit day correctly", () => {
    const input = "2025-01-05";
    const result = formatDate(input);
    expect(result).toBe("Sun, 05 Jan"); // 5th Jan 2025 is a Sunday
  });

  it("formats a date with month and day correctly", () => {
    const input = "2025-12-31";
    const result = formatDate(input);
    expect(result).toBe("Wed, 31 Dec"); // 31st Dec 2025 is a Wednesday
  });
});
