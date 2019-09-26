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
        name: 'Zapotec, El Alto',
        nameT: 'Zapotec, El Alto',
        iso3: 'zpp',
        wiki: 'El_Alto_Zapotec',
        names: 'South Central Zimatlan Zapotec,Zapoteco de San Pedro el Alto'
    });
});
//# sourceMappingURL=zpp.js.map