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
        name: 'Jola Kasa',
        nameT: 'Jola Kasa',
        iso3: 'csk',
        wiki: 'Kasa_language',
        names: 'Bácuki,Casa,Diola-Kasa,Jóola-Kaasa,Jóola-Kasa',
        hasDetect: true
    });
});
//# sourceMappingURL=csk.js.map