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
        name: 'Kuuku-Ya’u',
        nameT: 'Kuuku-Ya’u',
        iso3: 'kuy',
        wiki: 'Umpila_language',
        names: 'Bagadji,Gugu Yau,Koko-Ja’o,Kokoyao,Pakadji,Ya’o'
    });
});
//# sourceMappingURL=kuy.js.map