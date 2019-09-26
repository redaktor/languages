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
        name: 'Ulumanda’',
        nameT: 'Awo-Sumakuyu',
        iso3: 'ulm',
        wiki: 'Ulumanda%E2%80%99_language',
        names: 'Botteng-Tappalang,Kado,Oeloemanda,Tubbi,Ulumandak,Ulunda'
    });
});
//# sourceMappingURL=ulm.js.map