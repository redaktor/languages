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
        name: 'Badyara',
        nameT: 'Badyara',
        iso3: 'pbp',
        wiki: 'Badyara_language',
        names: 'Badara,Badian,Badjara,Badyaranke,Bigola,Gola,Pajade,Pajadinka,Badyaranké,Kanjad,Pajadinca,Badjaranké,Bajara'
    });
});
//# sourceMappingURL=pbp.js.map