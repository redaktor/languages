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
        name: 'Wapan',
        nameT: 'Wapan',
        iso3: 'juk',
        wiki: 'Wapan_language',
        names: 'Jinkum,Jukon,Juku,Juku Junkun,Jukum,Jukun Wapan,Jukun Wukari,Wakari,Wapã,Wukari'
    });
});
//# sourceMappingURL=juk.js.map