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
        name: 'Me’phaa, Malinaltepec',
        nameT: 'Me’phaa, Malinaltepec',
        iso3: 'tcf',
        wiki: 'Tlapanec_language',
        names: 'Malinaltepec Tlapanec,Me’phaa,Mè’phàà Mañuwìín,Tlapaneco,Tlapaneco Central Bajo,Tlapaneco de Malinaltepec'
    });
});
//# sourceMappingURL=tcf.js.map