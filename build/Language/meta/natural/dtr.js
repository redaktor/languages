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
        name: 'Lotud',
        nameT: 'Dusun Lotud',
        iso3: 'dtr',
        wiki: 'Lotud_language',
        names: 'Dusun Lotud'
    });
});
//# sourceMappingURL=dtr.js.map