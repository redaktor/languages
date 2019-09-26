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
        name: 'Nahuatl, Isthmus-Mecayapan',
        nameT: 'Nahuatl, Isthmus-Mecayapan',
        iso3: 'nhx',
        wiki: 'Isthmus_Nahuatl',
        names: 'Isthmus Aztec-Mecayapan,Isthmus Nahuatl,Mecayapan Isthmus Nahuatl,Náhuat de Mecayapan'
    });
});
//# sourceMappingURL=nhx.js.map