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
        name: 'Mator-Taygi-Karagas',
        nameT: 'Mator-Taygi-Karagas',
        iso3: 'ymt',
        wiki: 'Mator_language'
    });
});
//# sourceMappingURL=ymt.js.map