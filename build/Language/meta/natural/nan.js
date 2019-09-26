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
        name: 'Taiwanese (Min Nan)',
        nameT: '閩南語 or 闽南语',
        iso3: 'nan',
        wiki: 'Southern_Min',
        names: 'Min Nan,Minnan,Southern Min,Min Nam',
        hasDetect: true
    });
});
//# sourceMappingURL=nan.js.map