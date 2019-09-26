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
        name: 'Yao',
        nameT: 'Yao',
        iso2: 'yao',
        iso3: 'yao',
        wiki: 'Yao_language',
        names: 'Achawa,Adsawa,Adsoa,Ajawa,Ayao,Ayawa,Ayo,Chiyao,Ciyao,Djao,Haiao,Hiao,Hyao,Jao,Veiao,Wajao,Yawo,Hajao,Kihiau,Kihyao,Kiyao,Chichawa',
        hasDetect: true
    });
});
//# sourceMappingURL=yao.js.map