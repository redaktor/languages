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
        name: 'Sangir',
        nameT: 'Sangir',
        iso3: 'sxn',
        wiki: 'Sangirese_language',
        names: 'Sangi,Sangih,Sangihé,Sangirese',
        hasDetect: true
    });
});
//# sourceMappingURL=sxn.js.map