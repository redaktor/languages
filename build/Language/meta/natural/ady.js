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
        name: 'Adyghe',
        nameT: 'Адыгэбзэ',
        iso2: 'ady',
        iso3: 'ady',
        wiki: 'Circassian_languages',
        OT: 'ADY',
        names: 'Adygey,Circassian,West Circassian,Adygei,Kiakh,Kjax,Lower Circassian,Cherkes',
        hasDetect: true
    });
});
//# sourceMappingURL=ady.js.map