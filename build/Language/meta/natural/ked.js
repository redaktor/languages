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
        name: 'Kerewe',
        nameT: 'Kerewe',
        iso3: 'ked',
        wiki: 'Kerewe_language',
        names: 'Ecikerebe,Ekikerebe,Ikikerebe,Kerebe,Kikerebe,Kikerewe,Kikwere,Urukerebe'
    });
});
//# sourceMappingURL=ked.js.map