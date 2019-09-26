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
        name: 'Muyu, South',
        nameT: 'Muyu, South',
        iso3: 'kts',
        wiki: 'Muyu_language',
        names: 'Digoel,Digul,Kati Metomka,Metomka,Moejoe,Ok Bari,South Kati,Yonggom,Yongkom,Yongom'
    });
});
//# sourceMappingURL=kts.js.map