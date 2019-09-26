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
        name: 'Rungwa',
        nameT: 'Rungwa',
        iso3: 'rnw',
        wiki: 'Rungwa_language',
        names: 'Ichirungwa,Icilungwa,Kirungwa,Lungwa,Nyalungwa,Runga'
    });
});
//# sourceMappingURL=rnw.js.map