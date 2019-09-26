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
        name: 'Indonesian, Peranakan',
        nameT: 'Indonesian, Peranakan',
        iso3: 'pea',
        wiki: 'Malay_trade_and_creole_languages#Baba_Malay',
        names: 'Baba Indonesian,Chinese Indonesian,Peranakan'
    });
});
//# sourceMappingURL=pea.js.map