// Checking

export const isHex = (hex: string): boolean => {
  const hexChars = hex.toLowerCase().split("");
  return hexChars.length !== 7 ||
    hexChars[0] !== "#" ||
    hexChars.slice(1, 7).findIndex((c) => "0123456789abcdef".includes(c)) > 0
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
