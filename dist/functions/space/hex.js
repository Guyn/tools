"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHex = exports.toHexCharsGroup = exports.toHexChars = void 0;
var checking_1 = require("../checking");
var converting_1 = require("../converting");
var utils_1 = require("../utils");
var variables_1 = require("../variables");
exports.toHexChars = function (input) {
    var str = '#' +
        input
            .split('')
            .filter(function (c) { return variables_1.allowedHexCharacters.includes(c); })
            .join('');
    return utils_1.limitTo(str, 7, str.length == 4 ? str.substr(1, 4) : '0');
};
exports.toHexCharsGroup = function (input) {
    return input
        .map(function (v) { return (v = v.trim()); })
        .filter(function (v) { return v.charAt(0) == '#'; })
        .map(function (v) { return (v = exports.toHexChars(v)); });
};
exports.toHex = function (input) {
    switch (checking_1.getColorSpace(input)) {
        case 'cmyk':
            return converting_1.cmykToHex(input);
        case 'rgb':
            return converting_1.rgbToHex(input);
        case 'yuv':
            return converting_1.yuvToHex(input);
        case 'hsl':
            return converting_1.hslToHex(input);
        default:
            return input;
    }
};
//# sourceMappingURL=hex.js.map