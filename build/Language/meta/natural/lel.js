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
        name: 'Lele (Democratic Republic of Congo)',
        nameT: 'Lele (Democratic Republic of Congo)',
        iso3: 'lel',
        wiki: 'Lele_language_(Bantu)',
        names: 'Bashilele,Usilele'
    });
});
//# sourceMappingURL=lel.js.map