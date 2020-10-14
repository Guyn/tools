"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toRgb = void 0;
var checking_1 = require("../checking");
var converting_1 = require("../converting");
exports.toRgb = function (input) {
    switch (checking_1.getColorSpace(input)) {
        case 'cmyk':
            return converting_1.cmykToRgb(input);
        case 'yuv':
            return converting_1.yuvToRgb(input);
        case 'hsl':
            return converting_1.hslToRgb(input);
        case 'hex':
            return converting_1.hexToRgb(input);
        case 'rgb':
            return input;
        default:
            return input;
    }
};
//# sourceMappingURL=rgb.js.map