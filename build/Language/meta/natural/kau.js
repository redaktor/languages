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
        name: 'Kanuri, Central',
        nameT: 'Kanuri',
        iso1: 'kr',
        iso2: 'kau',
        iso3: 'kau',
        wiki: 'Kanuri_language',
        OT: 'KNR',
        hasDetect: true
    });
});
//# sourceMappingURL=kau.js.map