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
        name: 'Nyahkur',
        nameT: 'Nyahkur',
        iso3: 'cbn',
        wiki: 'Nyah_Kur_language',
        names: 'Chao Dong,Chaodon,Lawa,Niakuol,Niakuoll,Nyah Kur,Nyakur ("Chaobon","Chaobun","Chaubun")'
    });
});
//# sourceMappingURL=cbn.js.map