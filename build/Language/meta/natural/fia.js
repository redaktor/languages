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
        name: 'Nobiin',
        nameT: 'Nobiin',
        iso3: 'fia',
        wiki: 'Nobiin_language',
        names: 'Fadicca,Fadicha,Fadija,Fedicca,Fedija,Fiadidja,Fiadidja-Mahas,Fiyadikkya,Mahas,Mahas-Fiadidja,Nile Nubian,Sukot,Mahas-Fiyadikkya'
    });
});
//# sourceMappingURL=fia.js.map