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
        name: 'Zapotec, Totomachapan',
        nameT: 'Zapotec, Totomachapan',
        iso3: 'zph',
        wiki: 'Totomachapan_Zapotec',
        names: 'Western Zimatlán Zapotec,Zapoteco de San Pedro Totomachapan'
    });
});
//# sourceMappingURL=zph.js.map