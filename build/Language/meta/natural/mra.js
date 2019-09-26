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
        name: 'Mlabri',
        nameT: 'Mlabri',
        iso3: 'mra',
        wiki: 'Mlabri_language',
        names: 'Ma Ku,Mabri,Mla,Mla-Bri,Mrabri,Yellow Leaf,Yumbri,Luang,Malabri,Mla Bri,Phi Thong'
    });
});
//# sourceMappingURL=mra.js.map