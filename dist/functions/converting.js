"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmykToHex = exports.cmykToYuv = exports.cmykToHsl = exports.yuvToHsl = exports.yuvToHex = exports.yuvToCmyk = exports.hslToCmyk = exports.hslToHex = exports.hslToYuv = exports.hexToCmyk = exports.hexToYuv = exports.hexToHsl = exports.cmykToRgb = exports.rgbToCmyk = exports.yuvToRgb = exports.rgbToYuv = exports.hslToRgb = exports.rgbToHsl = exports.hexToRgb = exports.rgbToHex = exports.componentToHexValue = void 0;
var utils_1 = require("./utils");
var checking_1 = require("./checking");
// Component
exports.componentToHexValue = function (c) {
    var hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
};
// From Rgb
exports.rgbToHex = function (rgb) {
    var r = rgb.r, g = rgb.g, b = rgb.b;
    return ('#' +
        exports.componentToHexValue(utils_1.minMax(r, 0, 255)) +
        exports.componentToHexValue(utils_1.minMax(g, 0, 255)) +
        exports.componentToHexValue(utils_1.minMax(b, 0, 255)));
};
// // From Hex
exports.hexToRgb = function (c) {
    if (!checking_1.isHex(c))
        return { r: 0, g: 0, b: 0 };
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
    if (result)
        return {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        };
    else
        return { r: 0, g: 0, b: 0 };
};
exports.rgbToHsl = function (rgb) {
    (rgb.r /= 255), (rgb.g /= 255), (rgb.b /= 255);
    var max = Math.max(rgb.r, rgb.g, rgb.b), min = Math.min(rgb.r, rgb.g, rgb.b);
    var hue, saturation, lightness = (max + min) / 2;
    if (max == min) {
        hue = saturation = 0; // achromatic
    }
    else {
        var delta = max - min;
        saturation =
            lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
        switch (max) {
            case rgb.r:
                hue = (rgb.g - rgb.b) / delta + (rgb.g < rgb.b ? 6 : 0);
                break;
            case rgb.g:
                hue = (rgb.b - rgb.r) / delta + 2;
                break;
            case rgb.b:
                hue = (rgb.r - rgb.g) / delta + 4;
                break;
        }
        if (hue)
            hue /= 6;
        else
            hue = 0;
    }
    return {
        h: Math.round(360 * hue),
        s: Math.round(saturation * 100),
        l: Math.round(lightness * 100),
    };
};
exports.hslToRgb = function (input) {
    var h = input.h, s = input.s, l = input.l;
    // Must be fractions of 1
    s /= 100;
    l /= 100;
    var c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs(((h / 60) % 2) - 1)), m = l - c / 2, r = 0, g = 0, b = 0;
    if (0 <= h && h < 60) {
        r = c;
        g = x;
        b = 0;
    }
    else if (60 <= h && h < 120) {
        r = x;
        g = c;
        b = 0;
    }
    else if (120 <= h && h < 180) {
        r = 0;
        g = c;
        b = x;
    }
    else if (180 <= h && h < 240) {
        r = 0;
        g = x;
        b = c;
    }
    else if (240 <= h && h < 300) {
        r = x;
        g = 0;
        b = c;
    }
    else if (300 <= h && h < 360) {
        r = c;
        g = 0;
        b = x;
    }
    return {
        r: Math.round((r + m) * 255),
        g: Math.round((g + m) * 255),
        b: Math.round((b + m) * 255),
    };
};
exports.rgbToYuv = function (input) {
    var r = input.r, g = input.g, b = input.b;
    var y = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
    var u = Math.round((((b - y) * 0.493 + 111) / 222) * 255);
    var v = Math.round((((r - y) * 0.877 + 155) / 312) * 255);
    return { y: y, u: u, v: v };
};
exports.yuvToRgb = function (input) {
    var y = input.y, u = (input.u / 255) * 222 - 111, v = (input.v / 255) * 312 - 155;
    var r = utils_1.minMax(Math.round(y + v / 0.877), 0, 255);
    var g = utils_1.minMax(Math.round(y - 0.39466 * u - 0.5806 * v), 0, 255);
    var b = utils_1.minMax(Math.round(y + u / 0.493), 0, 255);
    return { r: r, g: g, b: b };
};
exports.rgbToCmyk = function (input) {
    var red = Math.max(Math.min(input.r, 255), 0), green = Math.max(Math.min(input.g, 255), 0), blue = Math.max(Math.min(input.b, 255), 0), cyan = 1 - red, magenta = 1 - green, yellow = 1 - blue, black = 1;
    if (red || green || blue) {
        black = Math.min(cyan, Math.min(magenta, yellow));
        cyan = (cyan - black) / (1 - black);
        magenta = (magenta - black) / (1 - black);
        yellow = (yellow - black) / (1 - black);
    }
    else {
        black = 1;
    }
    return {
        c: Math.round(cyan * 100),
        m: Math.round(magenta * 100),
        y: Math.round(yellow * 100),
        k: Math.round(((black + 254) / 255) * 100),
    };
};
exports.cmykToRgb = function (input) {
    var cyan = Math.max(Math.min(input.c / 255, 1), 0), magenta = Math.max(Math.min(input.m / 255, 1), 0), yellow = Math.max(Math.min(input.y / 255, 1), 0), black = Math.max(Math.min(input.k / 255, 1), 0), red = 1 - cyan * (1 - black) - black, green = 1 - magenta * (1 - black) - black, blue = 1 - yellow * (1 - black) - black;
    return {
        r: Math.round(red * 255),
        g: Math.round(green * 255),
        b: Math.round(blue * 255),
    };
};
// Hhex To
exports.hexToHsl = function (c) { return exports.rgbToHsl(exports.hexToRgb(c)); };
exports.hexToYuv = function (c) { return exports.rgbToYuv(exports.hexToRgb(c)); };
exports.hexToCmyk = function (c) { return exports.rgbToCmyk(exports.hexToRgb(c)); };
// hsl to
exports.hslToYuv = function (c) { return exports.rgbToYuv(exports.hslToRgb(c)); };
exports.hslToHex = function (c) { return exports.rgbToHex(exports.hslToRgb(c)); };
exports.hslToCmyk = function (c) { return exports.rgbToCmyk(exports.hslToRgb(c)); };
// yuv To
exports.yuvToCmyk = function (c) { return exports.rgbToCmyk(exports.yuvToRgb(c)); };
exports.yuvToHex = function (c) { return exports.rgbToHex(exports.yuvToRgb(c)); };
exports.yuvToHsl = function (c) { return exports.rgbToHsl(exports.yuvToRgb(c)); };
// Cmyk to
exports.cmykToHsl = function (c) { return exports.rgbToHsl(exports.cmykToRgb(c)); };
exports.cmykToYuv = function (c) { return exports.rgbToYuv(exports.cmykToRgb(c)); };
exports.cmykToHex = function (c) { return exports.rgbToHex(exports.cmykToRgb(c)); };
// export const toRgb = (input: CMYK | RGB | HSL | YUS): RGB=> {
// }
//# sourceMappingURL=converting.js.map