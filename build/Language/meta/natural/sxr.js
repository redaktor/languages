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
        name: 'Saaroa',
        nameT: 'Saaroa',
        iso3: 'sxr',
        wiki: 'Saaroa_language',
        names: 'Hla’alua,La’alua,La’arua,Lha’alua,Pachien,Paichien,Rarua,Saarua,Saroa,Shishaban,Sisyaban'
    });
});
//# sourceMappingURL=sxr.js.map