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
        name: 'Buglere',
        nameT: 'Buglere',
        iso3: 'sab',
        wiki: 'Buglere',
        names: 'Bobota,Bocota,Bofota,Bogota,Bokota,Bukueta,Murire,Nortenyo,Veraguas Sabanero',
        hasDetect: true
    });
});
//# sourceMappingURL=sab.js.map