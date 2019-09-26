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
        name: 'Mixtec, Alacatlatzala',
        nameT: 'Mixtec, Alacatlatzala',
        iso3: 'mim',
        wiki: 'Silacayoapan_Mixtec',
        names: 'Central Misteko,Highland Guerrero Mixtec,Mixteco de Alacatlatzala,To’on Savi'
    });
});
//# sourceMappingURL=mim.js.map