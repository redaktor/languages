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
        name: 'Ditammari',
        nameT: 'Ditammari',
        iso3: 'tbz',
        wiki: 'Tammari_language',
        names: 'Ditamari,Tamari,Bataba,Batammarab,Soma,Some,Tamberma ("Somba")',
        hasDetect: true
    });
});
//# sourceMappingURL=tbz.js.map