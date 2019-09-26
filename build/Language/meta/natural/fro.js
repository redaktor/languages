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
        name: 'French, Old (842-ca. 1400)',
        nameT: 'French, Old (842-ca. 1400)',
        iso2: 'fro',
        iso3: 'fro',
        wiki: 'Old_French'
    });
});
//# sourceMappingURL=fro.js.map