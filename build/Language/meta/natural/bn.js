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
        name: 'Bengali (Bangla)',
        nameT: 'বাংলা',
        iso1: 'bn',
        iso2: 'ben',
        iso3: 'ben',
        wiki: 'Bengali_language',
        OT: 'BEN',
        names: 'Bangala,Bangla,Bangla-Bhasa',
        hasDetect: true
    });
});
//# sourceMappingURL=bn.js.map