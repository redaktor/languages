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
        name: 'Komi Permiak',
        nameT: 'Komi Permiak',
        iso3: 'koi',
        wiki: 'Komi-Permyak_language',
        OT: 'KOP',
        names: 'Kama Permyak,Komi-Perm,Komi-Permyat,Permian,Permyak',
        hasDetect: true
    });
});
//# sourceMappingURL=koi.js.map