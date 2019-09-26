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
        name: 'Ndebele',
        nameT: 'Sindebele',
        iso1: 'nd',
        iso2: 'nde',
        iso3: 'nde',
        wiki: 'Zimbabwean_Ndebele_language',
        OT: 'NDB',
        names: 'Isinde’bele,Northern Ndebele,Tabele,Tebele,Ndebele of Zimbabwe',
        hasDetect: true
    });
});
//# sourceMappingURL=nd.js.map