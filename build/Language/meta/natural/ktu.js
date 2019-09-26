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
        name: 'Kituba',
        nameT: 'Kituba',
        iso3: 'ktu',
        wiki: 'Kituba_language',
        OT: 'KON',
        names: 'Kibulamatadi,Kikongo Commercial,Kikongo Simplifié,Kikongo Ya Leta,Kikongo-Kituba,Kikongo-Kutuba,Kileta',
        hasDetect: true
    });
});
//# sourceMappingURL=ktu.js.map