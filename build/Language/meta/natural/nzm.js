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
        name: 'Naga, Zeme',
        nameT: 'Naga, Zeme',
        iso3: 'nzm',
        wiki: 'Zeme_language',
        names: 'Arung,Empeo,Empui,Jeme,Kacha,Kachcha,Kachcha Naga,Kutcha,Mezama,Sangrima,Sengima,Zeliang,Zeliangrong,Zeme,Zemi'
    });
});
//# sourceMappingURL=nzm.js.map