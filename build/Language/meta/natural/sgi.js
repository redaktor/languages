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
        name: 'Suga',
        nameT: 'Suga',
        iso3: 'sgi',
        wiki: 'Nizaa_language',
        names: 'Baghap,Galim,Nizaa,Ssuga ("Jemjem","Njemnjem","Nyamnyam","Nyemnyem")'
    });
});
//# sourceMappingURL=sgi.js.map