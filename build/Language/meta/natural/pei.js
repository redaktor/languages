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
        name: 'Chichimeca-Jonaz',
        nameT: 'Chichimeca-Jonaz',
        iso3: 'pei',
        wiki: 'Chichimeca_Jonaz_language',
        names: 'Chichimec,Chichimeca,Chichimeco,Meco,Pame de Chichimeca-Jonaz,Uzá’'
    });
});
//# sourceMappingURL=pei.js.map