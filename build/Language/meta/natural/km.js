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
        name: 'Khmer, Central',
        nameT: 'ខ្មែរ',
        iso1: 'km',
        iso2: 'khm',
        iso3: 'khm',
        wiki: 'Khmer_language',
        OT: 'KHM',
        names: 'Cambodian,Khmer,Cu Tho,Cur Cul,Khmer Nam Bo,Kho Me,Khome,Krom ("Viet Goc Mien")',
        hasDetect: true
    });
});
//# sourceMappingURL=km.js.map