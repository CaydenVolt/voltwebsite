/** Index numerals are always two digits: "01", "02". Strings pass through untouched. */
export const pad = (n: number | string): string =>
  typeof n === "number" ? String(n).padStart(2, "0") : n;
