"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.limitTo = exports.minMax = void 0;
exports.minMax = function (input, min, max) {
    if (input === void 0) { input = 0; }
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 255; }
    return Math.min(Math.max(input, min), max);
};
exports.limitTo = function (str, limit, fill) {
    if (fill === void 0) { fill = " "; }
    if (typeof fill == "number")
        fill = "" + fill;
    if (str.length == limit)
        return str;
    if (str.length < limit) {
        while (str.length < limit) {
            str = str + fill;
        }
        return str;
    }
    else {
        return str.substr(0, limit);
    }
};
//# sourceMappingURL=utils.js.map