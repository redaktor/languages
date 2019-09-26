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
        name: 'Fe’fe’',
        nameT: 'Fe’fe’',
        iso3: 'fmp',
        wiki: 'Fe%27fe%27_language',
        names: 'Bafang,Bamileke-Fe’fe’,Feefee,Fe’efe’e,Fefe,Fotouni,Nufi'
    });
});
//# sourceMappingURL=fmp.js.map