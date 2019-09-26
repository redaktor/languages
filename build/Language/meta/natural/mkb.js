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
        name: 'Mal Paharia',
        nameT: 'Mal Paharia',
        iso3: 'mkb',
        wiki: 'Mal_Paharia_language',
        names: 'Dehri,Mad,Mader,Mal,Mal Pahariya,Maler,Malpaharia,Malti,Malto,Maltu,Manlati,Mar,Marpaharia,Maw,Mawdo,Mawer,Mawer Nondi,Paharia,Parsi'
    });
});
//# sourceMappingURL=mkb.js.map