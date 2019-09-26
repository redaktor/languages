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
        name: 'Kabyle',
        nameT: 'شئعم',
        iso2: 'kab',
        iso3: 'kab',
        wiki: 'Kabyle_language',
        names: 'Amazigh,Kabyl,Kabylia,Tamazight,Taqbaylit',
        hasDetect: true
    });
});
//# sourceMappingURL=kab.js.map