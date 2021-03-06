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
        name: 'Koro (Côte d\'Ivoire)',
        nameT: 'Koro Jula',
        iso3: 'kfo',
        wiki: 'Maninka_language',
        names: 'Koro Jula'
    });
});
//# sourceMappingURL=kfo.js.map