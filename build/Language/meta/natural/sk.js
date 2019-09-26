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
        name: 'Slovak',
        nameT: 'slovenčina',
        iso1: 'sk',
        iso2: 'slo',
        iso2T: 'slk',
        iso3: 'slk',
        wiki: 'Slovak_language',
        OT: 'SKY',
        names: 'Slovencina,Slovenský Jazyk,Slovakian',
        hasDetect: true
    });
});
//# sourceMappingURL=sk.js.map