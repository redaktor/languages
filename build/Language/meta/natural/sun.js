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
        name: 'Sundanese',
        nameT: 'Basa Sunda',
        iso1: 'su',
        iso2: 'sun',
        iso3: 'sun',
        wiki: 'Sundanese_language',
        names: 'Priangan,Sundanese',
        hasDetect: true
    });
});
//# sourceMappingURL=sun.js.map