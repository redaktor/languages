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
        name: 'Somali',
        nameT: 'Soomaaliga',
        iso1: 'so',
        iso2: 'som',
        iso3: 'som',
        wiki: 'Somali_language',
        OT: 'SML',
        names: 'Common Somali,Standard Somali,Af-Maxaad Tiri,Af-Soomaali',
        hasDetect: true
    });
});
//# sourceMappingURL=so.js.map