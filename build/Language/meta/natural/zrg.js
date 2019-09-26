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
        name: 'Mirgan',
        nameT: 'Mirgan',
        iso3: 'zrg',
        wiki: 'Mirgan_language',
        names: 'Mirgami,Mirkan,Panika,Panka'
    });
});
//# sourceMappingURL=zrg.js.map