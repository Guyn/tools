import { Hex } from "../types";
import { limitTo } from "./utils";
import { allowedHexCharacters } from "./checking";

export const toHexChars = (input: string): Hex =>
  limitTo(
    "#" +
      input
        .split("")
        .filter((c: string) => allowedHexCharacters.includes(c))
        .join(""),
    7,
    "0"
  );

export const toHexCharsGroup = (input: string[]): Hex[] =>
  input
    .map((v) => (v = v.trim()))
    .filter((v) => v.charAt(0) == "#")
    .map((v) => (v = toHexChars(v)));
