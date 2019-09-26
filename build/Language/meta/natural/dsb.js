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
        name: 'Sorbian, Lower',
        nameT: 'dolnoserbski',
        iso2: 'dsb',
        iso3: 'dsb',
        wiki: 'Lower_Sorbian_language',
        OT: 'LSB',
        names: 'Bas Sorabe,Delnoserbski,Dolnoserbski,Lluzykie,Lower Lusatian,Lusatian,Luzycki,Niedersorbisch,Wendish'
    });
});
//# sourceMappingURL=dsb.js.map