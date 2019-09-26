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
        name: 'Xhosa',
        nameT: 'isiXhosa',
        iso1: 'xh',
        iso2: 'xho',
        iso3: 'xho',
        wiki: 'Xhosa_language',
        OT: 'XHS',
        names: 'Isixhosa,Koosa,Xosa ("Cauzuh")',
        hasDetect: true
    });
});
//# sourceMappingURL=xho.js.map