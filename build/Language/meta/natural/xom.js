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
        name: 'Komo (Sudan)',
        nameT: 'Komo (Sudan)',
        iso3: 'xom',
        wiki: 'Komo_language',
        names: 'Central Koma,Koma,Madiin,South Koma,Como,Gokwom,Hayahaya,Koma of Daga,Aru'
    });
});
//# sourceMappingURL=xom.js.map