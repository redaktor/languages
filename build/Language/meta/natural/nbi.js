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
        name: 'Naga, Mao',
        nameT: 'Naga, Mao',
        iso3: 'nbi',
        wiki: 'Sopvoma_language',
        names: 'Emela,Imemai,Maikel,Mao,Memi,Sopfomo,Sopvoma,Southern Angami,Spowama'
    });
});
//# sourceMappingURL=nbi.js.map