"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCmyk = void 0;
var checking_1 = require("../checking");
var converting_1 = require("../converting");
exports.toCmyk = function (input) {
    switch (checking_1.getColorSpace(input)) {
        case 'rgb':
            return converting_1.rgbToCmyk(input);
        case 'yuv':
            return converting_1.yuvToCmyk(input);
        case 'hsl':
            return converting_1.hslToCmyk(input);
        case 'hex':
            return converting_1.hexToCmyk(input);
        case 'cmyk':
            return input;
        default:
            return input;
    }
};
//# sourceMappingURL=cmyk.js.map