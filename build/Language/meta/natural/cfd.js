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
        name: 'Cara',
        nameT: 'Cara',
        iso3: 'cfd',
        wiki: 'Cara_language',
        names: 'Chara,Fachara,Fakara,Nfachara,Pakara,Tariya,Tera,Teriya,Terri'
    });
});
//# sourceMappingURL=cfd.js.map