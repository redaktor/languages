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
        name: 'Jola-Fonyi',
        nameT: 'Jola-Fonyi',
        iso3: 'dyo',
        wiki: 'Jola-Fonyi_language',
        names: 'Diola-Fogny,Jola,Jola-Fogny,Kujamataak,Kújoolaak Kati Fooñi,Yola,Dyola,Jóola-Fóoñi,Kújoolaak kati Kúfooñaak',
        hasDetect: true
    });
});
//# sourceMappingURL=dyo.js.map