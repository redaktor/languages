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
        name: 'Chayahuita',
        nameT: 'Chayahuita',
        iso3: 'cbt',
        wiki: 'Chayahuita_language',
        names: 'Balsapuertino,Cahuapa,Chawi,Chayabita,Chayawita,Chayhuita,Paranapura,Shayabit,Tshaahui',
        hasDetect: true
    });
});
//# sourceMappingURL=cbt.js.map