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
        name: 'Bisaya, Sabah',
        nameT: 'Bisaya, Sabah',
        iso3: 'bsy',
        wiki: 'Sabah_Bisaya_language',
        names: 'Basaya,Besaya,Bisaia,Bisayah,Jilama Bawang,Jilama Sungai'
    });
});
//# sourceMappingURL=bsy.js.map