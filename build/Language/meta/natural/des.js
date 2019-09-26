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
        name: 'Desano',
        nameT: 'Desano',
        iso3: 'des',
        wiki: 'Desano_language',
        names: 'Boleka,Desâna,Desana-Siriana,Dessano,Kusibi,Oregu,Uina,Wina,Wirã,Desána,Dessana,Kotedia,Wira',
        hasDetect: true
    });
});
//# sourceMappingURL=des.js.map