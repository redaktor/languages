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
        name: 'English, Middle (1100-1500)',
        nameT: 'English',
        iso2: 'enm',
        iso3: 'enm',
        wiki: 'Middle_English'
    });
});
//# sourceMappingURL=enm.js.map