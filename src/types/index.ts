export interface RGB {
  r: number;
  g: number;
  b: number;
}
export interface HSL {
  h: number;
  s: number;
  l: number;
}
export type Hex = string;

export interface CMYK {
  c: number,
  m: number
  y: number
  k: number
}

export interface YUV {
  y: number;
  u: number;
  v: number;
}
export type ALL_COLORS = RGB | HSL | Hex | CMYK | YUV;