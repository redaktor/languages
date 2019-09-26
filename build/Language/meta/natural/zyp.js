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
    var meta_1 = require("../../meta");
    exports.default = meta_1.default({
        name: 'Chin, Zyphe',
        nameT: 'Chin, Zyphe',
        iso3: 'zyp',
        wiki: 'Zyphe_language',
        names: 'Vawngtu,Zophei,Zoptei,Zyphe,Zo-pe'
    });
});
//# sourceMappingURL=zyp.js.map