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
        name: 'Kacipo-Balesi',
        nameT: 'Kacipo-Balesi',
        iso3: 'koe',
        wiki: 'Baale_language',
        names: 'Kacipo,Silmamo,Suri,Suri-Baale,Tsilmano,Zelmamu,Zilmamu,Zulmamu,Baale'
    });
});
//# sourceMappingURL=koe.js.map