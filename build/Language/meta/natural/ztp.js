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
        name: 'Zapotec, Loxicha',
        nameT: 'Zapotec, Loxicha',
        iso3: 'ztp',
        wiki: 'Loxicha_Zapotec',
        names: 'Diste,Western Pochutla Zapotec,Zapoteco de Loxicha'
    });
});
//# sourceMappingURL=ztp.js.map