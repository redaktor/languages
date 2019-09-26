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
        name: 'Murut, Tagal',
        nameT: 'Murut, Tagal',
        iso3: 'mvv',
        wiki: 'Tagol_language',
        names: 'Semambu,Semembu,Sumambu,Sumambuq,Sumambu-Tagal,Pensiangan,Tagal,Tagal Murut,Tagol'
    });
});
//# sourceMappingURL=mvv.js.map