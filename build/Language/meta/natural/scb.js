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
        name: 'Chut',
        nameT: 'Chut',
        iso3: 'scb',
        wiki: 'Chut_language',
        names: 'May,Ruc,Sach,Salang'
    });
});
//# sourceMappingURL=scb.js.map