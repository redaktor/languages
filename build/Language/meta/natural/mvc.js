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
        name: 'Mam, Central',
        nameT: 'Mam, Central',
        iso3: 'mvc',
        wiki: 'Mam_language',
        names: 'Comitancillo Mam,Mam Marquense,Mam Occidental,San Marcos Comitancillas Mam,Western Mam',
        hasDetect: true
    });
});
//# sourceMappingURL=mvc.js.map