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
        name: 'Malay, Papuan',
        nameT: 'Malay, Papuan',
        iso3: 'pmy',
        wiki: 'Malay_trade_and_creole_languages#Papuan.2FIrian_Malay',
        names: 'Bahasa Tanah,Logat Papua,Melayu Papua'
    });
});
//# sourceMappingURL=pmy.js.map