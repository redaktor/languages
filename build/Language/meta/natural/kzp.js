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
        name: 'Kaidipang',
        nameT: 'Kaidipang',
        iso3: 'kzp',
        wiki: 'Kaidipang_language',
        names: 'Dio,Kaidipang-Bolangitang'
    });
});
//# sourceMappingURL=kzp.js.map