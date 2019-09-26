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
        name: 'Persian, Old (ca. 600-400 B.C.)',
        nameT: 'Persian, Old (ca. 600-400 B.C.)',
        iso2: 'peo',
        iso3: 'peo',
        wiki: 'Old_Persian'
    });
});
//# sourceMappingURL=peo.js.map