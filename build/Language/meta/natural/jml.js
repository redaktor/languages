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
        name: 'Jumli',
        nameT: 'Jumli',
        iso3: 'jml',
        wiki: 'Jumli_language',
        names: 'Central Nepali,Jumla,Jumleli,Khas Kura,Sijali,Singja,Sinjali'
    });
});
//# sourceMappingURL=jml.js.map