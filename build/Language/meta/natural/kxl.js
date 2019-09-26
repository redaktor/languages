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
        name: 'Kurux, Nepali',
        nameT: 'Kurux, Nepali',
        iso3: 'kxl',
        wiki: 'Kurukh_language',
        names: 'Dhangar,Jangad,Janghard,Jhangad,Jhanger,Kurux,Oraon,Orau,Uranw,Uraon,Uraw'
    });
});
//# sourceMappingURL=kxl.js.map