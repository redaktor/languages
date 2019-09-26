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
        name: 'Amurdak',
        nameT: 'Amurdak',
        iso3: 'amg',
        wiki: 'Amurdag_language',
        names: 'Amarag,Amarak,Amardak,A’moordiyu,Amurag,Amurdag,Amurrag,Amurrak,Amurtak,Amuruk,Mamurug,Monobar,Namurug,Nga:mr:rak,Nga:mu:rak,Ngamurag,Umoreo,Umoriu,Umorrdak,Wardadjbak,Woraidbug,Wureidbug'
    });
});
//# sourceMappingURL=amg.js.map