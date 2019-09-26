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
        name: 'Manchu',
        nameT: 'ᠮᠠᠨᠵᡠ ᡤᡳᠰᡠᠨ ᠪᡝ',
        iso2: 'mnc',
        iso3: 'mnc',
        wiki: 'Manchu_language',
        OT: 'MCH',
        names: 'Man'
    });
});
//# sourceMappingURL=mnc.js.map