"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexToRgb = exports.rgbToHex = exports.componentToHexValue = void 0;
var utils_1 = require("./utils");
var checking_1 = require("./checking");
// Component
exports.componentToHexValue = function (c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
};
// From Rgb
exports.rgbToHex = function (rgb) {
    var r = rgb.r, g = rgb.g, b = rgb.b;
    return ("#" +
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
//# sourceMappingURL=converting.js.map