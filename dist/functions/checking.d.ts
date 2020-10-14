import { ALL_COLORS } from '../types';
export declare const isHex: (input: unknown) => boolean;
export declare const isRgb: (input: any) => boolean;
export declare const isHsl: (input: any) => boolean;
export declare const isYuv: (input: any) => boolean;
export declare const isCmyk: (input: any) => boolean;
export declare const isObjectString: (input: string) => boolean;
export declare const getColorSpace: (input: ALL_COLORS) => string;
