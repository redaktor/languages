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
        name: 'Yi, Sichuan',
        nameT: 'ꆇꉙ / 四川彝语',
        iso1: 'ii',
        iso2: 'iii',
        iso3: 'iii',
        wiki: 'Nuosu_language',
        OT: 'YIM',
        names: 'Black Yi,Liangshan Yi,Northern Yi,Nosu Yi,Sichuan Yi',
        hasDetect: true
    });
});
//# sourceMappingURL=ii.js.map