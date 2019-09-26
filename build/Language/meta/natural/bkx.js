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
        name: 'Baikeno',
        nameT: 'Baikeno',
        iso3: 'bkx',
        wiki: 'Uab_Meto_language',
        names: 'Ambeno,Ambenu,Atoni,Baikenu,Biqueno,Laes Baikeno,Lais Meto,Molok Meto,Oe Cusi,Oecusse,Oecussi,Oekusi,Uab Meto,Uab Pah Meto,Vaikenu,Vaikino ("Dawan")'
    });
});
//# sourceMappingURL=bkx.js.map