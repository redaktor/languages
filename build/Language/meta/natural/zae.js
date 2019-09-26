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
        name: 'Zapotec, Yareni',
        nameT: 'Zapotec, Yareni',
        iso3: 'zae',
        wiki: 'Ixtl%C3%A1n_Zapotec',
        names: 'Etla Zapotec,Western Ixtlán Zapotec,Zapoteco de Santa Ana Yareni,Zapoteco de Teococuilco de Marcos Pérez'
    });
});
//# sourceMappingURL=zae.js.map