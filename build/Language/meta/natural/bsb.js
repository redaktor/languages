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
        name: 'Bisaya, Brunei',
        nameT: 'Bisaya, Brunei',
        iso3: 'bsb',
        wiki: 'Brunei_Bisaya_language',
        names: 'Basaya,Bekiau,Besaya,Bisaia,Bisaya Bukit,Bisayah,Dusun,Jilama Bawang,Jilama Sungai,Lorang Bukit,Southern Bisaya,Tutong 1,Visayak'
    });
});
//# sourceMappingURL=bsb.js.map