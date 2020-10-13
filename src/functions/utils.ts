export const minMax = (input: number = 0, min: number = 0, max: number = 255) =>
  Math.min(Math.max(input, min), max);

export const limitTo = (
  str: string,
  limit: number,
  fill: string | number = " "
): string => {
  if (typeof fill == "number") fill = `${fill}`;
  if (str.length == limit) return str;
  if (str.length < limit) {
    while (str.length < limit) {
      str = str + fill;
    }
    return str;
  } else {
    return str.substr(0, limit);
  }
};
