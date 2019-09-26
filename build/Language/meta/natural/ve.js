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
        name: 'Venda',
        nameT: 'Tshivenḓa',
        iso1: 've',
        iso2: 'ven',
        iso3: 'ven',
        wiki: 'Venda_language',
        OT: 'VEN',
        names: 'Chivenda,Tshivenda,Cevenda',
        hasDetect: true
    });
});
//# sourceMappingURL=ve.js.map