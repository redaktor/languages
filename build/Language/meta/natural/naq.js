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
        name: 'Khoekhoe',
        nameT: 'Khoekhoegowab',
        iso3: 'naq',
        wiki: 'Khoekhoe_language',
        names: 'Bergdamara,Dama,Damaqua,Damara,Nama,Namakwa,Naman,Namaqua,Tama,Tamakwa,Tamma,Hai||’om,Khoekhoegowap,Maqua,Khoi ("Hottentot","Kupkaferrn","Kupkaffer")'
    });
});
//# sourceMappingURL=naq.js.map