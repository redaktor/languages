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
        name: 'Sinhala',
        nameT: 'සිංහල',
        iso1: 'si',
        iso2: 'sin',
        iso3: 'sin',
        wiki: 'Sinhalese_language',
        OT: 'SNH',
        names: 'Cingalese,Singhala,Singhalese,Sinhalese,Chingalese',
        hasDetect: true
    });
});
//# sourceMappingURL=sin.js.map