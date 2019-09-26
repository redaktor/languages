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
        name: 'Ngan’gityemerri',
        nameT: 'Ngan’gityemerri',
        iso3: 'nam',
        wiki: 'Ngan%E2%80%99gityemerri_language',
        names: 'Moil,Ngangi-Tjemerri,Tyemeri'
    });
});
//# sourceMappingURL=nam.js.map