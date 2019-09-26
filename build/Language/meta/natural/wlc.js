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
        name: 'Comorian, Mwali',
        nameT: 'Comorian, Mwali',
        iso3: 'wlc',
        wiki: 'Comorian_language',
        OT: 'CMR',
        names: 'Mwali,Shimwali'
    });
});
//# sourceMappingURL=wlc.js.map