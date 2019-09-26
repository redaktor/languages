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
        name: 'Fulfulde, Adamawa',
        nameT: 'Fulfulde, Adamawa',
        iso3: 'fub',
        wiki: 'Fula_language',
        names: 'Adamawa Fulani,Boulbe,Domona,Dzemay,Eastern Fulani,Foulfoulde,Ful,Fula,Fulata,Fulbe,Fulfulde,Mbororo,Palata,Peul,Peulh,Eastern Fulfulde,Fillanci,Fulani,Fulatanchi,Fellata,Biira,Fula Fulbe,Nagapelta,Paldena,Paldida,Pelta Hay,Pladina,Pule,Pullo,Sanyo,Taareyo,Zaakosa,Zemay'
    });
});
//# sourceMappingURL=fub.js.map