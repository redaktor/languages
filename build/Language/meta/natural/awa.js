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
        name: 'Awadhi',
        nameT: 'Awadhi',
        iso2: 'awa',
        iso3: 'awa',
        wiki: 'Awadhi_language',
        OT: 'AWA',
        names: 'Abadi,Abohi,Ambodhi,Avadhi,Baiswari,Kojali,Kosali,Abadhi,Dehati,Deshi,Gawnaru,Koseli',
        hasDetect: true
    });
});
//# sourceMappingURL=awa.js.map