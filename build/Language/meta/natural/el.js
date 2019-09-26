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
        name: 'Greek (transliterated)',
        nameT: 'Ελληνικά',
        iso1: 'el',
        iso2: 'gre',
        iso2T: 'ell',
        iso3: 'ell',
        wiki: 'Modern_Greek',
        OT: 'sELL, PGR',
        names: 'Ellinika,Graecae,Grec,Greco,Neo-Hellenic,Romaic,Griko,Urum',
        hasDetect: true
    });
});
//# sourceMappingURL=el.js.map