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
        name: 'Borana-Arsi-Guji Oromo',
        nameT: 'Borana-Arsi-Guji Oromo',
        iso3: 'gax',
        wiki: 'Southern_Oromo_language',
        names: 'Afan Oromo,Southern Oromo,Booran,Boraan,Boraana,Boran,Oromo ("Galligna","Gallinya")',
        hasDetect: true
    });
});
//# sourceMappingURL=gax.js.map