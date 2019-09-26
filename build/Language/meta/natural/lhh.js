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
        name: 'Laha (Indonesia)',
        nameT: 'Central Ambon',
        iso3: 'lhh',
        wiki: 'Laha_language_(Indonesia)',
        names: 'Central Ambon'
    });
});
//# sourceMappingURL=lhh.js.map