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
        name: 'Murrinh-Patha',
        nameT: 'Murrinh-Patha',
        iso3: 'mwf',
        wiki: 'Murrinh-patha_language',
        names: 'Garama,Murinbada,Murinbata,Murinhpatha,Murinpatha,Murinypata'
    });
});
//# sourceMappingURL=mwf.js.map