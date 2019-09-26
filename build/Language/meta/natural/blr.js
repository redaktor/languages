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
        name: 'Blang',
        nameT: 'Blang',
        iso3: 'blr',
        wiki: 'Blang_language',
        names: 'Bulang,K’ala,Kawa,Kontoi,Plang,Pula,Pulang,Hkawa,Khon Doi,K’wa,Sen Chun,Wa'
    });
});
//# sourceMappingURL=blr.js.map