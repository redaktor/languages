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
        name: 'Creole French, Saint Lucian',
        nameT: 'kwéyòl',
        iso3: 'acf',
        wiki: 'Saint_Lucian_Creole_French',
        OT: 'FAN',
        names: 'Kwèyòl,Patois,Patwa,Lesser Antillean Creole French,Grenadian Creole French,Kwéyòl'
    });
});
//# sourceMappingURL=acf.js.map