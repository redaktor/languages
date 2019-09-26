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
        name: 'Songe',
        nameT: 'Songe',
        iso3: 'sop',
        wiki: 'Songe_language',
        names: 'Kalebwe,Kisonge,Kisongi,Kisongye,Luba-Songi,Lusonge,Northeast Luba,Songye,Yembe'
    });
});
//# sourceMappingURL=sop.js.map