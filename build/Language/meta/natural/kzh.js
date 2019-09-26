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
        name: 'Kenuzi-Dongola',
        nameT: 'Kenuzi-Dongola',
        iso3: 'kzh',
        wiki: 'Dongolawi_language',
        names: 'Dongola-Kenuz,Dongolawi,Metoki,Nile Nubian'
    });
});
//# sourceMappingURL=kzh.js.map