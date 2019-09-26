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
        name: 'Koro Wachi',
        nameT: 'Koro Wachi',
        iso3: 'bqv',
        wiki: 'Koro_Wachi_language',
        names: 'Agere,Begbere-Ejar,Koro Agwe,Koro Makama,Koro Myamya,Miamia,Miamiya'
    });
});
//# sourceMappingURL=bqv.js.map