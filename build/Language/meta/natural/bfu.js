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
        name: 'Gahri',
        nameT: 'Gahri',
        iso3: 'bfu',
        wiki: 'Gahri_language',
        OT: 'LAH',
        names: 'Boonan,Bunan,Erankad,Ghara,Keylong Boli,Lahuli,Lahuli of Bunan,Poonan,Punan'
    });
});
//# sourceMappingURL=bfu.js.map