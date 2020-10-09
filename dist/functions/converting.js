"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgbToHex = exports.componentToHexValue = void 0;
var utils_1 = require("./utils");
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
// export const hexToRgb = (hex: Hex): RGB => {
//   const hexArray: [] = hex.match(/.{1,2}/g;
//     return {
//         r: parseInt(hexArray[0], 16),
//         g: parseInt(hexArray[1], 16),
//         b: parseInt(hexArray[2], 16),
//     };
// };
//# sourceMappingURL=converting.js.map