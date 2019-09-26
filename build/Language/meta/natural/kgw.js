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
        name: 'Karon Dori',
        nameT: 'Karon Dori',
        iso3: 'kgw',
        wiki: 'Mai_Brat_language',
        names: 'Maiyach,Mari,Meon'
    });
});
//# sourceMappingURL=kgw.js.map