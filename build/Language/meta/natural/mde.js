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
        name: 'Maba (Chad)',
        nameT: 'Maba (Chad)',
        iso3: 'mde',
        wiki: 'Maba_language',
        names: 'Aulad Djema,Awlad Djema,Borgu,Bura Mabang,Kana Mabang,Mabaa,Mabak,Mabang,Ouaddai,Ouaddaien,Uled Djemma,Wadai,Waddayen'
    });
});
//# sourceMappingURL=mde.js.map