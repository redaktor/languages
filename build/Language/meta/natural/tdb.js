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
        name: 'Panchpargania',
        nameT: 'Panchpargania',
        iso3: 'tdb',
        wiki: 'Kurmali_dialect',
        names: 'Bedia,Chik Barik,Pan,Pan Sawasi,Tair,Tamara,Tamaria,Tanti,Temoral,Tumariya'
    });
});
//# sourceMappingURL=tdb.js.map