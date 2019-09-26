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
        name: 'Hassaniyya',
        nameT: 'Hassaniyya',
        iso3: 'mey',
        wiki: 'Hassaniya_Arabic',
        names: 'Hasanya,Hassani,Maure,Mauri,Moor,Sahrawi,Sulaka,Hassaniya,Hassaniyya,Suraka,Suraxxé,Hasanya Arabic,Hassania,Hassaniyya Arabic,Klem El Bithan,Hasaniya'
    });
});
//# sourceMappingURL=mey.js.map