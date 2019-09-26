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
        name: 'Naga, Khoibu',
        nameT: 'Naga, Khoibu',
        iso3: 'nkb',
        wiki: 'Maring_language_(India)',
        names: 'Khoibu,Khoibu Maring,Khoibu Maring Naga'
    });
});
//# sourceMappingURL=nkb.js.map