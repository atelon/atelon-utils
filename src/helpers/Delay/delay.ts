/**
 * Internal delay function.
 * @ignore
 */
export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
