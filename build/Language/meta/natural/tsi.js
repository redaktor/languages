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
        name: 'Tsimshian',
        nameT: 'Sm’algyax̣',
        iso2: 'tsi',
        iso3: 'tsi',
        wiki: 'Coast_Tsimshian_dialect',
        names: 'Chimmezyan,Maritime Tsimshianic,Sm’algyax,Tsimpshean,Zimshian,Tsimshean'
    });
});
//# sourceMappingURL=tsi.js.map