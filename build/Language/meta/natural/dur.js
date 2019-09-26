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
        name: 'Dii',
        nameT: 'Dii',
        iso3: 'dur',
        wiki: 'Dii_languages',
        names: 'Dourou,Durru,Duru,Nyag Dii,Yag Dii,Zaa'
    });
});
//# sourceMappingURL=dur.js.map