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
        name: 'Komi Zyrian',
        nameT: 'Komi Zyrian',
        iso3: 'kpv',
        wiki: 'Komi-Zyrian_language',
        OT: 'KOZ',
        names: 'Komi,Komi-Zyryan,Zyrian',
        hasDetect: true
    });
});
//# sourceMappingURL=kpv.js.map