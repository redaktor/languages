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
        name: 'Bidayuh, Tringgus-Sembaan',
        nameT: 'Tringus',
        iso3: 'trx',
        wiki: 'Tringgus_language',
        names: 'Tringus'
    });
});
//# sourceMappingURL=trx.js.map