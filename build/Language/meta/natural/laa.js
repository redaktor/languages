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
        name: 'Subanen, Southern',
        nameT: 'Subanen, Southern',
        iso3: 'laa',
        wiki: 'Subanon_language',
        names: 'Lapuyen,Margosatubig,Subanen,Subanun,Lapuyan'
    });
});
//# sourceMappingURL=laa.js.map