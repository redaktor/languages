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
        name: 'Lomwe',
        nameT: 'Lomwe',
        iso3: 'ngl',
        wiki: 'Lomwe_language',
        OT: 'LMW',
        names: 'Acilowe,Alomwe,Chilowe,Cilowe,Elomwe,Ilomwe,Ingulu,Lomue,Mihavane,Mihavani,Mihawani,Ngulu,Nguru,Walomwe,West Makhuwa,Western Makua'
    });
});
//# sourceMappingURL=ngl.js.map