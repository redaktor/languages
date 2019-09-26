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
        name: 'Turkish',
        nameT: 'Türkçe',
        iso1: 'tr',
        iso2: 'tur',
        iso3: 'tur',
        wiki: 'Turkish_language',
        OT: 'TRK',
        names: 'Osmanli,Turki,Anatolian,Türkisch',
        hasDetect: true
    });
});
//# sourceMappingURL=tur.js.map