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
        name: 'Urdu',
        nameT: 'اردو',
        iso1: 'ur',
        iso2: 'urd',
        iso3: 'urd',
        wiki: 'Urdu',
        OT: 'URD',
        names: 'Urdu,Islami,Undri,Urudu,Bihari',
        hasDetect: true
    });
});
//# sourceMappingURL=urd.js.map