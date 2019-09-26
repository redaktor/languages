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
        name: 'Tela-Masbuar',
        nameT: 'Tela-Masbuar',
        iso3: 'tvm',
        wiki: 'Tela%E2%80%99a_language',
        names: 'Masbuar-Tela,Tela’a'
    });
});
//# sourceMappingURL=tvm.js.map