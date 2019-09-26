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
        name: 'Efutop',
        nameT: 'Efutop',
        iso3: 'ofu',
        wiki: 'Futop_language',
        names: 'Agbaragba,Ofutop'
    });
});
//# sourceMappingURL=ofu.js.map