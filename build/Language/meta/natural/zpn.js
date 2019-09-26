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
    var meta_1 = require("../../meta");
    exports.default = meta_1.default({
        name: 'Zapotec, Santa Inés Yatzechi',
        nameT: 'Zapotec, Santa Inés Yatzechi',
        iso3: 'zpn',
        wiki: 'Yatzeche_Zapotec',
        names: 'Southeastern Zimatlán Zapotec,Zapoteco de Santa Inés Yatzechi,Zapoteco de Zegache'
    });
});
//# sourceMappingURL=zpn.js.map