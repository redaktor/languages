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
        name: 'Phowa, Labo',
        nameT: 'Phowa, Labo',
        iso3: 'ypb',
        wiki: 'Phowa_language',
        names: 'Asaheipho,Asahopho,Ekhepho,Labopho,Pho,Phula,White Phu,Zemapho'
    });
});
//# sourceMappingURL=ypb.js.map