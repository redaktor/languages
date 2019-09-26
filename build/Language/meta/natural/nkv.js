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
        name: 'Nyika (Malawi and Zambia)',
        nameT: 'Nyika (Malawi and Zambia)',
        iso3: 'nkv',
        wiki: 'Nyika_language',
        names: 'Chinyika,Kinyika'
    });
});
//# sourceMappingURL=nkv.js.map