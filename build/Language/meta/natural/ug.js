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
        name: 'Uyghur (Arabic)',
        nameT: 'Uyƣurqə / ئۇيغۇرچە',
        iso1: 'ug',
        iso2: 'uig',
        iso3: 'uig',
        wiki: 'Uyghur_language',
        OT: 'UYG',
        names: 'Uighuir,Uighur,Uiguir,Uigur,Uygur,Weiwu’er,Wiga,Novouygur',
        hasDetect: true
    });
});
//# sourceMappingURL=ug.js.map