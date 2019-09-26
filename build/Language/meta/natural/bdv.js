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
        name: 'Bodo Parja',
        nameT: 'Bodo Parja',
        iso3: 'bdv',
        wiki: 'Bodo_Parja_language',
        names: 'Bodo Paraja,Harja,Jhaliya,Jharia,Jhodia Parja,Parajhi,Parja,Parjhi,Parji,Paroja,Poroja,Sodia Parja'
    });
});
//# sourceMappingURL=bdv.js.map