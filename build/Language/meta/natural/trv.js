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
        name: 'Taroko',
        nameT: 'Kari Seediq',
        iso3: 'trv',
        wiki: 'Seediq_language',
        names: 'Bu-Hwan,Che-Hwan,Daiya-Ataiyal,Hogo,Iboho,Paran,Saediq,Sazek,Sedek,Sedeq,Sediakk,Sedik,Sediq Taroko,Seedek,Seedeq,Seedik,Seediq,Sejiq,Shedekka,Taruku,Toda,Toroko,Truku'
    });
});
//# sourceMappingURL=trv.js.map