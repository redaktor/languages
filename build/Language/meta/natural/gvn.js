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
        name: 'Kuku-Yalanji',
        nameT: 'Kuku-Yalanji',
        iso3: 'gvn',
        wiki: 'Guugu_Yalandji_language',
        names: 'Gugu Yalandyi,Gugu Yalanji,Guguyalanji,Koko-Yalanji,Kuku-Yalangi'
    });
});
//# sourceMappingURL=gvn.js.map