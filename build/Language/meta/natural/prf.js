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
        name: 'Paranan',
        nameT: 'Paranan',
        iso3: 'prf',
        wiki: 'Paranan_language',
        names: 'Palanan,Palanenyo'
    });
});
//# sourceMappingURL=prf.js.map