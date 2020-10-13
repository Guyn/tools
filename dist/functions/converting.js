"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexToHsl = exports.rgbToHsl = exports.hexToRgb = exports.rgbToHex = exports.componentToHexValue = void 0;
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
exports.hexToHsl = function (c) {
    var rgb = exports.hexToRgb(c);
    return exports.rgbToHsl(rgb);
};
//# sourceMappingURL=converting.js.map