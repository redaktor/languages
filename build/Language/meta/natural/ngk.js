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
        name: 'Dalabon',
        nameT: 'Dalabon',
        iso3: 'ngk',
        wiki: 'Dalabon_language',
        names: 'Bouin,Boun,Buan,Buin,Buwan,Dangbon,Gundangbon,Nalabon,Ngalabon,Ngalkbon,Ngalkbun'
    });
});
//# sourceMappingURL=ngk.js.map