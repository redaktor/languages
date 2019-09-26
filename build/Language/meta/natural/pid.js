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
        name: 'Piaroa',
        nameT: 'Piaroa',
        iso3: 'pid',
        wiki: 'Piaroa_language',
        names: 'Adole,Ature,Guagua,Kuakua,Maco,Quaqua Dearuwa,Wöthüha,Wo’tiheh,Amorua,Deá’ru’wa,Dearwa,Deruwa,Uhothha,Uwotjüja'
    });
});
//# sourceMappingURL=pid.js.map