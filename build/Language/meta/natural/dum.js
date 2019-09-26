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
        name: 'Dutch, Middle (ca. 1050-1350)',
        nameT: 'Dutch, Middle (ca. 1050-1350)',
        iso2: 'dum',
        iso3: 'dum',
        wiki: 'Middle_Dutch'
    });
});
//# sourceMappingURL=dum.js.map