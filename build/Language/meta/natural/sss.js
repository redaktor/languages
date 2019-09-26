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
        name: 'Sô',
        nameT: 'Sô',
        iso3: 'sss',
        wiki: 'Bru_language',
        names: 'Bru,Kah So,Makong,Mang Cong,Mangkong,Mang-Koong,Mankoong,So Makon,Thro,Kha So'
    });
});
//# sourceMappingURL=sss.js.map