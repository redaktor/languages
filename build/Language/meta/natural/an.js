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
        name: 'Aragonese',
        nameT: 'Aragonés',
        iso1: 'an',
        iso2: 'arg',
        iso3: 'arg',
        wiki: 'Aragonese_language',
        names: 'Altoaragonés,Aragoieraz,Fabla Aragonesa,High Aragonese,Patués',
        hasDetect: true
    });
});
//# sourceMappingURL=an.js.map