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
        name: 'Kirghiz (Arab)',
        nameT: 'кыргызча',
        iso1: 'ky',
        iso2: 'kir',
        iso3: 'kir',
        wiki: 'Kyrgyz_language',
        OT: 'KIR',
        names: 'Kirghiz,Kirghizi,Kirgiz,Kara,Ke’erkez,Kara-Kirgiz',
        hasDetect: true
    });
});
//# sourceMappingURL=ky.js.map