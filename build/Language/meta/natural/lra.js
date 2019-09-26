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
        name: 'Rara Bakati’',
        nameT: 'Rara Bakati’',
        iso3: 'lra',
        wiki: 'Lara%CA%BC_language',
        names: 'Bekati’ Kendayan,Bekati’ Nyam-Pelayo,Bekatiq,Lara’,Luru,Rara Bakati'
    });
});
//# sourceMappingURL=lra.js.map