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
    var meta_1 = require("../../meta");
    exports.default = meta_1.default({
        name: 'Mairasi',
        nameT: 'Mairasi',
        iso3: 'zrs',
        wiki: 'Mairasi_language',
        names: 'Faranyao,Kaniran'
    });
});
//# sourceMappingURL=zrs.js.map