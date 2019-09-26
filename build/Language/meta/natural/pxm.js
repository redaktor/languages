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
        name: 'Mixe, Quetzaltepec',
        nameT: 'Mixe, Quetzaltepec',
        iso3: 'pxm',
        wiki: 'Midland_Mixe',
        names: 'Central Mixe,Chuxnabán Mixe,Midland Mixe,Mixe Alto del Sur'
    });
});
//# sourceMappingURL=pxm.js.map