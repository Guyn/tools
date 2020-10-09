export const minMax = (input: number = 0, min: number = 0, max: number = 255) =>
  Math.min(Math.max(input, min), max);
