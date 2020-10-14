"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColorSpace = exports.isObjectString = exports.isCmyk = exports.isYuv = exports.isHsl = exports.isRgb = exports.isHex = void 0;
// Checking
var variables_1 = require("./variables");
var utils_1 = require("./utils");
exports.isHex = function (input) {
    if (typeof input !== 'string')
        return false;
    var hexChars = input.toLowerCase().split('');
    return hexChars.length !== 7 ||
        hexChars[0] !== '#' ||
        hexChars.slice(1, 7).filter(function (c) { return variables_1.allowedHexCharacters.includes(c); })
            .length != 6
        ? false
        : true;
};
exports.isRgb = function (input) {
    return (!utils_1.isNullish(input === null || input === void 0 ? void 0 : input.r) &&
        !utils_1.isNullish(input === null || input === void 0 ? void 0 : input.g) &&
        !utils_1.isNullish(input === null || input === void 0 ? void 0 : input.b) &&
        Object.keys(input).length == 3 &&
        utils_1.isBetween(input.r, 0, 255) &&
        utils_1.isBetween(input.g, 0, 255) &&
        utils_1.isBetween(input.b, 0, 255));
};
exports.isHsl = function (input) {
    return (!utils_1.isNullish(input === null || input === void 0 ? void 0 : input.h) &&
        !utils_1.isNullish(input === null || input === void 0 ? void 0 : input.s) &&
        !utils_1.isNullish(input === null || input === void 0 ? void 0 : input.l) &&
        Object.keys(input).length == 3 &&
        utils_1.isBetween(input.h, 0, 255) &&
        utils_1.isBetween(input.s, 0, 255) &&
        utils_1.isBetween(input.l, 0, 255));
};
exports.isYuv = function (input) {
    return (!utils_1.isNullish(input === null || input === void 0 ? void 0 : input.y) &&
        !utils_1.isNullish(input === null || input === void 0 ? void 0 : input.u) &&
        !utils_1.isNullish(input === null || input === void 0 ? void 0 : input.v) &&
        Object.keys(input).length == 3 &&
        utils_1.isBetween(input.y, 0, 255) &&
        utils_1.isBetween(input.u, 0, 255) &&
        utils_1.isBetween(input.v, 0, 255));
};
exports.isCmyk = function (input) {
    return (!utils_1.isNullish(input === null || input === void 0 ? void 0 : input.c) &&
        !utils_1.isNullish(input === null || input === void 0 ? void 0 : input.m) &&
        !utils_1.isNullish(input === null || input === void 0 ? void 0 : input.y) &&
        !utils_1.isNullish(input === null || input === void 0 ? void 0 : input.k) &&
        Object.keys(input).length == 4 &&
        utils_1.isBetween(input.c, 0, 100) &&
        utils_1.isBetween(input.m, 0, 100) &&
        utils_1.isBetween(input.y, 0, 100) &&
        utils_1.isBetween(input.k, 0, 100));
};
exports.isObjectString = function (input) {
    try {
        JSON.parse(input);
    }
    catch (e) {
        return false;
    }
    return true;
};
exports.getColorSpace = function (input) {
    if (exports.isHex(input))
        return 'hex';
    if (exports.isCmyk(input))
        return 'cmyk';
    if (exports.isRgb(input))
        return 'rgb';
    if (exports.isHsl(input))
        return 'hsl';
    if (exports.isYuv(input))
        return 'yuv';
    return 'none';
};
//# sourceMappingURL=checking.js.map