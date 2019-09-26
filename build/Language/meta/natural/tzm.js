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
        name: 'Tamazight, Central Atlas',
        nameT: 'Tamazight, Central Atlas',
        iso3: 'tzm',
        wiki: 'Central_Atlas_Tamazight',
        names: 'Central Shilha,Middle Atlas Berber,Moroccan Amazigh,Shilha,Tachelhit',
        hasDetect: true
    });
});
//# sourceMappingURL=tzm.js.map