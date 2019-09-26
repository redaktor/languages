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
        name: 'Bedawiyet',
        nameT: 'بداوية',
        iso2: 'bej',
        iso3: 'bej',
        wiki: 'Beja_language',
        names: 'Bedawi,Bedàwie,Beja,Tu Bdhaawi,Bedauye,Bedawiye,Bedawye,Bedja,Bedwi,Bedya,Bidhaaweet,Lobat,Tu-Bedawie'
    });
});
//# sourceMappingURL=bej.js.map