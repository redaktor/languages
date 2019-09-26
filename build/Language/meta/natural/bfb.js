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
        name: 'Bareli, Pauri',
        nameT: 'Bareli, Pauri',
        iso3: 'bfb',
        wiki: 'Pauri_Bareli_language',
        names: 'Bareli,Barewali,Barli'
    });
});
//# sourceMappingURL=bfb.js.map