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
        name: 'Zapotec, Albarradas',
        nameT: 'Zapotec, Albarradas',
        iso3: 'zas',
        wiki: 'Albarradas_Zapotec',
        names: 'Albarradas Zapotec,Dihidx Bilyáhab,Zapoteco de Santo Domingo Albarradas',
        hasDetect: true
    });
});
//# sourceMappingURL=zas.js.map