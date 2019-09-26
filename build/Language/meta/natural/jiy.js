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
        name: 'Jinuo, Buyuan',
        nameT: 'Jinuo, Buyuan',
        iso3: 'jiy',
        wiki: 'Jino_language',
        names: 'Buyuan,Jino'
    });
});
//# sourceMappingURL=jiy.js.map