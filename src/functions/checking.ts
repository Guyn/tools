// Checking
import { allowedHexCharacters } from './variables';
import { isNullish, isBetween } from './utils';
import { ALL_COLORS } from '../types';

export const isHex = (input: unknown): boolean => {
  if (typeof input !== 'string') return false;

  const hexChars = input.toLowerCase().split('');
  return hexChars.length !== 7 ||
    hexChars[0] !== '#' ||
    hexChars.slice(1, 7).filter((c) => allowedHexCharacters.includes(c))
      .length != 6
    ? false
    : true;
};

export const isRgb = (input: any): boolean => {
  return (
    !isNullish(input?.r as any) &&
    !isNullish(input?.g as any) &&
    !isNullish(input?.b as any) &&
    Object.keys(input).length == 3 &&
    isBetween(input.r, 0, 255) &&
    isBetween(input.g, 0, 255) &&
    isBetween(input.b, 0, 255)
  );
};
export const isHsl = (input: any): boolean => {
  return (
    !isNullish(input?.h as any) &&
    !isNullish(input?.s as any) &&
    !isNullish(input?.l as any) &&
    Object.keys(input).length == 3 &&
    isBetween(input.h, 0, 255) &&
    isBetween(input.s, 0, 255) &&
    isBetween(input.l, 0, 255)
  );
};

export const isYuv = (input: any): boolean => {
  return (
    !isNullish(input?.y as any) &&
    !isNullish(input?.u as any) &&
    !isNullish(input?.v as any) &&
    Object.keys(input).length == 3 &&
    isBetween(input.y, 0, 255) &&
    isBetween(input.u, 0, 255) &&
    isBetween(input.v, 0, 255)
  );
};

export const isCmyk = (input: any): boolean => {
  return (
    !isNullish(input?.c as any) &&
    !isNullish(input?.m as any) &&
    !isNullish(input?.y as any) &&
    !isNullish(input?.k as any) &&
    Object.keys(input).length == 4 &&
    isBetween(input.c, 0, 100) &&
    isBetween(input.m, 0, 100) &&
    isBetween(input.y, 0, 100) &&
    isBetween(input.k, 0, 100)
  );
};

export const isObjectString = (input: string): boolean => {
  try {
    JSON.parse(input);
  } catch (e) {
    return false;
  }
  return true;
};

export const getColorSpace = (input: ALL_COLORS): string => {
  if (isHex(input)) return 'hex';
  if (isCmyk(input)) return 'cmyk';
  if (isRgb(input)) return 'rgb';
  if (isHsl(input)) return 'hsl';
  if (isYuv(input)) return 'yuv';
  return 'none';
};
