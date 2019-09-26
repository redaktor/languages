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
        name: 'Kuy',
        nameT: 'Kuy',
        iso3: 'kdt',
        wiki: 'Kuy_language',
        OT: 'KUY',
        names: 'Kuay,Kui,Aouei,Cuoi,Dui,Khamen-Boran,Kuoy,Old Khmer,Soai,Suai,Suay,Suei,Sui,Suoi,Kui Souei,Kuuy'
    });
});
//# sourceMappingURL=kdt.js.map