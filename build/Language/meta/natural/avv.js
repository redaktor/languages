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
        name: 'Avá-Canoeiro',
        nameT: 'Avá-Canoeiro',
        iso3: 'avv',
        wiki: 'Av%C3%A1-Canoeiro_language',
        names: 'Abá,Avá,Awana,Canoa,Canoe,Canoeiros'
    });
});
//# sourceMappingURL=avv.js.map