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
        name: 'Makassar',
        nameT: 'Makassar',
        iso2: 'mak',
        iso3: 'mak',
        wiki: 'Makassarese_language',
        names: 'Goa,Macassar,Macassarese,Makassa,Makassaarsche,Makassarese,Mangasara,Mengkasara,Taena,Tena',
        hasDetect: true
    });
});
//# sourceMappingURL=mak.js.map