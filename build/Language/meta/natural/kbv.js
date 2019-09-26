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
        name: 'Dera (Indonesia)',
        nameT: 'Dera (Indonesia)',
        iso3: 'kbv',
        wiki: 'Dera_language',
        names: 'Dla,Dra,Kamberataro,Mangguar,Kamberatoro,Komberatoro'
    });
});
//# sourceMappingURL=kbv.js.map