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
        name: 'Deg',
        nameT: 'Deg',
        iso3: 'mzw',
        wiki: 'Deg_language',
        names: 'Aculo,Buro,Degha,Janela,Mmfo,Mo,Buru'
    });
});
//# sourceMappingURL=mzw.js.map