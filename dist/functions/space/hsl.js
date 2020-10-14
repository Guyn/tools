"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHsl = void 0;
var checking_1 = require("../checking");
var converting_1 = require("../converting");
exports.toHsl = function (input) {
    switch (checking_1.getColorSpace(input)) {
        case 'cmyk':
            return converting_1.cmykToHsl(input);
        case 'yuv':
            return converting_1.yuvToHsl(input);
        case 'hsl':
            return input;
        case 'hex':
            return converting_1.hexToHsl(input);
        case 'rgb':
            return converting_1.rgbToHsl(input);
        default:
            return input;
    }
};
//# sourceMappingURL=hsl.js.map