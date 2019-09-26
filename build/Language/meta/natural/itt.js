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
        name: 'Itneg, Maeng',
        nameT: 'Itneg, Maeng',
        iso3: 'itt',
        wiki: 'Kankanaey_language',
        names: 'Luba-Tiempo Itneg,Southern Itneg'
    });
});
//# sourceMappingURL=itt.js.map