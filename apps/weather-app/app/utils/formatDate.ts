/** Formats a numerical date into a readable format
 *
 * @param dateString - String representing a date in YYYY-MM-DD format
 * @returns Standardised date string of the form Fri, 26 May
 */
export function formatDate(dateString: string | undefined | null) {
  if (!dateString) return "-";
  return formatter.format(new Date(dateString));
}

// TODO - test, and expand between timezones etc.
// This, like the celsiusToStr, is a temporary placeholder while building
// the UI

const options = { weekday: "short", day: "2-digit", month: "short" } as const;
const formatter = new Intl.DateTimeFormat("en-UK", options);
