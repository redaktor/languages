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
        name: 'Malagasy',
        nameT: 'Malagasy',
        iso1: 'mg',
        iso2: 'mlg',
        iso3: 'mlg',
        wiki: 'Malagasy_language',
        OT: 'MLG',
        hasDetect: true
    });
});
//# sourceMappingURL=mg.js.map