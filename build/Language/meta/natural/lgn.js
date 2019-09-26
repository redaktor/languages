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
        name: 'Opuuo',
        nameT: 'Opuuo',
        iso3: 'lgn',
        wiki: 'Opuo_language',
        names: 'Ansita,Ciita,Cita,Kina,Kwina,Opo,Opo-Shita,Opuo,Shiita,Shita,Upo,Pur,Shitta ("Langa")'
    });
});
//# sourceMappingURL=lgn.js.map