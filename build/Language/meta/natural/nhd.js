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
        name: 'Guaraní, Ava',
        nameT: 'Guaraní, Ava',
        iso3: 'nhd',
        wiki: 'Ava_Guarani_language',
        names: 'Apytare,Chiripá,Ñandeva,Nhandeva,Tsiripá,Txiripá,Ava Guaraní,Guaraní,Nandeva,Ava'
    });
});
//# sourceMappingURL=nhd.js.map