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
        name: 'Ulch',
        nameT: 'Ulch',
        iso3: 'ulc',
        wiki: 'Ulch_language',
        names: 'Hoche,Hol-Chih,Olch,Olcha,Olchis,Ulcha,Ulchi,Ulych'
    });
});
//# sourceMappingURL=ulc.js.map