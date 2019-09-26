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
        name: 'Malay, Ambonese',
        nameT: 'Malay, Ambonese',
        iso3: 'abs',
        wiki: 'Ambonese_Malay',
        names: 'Ambonese,Ambong,Malayu Ambon,Moluccan (Maluku) Malay'
    });
});
//# sourceMappingURL=abs.js.map