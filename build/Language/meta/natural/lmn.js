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
        name: 'Lambadi',
        nameT: 'Lambadi',
        iso3: 'lmn',
        wiki: 'Lambadi',
        OT: 'LAM',
        names: 'Bangala,Banjara,Banjari,Banjori,Banjuri,Brinjari,Gohar-Herkeri,Goola,Gormati,Gurmarti,Kora,Labhani,Labhani Muka,Lamadi,Lamani,Lambani,Lambara,Lavani,Lemadi,Lumadale,Singali,Sugali,Sukali,Tanda,Vanjari,Wanji'
    });
});
//# sourceMappingURL=lmn.js.map