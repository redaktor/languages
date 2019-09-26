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
        name: 'Ija-Zuba',
        nameT: 'Ija-Zuba',
        iso3: 'vki',
        wiki: 'Jijili_language',
        names: 'Koro Afiki,Koro Ija,Koro Zuba'
    });
});
//# sourceMappingURL=vki.js.map