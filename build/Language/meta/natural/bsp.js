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
        name: 'Baga Sitemu',
        nameT: 'Baga Sitemu',
        iso3: 'bsp',
        wiki: 'Baga_language',
        names: 'Baka,Rio Pongo Baga,Sitemuú,Stem Baga,Tchitem'
    });
});
//# sourceMappingURL=bsp.js.map