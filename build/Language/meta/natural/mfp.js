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
        name: 'Malay, Makassar',
        nameT: 'Malay, Makassar',
        iso3: 'mfp',
        wiki: 'Malay_trade_and_creole_languages#Macassar_Malay',
        names: 'Macassarese Malay,Makassarese Malay,Sulsel Indonesian,Ujung Pandang Indonesian'
    });
});
//# sourceMappingURL=mfp.js.map