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
        name: 'Polish',
        nameT: 'polski',
        iso1: 'pl',
        iso2: 'pol',
        iso3: 'pol',
        wiki: 'Polish_language',
        OT: 'PLK',
        names: 'Polski,Polnisch',
        hasDetect: true
    });
});
//# sourceMappingURL=pl.js.map