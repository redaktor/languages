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
        name: 'Alaba-K’abeena',
        nameT: 'Alaba-K’abeena',
        iso3: 'alw',
        wiki: 'Alaba-K%E2%80%99abeena_language',
        names: 'Alaaba,Allaaba,Halaba,K’abeena,K’abena,Qebena,Wanbasana'
    });
});
//# sourceMappingURL=alw.js.map