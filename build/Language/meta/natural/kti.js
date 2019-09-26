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
        name: 'Muyu, North',
        nameT: 'Muyu, North',
        iso3: 'kti',
        wiki: 'Muyu_language',
        names: 'Kataut,Kati-Ninanti,Niinati,Ninatie,North Kati,North Moejoe,Yonggom,Yongkom,Yongom'
    });
});
//# sourceMappingURL=kti.js.map