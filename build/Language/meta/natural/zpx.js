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
        name: 'Zapotec, San Baltazar Loxicha',
        nameT: 'Zapotec, San Baltazar Loxicha',
        iso3: 'zpx',
        wiki: 'San_Balt%C3%A1zar_Loxicha_Zapotec',
        names: 'Northwestern Pochutla Zapotec,San Baltázar Loxicha Zapotec,Zapoteco de San Baltázar Loxicha'
    });
});
//# sourceMappingURL=zpx.js.map