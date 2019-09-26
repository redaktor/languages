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
        name: 'Bilin',
        nameT: 'Bilin',
        iso2: 'byn',
        iso3: 'byn',
        wiki: 'Bilen_language',
        OT: 'BIL',
        names: 'Balen,Belen,Beleni,Bilayn,Bilein,Bileno,Bilin,Bogo,Bogos,North Agaw'
    });
});
//# sourceMappingURL=byn.js.map