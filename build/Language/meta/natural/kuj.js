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
        name: 'Kuria',
        nameT: 'Kuria',
        iso3: 'kuj',
        wiki: 'Kuria_language',
        names: 'Ekiguria,Gikuria,Igikuria,Kikoria,Kikuria,Koria,Kurya,Egikuria,Ekikuria,Ikikuria,Kikuria cha juu,Kikuria cha Mashariki,Kulia,Kurye'
    });
});
//# sourceMappingURL=kuj.js.map