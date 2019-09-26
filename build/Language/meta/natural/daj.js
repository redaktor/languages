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
        name: 'Daju, Dar Fur',
        nameT: 'Daju, Dar Fur',
        iso3: 'daj',
        wiki: 'Nyala_language_(Sudan)',
        names: 'Beke,Bekke,Dagu,Daju Ferne,Fininga,Nyala-Lagowa'
    });
});
//# sourceMappingURL=daj.js.map