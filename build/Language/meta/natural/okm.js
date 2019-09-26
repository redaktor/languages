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
        name: 'Korean, Middle (10th-16th cent.)',
        nameT: 'Korean, Middle (10th-16th cent.)',
        iso3: 'okm',
        wiki: 'History_of_Korean#Middle_Korean',
        OT: 'KOH'
    });
});
//# sourceMappingURL=okm.js.map