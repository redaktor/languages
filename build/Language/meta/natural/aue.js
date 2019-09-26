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
        name: 'Auen',
        nameT: 'ǂKx’ao-ǁ’ae',
        iso3: 'aue',
        wiki: '%C7%82Kx%27ao-%C7%81%27ae',
        names: '||Au||ei,||X’au||’e,Auen,Kaukau,Koko,Kung-Gobabis'
    });
});
//# sourceMappingURL=aue.js.map