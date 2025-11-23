/** Parses the conditions from the API into a single relevant condition
 *
 * Ideally, we investigate which conditions are the priority - whether that's an order from the API,
 * or a specific order of conditions that we want to prioritise and select that one.
 *
 * Here we just take the first, as it seems the most relevant
 *
 * @param conditions - Conditions string, a list of conditions separated by ", "
 * @returns The primary condition of the conditions given
 */
export function parsePrimaryCondition(conditions: string | null | undefined) {
  if (!conditions) return conditions;
  return conditions.split(", ")[0];
}
