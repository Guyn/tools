"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toYuv = void 0;
var checking_1 = require("../checking");
var converting_1 = require("../converting");
exports.toYuv = function (input) {
    switch (checking_1.getColorSpace(input)) {
        case 'rgb':
            return converting_1.rgbToYuv(input);
        case 'yuv':
            return input;
        case 'hsl':
            return converting_1.hslToYuv(input);
        case 'hex':
            return converting_1.hexToYuv(input);
        case 'cmyk':
            return converting_1.cmykToYuv(input);
        default:
            return input;
    }
};
//# sourceMappingURL=yuv.js.map