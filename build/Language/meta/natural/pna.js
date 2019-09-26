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
        name: 'Punan Bah-Biau',
        nameT: 'Punan Bah-Biau',
        iso3: 'pna',
        wiki: 'Bah-Biau_Punan_language',
        names: 'Bah-Biau,Punan'
    });
});
//# sourceMappingURL=pna.js.map