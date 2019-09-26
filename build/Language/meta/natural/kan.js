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
        name: 'Kannada',
        nameT: 'ಕನ್ನಡ',
        iso1: 'kn',
        iso2: 'kan',
        iso3: 'kan',
        wiki: 'Kannada',
        OT: 'KAN',
        names: 'Banglori,Canarese,Havyaka,Kanarese,Madrassi',
        hasDetect: true
    });
});
//# sourceMappingURL=kan.js.map