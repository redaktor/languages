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
        name: 'Rarotongan',
        nameT: 'Rarotongan',
        iso2: 'rar',
        iso3: 'rar',
        wiki: 'Cook_Islands_M%C4%81ori',
        names: 'Cook Island,Kuki Airani,Maori,Māori Kūki ’Āirani,Te Reo Maori',
        hasDetect: true
    });
});
//# sourceMappingURL=rar.js.map