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
        name: 'Ifè',
        nameT: 'Ifè',
        iso3: 'ife',
        wiki: 'If%C3%A8_language',
        names: 'Ana,Anago,Ana-Ife,Baate,Ede Ife,Ana-Ifé'
    });
});
//# sourceMappingURL=ife.js.map