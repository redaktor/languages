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
        name: 'Mixe, Tlahuitoltepec',
        nameT: 'Mixe, Tlahuitoltepec',
        iso3: 'mxp',
        wiki: 'Tlahuitoltepec_Mixe',
        names: 'Mixe Alto del Centro,West Central Mixe'
    });
});
//# sourceMappingURL=mxp.js.map