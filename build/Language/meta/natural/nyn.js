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
        name: 'Nyankore',
        nameT: 'Nyankore',
        iso2: 'nyn',
        iso3: 'nyn',
        wiki: 'Nkore_language',
        OT: 'NKL',
        names: 'Nkole,Nyankole,Olunyankole,Runyankole,Ulunyankole,Ulunyankore',
        hasDetect: true
    });
});
//# sourceMappingURL=nyn.js.map