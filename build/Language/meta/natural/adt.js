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
        name: 'Adnyamathanha',
        nameT: 'Yura Ngawarla',
        iso3: 'adt',
        wiki: 'Adnyamathanha_language',
        names: 'Ad’n’amadana,Adynyamathanha,Anjimatana,Anjiwatana,Archualda,Atynyamatana,Benbakanjamata,Binbarnja,Gadjnjamada,Jandali,Kanjimata,Keydnjmarda,Mardala,Nimalda,Nuralda,Umbertana,Unyamootha,Wailbi,Wailpi,Waljbi,Wipie'
    });
});
//# sourceMappingURL=adt.js.map