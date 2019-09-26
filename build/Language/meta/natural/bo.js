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
        name: 'Tibetan, Central',
        nameT: 'བོད་ཡིག / Bod skad',
        iso1: 'bo',
        iso2: 'tib',
        iso2T: 'bod',
        iso3: 'bod',
        wiki: 'Standard_Tibetan',
        OT: 'TIB',
        names: 'Bhotia,Dbus,Dbusgtsang,Phoke,Tibetan,U,Wei,Weizang,Zang,Bod,Central Tibetan,Pohbetian,Poke,Skad,Tebilian,Tibate,Bod Skad,Zang Wen',
        hasDetect: true
    });
});
//# sourceMappingURL=bo.js.map