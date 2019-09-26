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
        name: 'Kaurna',
        nameT: 'Kaurna',
        iso3: 'zku',
        wiki: 'Kaurna_language',
        names: 'Coorna,Gaurna,Jaitjawarra,Karnuwarra,Kaura,Koornawarra,Kurumidlanta,Medaindi,Medaindie,Meljurna,Merelde,Merildekald,Meyu,Midlanta,Milipitingara,Nantuwara,Nantuwaru,Nganawara,Padnaindi,Padnayndie,Wakanuwan,Warra,Warrah,Widninga,Winaini,Winnaynie,Winnay-nie'
    });
});
//# sourceMappingURL=zku.js.map