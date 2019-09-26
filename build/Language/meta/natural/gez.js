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
        name: 'Geez',
        nameT: 'ግዕዝ',
        iso2: 'gez',
        iso3: 'gez',
        wiki: 'Ge%27ez',
        OT: 'GEZ',
        names: 'Ancient Ethiopic,Ethiopic,Ge’ez,Giiz'
    });
});
//# sourceMappingURL=gez.js.map