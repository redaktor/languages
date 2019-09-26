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
        name: 'Uab Meto',
        nameT: 'Uab Meto',
        iso3: 'aoz',
        wiki: 'Uab_Meto_language',
        names: 'Atoni,Meto,Orang Gunung,Timol,Timor,Timoreesch,Timoreezen,Timorese,Uab Atoni Pah Meto,Uab Pah Meto ("Dawan","Rawan","Timor Dawan")'
    });
});
//# sourceMappingURL=aoz.js.map