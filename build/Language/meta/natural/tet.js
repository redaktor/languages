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
        name: 'Tetun',
        nameT: 'Lia-Tetun',
        iso2: 'tet',
        iso3: 'tet',
        wiki: 'Tetum_language',
        names: 'Belo,Belu,Fehan,Teto,Tettum,Tetu,Tetum,Tetun Belu,Tetung,Tetun Loos,Tetun Terik',
        hasDetect: true
    });
});
//# sourceMappingURL=tet.js.map