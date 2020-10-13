"use strict";
// Checking
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObjectString = exports.isHex = exports.allowedHexCharacters = void 0;
exports.allowedHexCharacters = "01234567890abcdef";
exports.isHex = function (hex) {
    var hexChars = hex.toLowerCase().split("");
    return hexChars.length !== 7 ||
        hexChars[0] !== "#" ||
        hexChars.slice(1, 7).filter(function (c) { return exports.allowedHexCharacters.includes(c); })
            .length != 6
        ? false
        : true;
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
//# sourceMappingURL=checking.js.map