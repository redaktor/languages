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
        name: 'Biao Mon',
        nameT: 'Biao Mon',
        iso3: 'bmt',
        wiki: 'Iu_Mien_language',
        names: 'Biao Mien,Biaoman,Biao-Mian,Changping,Min Yao,Sida Min Yao'
    });
});
//# sourceMappingURL=bmt.js.map