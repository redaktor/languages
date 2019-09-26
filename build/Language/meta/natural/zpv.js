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
    var meta_1 = require("../../meta");
    exports.default = meta_1.default({
        name: 'Zapotec, Chichicapan',
        nameT: 'Zapotec, Chichicapan',
        iso3: 'zpv',
        wiki: 'Chichic%C3%A1pam_Zapotec',
        names: 'Eastern Ocotlán Zapotec,Zapoteco de San Baltazar Chichicapan'
    });
});
//# sourceMappingURL=zpv.js.map