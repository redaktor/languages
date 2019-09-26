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
        name: 'Cochimi',
        nameT: 'Tipai',
        iso3: 'coj',
        wiki: 'Cochim%C3%AD_language',
        names: 'Cadegomeño,Cadegomo,Cochetimi,Cochima,Cochimí,Cochimtee,Didiu,Joaquín,Laimon,Laymon-Cochimi,Laymonem,San,San Francesco Saverio Mission,San Francisco Xavier de,San Javier,San Xavier,Viggé-Biaundo Mission'
    });
});
//# sourceMappingURL=coj.js.map