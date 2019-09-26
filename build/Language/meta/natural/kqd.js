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
        name: 'Koy Sanjaq Surat',
        nameT: 'Koy Sanjaq Surat',
        iso3: 'kqd',
        wiki: 'Koy_Sanjaq_Syriac_language',
        names: 'Koi Sanjaq Soorit,Koi-Sanjaq Sooret,Koy Sanjaq Sooret,Koy Sanjaq Soorit,Surat'
    });
});
//# sourceMappingURL=kqd.js.map