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
        name: 'Mengaka',
        nameT: 'Mengaka',
        iso3: 'xmg',
        wiki: 'M%C9%99gaka_language',
        names: 'Bamileke-Mengaka,Benzing,Eghap,Ghap,Megaka'
    });
});
//# sourceMappingURL=xmg.js.map