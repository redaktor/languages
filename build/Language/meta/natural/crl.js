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
        name: 'Cree, Northern East',
        nameT: 'Cree, Northern East',
        iso3: 'crl',
        wiki: 'East_Cree',
        OT: 'ECR',
        names: 'Eastern James Bay Cree Northern Dialect,James Bay Cree Northern'
    });
});
//# sourceMappingURL=crl.js.map