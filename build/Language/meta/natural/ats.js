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
        name: 'Gros Ventre',
        nameT: 'Gros Ventre',
        iso3: 'ats',
        wiki: 'Gros_Ventre_language',
        names: 'Ahahnelin,Ahe,Ananin,Atsina,Fall Indians,Gros Ventres,White Clay People'
    });
});
//# sourceMappingURL=ats.js.map