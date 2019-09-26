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
        name: 'Arabic, Moroccan',
        nameT: 'Arabic, Moroccan',
        iso3: 'ary',
        wiki: 'Moroccan_Darija',
        names: 'Darija,Colloquial Arabic,Maghrebi Arabic,Maghribi,Moroccan Arabic,Moroccan Colloquial Arabic,Moroccan Dareja,Moroccan Darija,Moroccan Dereja'
    });
});
//# sourceMappingURL=ary.js.map