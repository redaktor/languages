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
        name: 'Malay, Sabah',
        nameT: 'Malay, Sabah',
        iso3: 'msi',
        wiki: 'Malay_trade_and_creole_languages#Sabah_Malay',
        names: 'Bahasa Sabah,Bazaar Malay,Pasar Malay,Sabah Malay Dialect'
    });
});
//# sourceMappingURL=msi.js.map