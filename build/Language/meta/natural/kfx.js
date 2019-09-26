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
        name: 'Pahari, Kullu',
        nameT: 'Pahari, Kullu',
        iso3: 'kfx',
        wiki: 'Kullu_language',
        OT: 'KUL',
        names: 'Kauli,Kullui,Kulu Boli,Kulu Pahari,Kului,Kulvi,Kulwali,Pahari,Pahari Kullu,Phari Kulu'
    });
});
//# sourceMappingURL=kfx.js.map