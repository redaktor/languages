(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../meta"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const meta_1 = require("../../meta");
    exports.default = meta_1.default({
        name: 'Nahuatl, Central',
        nameT: 'Nahuatl, Central',
        iso3: 'nhn',
        wiki: 'Tlaxcala%E2%80%93Puebla_Nahuatl',
        names: 'Central Aztec,Náhuatl del Centro,Nawa,Tlaxcala-Puebla Nahuatl',
        hasDetect: true
    });
});
//# sourceMappingURL=nhn.js.map