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
        name: 'Ndebele, South',
        nameT: 'isiNdebele',
        iso1: 'nr',
        iso2: 'nbl',
        iso3: 'nbl',
        wiki: 'Southern_Ndebele_language',
        names: 'Isikhethu,IsiNdebele,Ndzundza,Nrebele,Southern Ndebele,Transvaal Ndebele'
    });
});
//# sourceMappingURL=nbl.js.map