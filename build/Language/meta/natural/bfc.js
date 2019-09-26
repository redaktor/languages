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
        name: 'Bai, Panyi',
        nameT: 'Bai, Panyi',
        iso3: 'bfc',
        wiki: 'Bai_language',
        names: 'Bijiang Bai,Lan-Bi Bai,Leme,Lemei,Lemo,Northern Bai,Panyi'
    });
});
//# sourceMappingURL=bfc.js.map