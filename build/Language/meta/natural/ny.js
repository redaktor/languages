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
        name: 'Nyanja (Chechewa)',
        nameT: 'Chi-Chewa',
        iso1: 'ny',
        iso2: 'nya',
        iso3: 'nya',
        wiki: 'Chewa_language',
        OT: 'CHI',
        names: 'Chinjanja,Chinyanja,Nyanja,Chewa,Nyanja-Chewa',
        hasDetect: true
    });
});
//# sourceMappingURL=ny.js.map