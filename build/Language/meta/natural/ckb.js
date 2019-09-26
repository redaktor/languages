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
        name: 'Central Kurdish',
        nameT: 'Central Kurdish',
        iso3: 'ckb',
        wiki: 'Central_Kurdish',
        names: 'Kurdi,Sorani,Kordi,Korkora,Kurdy,Mokri,Mukri,Sine’i,Wawa',
        hasDetect: true
    });
});
//# sourceMappingURL=ckb.js.map