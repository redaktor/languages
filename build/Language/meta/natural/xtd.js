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
        name: 'Mixtec, Diuxi-Tilantongo',
        nameT: 'Mixtec, Diuxi-Tilantongo',
        iso3: 'xtd',
        wiki: 'Tilantongo_Mixtec',
        names: 'Central Nochistlán Mixtec,Mixteco de Diuxi-Tilantongo,Mixteco del Este Central,Tnu’un dau',
        hasDetect: true
    });
});
//# sourceMappingURL=xtd.js.map