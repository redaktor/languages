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
        name: 'Tunen',
        nameT: 'Banen',
        iso3: 'baz',
        wiki: 'Nen_language',
        names: 'Banend,Nenni Nyo’o,Penin,Penyin'
    });
});
//# sourceMappingURL=baz.js.map