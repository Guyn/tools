// Checking

export const allowedHexCharacters = "01234567890abcdef";

export const isHex = (hex: string): boolean => {
  const hexChars = hex.toLowerCase().split("");
  return hexChars.length !== 7 ||
    hexChars[0] !== "#" ||
    hexChars.slice(1, 7).filter((c) => allowedHexCharacters.includes(c))
      .length != 6
    ? false
    : true;
};

export const isObjectString = (input: string): boolean => {
  try {
    JSON.parse(input);
  } catch (e) {
    return false;
  }
  return true;
};
