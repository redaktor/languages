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
        name: 'Kimaragang',
        nameT: 'Kimaragang',
        iso3: 'kqr',
        wiki: 'Momogun_language',
        names: 'Kimaragan,Kimaragangan,Maragang,Marigang'
    });
});
//# sourceMappingURL=kqr.js.map