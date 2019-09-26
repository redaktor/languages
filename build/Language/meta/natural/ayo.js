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
        name: 'Ayoreo',
        nameT: 'Ayoreo',
        iso3: 'ayo',
        wiki: 'Ayoreo_language',
        names: 'Ayoré,Moro,Morotoco,Pyeta,Yovai,Garaygosode,Guarañoca,Guidaigosode,Koroino,Poturero,Pyeta Yovai,Samococio,Sirákua,Takrat,Totobiegosode,Yanaigua'
    });
});
//# sourceMappingURL=ayo.js.map