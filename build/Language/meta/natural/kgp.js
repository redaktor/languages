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
        name: 'Kaingang',
        nameT: 'Kaingang',
        iso3: 'kgp',
        wiki: 'Kaingang_language',
        names: 'Bugre,Caingang,Coroado,Coroados'
    });
});
//# sourceMappingURL=kgp.js.map