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
        name: 'Lachi',
        nameT: 'Lachi',
        iso3: 'lbt',
        wiki: 'Lachi_language',
        names: 'I To,Ku Te,La Chi,Laji,Lati,Lipuljo,Tai Lati,Y Mia,Y Poong,Y To,Cù Te,Cu-Tê,Lachí,Lipulio,Mia,Y,Y Pí,Y Póng'
    });
});
//# sourceMappingURL=lbt.js.map