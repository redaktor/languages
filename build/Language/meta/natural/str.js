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
        name: 'Salish, Straits',
        nameT: 'xʷsenəčqən',
        iso3: 'str',
        wiki: 'North_Straits_Salish_language',
        names: 'Lkwungen,Malchosen,Northern Straits Salish,Senčoten,Straits,T’Sou-ke'
    });
});
//# sourceMappingURL=str.js.map