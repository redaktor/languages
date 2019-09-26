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
        name: 'Mizo',
        nameT: 'Mizo',
        iso2: 'lus',
        iso3: 'lus',
        wiki: 'Mizo_language',
        OT: 'MIZ',
        names: 'Hualngo,Lei,Lusai,Lushai,Lushei,Sailau,Whelngo,Duhlian Twang,Dulien,Lukhai,Lusago,Lusei,Lushai-Mizo,Haulngo,Ka-Lin-Kaw,Le,Lushay',
        hasDetect: true
    });
});
//# sourceMappingURL=lus.js.map