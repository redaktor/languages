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
        name: 'Wikngenchera',
        nameT: 'Wikngenchera',
        iso3: 'wua',
        wiki: 'Kugu_Nganhcara_language',
        names: 'Nantjara,Ngandjara,Ngantjeri,Njinturawik-Nganhcara,Wik,Wik-Nantjara'
    });
});
//# sourceMappingURL=wua.js.map