"use strict";
// Checking
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObjectString = exports.isHex = void 0;
exports.isHex = function (hex) {
    var hexChars = hex.toLowerCase().split("");
    return hexChars.length !== 7 ||
        hexChars[0] !== "#" ||
        hexChars.slice(1, 7).findIndex(function (c) { return "0123456789abcdef".includes(c); }) > 0
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