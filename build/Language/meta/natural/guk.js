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
        name: 'Gumuz',
        nameT: 'Gumuz',
        iso3: 'guk',
        wiki: 'Gumuz_languages',
        OT: 'GMZ',
        names: 'Bega,Bega-Tse,Debatsa,Debuga,Dehenda,Gombo,Gumis,Gumuzinya,Kadallu,Mendeya,Sigumza,Deguba,Shankillinya,Shanqilla ("Shankilligna","Shankillinya","Shanqilla")'
    });
});
//# sourceMappingURL=guk.js.map