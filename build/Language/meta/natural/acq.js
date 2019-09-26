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
        name: 'Arabic, Ta’izzi-Adeni',
        nameT: 'Arabic, Ta’izzi-Adeni',
        iso3: 'acq',
        wiki: 'Ta%27izzi-Adeni_Arabic',
        names: 'Djibouti Arabic,Southern Yemeni Spoken Arabic'
    });
});
//# sourceMappingURL=acq.js.map