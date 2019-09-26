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
        name: 'Buriat, China',
        nameT: 'Buriat, China',
        iso3: 'bxu',
        wiki: 'Buryat_language',
        names: 'Ba’erhu-Buliyate,Bargu Buriat,Buriat-Mongolian,Buryat,Northeastern Mongolian,Northern Mongolian'
    });
});
//# sourceMappingURL=bxu.js.map