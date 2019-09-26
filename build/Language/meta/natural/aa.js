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
        name: 'Afar',
        nameT: 'Afar',
        iso1: 'aa',
        iso2: 'aar',
        iso3: 'aar',
        wiki: 'Afar_language',
        OT: 'AFR',
        names: 'Afaraf,Adal,’Afar Af,Affarigna,Qafar ("Danakil","Denkel")'
    });
});
//# sourceMappingURL=aa.js.map