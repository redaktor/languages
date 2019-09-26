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
        name: 'Kuna San Blas',
        nameT: 'Kuna San Blas',
        iso3: 'cuk',
        wiki: 'Kuna_language',
        names: 'Cuna,Guna,San Blas Cuna',
        hasDetect: true
    });
});
//# sourceMappingURL=cuk.js.map