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
        name: 'Qiang, Southern',
        nameT: 'Qiang, Southern',
        iso3: 'qxs',
        wiki: 'Southern_Qiang_language',
        names: 'Ch’iang,Rrmea'
    });
});
//# sourceMappingURL=qxs.js.map