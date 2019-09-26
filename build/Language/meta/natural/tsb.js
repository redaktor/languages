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
        name: 'Tsamai',
        nameT: 'Tsamai',
        iso3: 'tsb',
        wiki: 'Tsamai_language',
        names: 'Bago S’aamakk-Ulo,Cule,Kuile,Kule,S’amai,Tamaha,Tsamakko,Tsamako,Ts’amay'
    });
});
//# sourceMappingURL=tsb.js.map