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
        name: 'Tumak',
        nameT: 'Tumak',
        iso3: 'tmc',
        wiki: 'Tumak_language',
        names: 'Dije,Sara Toumak,Toumak,Tumac,Tumag,Tummok'
    });
});
//# sourceMappingURL=tmc.js.map