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
        name: 'Sorbian, Upper',
        nameT: 'Sorbian, Upper',
        iso2: 'hsb',
        iso3: 'hsb',
        wiki: 'Upper_Sorbian_language',
        OT: 'USB',
        names: 'Haut Sorabe,Hornjoserbski,Hornoserbski,Obersorbisch,Upper Lusatian,Wendish',
        hasDetect: true
    });
});
//# sourceMappingURL=hsb.js.map