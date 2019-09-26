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
        name: 'Malay',
        nameT: 'Bahasa Melayu',
        iso1: 'ms',
        iso2: 'may',
        iso2T: 'msa',
        iso3: 'msa',
        wiki: 'Malay_language',
        OT: 'MLY',
        hasDetect: true
    });
});
//# sourceMappingURL=msa.js.map