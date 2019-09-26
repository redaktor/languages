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
        name: 'Akoose',
        nameT: 'Akoose',
        iso3: 'bss',
        wiki: 'Manenguba_language',
        names: 'Akosi,Bakossi,Bekoose,Koose,Kosi,Nkoosi,Nkosi',
        hasDetect: true
    });
});
//# sourceMappingURL=bss.js.map