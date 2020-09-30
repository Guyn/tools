"use strict";
// Checking
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHex = void 0;
exports.isHex = function (hex) {
    return (hex.length == 7 &&
        hex.charAt(0) == "#" &&
        !hex.split("").find(function (char, index) {
            if (index == 0)
                return false;
            return [
                "a",
                "b",
                "c",
                "d",
                "e",
                "f",
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
            ].includes(typeof char == "number" ? char : char.toLowerCase());
        }));
};
//# sourceMappingURL=checking.js.map