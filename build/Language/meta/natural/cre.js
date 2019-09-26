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
        name: 'Cree, Swampy',
        nameT: 'Nehiyaw',
        iso1: 'cr',
        iso2: 'cre',
        iso3: 'cre',
        wiki: 'Cree_language',
        OT: 'CRE',
        hasDetect: true
    });
});
//# sourceMappingURL=cre.js.map