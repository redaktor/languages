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
        name: 'Ikposo',
        nameT: 'Akpɔssɔ',
        iso3: 'kpo',
        wiki: 'Kposo_language',
        names: 'Akposso,Ikposo,Ikposso,Kposo,Akposo'
    });
});
//# sourceMappingURL=kpo.js.map