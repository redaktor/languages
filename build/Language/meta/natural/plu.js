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
        name: 'Palikúr',
        nameT: 'Palikúr',
        iso3: 'plu',
        wiki: 'Palik%C3%BAr_language',
        names: 'Pa’ikwaki,Paikwene,Palicur,Palijur,Palikour,Palincur,Paricores,Paricuria,Parikurene,Parinkur-lene'
    });
});
//# sourceMappingURL=plu.js.map