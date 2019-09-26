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
        name: 'Laha (Viet Nam)',
        nameT: 'Laha (Viet Nam)',
        iso3: 'lha',
        wiki: 'Laha_language',
        names: 'Khlá,Khlá Don,Khlá Dung,Khlá Phlao,Klá Dong,La Ha,La Ha Ung,Laxa,Liik,Xá Chien,Xá Khao,Xá Lay'
    });
});
//# sourceMappingURL=lha.js.map