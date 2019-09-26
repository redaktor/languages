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
        name: 'Mam, Northern',
        nameT: 'Mam, Northern',
        iso3: 'mam',
        wiki: 'Mam_language',
        names: 'B’anax Mam,Huehuetenango Mam,Qyool',
        hasDetect: true
    });
});
//# sourceMappingURL=mam.js.map