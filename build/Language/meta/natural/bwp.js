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
        name: 'Mandobo Bawah',
        nameT: 'Mandobo Bawah',
        iso3: 'bwp',
        wiki: 'Mandobo_language',
        names: 'Dumut,Kambon,Mandobbo,Nub ("Kaeti")'
    });
});
//# sourceMappingURL=bwp.js.map