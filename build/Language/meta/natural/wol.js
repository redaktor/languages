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
        name: 'Wolof',
        nameT: 'Wollof',
        iso1: 'wo',
        iso2: 'wol',
        iso3: 'wol',
        wiki: 'Wolof_language',
        OT: 'WLF',
        names: 'Ouolof,Volof,Walaf,Yallof,Waro-Waro',
        hasDetect: true
    });
});
//# sourceMappingURL=wol.js.map