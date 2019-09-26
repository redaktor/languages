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
        name: 'Tekiteko',
        nameT: 'Tekiteko',
        iso3: 'ttc',
        wiki: 'Tektitek_language',
        names: 'B’a’aj,K’onti’l,Maya-Tekiteko,Qyool,Teco,Tectitán Mam,Tectitec,Tectiteco,Tujqyol,Tectitán Mame ("Teko")',
        hasDetect: true
    });
});
//# sourceMappingURL=ttc.js.map