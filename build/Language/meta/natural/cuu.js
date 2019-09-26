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
        name: 'Tai Ya',
        nameT: 'Tai Ya',
        iso3: 'cuu',
        wiki: 'Tai_Ya_language',
        names: 'Cung,Daiya,Huayao Dai,Multi-colored Waistband Tai,Tai Cung,Tai-Chung,Tai-Cung,Ya,Yuanxin Hongjin Dai,Huayaodai'
    });
});
//# sourceMappingURL=cuu.js.map