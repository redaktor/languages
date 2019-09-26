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
        name: 'Lega-Mwenga',
        nameT: 'Lega-Mwenga',
        iso3: 'lgm',
        wiki: 'Lega_language',
        names: 'Ileka Ishile,Ishile,Isile,Kilega,Kirega,Lega-Ntara,Leka-Shile,Leka-Sile,Rega,Shile'
    });
});
//# sourceMappingURL=lgm.js.map