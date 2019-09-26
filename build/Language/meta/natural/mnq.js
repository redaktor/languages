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
        name: 'Minriq',
        nameT: 'Minriq',
        iso3: 'mnq',
        wiki: 'Minriq_language',
        names: 'Mendriq,Menraq,Menrik,Menriq'
    });
});
//# sourceMappingURL=mnq.js.map