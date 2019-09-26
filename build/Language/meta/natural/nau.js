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
        name: 'Nauru',
        nameT: 'Dorerin Naoero',
        iso1: 'na',
        iso2: 'nau',
        iso3: 'nau',
        wiki: 'Nauruan_language',
        names: 'Nauru'
    });
});
//# sourceMappingURL=nau.js.map