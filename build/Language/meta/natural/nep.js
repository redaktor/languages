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
        name: 'Nepali',
        nameT: 'नेपाली',
        iso1: 'ne',
        iso2: 'nep',
        iso3: 'nep',
        wiki: 'Nepali_language',
        OT: 'NEP',
        names: 'Eastern Pahari,Gorkhali,Gurkhali,Khaskura,Lhotshammikha,Nepalese,Parbatiya',
        hasDetect: true
    });
});
//# sourceMappingURL=nep.js.map