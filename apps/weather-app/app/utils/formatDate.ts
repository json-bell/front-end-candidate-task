/** Formats a numerical date into a readable format
 *
 * @param dateString - String representing a date in YYYY-MM-DD format
 * @returns Standardised date string of the form Fri, 26 May
 */
export function formatDate(dateString: string | undefined | null) {
  if (!dateString) return "-";

  const date = new Date(dateString);

  const weekday = new Intl.DateTimeFormat("en-GB", { weekday: "short" }).format(
    date
  );
  const day = new Intl.DateTimeFormat("en-GB", { day: "2-digit" }).format(date);
  const month = new Intl.DateTimeFormat("en-GB", { month: "short" }).format(
    date
  );

  const formattedDate = `${weekday}, ${day} ${month}`;
  return formattedDate;
}
