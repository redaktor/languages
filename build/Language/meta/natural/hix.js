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
        name: 'Hixkaryána',
        nameT: 'Hixkaryána',
        iso3: 'hix',
        wiki: 'Hixkaryana_language',
        names: 'Chawiyana,Faruaru,Hichkaryana,Hishkariana,Hishkaryana,Hixkariana,Hyxkaryana,Kumiyana,Parucutu,Parukoto-Charuma,Sherewyana,Sokaka,Wabui,Xereu,Xerewyana'
    });
});
//# sourceMappingURL=hix.js.map