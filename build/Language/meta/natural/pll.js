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
        name: 'Palaung, Shwe',
        nameT: 'Palaung, Shwe',
        iso3: 'pll',
        wiki: 'Palaung_language',
        OT: 'PLG',
        names: 'Golden Palaung,Liang Palaung,Shwe,Liang,Red Da’ang,Shwe Palaung,Ta-Ang Palaung,Ta’ang Samlung'
    });
});
//# sourceMappingURL=pll.js.map