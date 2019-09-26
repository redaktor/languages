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
    var meta_1 = require("../../meta");
    exports.default = meta_1.default({
        name: 'Malay, Standard',
        nameT: 'Malay, Standard',
        iso3: 'zsm',
        wiki: 'Malaysian_language',
        names: 'Bahasa Malaysia,Formal Malay,Malay,Malayu,Melayu,Melayu Baku,Bahasa Malayu,Informal Malay'
    });
});
//# sourceMappingURL=zsm.js.map