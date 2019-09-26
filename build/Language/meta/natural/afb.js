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
        name: 'Arabic, Gulf',
        nameT: 'Arabic, Gulf',
        iso3: 'afb',
        wiki: 'Gulf_Arabic',
        names: '’Arabi,Gulf Arabic,Khaliji,Bedawi,Omani Bedawi Arabic,Qatari,Gulf Spoken'
    });
});
//# sourceMappingURL=afb.js.map