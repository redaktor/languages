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
        name: 'Bidayuh, Biatah',
        nameT: 'Bidayuh, Biatah',
        iso3: 'bth',
        wiki: 'Biatah_language',
        names: 'Biatah,Bideyu,Landu,Lundu,Pueh,Siburan,Bikuab,Kuap,Quop,Sentah'
    });
});
//# sourceMappingURL=bth.js.map