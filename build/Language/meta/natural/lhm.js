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
        name: 'Lhomi',
        nameT: 'Lhomi',
        iso3: 'lhm',
        wiki: 'Central_Tibetan_language',
        names: 'Lhoket,Lhomi dzyükki keccyok,Lhomiki keccyok,Shing Saapa,Syingsaaba ("Bho Te bhasha","Kar Bhote","Kath Bhote")'
    });
});
//# sourceMappingURL=lhm.js.map